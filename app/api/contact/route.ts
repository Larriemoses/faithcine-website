import { sendFormEmail } from "../../lib/forms-email";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const topics = new Set(["Product feedback", "Partnership", "Programmes and funding", "Research", "Media", "Contributing", "Other"]);

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    if (origin && new URL(origin).host !== new URL(request.url).host) return Response.json({ error: "Request origin is not allowed." }, { status: 403 });
    if (Number(request.headers.get("content-length") ?? 0) > 16_384) return Response.json({ error: "Request is too large." }, { status: 413 });
    const payload = (await request.json()) as Record<string, unknown>;
    if (String(payload.website ?? "")) return Response.json({ ok: true }, { status: 201 });
    const name = String(payload.name ?? "").trim();
    const email = String(payload.email ?? "").trim().toLowerCase();
    const topic = String(payload.topic ?? "").trim();
    const message = String(payload.message ?? "").trim();
    if (!name || name.length > 100 || !emailPattern.test(email) || email.length > 254 || !topics.has(topic) || message.length < 10 || message.length > 3000) {
      return Response.json({ error: "Check the required fields and try again." }, { status: 400 });
    }
    await sendFormEmail({
      subject: `FaithCine website enquiry: ${topic}`,
      replyTo: email,
      text: [
        "A new message was submitted through faithcine.com.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Topic: ${topic}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
