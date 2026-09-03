import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { executeTool, TOOL_DEFINITIONS } from "./tools.js";

const schemas: Record<string, z.ZodRawShape> = {
  inspect: {
    file_path: z.string().describe("Absolute path to a local .blend file."),
  },
  quote: {
    upload_id: z.string().describe("Upload id from inspect."),
    frame_start: z.number().int().min(1).describe("First frame, inclusive."),
    frame_end: z.number().int().min(1).describe("Last frame, inclusive."),
    frame_step: z.number().int().min(1).optional().describe("Frame step."),
  },
  start: {
    upload_id: z.string().describe("Upload id from inspect."),
    quote_id: z.string().describe("Locked quote id."),
    legal_acceptance: z.string().describe("Must be exactly FARPY_LEGAL_V1."),
    webhook_url: z
      .string()
      .optional()
      .describe("Optional HTTPS webhook for render.completed|failed|cancelled. Omit to poll with status."),
  },
  status: {
    job_id: z.string().describe("FARPY job id."),
  },
  download: {
    job_id: z.string().describe("FARPY job id."),
  },
  receipt: {
    job_id: z.string().describe("FARPY job id."),
  },
};

export function createFarpyMcpServer(): McpServer {
  const server = new McpServer({
    name: "farpy",
    version: "1.0.0",
  });

  for (const tool of TOOL_DEFINITIONS) {
    const inputSchema = schemas[tool.name];
    if (!inputSchema) {
      throw new Error(`missing zod schema for ${tool.name}`);
    }
    server.registerTool(
      tool.name,
      {
        description: tool.description,
        inputSchema,
      },
      async (args) => executeTool(tool.name, args as Record<string, unknown>),
    );
  }

  return server;
}
