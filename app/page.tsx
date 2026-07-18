import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiBookOpen, FiFilm, FiHeadphones, FiUsers } from "react-icons/fi";
import { HomeHero } from "./components/HomeHero";
import { ScrollMotion } from "./components/ScrollMotion";
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
    label: "Films and visual stories",
    title: "FaithCine Stories",
    body: "Christian stories shaped by faith, honest choices and African life.",
    href: "/stories",
    image: "/media/camera-production.jpg",
    alt: "A filmmaker operating a cinema camera on set",
  },
  {
    label: "Guided Scripture",
    title: "FaithCine Selah",
    body: "A calmer path from a real moment into Scripture, prayer and reflection.",
    href: "/selah",
    image: "/media/selah-family-prayer.jpg",
    alt: "A mother and son praying together inside a church",
  },
  {
    label: "The wider vision",
    title: "FaithCine Products",
    body: "See the films, tools, learning resources and shared experiences taking shape.",
    href: "/products",
    image: "/media/family-screen.jpg",
    alt: "A mother and daughter watching a programme together at home",
  },
] as const;

const categories = [
  { icon: FiFilm, title: "Films and stories", body: "Faith-rooted stories made with African lives and audiences in view.", href: "/stories" },
  { icon: FiBookOpen, title: "Scripture and reflection", body: "Guided experiences that keep biblical text clear and traceable.", href: "/selah" },
  { icon: FiHeadphones, title: "Learning and conversations", body: "Useful writing, audio and teaching for everyday Christian practice.", href: "/blog" },
  { icon: FiUsers, title: "Community and live programmes", body: "Gatherings that make room to watch, learn, worship and respond together.", href: "/about" },
] as const;

const process = [
  ["01", "Listen first", "We begin with how people in African homes, churches and communities encounter faith and media."],
  ["02", "Shape the experience", "Writers, filmmakers, teachers and technologists turn a clear need into focused work."],
  ["03", "Learn with people", "Research and testing help us see what is useful, confusing or still unfinished."],
  ["04", "Share what serves", "We publish with clear sources, honest limits and a way for people to respond."],
] as const;

function dateLabel(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Home() {
  return (
    <>
      <ScrollMotion />
      <HomeHero />

      <section id="what-we-do" className="home-screen home-categories" aria-labelledby="categories-title">
        <div className="section-shell">
          <div className="home-heading" data-reveal="heading">
            <span className="home-section-index">01</span>
            <div>
              <p className="section-label">What FaithCine brings together</p>
              <h2 id="categories-title">Faith, carried through media people already use.</h2>
            </div>
            <p>One Christian media vision, expressed through stories, Scripture, learning and shared experience.</p>
          </div>
          <div className="home-category-grid">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  className="home-category-card"
                  href={category.href}
                  key={category.title}
                  data-reveal="card"
                  style={{ "--reveal-delay": `${80 + index * 70}ms` } as CSSProperties}
                >
                  <Icon aria-hidden="true" />
                  <h3>{category.title}</h3>
                  <p>{category.body}</p>
                  <FiArrowUpRight className="card-arrow" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-screen home-process" aria-labelledby="process-title">
        <div className="section-shell home-process-grid">
          <div className="home-process-copy" data-reveal="heading">
            <span className="home-section-index">02</span>
            <p className="section-label">How the work takes shape</p>
            <h2 id="process-title">Built here, with people in view.</h2>
            <p>FaithCine begins in Nigeria and works with African realities from the first idea onward.</p>
            <div className="home-process-steps">
              {process.map(([number, title, body]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div className="home-process-media" data-reveal="image" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <Image src="/media/process-fellowship.jpg" alt="Young adults singing and praying together in a home" fill sizes="(max-width: 980px) 100vw, 44vw" unoptimized />
          </div>
        </div>
      </section>

      <section className="home-screen home-experiences" aria-labelledby="experiences-title">
        <div className="section-shell">
          <div className="home-heading home-heading-compact" data-reveal="heading">
            <span className="home-section-index">03</span>
            <div><p className="section-label">Explore FaithCine</p><h2 id="experiences-title">Start where you are.</h2></div>
            <Link className="text-link" href="/products">See the full vision <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="home-experience-grid">
            {experiences.map((experience, index) => (
              <Link
                className="home-experience-card"
                href={experience.href}
                key={experience.title}
                data-reveal="card"
                style={{ "--reveal-delay": `${90 + index * 80}ms` } as CSSProperties}
              >
                <div className="home-experience-media">
                  <Image src={experience.image} alt={experience.alt} fill sizes="(max-width: 760px) 88vw, 33vw" unoptimized />
                </div>
                <div className="home-experience-copy">
                  <p>{experience.label}</p>
                  <h3>{experience.title}</h3>
                  <span>{experience.body}</span>
                  <FiArrowUpRight aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-screen home-journal" aria-labelledby="journal-title">
        <div className="section-shell">
          <div className="home-heading home-heading-compact" data-reveal="heading">
            <span className="home-section-index">04</span>
            <div><p className="section-label">FaithCine Journal</p><h2 id="journal-title">Ideas for faith in real life.</h2></div>
            <Link className="text-link" href="/blog">Visit the Journal <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="home-journal-grid">
            {articles.slice(0, 3).map((article, index) => (
              <article key={article.slug} data-reveal="card" style={{ "--reveal-delay": `${90 + index * 80}ms` } as CSSProperties}>
                <Link className="home-journal-image" href={`/blog/${article.slug}`}>
                  <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" unoptimized />
                </Link>
                <p className="article-meta"><span>{article.pillar}</span><time dateTime={article.publishedAt}>{dateLabel(article.publishedAt)}</time></p>
                <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
                <Link className="text-link" href={`/blog/${article.slug}`}>Read article <FiArrowUpRight aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="early-access" className="home-screen home-connect" aria-labelledby="connect-title">
        <div className="section-shell home-connect-shell">
          <div className="home-connect-visual" data-reveal="image">
            <Image src="/media/updates-studio.jpg" alt="A media creator recording in a studio" fill sizes="(max-width: 900px) 100vw, 50vw" unoptimized />
            <div className="home-connect-shade" aria-hidden="true" />
            <div className="home-connect-copy">
              <span className="home-section-index">05</span>
              <p className="section-label">Stay connected</p>
              <h2 id="connect-title">New stories. Honest updates. No noise.</h2>
              <p>Follow the films, tools, writing and programmes taking shape at FaithCine.</p>
            </div>
          </div>
          <div className="home-connect-form" data-reveal="card" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <p className="section-label">FaithCine updates</p>
            <h3>Keep in touch.</h3>
            <p>Receive occasional updates and invitations to take part in Selah research and testing.</p>
            <WaitlistForm />
            <p className="home-connect-email">Prefer email? <a href="mailto:info@faithcine.com">info@faithcine.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
