import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = {
  title: "FaithCine Products | Selah, Stories, Study, Kids and Studio",
  description: "Explore FaithCine Selah, Stories, Study, Kids, and Studio, a planned family of Christian films, Scripture tools, children's media, and production work.",
  alternates: { canonical: "/products" },
};

const products = [
  ["01", "FaithCine Selah", "A guided Scripture product that begins with a situation or question and leads into reading, listening, prayer, and reflection.", "In design and development"],
  ["02", "FaithCine Stories", "Christian films, shorts, series, documentaries, and visual stories centred on the Gospel and the realities of faith, family, hope, and restoration.", "In early development"],
  ["03", "FaithCine Study", "Planned Bible study resources for deeper learning and practical discipleship.", "Exploring"],
  ["04", "FaithCine Kids", "Planned Christian movies, animation, stories, magazines, articles, learning, and play created for children and families.", "Planned for later"],
  ["05", "FaithCine Studio", "A planned production arm for Christian film, audio, animation, and live programmes, including work with Gospel creators.", "Planned for later"],
] as const;

export default function ProductsPage() {
  return (
    <>
      <PageIntro eyebrow="The FaithCine product plan" title="Five parts of one Christian media mission.">
        <p>FaithCine Selah is the first product in active development. FaithCine Stories is at an earlier stage. Our later plans include Bible study, children&apos;s media, and Christian production.</p>
      </PageIntro>
      <section className="product-page-visual section-shell">
        <Image src="/media/family-screen.webp" alt="A mother and daughter watching a programme together at home" fill sizes="100vw" unoptimized />
        <div><p>Christian media planned for everyday viewing, personal study, and family conversation.</p></div>
      </section>
      <section className="section-shell editorial-split">
        <div><p className="section-number">The long-term vision</p><h2>A trusted home for Christian film and media.</h2></div>
        <div><p className="large-copy">FaithCine is building toward a streaming destination for excellent Christian movies, shorts, series, documentaries, animation, and children&apos;s programmes.</p><p>Our first stories and partnerships will naturally begin with Nigerian and African creators and audiences. The larger mission is to promote the Gospel through Christian content for people everywhere. Selah, research, and early story development come first.</p></div>
      </section>
      <section className="section-shell roadmap-list">
        {products.map(([number, name, body, status]) => (
          <article key={name}><span className="roadmap-number">{number}</span><div><h2>{name}</h2><p>{body}</p></div><span className="status-badge">{status}</span></article>
        ))}
      </section>
      <section className="section-shell narrow-cta"><p className="section-number">Build with us</p><h2>Receive product updates from the beginning.</h2><p>FaithCine is in early development. Join the list for product updates and future invitations to take part in research.</p><Link className="button button-primary" href="/#early-access">Join early access</Link></section>
    </>
  );
}
