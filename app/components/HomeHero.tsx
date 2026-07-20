"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiPause, FiPlay } from "react-icons/fi";

const slides = [
  {
    src: "/media/hero-bible-study.webp",
    alt: "Three Nigerian women reading and discussing the Bible together",
    verse: "Ye are the light of the world.",
    reference: "Matthew 5:14",
    chapter: "Light",
  },
  {
    src: "/media/hero-child-bible-study.webp",
    alt: "A child reading an open Bible during a study session",
    verse: "Thou shalt teach them diligently unto thy children.",
    reference: "Deuteronomy 6:7",
    chapter: "Teach",
  },
  {
    src: "/media/hero-cinema-production.webp",
    alt: "A cinematographer operating an ARRI cinema camera on a professional set",
    verse: "Declare his glory among the nations.",
    reference: "Psalm 96:3",
    chapter: "Story",
  },
] as const;

export function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      7200,
    );
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const active = slides[activeSlide];

  return (
    <section
      className={paused ? "brand-hero home-screen is-paused" : "brand-hero home-screen"}
      aria-labelledby="home-title"
    >
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            className={`${index === activeSlide ? "hero-slide is-active" : "hero-slide"} hero-slide-${slide.chapter.toLowerCase()}`}
            src={slide.src}
            alt=""
            fill
            sizes="100vw"
            priority={index === 0}
            unoptimized
          />
        ))}
      </div>
      <div className="brand-hero-shade" aria-hidden="true" />
      <div className="hero-light-sweep" aria-hidden="true" />

      <div className="hero-stage section-shell">
        <div className="brand-hero-inner" data-reveal="heading">
          <p className="hero-overline"><span>FaithCine</span> Christian media for every screen</p>
          <h1 id="home-title">Stories and experiences that help people see Jesus.</h1>
          <p className="brand-hero-lede">
            Christian films, Scripture tools, children&apos;s media and live experiences created to help people see Jesus.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#what-we-do">Explore FaithCine</Link>
          </div>
        </div>

        <aside className="hero-scripture-card" aria-label={`Scripture focus: ${active.reference}`}>
          <div className="hero-scripture-top">
            <span>Scripture in focus</span>
            <strong>0{activeSlide + 1}</strong>
          </div>
          <blockquote key={active.reference}>{active.verse}</blockquote>
          <p>{active.reference} <span>KJV</span></p>
        </aside>

        <div className="hero-carousel-controls">
          <div className="hero-chapters" role="group" aria-label="Choose a Scripture chapter">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={index === activeSlide ? "hero-chapter is-active" : "hero-chapter"}
                aria-label={`Show ${slide.chapter}: ${slide.reference}`}
                aria-pressed={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              >
                <span>0{index + 1}</span>
                <strong>{slide.chapter}</strong>
                <i aria-hidden="true" />
              </button>
            ))}
          </div>
          {!reducedMotion && (
            <button className="hero-pause" type="button" onClick={() => setPaused((value) => !value)}>
              {paused ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
              <span>{paused ? "Play" : "Pause"}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
