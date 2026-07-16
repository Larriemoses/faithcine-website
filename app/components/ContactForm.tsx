"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Request failed");
      window.location.assign("/thank-you?type=contact");
    } catch {
      setError("We could not send your message. Your answers are still here - please try again or email hello@faithcine.com.");
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className="form-grid">
        <div><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" maxLength={100} required /></div>
        <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" maxLength={254} required /></div>
      </div>
      <label htmlFor="topic">What would you like to discuss?</label>
      <select id="topic" name="topic" required defaultValue="">
        <option value="" disabled>Select a topic</option>
        <option>Product feedback</option><option>Partnership</option><option>Research</option><option>Media</option><option>Other</option>
      </select>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={7} minLength={10} maxLength={3000} required />
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-primary" type="submit" disabled={loading}>{loading ? "Sending..." : "Send message"}</button>
    </form>
  );
}
