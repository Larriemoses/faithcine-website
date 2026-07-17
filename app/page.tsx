import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "./components/WaitlistForm";
import { ScrollMotion } from "./components/ScrollMotion";

export const metadata: Metadata = {
  title: { absolute: "FaithCine | Christian media from Nigeria for Africa" },
  description:
    "FaithCine develops Christian films, guided Scripture tools, learning resources, and live programmes from Nigeria for audiences across Africa.",
  alternates: { canonical: "/" },
};

const paths = [
  {
    number: "01",
    label: "Guided Scripture",
    title: "FaithCine Selah",
    body: "Bring a real moment to Scripture through reading, prayer, listening, and reflection.",
    href: "/selah",
    link: "Explore Selah",
    image: "/media/youth-community.jpg",
    alt: "Young adults praying together during a church gathering",
  },
  {
    number: "02",
    label: "Films and visual stories",
    title: "FaithCine Stories",
    body: "Christian stories rooted in faith, honest choices, and African life.",
    href: "/stories",
    link: "Explore Stories",
    image: "/media/camera-production.jpg",
    alt: "A Nigerian filmmaker operating a cinema camera on set",
  },
  {
    number: "03",
    label: "Ideas and practice",
    title: "FaithCine Journal",
    body: "Writing on Scripture, daily faith, media culture, and responsible technology.",
    href: "/blog",
    link: "Read the Journal",
    image: "/media/creator-podcast.jpg",
    alt: "A Nigerian media creator recording in a studio",
  },
] as const;

export default function Home() {
  return (
    <>
      <ScrollMotion />

      <section className="brand-hero home-screen" aria-labelledby="home-title">
        <Image className="brand-hero-image" src="/media/camera-production.jpg" alt="" fill sizes="100vw" priority unoptimized />
        <div className="brand-hero-shade" aria-hidden="true" />
        <div className="brand-hero-inner section-shell" data-reveal>
          <p className="hero-overline">Christian media and technology from Africa</p>
          <h1 id="home-title">Stories that <strong>point people to Christ.</strong></h1>
          <p className="brand-hero-lede">FaithCine develops Christian films, Scripture tools, learning, and live experiences from Nigeria for Africa and beyond.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#what-we-do">Discover FaithCine</Link>
            <Link className="button button-ghost-dark" href="/products">View our products</Link>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="home-screen home-intro section-shell">
        <div className="home-intro-media" data-reveal>
          <Image src="/media/family-screen.jpg" alt="A mother and daughter watching a programme together at home" fill sizes="(max-width: 900px) 100vw, 52vw" unoptimized />
        </div>
        <div className="home-intro-copy" data-reveal style={{ "--reveal-delay": "100ms" } as CSSProperties}>
          <p className="section-label">01 / What FaithCine is</p>
          <h2>Christian media shaped by Scripture and everyday life.</h2>
          <p>We bring stories, guided Scripture, learning, and shared experiences into one growing media vision.</p>
          <Link className="text-link" href="/about">Why FaithCine exists <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="home-screen home-paths" aria-labelledby="paths-title">
        <div className="section-shell">
          <div className="home-section-heading" data-reveal>
            <div><p className="section-label">02 / Explore FaithCine</p><h2 id="paths-title">Choose where to begin.</h2></div>
            <Link className="text-link" href="/products">See the full product plan <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-path-grid">
            {paths.map((path, index) => (
              <Link
                className="home-path-card"
                href={path.href}
                key={path.title}
                data-reveal
                style={{ "--reveal-delay": `${100 + index * 90}ms` } as CSSProperties}
              >
                <Image src={path.image} alt={path.alt} fill sizes="(max-width: 760px) 82vw, 33vw" unoptimized />
                <div className="home-path-shade" aria-hidden="true" />
                <div className="home-path-copy">
                  <span>{path.number}</span>
                  <p>{path.label}</p>
                  <h3>{path.title}</h3>
                  <div className="home-path-detail"><p>{path.body}</p><strong>{path.link} <span aria-hidden="true">→</span></strong></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-screen home-origin" aria-labelledby="origin-title">
        <Image src="/media/worship-crowd.jpg" alt="People gathered for a Christian worship service" fill sizes="100vw" unoptimized />
        <div className="home-origin-shade" aria-hidden="true" />
        <div className="home-origin-copy section-shell" data-reveal>
          <p className="section-label">03 / Made in Nigeria</p>
          <h2 id="origin-title">Made here. Ready to serve beyond here.</h2>
          <p>Our work begins with African stories, cultures, devices, families, and expressions of faith.</p>
          <Link className="button button-ghost-dark" href="/about">Read about FaithCine</Link>
        </div>
      </section>

      <section id="early-access" className="home-screen home-conversion section-shell">
        <div data-reveal>
          <p className="section-label">04 / FaithCine Selah early access</p>
          <h2>Follow Selah from research to beta.</h2>
          <p>Receive product updates and occasional invitations to help us test what we are building.</p>
        </div>
        <div data-reveal style={{ "--reveal-delay": "120ms" } as CSSProperties}><WaitlistForm /></div>
      </section>
    </>
  );
}
