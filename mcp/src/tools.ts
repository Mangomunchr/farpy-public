import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { LEGAL_ACCEPTANCE_V1, MAX_UPLOAD_BYTES, requireAgentToken } from "./config.js";
import { farpyRequest, FarpyApiError, jobPath } from "./api.js";
import { logDiagnostic, redactSecrets, safeJsonText } from "./redact.js";

export type JsonSchema = {
  type: "object";
  additionalProperties: false;
  required: string[];
  properties: Record<string, { type: string; description: string; minimum?: number }>;
};

export type ToolDefinition = {
  name: string;
  description: string;
  inputSchema: JsonSchema;
};

const FILE_PATH = {
  type: "string",
  description: "Absolute path to a local .blend file.",
} as const;

const UPLOAD_ID = {
  type: "string",
  description: "Upload id from inspect.",
} as const;

const JOB_ID = {
  type: "string",
  description: "FARPY job id.",
} as const;

export const TOOL_DEFINITIONS: ToolDefinition[] = [
  {
    name: "inspect",
    description: "Inspect a Blender .blend without spending. Creates upload_id and an open locked quote.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: ["file_path"],
      properties: { file_path: FILE_PATH },
    },
  },
  {
    name: "quote",
    description: "Create a locked quote for a frame sub-range. Does not spend.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: ["upload_id", "frame_start", "frame_end"],
      properties: {
        upload_id: UPLOAD_ID,
        frame_start: { type: "integer", description: "First frame, inclusive.", minimum: 1 },
        frame_end: { type: "integer", description: "Last frame, inclusive.", minimum: 1 },
        frame_step: { type: "integer", description: "Frame step.", minimum: 1 },
      },
    },
  },
  {
    name: "start",
    description: "ONLY spend tool. Reserves wallet cents for the locked quote_id.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: ["upload_id", "quote_id", "legal_acceptance"],
      properties: {
        upload_id: UPLOAD_ID,
        quote_id: { type: "string", description: "Locked quote id." },
        legal_acceptance: { type: "string", description: "Must be exactly FARPY_LEGAL_V1." },
        webhook_url: {
          type: "string",
          description: "Optional HTTPS webhook for render.completed|failed|cancelled. Omit to poll with status.",
        },
      },
    },
  },
  {
    name: "status",
    description: "Read normalized job state and polling guidance. No worker, provider, or progress-percent fields.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: ["job_id"],
      properties: { job_id: JOB_ID },
    },
  },
  {
    name: "download",
    description: "Return a ZIP download URL for a completed job. Never returns ZIP bytes. Delivery tokens are not logged.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: ["job_id"],
      properties: { job_id: JOB_ID },
    },
  },
  {
    name: "receipt",
    description: "Return a safe receipt subset. SHA-256 is byte identity, not artistic review.",
    inputSchema: {
      type: "object",
      additionalProperties: false,
      required: ["job_id"],
      properties: { job_id: JOB_ID },
    },
  },
];

export const TOOL_NAMES = TOOL_DEFINITIONS.map((tool) => tool.name);

const QUOTE_PUBLIC_KEYS = [
  "quote_id",
  "frame_start",
  "frame_end",
  "frame_step",
  "frame_count",
  "price_cents",
  "qualified_1c",
  "pricing_version",
  "status",
  "expires_at",
  "expiry_policy",
] as const;

const STATUS_PUBLIC_KEYS = [
  "ok",
  "job_id",
  "status",
  "quote_id",
  "upload_id",
  "price_cents",
  "payment_status",
  "download_url",
  "receipt_url",
  "output_sha256",
  "poll_after_seconds",
  "retry_after_seconds",
] as const;

type ToolResult = {
  content: Array<{ type: "text"; text: string }>;
  isError?: boolean;
};

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" ? (value as Record<string, unknown>) : {};
}

function pick(record: Record<string, unknown>, keys: readonly string[]): Record<string, unknown> {
  const nested = asRecord(record.quote);
  const out: Record<string, unknown> = {};
  for (const key of keys) {
    if (key in nested) {
      out[key] = nested[key];
    } else if (key in record) {
      out[key] = record[key];
    }
  }
  return out;
}

function requiredString(args: Record<string, unknown>, key: string): string {
  const value = String(args[key] ?? "").trim();
  if (!value) {
    throw new Error(`${key} is required`);
  }
  return value;
}

function requiredInt(args: Record<string, unknown>, key: string): number {
  const value = Number(args[key]);
  if (!Number.isInteger(value)) {
    throw new Error(`${key} must be an integer`);
  }
  return value;
}

function toolOk(payload: unknown): ToolResult {
  return { content: [{ type: "text", text: safeJsonText(payload) }] };
}

function toolError(error: unknown): ToolResult {
  const message =
    error instanceof FarpyApiError
      ? `${error.code}: ${error.message}`
      : error instanceof Error
        ? error.message
        : String(error);
  logDiagnostic(`tool error: ${message}`);
  return {
    content: [{ type: "text", text: redactSecrets(message) }],
    isError: true,
  };
}

async function inspectBlend(filePath: string): Promise<unknown> {
  const resolved = path.resolve(filePath);
  const info = await stat(resolved);
  if (!info.isFile()) {
    throw new Error("file_path must be a file");
  }
  if (!resolved.toLowerCase().endsWith(".blend")) {
    throw new Error("file_path must be a .blend file");
  }
  if (info.size > MAX_UPLOAD_BYTES) {
    throw new Error("input file exceeds the 100 MiB upload limit");
  }

  const bytes = await readFile(resolved);
  const filename = `${path.parse(resolved).name}.blend`;
  const form = new FormData();
  form.append("file", new Blob([new Uint8Array(bytes)]), filename);

  const result = asRecord(await farpyRequest("POST", "/node/v1/uploads/inspect", { form }));
  return {
    ...result,
    quote: pick(result, QUOTE_PUBLIC_KEYS),
    spend: false,
  };
}

async function quoteUpload(args: Record<string, unknown>): Promise<unknown> {
  const uploadId = requiredString(args, "upload_id");
  const frameStart = requiredInt(args, "frame_start");
  const frameEnd = requiredInt(args, "frame_end");
  const frameStep = args.frame_step === undefined ? 1 : requiredInt(args, "frame_step");
  if (frameStart < 1 || frameEnd < frameStart || frameStep < 1) {
    throw new Error("invalid frame range");
  }
  const result = asRecord(
    await farpyRequest("POST", `/node/v1/uploads/${jobPath(uploadId)}/quote`, {
      json: { frame_start: frameStart, frame_end: frameEnd, frame_step: frameStep },
    }),
  );
  return { ...result, quote: pick(result, QUOTE_PUBLIC_KEYS), spend: false };
}

async function startUpload(args: Record<string, unknown>): Promise<unknown> {
  const uploadId = requiredString(args, "upload_id");
  const quoteId = requiredString(args, "quote_id");
  const legalAcceptance = requiredString(args, "legal_acceptance");
  if (legalAcceptance !== LEGAL_ACCEPTANCE_V1) {
    throw new Error(`legal_acceptance must be exactly ${LEGAL_ACCEPTANCE_V1}`);
  }
  const payload: Record<string, unknown> = {
    quote_id: quoteId,
    legal_acceptance: legalAcceptance,
  };
  const webhookUrl = String(args.webhook_url ?? "").trim();
  if (webhookUrl) {
    payload.webhook_url = webhookUrl;
  }
  const result = asRecord(
    await farpyRequest("POST", `/node/v1/uploads/${jobPath(uploadId)}/start`, { json: payload }),
  );
  return { ...result, spend: true };
}

async function readJob(jobId: string): Promise<Record<string, unknown>> {
  return asRecord(await farpyRequest("GET", `/node/v1/jobs/${jobPath(jobId)}`));
}

export async function executeTool(name: string, args: Record<string, unknown>): Promise<ToolResult> {
  try {
    requireAgentToken();
    switch (name) {
      case "inspect":
        return toolOk(await inspectBlend(requiredString(args, "file_path")));
      case "quote":
        return toolOk(await quoteUpload(args));
      case "start":
        return toolOk(await startUpload(args));
      case "status": {
        const jobId = requiredString(args, "job_id");
        const job = await readJob(jobId);
        return toolOk({ ...pick(job, STATUS_PUBLIC_KEYS), job_id: job.job_id ?? jobId, spend: false });
      }
      case "download": {
        const jobId = requiredString(args, "job_id");
        const job = await readJob(jobId);
        logDiagnostic(`download metadata fetched for job ${jobId}`);
        return toolOk({
          ok: true,
          job_id: job.job_id ?? jobId,
          download_url: job.download_url,
          status: job.status,
        });
      }
      case "receipt": {
        const jobId = requiredString(args, "job_id");
        const job = await readJob(jobId);
        return toolOk({
          ok: true,
          job_id: job.job_id ?? jobId,
          receipt_url: job.receipt_url,
          output_sha256: job.output_sha256,
          status: job.status,
        });
      }
      default:
        throw new Error(`unknown tool: ${name}`);
    }
  } catch (error) {
    return toolError(error);
  }
}
