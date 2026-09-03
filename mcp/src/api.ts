import { getApiBase, REQUEST_TIMEOUT_MS, requireAgentToken } from "./config.js";
import { logDiagnostic, redactSecrets } from "./redact.js";

export class FarpyApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly detail: unknown;

  constructor(status: number, code: string, message: string, detail?: unknown) {
    super(redactSecrets(message));
    this.name = "FarpyApiError";
    this.status = status;
    this.code = code;
    this.detail = detail;
  }
}

function apiUrl(path: string): string {
  const base = getApiBase();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

function authHeaders(): Record<string, string> {
  return {
    Accept: "application/json",
    Authorization: `Bearer ${requireAgentToken()}`,
    "User-Agent": "farpy-mcp-local/1.0",
  };
}

async function parseBody(response: Response): Promise<unknown> {
  const raw = await response.text();
  if (!raw) {
    return {};
  }
  try {
    return JSON.parse(raw) as unknown;
  } catch {
    return { raw: redactSecrets(raw) };
  }
}

function errorFromPayload(status: number, payload: unknown): FarpyApiError {
  const record = payload && typeof payload === "object" ? (payload as Record<string, unknown>) : {};
  const nested = record.error && typeof record.error === "object" ? (record.error as Record<string, unknown>) : undefined;
  const code = String(nested?.code ?? record.error ?? record.err ?? "request_failed");
  const message = String(nested?.message ?? record.message ?? `HTTP ${status}`);
  return new FarpyApiError(status, code, message, nested?.detail ?? record.detail);
}

export async function farpyRequest(
  method: string,
  path: string,
  options: { json?: unknown; form?: FormData } = {},
): Promise<unknown> {
  requireAgentToken();
  const headers = new Headers(authHeaders());
  let body: string | FormData | undefined;

  if (options.form) {
    body = options.form;
  } else if (options.json !== undefined) {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(options.json);
  }

  let response: Response;
  try {
    response = await fetch(apiUrl(path), {
      method,
      headers,
      body,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    logDiagnostic(`FARPY API network error: ${message}`);
    throw new FarpyApiError(0, "network_error", message);
  }

  const payload = await parseBody(response);
  if (!response.ok) {
    throw errorFromPayload(response.status, payload);
  }
  return payload;
}

export function jobPath(uploadOrJobId: string): string {
  return encodeURIComponent(uploadOrJobId);
}
