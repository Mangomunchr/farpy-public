const AGENT_TOKEN_PATTERN = /farpy_agent_[A-Za-z0-9_\-/=+]+/g;
const BEARER_PATTERN = /Bearer\s+\S+/gi;

function secretValues(): string[] {
  const values = [process.env.FARPY_AGENT_TOKEN];
  return values.filter((value): value is string => Boolean(value && value.trim()));
}

export function redactSecrets(value: string, extra?: string): string {
  let out = value;
  const secrets = extra ? [...secretValues(), extra] : secretValues();
  for (const secret of secrets) {
    const trimmed = secret.trim();
    if (trimmed.length === 0) {
      continue;
    }
    out = out.split(trimmed).join("[REDACTED]");
  }
  out = out.replace(BEARER_PATTERN, "Bearer [REDACTED]");
  out = out.replace(AGENT_TOKEN_PATTERN, "[REDACTED]");
  return out;
}

export function logDiagnostic(message: string): void {
  console.error(redactSecrets(message));
}

export function safeJsonText(value: unknown): string {
  const text = JSON.stringify(value, null, 2);
  return redactSecrets(text);
}
