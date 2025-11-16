// /lib/ecwid.ts
const ECWID_STORE_ID = process.env.ECWID_STORE_ID!;
const ECWID_API_BASE = process.env.ECWID_API_BASE ?? "https://app.ecwid.com/api/v3";
const ECWID_API_TOKEN = process.env.ECWID_API_TOKEN!; // must be the *secret* token (starts with "secret_")

// Generic GET helper that sends Authorization: Bearer <secret_token>
export async function ecwidGet<T>(path: string): Promise<T> {
  if (!ECWID_STORE_ID || !ECWID_API_TOKEN) {
    throw new Error("Missing ECWID_STORE_ID or ECWID_API_TOKEN");
  }

  const url = `${ECWID_API_BASE.replace(/\/$/, "")}/${ECWID_STORE_ID}/${path.replace(/^\//, "")}`;

  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      // Ecwid expects this for custom app tokens
      Authorization: `Bearer ${ECWID_API_TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Ecwid GET ${url} failed ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}
