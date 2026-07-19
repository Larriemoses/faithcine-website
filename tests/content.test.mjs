import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const routes = ["app/page.tsx", "app/selah/page.tsx", "app/products/page.tsx", "app/stories/page.tsx", "app/blog/page.tsx", "app/about/page.tsx", "app/contact/page.tsx", "app/privacy/page.tsx", "app/terms/page.tsx", "app/accessibility/page.tsx"];
const articles = ["what-scripture-meditation-is", "bring-anxiety-to-scripture", "responsible-technology-and-faith"];

test("all launch routes exist", () => {
  for (const route of routes) assert.ok(existsSync(route), `${route} should exist`);
});

test("contact is a primary navigation destination", () => {
  const header = readFileSync("app/components/Header.tsx", "utf8");
  const about = readFileSync("app/about/page.tsx", "utf8");
  assert.match(header, /\["Contact us", "\/contact"\]/);
  assert.doesNotMatch(about, /href="\/contact"|Work with us/);
});

test("homepage hero keeps the study image and uses localized photography", () => {
  const hero = readFileSync("app/components/HomeHero.tsx", "utf8");
  assert.match(hero, /hero-bible-study\.jpg/);
  assert.match(hero, /hero-scripture-witness\.jpg/);
  assert.match(hero, /hero-cinema-production\.jpg/);
  assert.doesNotMatch(hero, /hero-scripture-nigeria\.jpg|hero-nigerian-filmmaker\.jpg/);
});

test("three publishable articles have required front matter", () => {
  for (const slug of articles) {
    const source = readFileSync(`content/blog/${slug}.md`, "utf8");
    for (const field of ["title", "description", "slug", "author", "publishedAt", "updatedAt", "pillar", "image", "imageAlt", "draft"]) {
      assert.match(source, new RegExp(`^${field}:`, "m"), `${slug} needs ${field}`);
    }
    assert.match(source, /^draft: false$/m);
  }
});

test("product language remains pre-launch", () => {
  const copy = routes.map((route) => readFileSync(route, "utf8")).join("\n");
  assert.doesNotMatch(copy, /millions impacted|download now|available today/i);
  assert.match(copy, /design and development/i);
});

test("brand system stays locked to Inter and FaithCine blue", () => {
  const css = readFileSync("app/globals.css", "utf8");
  const layout = readFileSync("app/layout.tsx", "utf8");
  assert.match(css, /--brand-blue:\s*#0f62fe/i);
  assert.match(css, /--font:.*Inter Variable/i);
  assert.match(layout, /@fontsource-variable\/inter/);
  assert.doesNotMatch(css, /#8d5cff|#ff5ea8|#d8ff62|brand-pink|brand-violet|brand-lime/i);
});

test("marketing pages avoid em dashes", () => {
  const copy = routes.map((route) => readFileSync(route, "utf8")).join("\n");
  assert.doesNotMatch(copy, /\u2014/);
});

test("homepage stays focused and screen based", () => {
  const home = readFileSync("app/page.tsx", "utf8");
  const css = readFileSync("app/globals.css", "utf8");
  assert.equal((home.match(/className="[^"]*home-screen/g) ?? []).length, 5);
  assert.doesNotMatch(home, /experience-section|product-universe|latest-journal|motion-rail/);
  assert.match(css, /\.home-screen\s*\{[^}]*min-height:\s*0/s);
  assert.doesNotMatch(css, /\.home-screen:not\(\.brand-hero\)\s*\{[^}]*height:\s*calc\(100svh/s);
  assert.match(css, /\.brand-hero,\s*\.brand-hero\.home-screen,\s*\.brand-hero \.hero-stage\s*\{[^}]*height:\s*calc\(100svh\s*-\s*4\.75rem\)/s);
  assert.match(css, /\.brand-hero h1\s*\{[^}]*4\.8rem/s);
  assert.match(css, /\.brand-hero h1\s*\{[^}]*3\.25rem/s);
});

test("homepage includes lightweight scroll interaction", () => {
  const home = readFileSync("app/page.tsx", "utf8");
  const motion = readFileSync("app/components/ScrollMotion.tsx", "utf8");
  const css = readFileSync("app/globals.css", "utf8");
  assert.match(home, /<ScrollMotion \/>/);
  assert.match(motion, /IntersectionObserver/);
  assert.match(motion, /requestAnimationFrame/);
  assert.match(motion, /prefers-reduced-motion/);
  assert.match(css, /\.motion-ready \[data-reveal="heading"\][\s\S]*?\{[^}]*opacity:\s*1/);
  assert.match(css, /@keyframes fc-heading-reveal/);
});
