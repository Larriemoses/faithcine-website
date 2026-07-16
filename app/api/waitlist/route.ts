import { ensureFormsSchema } from "../../../db";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { email?: string; researchConsent?: boolean; website?: string };
    if (payload.website) return Response.json({ ok: true }, { status: 201 });
    const email = payload.email?.trim().toLowerCase() ?? "";
    if (!emailPattern.test(email) || email.length > 254) return Response.json({ error: "Enter a valid email address." }, { status: 400 });

    const db = await ensureFormsSchema();
    const existing = await db.prepare("SELECT id FROM waitlist_entries WHERE email = ? LIMIT 1").bind(email).first();
    if (existing) return Response.json({ ok: true, existing: true });
    await db.prepare("INSERT INTO waitlist_entries (email, research_consent, consent_source) VALUES (?, ?, ?)")
      .bind(email, payload.researchConsent ? 1 : 0, "website")
      .run();
    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Unable to join the list right now." }, { status: 500 });
  }
}
