import { WaitlistForm } from "./WaitlistForm";

export function WaitlistCta({ title = "Help shape Selah." }: { title?: string }) {
  return <section id="early-access" className="conversion section-shell"><div><p className="section-number">Early access</p><h2>{title}</h2><p>Join for considered product updates, research invitations, and beta opportunities.</p></div><WaitlistForm /></section>;
}
