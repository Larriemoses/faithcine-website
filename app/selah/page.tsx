import type { Metadata } from "next";
import { Flow } from "../components/Flow";
import { PageIntro } from "../components/PageIntro";
import { WaitlistCta } from "../components/WaitlistCta";

export const metadata: Metadata = { title: "FaithCine Selah - Scripture for what you are facing", description: "Discover Selah, a Scripture-led meditation experience in development for study, prayer, confession, declaration, listening, and reflection.", alternates: { canonical: "/selah" } };

export default function SelahPage() {
  return <>
    <PageIntro eyebrow="The first FaithCine product" title="Bring what you are facing to Scripture." status="In design and development">
      <p>Selah is being designed to help Christians move from a real situation into a calm, guided encounter with the Word - without turning the experience into a chatbot or endless content feed.</p>
    </PageIntro>
    <section className="section-shell product-sequence"><div className="section-heading"><p className="section-number">The experience</p><h2>From the moment to the Word.</h2></div><Flow /></section>
    <section className="section-shell editorial-split"><div><p className="section-number">Choice, not a feed</p><h2>One Scripture set. More than one way to engage.</h2></div><p className="large-copy">Some moments call for quiet reading. Others call for prayer, repetition, listening, or reflection. Selah is designed to let the user choose the mode and length that fit the moment.</p></section>
    <section className="section-shell trust-band"><div><p className="section-number">Trust principle</p><h2>Scripture is the reference point.</h2></div><div><p>Passages should display their references and translation. Prayers, declarations, and confessions should remain connected to the passages that shaped them.</p><p>AI-assisted drafts should be identified, reviewable, editable, and reportable. Selah must never describe generated text as a direct word from God.</p></div></section>
    <section className="section-shell editorial-split"><div><p className="section-number">Built from Africa</p><h2>Rooted in Africa. Designed to travel.</h2></div><p className="large-copy">Selah begins from Nigerian realities: mobile-first use, variable connectivity, lower-cost Android devices, and meaningful language support. Languages will be released only as rights, native review, pronunciation, and theological quality are ready.</p></section>
    <section className="section-shell faq-section"><div className="section-heading"><p className="section-number">Common questions</p><h2>Selah, clearly stated.</h2></div><div className="faq-list">
      <details><summary>Is Selah available now?</summary><p>Not yet. Selah is currently in design and development. Join early access for research and beta updates.</p></details>
      <details><summary>Is Selah a Bible app?</summary><p>Selah is a Scripture-led meditation experience. It is not intended to replace a Bible, church community, pastoral care, or personal discernment.</p></details>
      <details><summary>Does Selah use AI?</summary><p>AI may assist with topic understanding and drafting behind the scenes. Scripture references, transparent labels, review processes, and user controls are central to the approach.</p></details>
      <details><summary>Will it support African languages?</summary><p>That is the direction. Languages will be released progressively as translation rights, native review, pronunciation, and theological quality are ready.</p></details>
    </div></section>
    <WaitlistCta title="Join Selah early access." />
  </>;
}
