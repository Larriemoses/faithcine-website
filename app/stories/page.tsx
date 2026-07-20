import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "../components/PageIntro";
import { WaitlistCta } from "../components/WaitlistCta";

export const metadata: Metadata = {
  title: "FaithCine Stories | Christian films, shorts and documentaries",
  description: "FaithCine Stories is developing Gospel-centred Christian films, shorts, series, documentaries, and animation for audiences everywhere.",
  alternates: { canonical: "/stories" },
};

const principles = [
  ["01", "Biblical truth", "Stories should remain faithful to Christian belief without turning every scene into a sermon."],
  ["02", "Human honesty", "Characters should face believable decisions, weaknesses, consequences, growth, and hope."],
  ["03", "Begin close to home", "Our first work can draw from Nigerian and African lives, places, and languages while serving Christian audiences everywhere."],
  ["04", "Careful craft", "Writing, acting, sound, cinematography, and editing should receive the attention expected from serious media."],
] as const;

export default function StoriesPage() {
  return <>
    <PageIntro eyebrow="FaithCine Stories" title="Stories that show how faith is lived." status="Coming soon"><p>FaithCine Stories will develop Christian films, shorts, series, documentaries, animation, and visual stories that share biblical hope and show how faith is lived. Editorial and production work is still at an early stage.</p></PageIntro>
    <section className="product-page-visual section-shell"><Image src="/media/camera-production.webp" alt="A filmmaker working with a cinema camera" fill sizes="100vw" unoptimized /><div><p>Christian films and stories created to serve the Gospel.</p></div></section>
    <section className="section-shell values-section"><div className="section-heading"><p className="section-number">The principles behind the stories</p><h2>Truthful stories made with care.</h2></div><div className="values-grid values-grid-four">{principles.map(([number, title, body]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <WaitlistCta title="Follow the first FaithCine Stories projects." />
  </>;
}
