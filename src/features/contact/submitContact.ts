import type { ContactValues } from "./validate";

export async function submitContact(values: ContactValues): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
  if (!endpoint) {
    if (process.env.NODE_ENV !== "production") { await new Promise((r) => setTimeout(r, 400)); return; }
    throw new Error("Contact endpoint is not configured");
  }
  const res = await fetch(endpoint, {
    method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error(`Contact endpoint responded ${res.status}`);
}
