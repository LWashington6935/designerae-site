// /lib/ecwid.ts
const ECWID_STORE_ID = process.env.ECWID_STORE_ID!;
const ECWID_API_BASE =
  process.env.ECWID_API_BASE ?? "https://app.ecwid.com/api/v3";
const ECWID_API_TOKEN = process.env.ECWID_API_TOKEN!; // secret token (starts with "secret_...")

if (!ECWID_STORE_ID || !ECWID_API_TOKEN) {
  console.warn(
    "[ecwid] Missing ECWID_STORE_ID or ECWID_API_TOKEN. API calls will fail."
  );
}

type Json = Record<string, unknown> | unknown[];

async function ecwidFetch<T>(
  path: string,
  init?: RequestInit & { json?: Json }
): Promise<T> {
  const url = `${ECWID_API_BASE}/${ECWID_STORE_ID}${path}`;
  const headers: HeadersInit = {
    Authorization: `Bearer ${ECWID_API_TOKEN}`,
  };

  let body: BodyInit | undefined = undefined;

  // If caller passed `json`, serialize and set content-type
  if (init?.json !== undefined) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(init.json);
  }

  const res = await fetch(url, {
    ...init,
    headers: { ...headers, ...(init?.headers ?? {}) },
    body: body ?? init?.body,
    // ensure we never cache secrets
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `[ecwid] ${init?.method ?? "GET"} ${path} failed ${res.status}: ${text}`
    );
  }

  // Some Ecwid endpoints return empty body (204)
  if (res.status === 204) return undefined as unknown as T;

  return (await res.json()) as T;
}

/** GET helper */
export function ecwidGet<T>(path: string): Promise<T> {
  return ecwidFetch<T>(path, { method: "GET" });
}

/** POST helper with JSON body */
export function ecwidPost<T>(path: string, json?: Json): Promise<T> {
  return ecwidFetch<T>(path, { method: "POST", json });
}

/** PUT helper with JSON body */
export function ecwidPut<T>(path: string, json?: Json): Promise<T> {
  return ecwidFetch<T>(path, { method: "PUT", json });
}

/** PATCH helper (optional) */
export function ecwidPatch<T>(path: string, json?: Json): Promise<T> {
  return ecwidFetch<T>(path, { method: "PATCH", json });
}

/** DELETE helper (optional) */
export function ecwidDelete<T>(path: string): Promise<T> {
  return ecwidFetch<T>(path, { method: "DELETE" });
}
