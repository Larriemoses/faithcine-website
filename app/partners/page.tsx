import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = {
  title: "Partners and programme reviewers",
  description: "A concise overview of FaithCine's problem, product direction, responsible technology approach, current stage, and partnership opportunities.",
  alternates: { canonical: "/partners" },
};

const facts = [
  ["Base", "Nigeria"],
  ["First product", "FaithCine Selah"],
  ["Current stage", "Design and development"],
  ["Primary audience", "Christians, families and churches across Africa"],
] as const;

const asks = [
  ["01", "Research and pilot partners", "Churches, ministries and communities willing to help test whether Selah is clear, useful and responsible."],
  ["02", "Technical and AI guidance", "Support with scalable architecture, retrieval, evaluation, accessibility, privacy and responsible AI practice."],
  ["03", "Content and rights partners", "Bible publishers, teachers, theologians and creators who can support accurate, licensed and locally relevant work."],
  ["04", "Media and distribution partners", "Filmmakers, platforms and organisations interested in Christian stories shaped with African audiences in view."],
] as const;

export default function PartnersPage() {
  return (
    <>
      <PageIntro eyebrow="For partners and programme reviewers" title="Building Christian media technology from Africa with trust at the centre.">
        <p>FaithCine is developing media, Scripture tools and learning experiences from Nigeria. Selah is our first product and is currently in design and development.</p>
      </PageIntro>

      <section className="section-shell partner-facts" aria-label="FaithCine company overview">
        {facts.map(([label, value]) => <article key={label}><p>{label}</p><h2>{value}</h2></article>)}
      </section>

      <section className="section-shell editorial-split">
        <div><p className="section-number">The problem</p><h2>Useful Christian technology must understand the people, devices and communities it hopes to serve.</h2></div>
        <div><p className="large-copy">Many digital faith experiences are built far from African realities. Data cost, unstable connections, language, cultural context, source clarity and trust all shape whether a product genuinely helps.</p><p>FaithCine begins with those constraints. We are designing close to the audience, testing before making claims, and keeping Scripture references visible.</p></div>
      </section>

      <section className="section-shell programme-direction">
        <div className="section-heading"><p className="section-number">Product and technology direction</p><h2>A focused first product with a responsible path to scale.</h2></div>
        <div className="programme-direction-grid">
          <article><span>01</span><h3>Begin with one clear experience</h3><p>Selah starts with a real situation and guides a person into Scripture, prayer and reflection without becoming an endless feed.</p></article>
          <article><span>02</span><h3>Use technology with limits</h3><p>AI may support topic organisation, retrieval, accessibility and production workflows. It must not claim spiritual authority or replace human judgement.</p></article>
          <article><span>03</span><h3>Make trust measurable</h3><p>Source traceability, theological and editorial review, safety evaluation, privacy, user correction and device performance are product requirements.</p></article>
        </div>
      </section>

      <section className="section-shell editorial-split programme-stage">
        <div><p className="section-number">What we are proving next</p><h2>Evidence before expansion.</h2></div>
        <div><p className="large-copy">The next milestones are a testable Selah prototype, structured user research, clear Scripture-source evaluation, mobile performance testing and a small pilot with accountable partners.</p><p>FaithCine will publish traction, partnerships and results only after they exist and can be verified.</p></div>
      </section>

      <section className="section-shell values-section">
        <div className="section-heading"><p className="section-number">Ways to work with FaithCine</p><h2>Partners for the work ahead.</h2></div>
        <div className="values-grid partner-asks">{asks.map(([number, title, body]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="section-shell narrow-cta"><p className="section-number">Start a conversation</p><h2>Help us build the evidence responsibly.</h2><p>For accelerator programmes, technical mentorship, research, content, media or distribution partnerships, contact the FaithCine team.</p><Link className="button button-primary" href="/contact">Contact FaithCine</Link></section>
    </>
  );
}
