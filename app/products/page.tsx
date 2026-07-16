import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = {
  title: "FaithCine Products — Stories, Selah, Study, Kids and Studio",
  description: "Explore the developing FaithCine media and learning ecosystem.",
  alternates: { canonical: "/products" },
};

const products = [
  ["01", "FaithCine Stories", "Original films, series, documentaries, and visual narratives exploring faith, hope, transformation, and life.", "In development"],
  ["02", "FaithCine Selah", "A Scripture-led experience that begins with what a person is facing and makes room for reading, listening, prayer, and reflection.", "In development"],
  ["03", "FaithCine Study", "A future space for focused biblical learning and connected discipleship tools.", "Exploring"],
  ["04", "FaithCine Kids", "A future safe, joyful home for younger audiences to discover Scripture, stories, and play.", "Long-term vision"],
  ["05", "FaithCine Studio", "A future production home for film, audio, live programmes, and creators who want their work to point to Christ.", "Long-term vision"],
] as const;

export default function ProductsPage() {
  return (
    <>
      <PageIntro eyebrow="The FaithCine universe" title="One mission. Many expressions.">
        <p>FaithCine is the umbrella media brand. We are developing a connected family of entertainment, learning, and community experiences—each serving the same Christ-centered purpose.</p>
      </PageIntro>
      <section className="product-page-visual section-shell">
        <Image src="/media/family-screen.jpg" alt="A mother and daughter enjoying a programme together" fill sizes="100vw" unoptimized />
        <div><p>Designed for real homes, real questions, and real screens.</p></div>
      </section>
      <section className="section-shell roadmap-list">
        {products.map(([number, name, body, status]) => (
          <article key={name}><span className="roadmap-number">{number}</span><div><h2>{name}</h2><p>{body}</p></div><span className="status-badge">{status}</span></article>
        ))}
      </section>
      <section className="section-shell narrow-cta"><p className="section-number">Build with us</p><h2>Be part of the beginning.</h2><p>FaithCine is in design and development. Join for honest updates and future research opportunities.</p><Link className="button button-primary" href="/#early-access">Join early access →</Link></section>
    </>
  );
}
