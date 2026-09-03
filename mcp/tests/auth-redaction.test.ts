import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { executeTool } from "../src/tools.js";
import { redactSecrets } from "../src/redact.js";

const ORIGINAL_FETCH = globalThis.fetch;
const ORIGINAL_TOKEN = process.env.FARPY_AGENT_TOKEN;
const ORIGINAL_BASE = process.env.FARPY_API_BASE;

afterEach(() => {
  globalThis.fetch = ORIGINAL_FETCH;
  if (ORIGINAL_TOKEN === undefined) {
    delete process.env.FARPY_AGENT_TOKEN;
  } else {
    process.env.FARPY_AGENT_TOKEN = ORIGINAL_TOKEN;
  }
  if (ORIGINAL_BASE === undefined) {
    delete process.env.FARPY_API_BASE;
  } else {
    process.env.FARPY_API_BASE = ORIGINAL_BASE;
  }
});

test("authenticated tools fail closed when FARPY_AGENT_TOKEN is missing", async () => {
  delete process.env.FARPY_AGENT_TOKEN;
  let fetchCalls = 0;
  globalThis.fetch = (async () => {
    fetchCalls += 1;
    throw new Error("network should not be used without a token");
  }) as typeof fetch;

  const stderr: string[] = [];
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    stderr.push(args.map((arg) => String(arg)).join(" "));
  };

  try {
    for (const name of ["inspect", "quote", "start", "status", "download", "receipt"]) {
      const result = await executeTool(name, {
        file_path: "C:\\tmp\\scene.blend",
        upload_id: "upl_test",
        quote_id: "QTE-1",
        legal_acceptance: "FARPY_LEGAL_V1",
        job_id: "JOB-1",
        frame_start: 1,
        frame_end: 1,
      });
      assert.equal(result.isError, true, `${name} should fail closed`);
      assert.match(result.content[0]?.text ?? "", /FARPY_AGENT_TOKEN is required/);
      assert.doesNotMatch(result.content[0]?.text ?? "", /farpy_agent_/);
    }
  } finally {
    console.error = originalError;
  }
  assert.equal(fetchCalls, 0);
  assert.equal(stderr.join("\n").includes("farpy_agent_"), false);
});

test("token values are redacted from tool results and never passed through error text", async () => {
  const token = "farpy_agent_TESTTOKENVALUE_DO_NOT_LEAK";
  process.env.FARPY_AGENT_TOKEN = token;
  process.env.FARPY_API_BASE = "https://api.farpy.com";

  globalThis.fetch = (async () => {
    throw new Error(`upstream failed for ${token}`);
  }) as typeof fetch;

  const stderr: string[] = [];
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    stderr.push(args.map((arg) => String(arg)).join(" "));
  };

  try {
    const result = await executeTool("status", { job_id: "JOB-1" });
    const text = result.content[0]?.text ?? "";
    assert.equal(result.isError, true);
    assert.doesNotMatch(text, new RegExp(token));
    assert.match(text, /\[REDACTED\]/);
    assert.equal(stderr.join("\n").includes(token), false);
  } finally {
    console.error = originalError;
  }
});

test("redactSecrets removes the env token and bearer values", () => {
  process.env.FARPY_AGENT_TOKEN = "farpy_agent_SECRETVALUE123";
  const leaked = "Authorization: Bearer farpy_agent_SECRETVALUE123 debug=farpy_agent_SECRETVALUE123";
  const redacted = redactSecrets(leaked);
  assert.doesNotMatch(redacted, /SECRETVALUE123/);
  assert.doesNotMatch(redacted, /farpy_agent_SECRETVALUE123/);
  assert.match(redacted, /\[REDACTED\]/);
});
