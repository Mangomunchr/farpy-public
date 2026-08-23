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
- Glama: https://glama.ai/mcp/servers
- PulseMCP: https://www.pulsemcp.com/servers
- Agent manifest: https://farpy.com/agents.json
- LLM context: https://farpy.com/llms.txt

## Public surfaces

- Website: https://farpy.com
- Proof: https://farpy.com/proof/
- BenchMork: https://farpy.com/benchmark
- Research: https://farpy.com/labs/research
- Security: [SECURITY.md](SECURITY.md)

## Scope

FARPY is currently a public-alpha service.

Public capabilities, pricing, and limits are authoritative. Historical research, internal tests, and experimental workloads do not imply current public availability.
