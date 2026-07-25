import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WaitlistCta } from "../../components/WaitlistCta";
import { articles, getArticle } from "../../lib/articles";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

function Markdown({ source }: { source: string }) {
  const blocks: React.ReactNode[] = [];
  const lines = source.split(/\r?\n/);
  let paragraph: string[] = [];
  let list: string[] = [];
  let orderedList: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push(<p key={`p-${blocks.length}`}>{paragraph.join(" ")}</p>);
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push(<ul key={`ul-${blocks.length}`}>{list.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ul>);
      list = [];
    }
    if (orderedList.length) {
      blocks.push(<ol key={`ol-${blocks.length}`}>{orderedList.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ol>);
      orderedList = [];
    }
  };

  for (const line of lines) {
    const image = line.match(/^!\[([^\]]*)\]\((\S+?)(?:\s+["']([^"']+)["'])?\)$/);
    if (image) {
      flushParagraph(); flushList();
      blocks.push(
        <figure className="article-figure" key={`image-${blocks.length}`}>
          <Image src={image[2]} alt={image[1]} width={1800} height={1100} sizes="(max-width: 900px) 100vw, 800px" />
          {image[3] && <figcaption>{image[3]}</figcaption>}
        </figure>,
      );
    } else if (line.startsWith("## ")) {
      flushParagraph(); flushList(); blocks.push(<h2 key={`h2-${blocks.length}`}>{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      flushParagraph(); flushList(); blocks.push(<h3 key={`h3-${blocks.length}`}>{line.slice(4)}</h3>);
    } else if (line.startsWith("> ")) {
      flushParagraph(); flushList(); blocks.push(<blockquote key={`quote-${blocks.length}`}>{line.slice(2)}</blockquote>);
    } else if (line.startsWith("- ")) {
      flushParagraph(); orderedList = []; list.push(line.slice(2));
    } else if (/^\d+\.\s/.test(line)) {
      flushParagraph(); list = []; orderedList.push(line.replace(/^\d+\.\s/, ""));
    } else if (!line.trim()) {
      flushParagraph(); flushList();
    } else {
      flushList(); paragraph.push(line.trim());
    }
  }
  flushParagraph(); flushList();
  return <>{blocks}</>;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: article.title,
    description: article.description, image: article.image, datePublished: article.publishedAt,
    dateModified: article.updatedAt, author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "FaithCine" },
    mainEntityOfPage: `https://faithcine.com/blog/${article.slug}`,
  };
  return (
    <>
      <article className="article-page section-shell">
        <Link className="back-link" href="/blog">← Back to Journal</Link>
        <header>
          <p className="eyebrow">{article.pillar}</p>
          <h1>{article.title}</h1>
          <p className="article-description">{article.description}</p>
          <p className="article-byline">By {article.author} <span aria-hidden="true">·</span> <time dateTime={article.publishedAt}>{new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}</time></p>
        </header>
        <figure className="article-cover"><Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 900px" /></figure>
        <div className="article-body"><Markdown source={article.body} /></div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </article>
      <WaitlistCta />
    </>
  );
}
