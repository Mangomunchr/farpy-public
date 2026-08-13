# FARPY Security Policy

Report security vulnerabilities privately to:

**support@farpy.com**

## Scope

Relevant surfaces include:

- FARPY API and authentication
- MCP endpoint
- job submission and execution
- worker admission and capability verification
- artifact delivery and integrity
- execution receipts and transparency proofs
- account and billing controls
- public FARPY software and integrations

## Reporting

Include, when available:

- affected endpoint or surface
- reproduction steps
- expected and observed behavior
- security impact
- relevant request IDs, job IDs, or timestamps

Do not include API keys, passwords, private keys, payment credentials, customer workloads, or other secrets.

## Safe research

Do not:

- access another user's data
- intentionally disrupt production
- perform denial-of-service testing
- execute destructive workloads
- use social engineering
- retain or publish secrets or customer data

If testing could affect production availability, billing, customer data, or third-party infrastructure, stop and report the issue.

## Integrity model

SHA-256 establishes byte identity and integrity. It does not by itself prove semantic correctness, confidentiality, or control-plane integrity.

Receipt transparency proofs establish inclusion in a published FARPY transparency batch. They do not replace independent validation of the underlying workload result.

## Current public contract

FARPY is `LIVE_PUBLIC_ALPHA`.

Current public workload:

**Blender Cycles GPU rendering — $0.01 per completed frame.**

Machine-readable truth:

- https://api.farpy.com/v1/capabilities
- https://api.farpy.com/v1/pricing
- https://api.farpy.com/v1/limits
- https://farpy.com/openapi.json
