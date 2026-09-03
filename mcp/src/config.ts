export const DEFAULT_API_BASE = "https://api.farpy.com";
export const LEGAL_ACCEPTANCE_V1 = "FARPY_LEGAL_V1";
export const MAX_UPLOAD_BYTES = 104_857_600;
export const REQUEST_TIMEOUT_MS = 120_000;

export function getApiBase(): string {
  const raw = (process.env.FARPY_API_BASE ?? DEFAULT_API_BASE).trim();
  return raw.replace(/\/+$/, "").replace(/\/v1$/i, "");
}

export function getAgentToken(): string | undefined {
  const token = process.env.FARPY_AGENT_TOKEN?.trim();
  return token ? token : undefined;
}

export function requireAgentToken(): string {
  const token = getAgentToken();
  if (!token) {
    throw new Error("FARPY_AGENT_TOKEN is required");
  }
  return token;
}
