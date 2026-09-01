"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const key = "faithcine-analytics-choice";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("faithcine:consent", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("faithcine:consent", callback);
  };
}

export function ConsentBanner() {
  const choice = useSyncExternalStore(subscribe, () => localStorage.getItem(key), () => "pending");
  if (choice !== null) return null;

  const choose = (value: "allowed" | "essential") => {
    localStorage.setItem(key, value);
    window.dispatchEvent(new CustomEvent("faithcine:consent", { detail: value }));
  };

  return (
    <aside className="consent-banner" aria-label="Analytics preference">
      <p>We use essential technology to run this site. Optional aggregate analytics help us understand what is useful. <Link href="/privacy">Privacy notice</Link></p>
      <div>
        <button className="button button-primary button-small" type="button" onClick={() => choose("allowed")}>Allow analytics</button>
        <button className="button button-ghost button-small" type="button" onClick={() => choose("essential")}>Use essential only</button>
      </div>
    </aside>
  );
}
