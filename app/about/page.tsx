import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = {
  title: "About FaithCine | Christian media and technology",
  description: "Learn about FaithCine, a Christian media and technology company developing Gospel-centred films, Scripture tools, children's media, and learning.",
  alternates: { canonical: "/about" },
};

const values = [
  ["01", "Scripture first", "Biblical truth guides the purpose, content, and decisions behind the work."],
  ["02", "Serious craft", "We take writing, design, production, research, and user experience seriously."],
  ["03", "Close to the culture", "We pay attention to the language, questions, imagination, and daily lives of the people we serve."],
  ["04", "Community", "We want families, churches, creators, and audiences to find practical ways to learn, create, and grow together."],
  ["05", "Access from the start", "We consider devices, data cost, connection quality, language, age, and disability from the beginning."],
  ["06", "Technology with humility", "Technology should support engagement with truth. It must never claim spiritual authority."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About FaithCine" title="Christian media created to promote the Gospel and help people see Jesus.">
        <p>FaithCine is a Christian media and technology company based in Nigeria. We are developing Christian films, documentaries, guided Scripture tools, children&apos;s media, learning resources, and live programmes for audiences everywhere.</p>
      </PageIntro>
      <section className="about-image-band"><Image src="/media/worship-crowd.webp" alt="People gathered for a Christian worship service" fill sizes="100vw" unoptimized /><p>Based in Nigeria.<br />Building for Christian audiences everywhere.</p></section>
      <section className="section-shell editorial-split about-origin">
        <div><p className="section-number">Why FaithCine exists</p><h2>The media people return to every day shapes what they notice, value, and remember.</h2></div>
        <div><p className="large-copy">Christian media should take part in that conversation with biblical truth, creative discipline, and a close understanding of the people it hopes to serve.</p><p>Our long-term vision is a trusted home for Christian films and media. We are beginning with FaithCine Selah, a guided Scripture product in research and design. FaithCine Stories is in early development, while Study, Kids, and Studio are planned for later.</p></div>
      </section>
      <section className="section-shell mission-grid">
        <article><span className="section-index">01</span><p className="section-number">Mission</p><h2>To glorify God through media, technology, and community work that helps people see Christ, understand biblical truth, and live it out each day.</h2></article>
        <article><span className="section-index">02</span><p className="section-number">Vision</p><h2>To become a trusted global Christian media and technology company known for excellent Gospel-centred stories, faithful Scripture tools, and work that helps people see Christ more clearly.</h2></article>
      </section>
      <section className="section-shell values-section"><div className="section-heading"><p className="section-number">What guides our decisions</p><h2>Values for the work ahead.</h2></div><div className="values-grid">{values.map(([number, title, body]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="section-shell team-stage"><div><p className="section-number">Current stage</p><h2>We are starting with Selah.</h2></div><div><p>FaithCine is at an early stage. Selah is in design and development. FaithCine Stories is in early development. The other products remain plans for later. We will publish research, prototypes, partnerships, and results only after they exist and can be verified.</p></div></section>
    </>
  );
}
