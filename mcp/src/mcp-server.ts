#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { logDiagnostic } from "./redact.js";
import { createFarpyMcpServer } from "./server.js";

async function main(): Promise<void> {
  const server = createFarpyMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  logDiagnostic("FARPY local MCP server running on stdio");
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.stack ?? error.message : String(error);
  logDiagnostic(message);
  process.exit(1);
});
