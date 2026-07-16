import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { WaitlistCta } from "../components/WaitlistCta";
import { articles } from "../lib/articles";

export const metadata: Metadata = { title: "FaithCine Journal - Scripture, faith and thoughtful technology", description: "Original FaithCine writing on Scripture practice, real life, and responsible technology.", alternates: { canonical: "/blog" } };
export default function BlogPage(){return <><PageIntro eyebrow="FaithCine Journal" title="Notes for a thoughtful faith."><p>Original writing on Scripture practice, life as it is lived, and the careful use of technology around biblical truth.</p></PageIntro><section className="section-shell article-index">{articles.map((article,index)=><article key={article.slug}><p className="article-meta"><span>{String(index+1).padStart(2,"0")}</span><span>{article.pillar}</span><time dateTime={article.publishedAt}>{new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString("en-NG",{day:"numeric",month:"long",year:"numeric"})}</time></p><h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2><p>{article.description}</p><Link className="text-link" href={`/blog/${article.slug}`}>Read article &rarr;</Link></article>)}</section><WaitlistCta /></>}
