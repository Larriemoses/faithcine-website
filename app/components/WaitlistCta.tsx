import { WaitlistForm } from "./WaitlistForm";

export function WaitlistCta({ title = "Follow Selah from research to beta." }: { title?: string }) {
  return <section id="early-access" className="conversion section-shell"><div><p className="section-number">FaithCine Selah early access</p><h2>{title}</h2><p>Join the early access list for product updates. We may also invite you to research sessions and future beta testing.</p></div><WaitlistForm /></section>;
}
