import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaClapperboard, FaPeopleGroup, FaTowerBroadcast } from "react-icons/fa6";
import { SocialLinks } from "./components/SocialLinks";
import { WaitlistForm } from "./components/WaitlistForm";
import { articles } from "./lib/articles";

export const metadata: Metadata = {
  title: "FaithCine — Christ-centered media for a generation",
  description:
    "FaithCine is building a Gospel-centered media ecosystem of films, shows, live experiences, learning, and community—rooted in Africa and made for a wider world.",
  alternates: { canonical: "/" },
};

const experiences = [
  {
    number: "01",
    title: "Watch",
    kicker: "Films & series",
    body: "Compelling Christian stories, documentaries, and shows designed to entertain, inspire, and point people to Christ.",
    image: "/media/family-screen.jpg",
    alt: "A mother and daughter watching a screen together",
    Icon: FaClapperboard,
  },
  {
    number: "02",
    title: "Experience",
    kicker: "Live & worship",
    body: "Shared moments—from live programmes and worship to conversations and events that bring faith into view.",
    image: "/media/worship-crowd.jpg",
    alt: "People gathered in worship at a live event",
    Icon: FaTowerBroadcast,
  },
  {
    number: "03",
    title: "Grow",
    kicker: "Learning & devotion",
    body: "Scripture-led learning, devotionals, books, and interactive ideas that help young people engage faith deeply.",
    image: "/media/youth-community.jpg",
    alt: "Young people praying together",
    Icon: FaBookOpen,
  },
  {
    number: "04",
    title: "Belong",
    kicker: "Creators & community",
    body: "A welcoming space for families, churches, and a new generation of Christian storytellers to connect and create.",
    image: "/media/creator-podcast.jpg",
    alt: "A Black creator recording a podcast",
    Icon: FaPeopleGroup,
  },
] as const;

const products = [
  ["FaithCine Stories", "Original films, shows, documentaries, and visual stories", "In development"],
  ["FaithCine Selah", "A calm path from real life into Scripture and reflection", "In development"],
  ["FaithCine Study", "Focused biblical learning for everyday discipleship", "Exploring"],
  ["FaithCine Kids", "Safe, joyful faith experiences for younger audiences", "Long-term vision"],
  ["FaithCine Studio", "A home for creators and Christ-centered production", "Long-term vision"],
] as const;

export default function Home() {
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      <section className="brand-hero" aria-labelledby="home-title">
        <Image
          className="brand-hero-image"
          src="/media/camera-production.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          unoptimized
        />
        <div className="brand-hero-shade" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="brand-hero-inner section-shell">
          <p className="hero-overline"><span /> Christ-centered media from Africa</p>
          <h1 id="home-title">
            <span>Stories that</span>
            <strong><em>point to</em> <em>Christ.</em></strong>
          </h1>
          <p className="brand-hero-lede">
            FaithCine is building a new home for films, shows, live experiences,
            learning, and community—making the Gospel accessible, relevant, and
            compelling for a generation.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="#what-we-do">Discover FaithCine <span aria-hidden="true">↘</span></Link>
            <Link className="button button-glass" href="/blog">Read the Journal <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-foot">
            <SocialLinks className="hero-socials" />
            <a className="scroll-cue" href="#what-we-do"><span aria-hidden="true">↓</span> Scroll to explore</a>
            <p>Till Jesus be seen <span>·</span> Matthew 5:14–16</p>
          </div>
        </div>
      </section>

      <div className="motion-rail" aria-label="FaithCine areas of focus">
        <div>
          {["FILMS", "STORIES", "LIVE", "LEARNING", "COMMUNITY", "CREATORS", "FAMILIES", "FAITH", "FILMS", "STORIES", "LIVE", "LEARNING"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<b aria-hidden="true">✦</b></span>
          ))}
        </div>
      </div>

      <section id="what-we-do" className="brand-intro section-shell">
        <div className="brand-intro-heading">
          <p className="section-label">01 / This is FaithCine</p>
          <h2>Media can do more than fill a screen.</h2>
        </div>
        <div className="brand-intro-copy">
          <p className="statement-copy">It can make truth visible, create conversation, strengthen families, and help a generation see Jesus.</p>
          <p>FaithCine is a faith-driven digital media vision born in Nigeria. We are developing high-quality Christian entertainment, education, and community experiences that meet young people and families where they already are—on the screens they use every day.</p>
          <Link className="arrow-link" href="/about">Our mission and values <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="image-manifesto" aria-label="FaithCine production vision">
        <Image src="/media/camera-production.jpg" alt="A filmmaker operating a professional cinema camera" fill sizes="100vw" unoptimized />
        <div className="image-manifesto-overlay" />
        <div className="image-manifesto-copy section-shell">
          <span className="manifesto-index">/ 001</span>
          <blockquote>“To glorify God and enrich lives by connecting people to compelling Christ-centered content and community—anytime, anywhere.”</blockquote>
          <p>Our mission</p>
        </div>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="section-shell section-title-row">
          <div><p className="section-label">02 / The experience</p><h2 id="experience-title">Watch. Experience. Grow. Belong.</h2></div>
          <p>One connected media ecosystem, designed around real life and rooted in biblical truth.</p>
        </div>
        <div className="experience-grid">
          {experiences.map(({ number, title, kicker, body, image, alt, Icon }) => (
            <article className="experience-card" key={title}>
              <Image src={image} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" unoptimized />
              <div className="experience-card-shade" />
              <div className="experience-card-top"><span>{number}</span><Icon aria-hidden="true" /></div>
              <div className="experience-card-copy"><p>{kicker}</p><h3>{title}</h3><span>{body}</span></div>
            </article>
          ))}
        </div>
        <p className="development-note section-shell">FaithCine is in development. These are the experiences we are building toward, not claims of features already launched.</p>
      </section>

      <section className="product-universe section-shell" aria-labelledby="products-title">
        <div className="product-universe-heading">
          <p className="section-label">03 / The universe</p>
          <h2 id="products-title">One purpose.<br />Many expressions.</h2>
          <p>FaithCine is the brand. Selah is one product within a wider vision spanning story, learning, family, and creative production.</p>
          <Link className="button button-outline" href="/products">Explore all products <span aria-hidden="true">→</span></Link>
        </div>
        <div className="product-stack">
          {products.map(([name, body, status], index) => (
            <article key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{name}</h3><p>{body}</p></div>
              <em>{status}</em>
            </article>
          ))}
        </div>
      </section>

      <section className="africa-section">
        <div className="africa-media">
          <Image src="/media/creator-podcast.jpg" alt="A Black media creator recording in a studio" fill sizes="(max-width: 900px) 100vw, 50vw" unoptimized />
        </div>
        <div className="africa-copy">
          <p className="section-label">04 / African-rooted. Globally relevant.</p>
          <h2>Created close to the culture.</h2>
          <p className="statement-copy">The next generation deserves Christian media that understands its voice, imagination, questions, and world.</p>
          <p>We begin with Nigerian and African realities—culture, bandwidth, family, language, and community—while building stories and experiences that can travel far beyond them.</p>
          <div className="value-pills"><span>Faith first</span><span>Excellent</span><span>Culturally relevant</span><span>Accessible</span><span>Innovative</span></div>
        </div>
      </section>

      <section className="latest-journal section-shell" aria-labelledby="journal-title">
        <div className="section-title-row">
          <div><p className="section-label">05 / FaithCine Journal</p><h2 id="journal-title">Ideas worth carrying.</h2></div>
          <div><p>Stories, reflections, media insight, and practical faith for life as it is lived.</p><Link className="arrow-link" href="/blog">Visit the Journal <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="journal-preview-grid">
          {latestArticles.map((article) => (
            <article key={article.slug}>
              <Link className="journal-preview-image" href={`/blog/${article.slug}`}>
                <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 750px) 100vw, 33vw" unoptimized />
              </Link>
              <p className="article-meta"><span>{article.pillar}</span><time dateTime={article.publishedAt}>{new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })}</time></p>
              <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
              <p>{article.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="social-callout">
        <Image src="/media/worship-crowd.jpg" alt="People gathered for a live worship experience" fill sizes="100vw" unoptimized />
        <div className="social-callout-shade" />
        <div className="social-callout-inner section-shell">
          <p className="section-label">Join the movement</p>
          <h2>Follow the story as it unfolds.</h2>
          <p>New ideas, films, conversations, and moments of faith—shared where you already spend your time.</p>
          <SocialLinks className="social-callout-links" />
          <p className="social-handle">@faithcine_official</p>
        </div>
      </section>

      <section id="early-access" className="conversion conversion-brand section-shell">
        <div><p className="section-label">Stay close</p><h2>Help shape what comes next.</h2><p>Occasional updates, research invitations, and opportunities to be part of FaithCine’s development.</p></div>
        <WaitlistForm />
      </section>
    </>
  );
}
