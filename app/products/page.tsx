import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = { title: "FaithCine Products - Selah, Stories and the wider vision", description: "Explore the focused FaithCine product roadmap, beginning with FaithCine Selah.", alternates: { canonical: "/products" } };
const products = [
  ["01", "FaithCine Selah", "A Scripture-led meditation experience for study, prayer, listening, confession, declaration, and reflection.", "In development"],
  ["02", "FaithCine Stories", "Original stories and visual narratives exploring faith, hope, transformation, and the human journey.", "Coming soon"],
  ["03", "FaithCine Study", "A future space for focused Scripture study and connected learning tools.", "Exploring"],
  ["04", "FaithCine Studio", "A future home for film, audio, and visual productions that point to Christ.", "Long-term vision"],
];
export default function ProductsPage() { return <><PageIntro eyebrow="The product roadmap" title="Products shaped by one mission."><p>FaithCine is exploring how Scripture, story, sound, and thoughtful technology can help people encounter biblical truth. Our immediate focus is Selah; the wider roadmap will grow carefully.</p></PageIntro><section className="section-shell roadmap-list">{products.map(([number,name,body,status])=><article key={name}><span className="roadmap-number">{number}</span><div><h2>{name}</h2><p>{body}</p></div><span className="status-badge">{status}</span></article>)}</section><section className="section-shell narrow-cta"><p className="section-number">Our focus now</p><h2>Build Selah well.</h2><Link className="button button-primary" href="/selah">Explore Selah &rarr;</Link></section></>; }
