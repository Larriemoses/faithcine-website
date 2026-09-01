"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type State = "idle" | "loading" | "success" | "existing" | "error";

export function WaitlistForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      setState("error");
      return;
    }
    setState("loading");
    setError("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          researchConsent: data.get("researchConsent") === "on",
          website: data.get("website"),
        }),
      });
      const result = (await response.json()) as { existing?: boolean; error?: string };
      if (!response.ok) throw new Error(result.error ?? "Request failed");
      setState(result.existing ? "existing" : "success");
      form.reset();
    } catch {
      setError("We could not add you to the list. Your email remains in the form, so you can try again.");
      setState("error");
    }
  }

  if (state === "success" || state === "existing") {
    return <p className="form-success" role="status">{state === "existing" ? "This email is already registered for early access." : "You are on the list. We will be in touch when there is news to share."}</p>;
  }

  return (
    <form className="waitlist-form" onSubmit={submit} noValidate aria-busy={state === "loading"}>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label htmlFor="waitlist-email">Email address</label>
      <div className="field-button-row">
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-describedby={error ? "waitlist-note waitlist-error" : "waitlist-note"}
          aria-invalid={state === "error"}
          required
        />
        <button className="button button-primary" type="submit" disabled={state === "loading"}>{state === "loading" ? "Joining..." : "Join early access"}</button>
      </div>
      <label className="checkbox-row">
        <input name="researchConsent" type="checkbox" />
        <span>I am open to receiving a separate invitation for FaithCine product research.</span>
      </label>
      <p id="waitlist-note" className="form-note">We will send occasional product updates. You can unsubscribe at any time. Read our <Link href="/privacy">Privacy Notice</Link>.</p>
      {error && <p id="waitlist-error" className="form-error" role="alert">{error}</p>}
    </form>
  );
}
