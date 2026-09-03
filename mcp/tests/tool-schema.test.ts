import assert from "node:assert/strict";
import { test } from "node:test";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { createFarpyMcpServer } from "../src/server.js";
import { TOOL_DEFINITIONS, TOOL_NAMES } from "../src/tools.js";

test("exports exactly the public MCP V1 tools", () => {
  assert.deepEqual(TOOL_NAMES, ["inspect", "quote", "start", "status", "download", "receipt"]);
});

test("tool schemas are deterministic and required fields match the public contract", () => {
  const byName = Object.fromEntries(TOOL_DEFINITIONS.map((tool) => [tool.name, tool]));

  assert.equal(
    byName.inspect.description,
    "Inspect a Blender .blend without spending. Creates upload_id and an open locked quote.",
  );
  assert.deepEqual(byName.inspect.inputSchema.required, ["file_path"]);

  assert.equal(byName.quote.description, "Create a locked quote for a frame sub-range. Does not spend.");
  assert.deepEqual(byName.quote.inputSchema.required, ["upload_id", "frame_start", "frame_end"]);

  assert.equal(byName.start.description, "ONLY spend tool. Reserves wallet cents for the locked quote_id.");
  assert.deepEqual(byName.start.inputSchema.required, ["upload_id", "quote_id", "legal_acceptance"]);
  assert.equal(byName.start.inputSchema.properties.legal_acceptance.description, "Must be exactly FARPY_LEGAL_V1.");

  assert.deepEqual(byName.status.inputSchema.required, ["job_id"]);
  assert.deepEqual(byName.download.inputSchema.required, ["job_id"]);
  assert.deepEqual(byName.receipt.inputSchema.required, ["job_id"]);

  for (const tool of TOOL_DEFINITIONS) {
    assert.equal(tool.inputSchema.type, "object");
    assert.equal(tool.inputSchema.additionalProperties, false);
    for (const key of tool.inputSchema.required) {
      assert.ok(tool.inputSchema.properties[key], `${tool.name} missing property ${key}`);
    }
  }
});

test("MCP listTools matches the exported schemas", async () => {
  const previousToken = process.env.FARPY_AGENT_TOKEN;
  delete process.env.FARPY_AGENT_TOKEN;

  const mcpServer = createFarpyMcpServer();
  const client = new Client({ name: "farpy-mcp-test", version: "1.0.0" });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();

  await Promise.all([mcpServer.connect(serverTransport), client.connect(clientTransport)]);
  const listed = await client.listTools();
  await Promise.all([client.close(), mcpServer.close()]);

  if (previousToken === undefined) {
    delete process.env.FARPY_AGENT_TOKEN;
  } else {
    process.env.FARPY_AGENT_TOKEN = previousToken;
  }

  assert.deepEqual(
    listed.tools.map((tool) => tool.name),
    TOOL_NAMES,
  );
  for (const tool of listed.tools) {
    const expected = TOOL_DEFINITIONS.find((item) => item.name === tool.name);
    assert.ok(expected);
    assert.equal(tool.description, expected.description);
    const schema = tool.inputSchema as { required?: string[] };
    assert.deepEqual(schema.required ?? [], expected.inputSchema.required);
  }
});
