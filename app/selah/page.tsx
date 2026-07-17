import type { Metadata } from "next";
import { Flow } from "../components/Flow";
import { PageIntro } from "../components/PageIntro";
import { WaitlistCta } from "../components/WaitlistCta";

export const metadata: Metadata = {
  title: "FaithCine Selah | Guided Scripture meditation and prayer",
  description: "FaithCine Selah is a guided Scripture meditation and prayer product in development for Christians who want to read, listen, pray, and reflect.",
  alternates: { canonical: "/selah" },
};

export default function SelahPage() {
  return <>
    <PageIntro eyebrow="The first FaithCine product" title="Bring what you are facing to Scripture." status="In design and development">
      <p>Selah is being designed for Christians to begin with a situation they are facing, find relevant Scripture, and spend time reading, listening, praying, or writing. Selah does not operate as a chatbot or an endless content feed.</p>
    </PageIntro>
    <section className="section-shell product-sequence"><div className="section-heading"><p className="section-number">How Selah will guide a session</p><h2>Start with the moment. Stay with the Word.</h2></div><Flow /></section>
    <section className="section-shell editorial-split"><div><p className="section-number">Choose how to respond</p><h2>Read, listen, pray, or write.</h2></div><p className="large-copy">Some moments call for quiet reading. Others call for prayer, repetition, listening, or written reflection. Selah will let each person choose the activity and session length that suits the moment.</p></section>
    <section className="section-shell trust-band"><div><p className="section-number">Built on trust</p><h2>Scripture stays at the centre.</h2></div><div><p>Every passage should show its reference and translation. Prayers, confessions, and declarations must remain connected to the Scripture they come from.</p><p>Any text prepared with technological assistance must be labelled, reviewed, editable, and open to correction. Selah will never present generated text as a direct word from God.</p></div></section>
    <section className="section-shell editorial-split"><div><p className="section-number">Access and language</p><h2>Designed in Nigeria for the devices and networks people use.</h2></div><p className="large-copy">Selah research considers mobile use, unstable connections, data cost, lower cost Android devices, and the care required for language support. English will come first. Other languages will be added only when translation rights, pronunciation, native review, and theological review are ready.</p></section>
    <section className="section-shell faq-section"><div className="section-heading"><p className="section-number">Frequently asked questions</p><h2>Selah, clearly stated.</h2></div><div className="faq-list">
      <details><summary>Is Selah available now?</summary><p>Not yet. Selah is in design and development. Join early access for research invitations and beta updates.</p></details>
      <details><summary>Is Selah a Bible app?</summary><p>Selah is a guided Scripture meditation and prayer product. It does not replace the Bible, church community, pastoral care, or personal discernment.</p></details>
      <details><summary>Does Selah use AI?</summary><p>AI may assist with organising topics and preparing early drafts. It cannot speak for God. Scripture references, human review, labels, editing controls, and user choice remain central.</p></details>
      <details><summary>Will Selah support African languages?</summary><p>African language support is part of the plan. Languages will be added gradually when translation rights, pronunciation, native review, and theological review are ready.</p></details>
    </div></section>
    <WaitlistCta title="Follow Selah from research to beta." />
  </>;
}
