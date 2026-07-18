"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { src: "/media/camera-production.jpg", alt: "A filmmaker operating a cinema camera on set" },
  { src: "/media/worship-crowd.jpg", alt: "People gathered for a Christian worship service" },
  { src: "/media/family-screen.jpg", alt: "A mother and daughter watching a programme together at home" },
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
      6500,
    );
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <section className="brand-hero home-screen" aria-labelledby="home-title">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            className={index === activeSlide ? "hero-slide is-active" : "hero-slide"}
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
      <div className="brand-hero-inner section-shell" data-reveal>
        <p className="hero-overline">Christian media and technology from Nigeria</p>
        <h1 id="home-title">Stories and experiences that help people see Jesus.</h1>
        <p className="brand-hero-lede">
          FaithCine creates films, Scripture tools, learning and live programmes for Africa and the wider world.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="#what-we-do">Explore FaithCine</Link>
        </div>
      </div>
      <div className="hero-carousel-controls section-shell">
        <div className="hero-dots" role="group" aria-label="Choose hero background">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={index === activeSlide ? "hero-dot is-active" : "hero-dot"}
              aria-label={`Show image ${index + 1}: ${slide.alt}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
        {!reducedMotion && (
          <button className="hero-pause" type="button" onClick={() => setPaused((value) => !value)}>
            {paused ? "Play images" : "Pause images"}
          </button>
        )}
      </div>
    </section>
  );
}
