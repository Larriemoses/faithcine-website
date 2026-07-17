import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaClapperboard, FaPeopleGroup, FaTowerBroadcast } from "react-icons/fa6";
import { WaitlistForm } from "./components/WaitlistForm";
import { articles } from "./lib/articles";

export const metadata: Metadata = {
  title: { absolute: "FaithCine | Christian media from Nigeria for Africa" },
  description:
    "FaithCine develops Christian films, guided Scripture tools, learning resources, and live programmes from Nigeria for audiences across Africa.",
  alternates: { canonical: "/" },
};

const experiences = [
  {
    number: "01",
    title: "Films and stories",
    label: "Christian films and stories",
    body: "Christian films, series, and documentaries that tell honest stories and bring biblical truth into everyday decisions.",
    image: "/media/family-screen.jpg",
    alt: "A mother and daughter watching a programme together at home",
    Icon: FaClapperboard,
  },
  {
    number: "02",
    title: "Live programmes",
    label: "Shared gatherings",
    body: "Worship, conversations, premieres, and events where people can encounter Christian media together, online or in person.",
    image: "/media/worship-crowd.jpg",
    alt: "People gathered for a live Christian worship event",
    Icon: FaTowerBroadcast,
  },
  {
    number: "03",
    title: "Learning and devotion",
    label: "Scripture and daily life",
    body: "Articles, devotionals, and future study tools that help people understand Scripture and apply it to daily decisions.",
    image: "/media/youth-community.jpg",
    alt: "Young adults praying together during a church gathering",
    Icon: FaBookOpen,
  },
  {
    number: "04",
    title: "Creators and community",
    label: "Building together",
    body: "Planned ways for Christian creators, churches, families, and audiences to meet, learn, and support new Christian media.",
    image: "/media/creator-podcast.jpg",
    alt: "A Nigerian media creator recording a podcast in a studio",
    Icon: FaPeopleGroup,
  },
] as const;

const products = [
  ["FaithCine Selah", "A guided Scripture product for reading, listening, prayer, and reflection", "In design and development"],
  ["FaithCine Stories", "Films, series, documentaries, and visual stories about faith and everyday choices", "In early development"],
  ["FaithCine Study", "Planned Bible study resources for deeper learning and practical discipleship", "Exploring"],
  ["FaithCine Kids", "Planned stories, animation, learning, and play for children", "Planned for later"],
  ["FaithCine Studio", "Planned production work across film, audio, and live programmes", "Planned for later"],
] as const;

export default function Home() {
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      <section className="brand-hero" aria-labelledby="home-title">
        <Image className="brand-hero-image" src="/media/camera-production.jpg" alt="" fill sizes="100vw" priority unoptimized />
        <div className="brand-hero-shade" aria-hidden="true" />
        <div className="brand-hero-inner section-shell">
          <p className="hero-overline">Christian media and technology from Africa</p>
          <h1 id="home-title">Stories and Scripture tools <strong>that point people to Christ.</strong></h1>
          <p className="brand-hero-lede">
            FaithCine is developing films, guided Scripture tools, learning resources, and live programmes for young people and families. Our work begins in Nigeria and serves audiences across Africa and beyond.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#what-we-do">See our work</Link>
            <Link className="button button-ghost-dark" href="/blog">Read the Journal</Link>
          </div>
        </div>
      </section>

      <div className="motion-rail" aria-label="FaithCine areas of focus">
        <div>
          {["FILMS", "SERIES", "LIVE", "LEARNING", "COMMUNITY", "CREATORS", "FAMILIES", "FAITH", "FILMS", "SERIES", "LIVE", "LEARNING"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<b aria-hidden="true">+</b></span>
          ))}
        </div>
      </div>

      <section id="what-we-do" className="what-we-do section-shell">
        <div className="what-we-do-media">
          <Image src="/media/camera-production.jpg" alt="A Nigerian filmmaker operating a cinema camera on set" fill sizes="(max-width: 900px) 100vw, 50vw" unoptimized />
        </div>
        <div className="what-we-do-copy">
          <span className="section-index">01</span>
          <p className="section-label">What we do</p>
          <h2>The stories people watch influence how they understand faith and life.</h2>
          <p className="section-lede">Young people meet ideas about identity, relationships, success, and faith through films, music, social media, and online conversations every day. FaithCine is adding Christian stories and work led by Scripture to those conversations, with biblical truth, strong craft, and an understanding of daily life.</p>
          <p>FaithCine began in Nigeria as a Christian media and technology company. Our work brings together original stories, Scripture reflection, learning, live programmes, and tools that move people from watching to prayer, thought, and conversation.</p>
          <div className="mission-brief"><span>Our mission</span><p>To glorify God through media, technology, and community work that helps people see Christ, understand biblical truth, and live it out each day.</p></div>
          <Link className="text-link" href="/about">Read our mission and values <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="section-shell section-heading-row">
          <span className="section-index">02</span>
          <div><p className="section-label">Media, Scripture, learning and community</p><h2 id="experience-title">Films, Scripture, learning, and shared gatherings in one Christian media vision.</h2></div>
          <p>FaithCine brings together several ways people engage with Christian truth: stories, Scripture, learning, conversation, and shared gatherings.</p>
        </div>
        <div className="experience-grid section-shell">
          {experiences.map(({ number, title, label, body, image, alt, Icon }) => (
            <article className="experience-card" key={title}>
              <div className="experience-card-media">
                <Image src={image} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" unoptimized />
                <span>{number}</span>
              </div>
              <div className="experience-card-copy">
                <div><Icon aria-hidden="true" /><p>{label}</p></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="product-universe section-shell" aria-labelledby="products-title">
        <div className="product-universe-heading">
          <span className="section-index">03</span>
          <p className="section-label">FaithCine products</p>
          <h2 id="products-title">Each product serves a different part of the mission.</h2>
          <p>FaithCine Selah is our first product and the work receiving the most attention now. FaithCine Stories is also in early development, while the remaining products are planned for later.</p>
          <Link className="button button-outline" href="/products">View the product plan</Link>
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

      <section className="purpose-section" aria-labelledby="purpose-title">
        <Image src="/media/worship-crowd.jpg" alt="People gathered in worship" fill sizes="100vw" unoptimized />
        <div className="purpose-shade" />
        <div className="purpose-inner section-shell">
          <span className="section-index">04</span>
          <p className="section-label">Made in Nigeria</p>
          <h2 id="purpose-title">Our starting point is Nigeria.</h2>
          <div className="purpose-grid">
            <article><span>Designed here</span><p>FaithCine begins with the stories, languages, devices, data costs, family life, and expressions of faith that are familiar in Nigeria and other African communities.</p></article>
            <article><span>Made to travel</span><p>These considerations inform our research, writing, design, and production from the beginning. The work should feel at home here and remain understandable to Christians elsewhere.</p></article>
          </div>
        </div>
      </section>

      <section className="latest-journal section-shell" aria-labelledby="journal-title">
        <div className="section-heading-row">
          <span className="section-index">05</span>
          <div><p className="section-label">FaithCine Journal</p><h2 id="journal-title">Read the research and thinking behind FaithCine.</h2></div>
          <div><p>The Journal publishes writing on Scripture and daily life, Christian storytelling, media culture, and the decisions involved in developing technology around the Word.</p><Link className="text-link" href="/blog">Visit the Journal <span aria-hidden="true">→</span></Link></div>
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

      <section id="early-access" className="conversion conversion-brand section-shell">
        <div><p className="section-label">FaithCine Selah early access</p><h2>Follow Selah from research to beta.</h2><p>Join the early access list for product updates. We may also invite you to research sessions and future beta testing.</p></div>
        <WaitlistForm />
      </section>
    </>
  );
}
