import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WaitlistCta } from "../components/WaitlistCta";
import { articles } from "../lib/articles";

export const metadata: Metadata = {
  title: "FaithCine Journal | Scripture, faith, media and technology",
  description: "Read FaithCine articles on Scripture, Christian living, media culture, responsible technology, and the work behind our products.",
  alternates: { canonical: "/blog" },
};

function dateLabel(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const [featured, ...more] = articles;
  const pillars = [...new Set(articles.map((article) => article.pillar))];

  return (
    <>
      <section className="journal-hero section-shell">
        <p className="section-label">FaithCine Journal</p>
        <h1>Writing on Scripture, faith, media, and technology.</h1>
        <div className="journal-hero-foot">
          <p>The Journal examines Christian practice, media culture, responsible technology, and the decisions behind FaithCine.</p>
          <nav aria-label="Journal topics">{pillars.map((pillar) => <span key={pillar}>{pillar}</span>)}</nav>
        </div>
      </section>

      {featured && (
        <section className="featured-story section-shell">
          <Link className="featured-story-image" href={`/blog/${featured.slug}`}>
            <Image src={featured.image} alt={featured.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 58vw" />
          </Link>
          <div className="featured-story-copy">
            <p className="article-meta"><span>Featured</span><span>{featured.pillar}</span></p>
            <h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2>
            <p>{featured.description}</p>
            <p className="article-byline">By {featured.author} <span aria-hidden="true">|</span> <time dateTime={featured.publishedAt}>{dateLabel(featured.publishedAt)}</time></p>
            <Link className="button button-outline" href={`/blog/${featured.slug}`}>Read article</Link>
          </div>
        </section>
      )}

      <section className="journal-library section-shell" aria-labelledby="latest-stories">
        <div className="library-heading"><p className="section-label">Latest articles</p><h2 id="latest-stories">Read what is new.</h2></div>
        <div className="journal-card-grid">
          {more.map((article) => (
            <article key={article.slug}>
              <Link className="journal-card-image" href={`/blog/${article.slug}`}>
                <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 720px) 100vw, 50vw" />
              </Link>
              <p className="article-meta"><span>{article.pillar}</span><time dateTime={article.publishedAt}>{dateLabel(article.publishedAt)}</time></p>
              <h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2>
              <p>{article.description}</p>
              <Link className="text-link" href={`/blog/${article.slug}`}>Read article <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="editorial-standards section-shell"><div><p className="section-number">Editorial standards</p><h2>How we publish.</h2></div><p>Every article has a named author and publication date. Scripture quotations identify the translation. Research and technical claims include sources. If we make a substantial change after publication, the article will show an updated date.</p></section>
      <WaitlistCta title="Take part in Selah research." />
    </>
  );
}
