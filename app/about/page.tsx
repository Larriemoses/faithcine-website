import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = {
  title: "About FaithCine — Our mission, vision and values",
  description: "Discover why FaithCine exists and the values shaping its Christ-centered media vision.",
  alternates: { canonical: "/about" },
};

const values = [
  ["01", "Faith first", "Christ and biblical truth shape the purpose, content, and choices behind the work."],
  ["02", "Excellence & creativity", "We pursue media that is imaginative, emotionally honest, and made with care."],
  ["03", "Cultural relevance", "We speak to the real language, questions, and imagination of a changing generation."],
  ["04", "Community & fellowship", "We create room for people, churches, families, and creators to grow together."],
  ["05", "Accessibility", "We design for different devices, bandwidth realities, ages, languages, and abilities."],
  ["06", "Innovation in ministry", "We explore technology with humility, using it to serve truth rather than replace authority."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About FaithCine" title="Till Jesus be seen.">
        <p>FaithCine exists to spread the Gospel through engaging media—making Christ-centered entertainment, education, and community accessible, relatable, and exciting for the next generation.</p>
      </PageIntro>
      <section className="about-image-band"><Image src="/media/worship-crowd.jpg" alt="A congregation gathered in worship" fill sizes="100vw" unoptimized /><p>Rooted in faith. Made for people. Built from Africa.</p></section>
      <section className="section-shell mission-grid"><article><p className="section-number">Mission</p><h2>To glorify God and enrich lives by connecting people to compelling Christ-centered content and community—anytime, anywhere.</h2></article><article><p className="section-number">Vision</p><h2>To become a trusted African and global home for uplifting Christian movies, shows, live content, learning, and community.</h2></article></section>
      <section className="section-shell values-section"><div className="section-heading"><p className="section-number">What shapes us</p><h2>Values that travel into the work.</h2></div><div className="values-grid">{values.map(([number, title, body]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="section-shell team-stage"><div><p className="section-number">Current stage</p><h2>A bold vision, being built carefully.</h2></div><div><p>FaithCine is early-stage and in development. We describe concepts as concepts, avoid invented traction or partnerships, and will share products publicly as they become ready.</p><Link className="button button-primary" href="/contact">Work with us →</Link></div></section>
    </>
  );
}
