import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "../components/PageIntro";
import { WaitlistCta } from "../components/WaitlistCta";

export const metadata: Metadata = {
  title: "FaithCine Stories | Christian films and stories from Africa",
  description: "FaithCine Stories is developing Christian films, series, documentaries, and animation rooted in faith and African life.",
  alternates: { canonical: "/stories" },
};

const principles = [
  ["01", "Biblical truth", "Stories should remain faithful to Christian belief without turning every scene into a sermon."],
  ["02", "Human honesty", "Characters should face believable decisions, weaknesses, consequences, growth, and hope."],
  ["03", "African perspective", "African voices, places, languages, and experiences should be part of the story rather than decoration."],
  ["04", "Careful craft", "Writing, acting, sound, cinematography, and editing should receive the attention expected from serious media."],
] as const;

export default function StoriesPage() {
  return <>
    <PageIntro eyebrow="FaithCine Stories" title="Stories that show how faith is lived." status="Coming soon"><p>FaithCine Stories will develop films, series, documentaries, animation, and visual stories about faith, hope, struggle, restoration, family, and everyday choices. Editorial and production work is still at an early stage.</p></PageIntro>
    <section className="product-page-visual section-shell"><Image src="/media/camera-production.webp" alt="A filmmaker working with a cinema camera" fill sizes="100vw" unoptimized /><div><p>Christian stories rooted in faith and African life.</p></div></section>
    <section className="section-shell values-section"><div className="section-heading"><p className="section-number">The principles behind the stories</p><h2>Truthful stories made with care.</h2></div><div className="values-grid values-grid-four">{principles.map(([number, title, body]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <WaitlistCta title="Follow the first FaithCine Stories projects." />
  </>;
}
