import { sendFormEmail } from "../../lib/forms-email";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    if (origin && new URL(origin).host !== new URL(request.url).host) return Response.json({ error: "Request origin is not allowed." }, { status: 403 });
    if (Number(request.headers.get("content-length") ?? 0) > 4_096) return Response.json({ error: "Request is too large." }, { status: 413 });
    const payload = (await request.json()) as { email?: string; researchConsent?: boolean; website?: string };
    if (payload.website) return Response.json({ ok: true }, { status: 201 });
    const email = payload.email?.trim().toLowerCase() ?? "";
    if (!emailPattern.test(email) || email.length > 254) return Response.json({ error: "Enter a valid email address." }, { status: 400 });

    await sendFormEmail({
      subject: "New FaithCine early-access signup",
      replyTo: email,
      text: [
        "A new early-access signup was submitted through faithcine.com.",
        "",
        `Email: ${email}`,
        `Open to product research: ${payload.researchConsent ? "Yes" : "No"}`,
      ].join("\n"),
    });
    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Unable to join the list right now." }, { status: 500 });
  }
}
