import type { Metadata } from "next";
import Link from "next/link";
import { Flow } from "./components/Flow";
import { WaitlistForm } from "./components/WaitlistForm";

export const metadata: Metadata = {
  title: "FaithCine - Media and technology that point to Christ",
  description:
    "FaithCine creates Scripture-led media and technology experiences, beginning with Selah: a calm way to move from what you are facing into Scripture, prayer, meditation, and reflection.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="hero section-shell" aria-labelledby="home-title">
        <div className="hero-light" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Scripture-led media and technology</p>
          <h1 id="home-title">Media that points to Christ.</h1>
          <p className="hero-lede">
            We are building thoughtful digital experiences that help people
            encounter, understand, and remain with biblical truth - beginning
            with FaithCine Selah.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/selah">
              Explore Selah <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link className="button button-ghost" href="#early-access">
              Join early access
            </Link>
          </div>
          <p className="stage-note">
            <span className="status-dot" aria-hidden="true" /> Selah is currently
            in design and development.
          </p>
        </div>
        <div className="hero-flow" aria-label="How FaithCine Selah is designed">
          <div className="panel-kicker">
            <span>FaithCine Selah</span>
            <span>Concept 01</span>
          </div>
          <p className="panel-question">What are you going through right now?</p>
          <Flow compact />
        </div>
      </section>

      <section className="belief section-shell editorial-split">
        <div>
          <p className="section-number">01 / The belief</p>
          <h2>Make room to remain with the Word.</h2>
        </div>
        <div>
          <p className="large-copy">
            Life moves quickly. Scripture meditation often does not. FaithCine is
            exploring calmer, more intentional ways to help people move from what
            they are carrying into reading, listening, prayer, confession, and
            reflection.
          </p>
        </div>
      </section>

      <section className="selah-feature section-shell">
        <div className="section-heading">
          <p className="section-number">02 / The first product</p>
          <h2>Start with what you are going through.</h2>
          <p>
            Selah begins with a real moment, then guides you toward relevant
            Scripture and lets you choose how to engage.
          </p>
        </div>
        <Flow />
        <Link className="text-link" href="/selah">
          See how Selah is designed <span aria-hidden="true">&rarr;</span>
        </Link>
      </section>

      <section className="principles section-shell">
        <div className="section-heading compact-heading">
          <p className="section-number">03 / Our approach</p>
          <h2>Technology in service of truth.</h2>
        </div>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>Scripture first</h3>
            <p>Every experience should remain traceable to Scripture and its reference.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Designed for real life</h3>
            <p>Built for short moments, deeper sessions, mobile devices, and uneven connectivity.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Technology with humility</h3>
            <p>AI may assist behind the scenes, but it is never presented as God&apos;s voice.</p>
          </article>
        </div>
      </section>

      <section className="vision section-shell editorial-split">
        <div>
          <p className="section-number">04 / The wider vision</p>
          <h2>One vision. Thoughtful expressions.</h2>
        </div>
        <div>
          <p className="large-copy">
            FaithCine may grow across Scripture meditation, study, stories, music,
            and film. For now, our focus is clear: research, design, and build
            Selah well.
          </p>
          <div className="inline-links">
            <Link className="text-link" href="/products">View the product roadmap &rarr;</Link>
            <Link className="text-link" href="/stories">Discover FaithCine Stories &rarr;</Link>
          </div>
        </div>
      </section>

      <section id="early-access" className="conversion section-shell">
        <div>
          <p className="section-number">Early access</p>
          <h2>Help shape Selah.</h2>
          <p>Thoughtful product updates, research invitations, and beta opportunities.</p>
        </div>
        <WaitlistForm />
      </section>
    </>
  );
}
