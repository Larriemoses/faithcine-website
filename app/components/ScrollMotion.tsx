"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    root.classList.add("motion-ready");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px 10%" },
    );

    items.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const progress = range > 0 ? Math.min(window.scrollY / range, 1) : 0;
      root.style.setProperty("--scroll-progress", `${progress * 100}%`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
