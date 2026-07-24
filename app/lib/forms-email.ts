type FormEmail = {
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendFormEmail({ subject, text, replyTo }: FormEmail) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");

  const to = process.env.FORMS_TO_EMAIL?.trim() || "info@faithcine.com";
  const from = process.env.RESEND_FROM_EMAIL?.trim() || "FaithCine Website <onboarding@resend.dev>";
  const payload: Record<string, unknown> = {
    from,
    to: [to],
    subject,
    text,
  };
  if (replyTo) payload.reply_to = replyTo;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
      "idempotency-key": crypto.randomUUID(),
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend rejected the form email (${response.status}): ${detail.slice(0, 200)}`);
  }
}
