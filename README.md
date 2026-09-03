# FARPY

**Verified GPU compute for humans, applications, and agents.**

FARPY accepts bounded GPU workloads, executes them asynchronously, delivers completed artifacts, and issues verifiable execution receipts.

## Public workload

**Blender Cycles GPU rendering — $0.01 per completed frame.**

Current public contract:

- Workload: Blender Cycles GPU
- Input: `.blend`
- Execution: asynchronous
- Output: downloadable artifact
- Integrity: SHA-256 artifact verification
- Evidence: FARPY execution receipt
- Transparency: public proof surfaces
- Status: `LIVE_PUBLIC_ALPHA`

Additional workloads are under development and are not currently public.

## Agent / API access

- MCP: https://api.farpy.com/mcp
- API: https://api.farpy.com/v1
- OpenAPI 3.1: https://farpy.com/openapi.json
- Quickstart: https://farpy.com/api/quickstart/
- Capabilities: https://api.farpy.com/v1/capabilities
- Pricing: https://api.farpy.com/v1/pricing
- Limits: https://api.farpy.com/v1/limits

Typical lifecycle:

`discover → price → submit → JOB-ID → execute → download → verify receipt`

## Agent discovery

- Official MCP Registry: https://registry.modelcontextprotocol.io/
- Smithery: https://smithery.ai/servers/mangomunchr/farpy
- Glama: https://glama.ai/mcp/servers/Mangomunchr/farpy-public
- PulseMCP: https://www.pulsemcp.com/servers
- Agent manifest: https://farpy.com/agents.json
- LLM context: https://farpy.com/llms.txt

## Public surfaces

- Website: https://farpy.com
- Proof: https://farpy.com/proof/
- BenchMork: https://farpy.com/benchmark
- Research: https://farpy.com/labs/research
- Security: [SECURITY.md](SECURITY.md)

## Local MCP / Glama

A local stdio MCP server for Cursor, Claude Desktop, Glama, and other MCP clients lives in [`mcp/`](mcp/).

It is a thin public client over FARPY's existing Job API. It does not include production server code and never logs `FARPY_AGENT_TOKEN`.

### Build and run

```bash
cd mcp
npm install
npm run build
npm test
node dist/mcp-server.js
```

Environment (see `.env.example`):

- `FARPY_AGENT_TOKEN` — Job API `farpy_agent_` key. Required for every tool. The server fails closed if it is missing.
- `FARPY_API_BASE` — API origin. Default: `https://api.farpy.com`

Example local client config:

```json
{
  "mcpServers": {
    "farpy": {
      "command": "node",
      "args": ["/absolute/path/to/farpy-public/mcp/dist/mcp-server.js"],
      "env": {
        "FARPY_AGENT_TOKEN": "farpy_agent_..."
      }
    }
  }
}
```

Public MCP V1 tools: `inspect`, `quote`, `start`, `status`, `download`, `receipt`. `inspect` and `quote` do not spend. `start` is the spend boundary and requires `legal_acceptance=FARPY_LEGAL_V1`.

## Scope

FARPY is currently a public-alpha service.

Public capabilities, pricing, and limits are authoritative. Historical research, internal tests, and experimental workloads do not imply current public availability.
