import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const routes = ["app/page.tsx", "app/selah/page.tsx", "app/products/page.tsx", "app/stories/page.tsx", "app/blog/page.tsx", "app/about/page.tsx", "app/partners/page.tsx", "app/contact/page.tsx", "app/privacy/page.tsx", "app/terms/page.tsx", "app/accessibility/page.tsx"];
const articles = ["what-scripture-meditation-is", "bring-anxiety-to-scripture", "responsible-technology-and-faith", "when-you-do-not-feel-like-praying", "what-makes-a-christian-story-christian"];

test("all launch routes exist", () => {
  for (const route of routes) assert.ok(existsSync(route), `${route} should exist`);
});

test("home and contact are primary navigation destinations", () => {
  const header = readFileSync("app/components/Header.tsx", "utf8");
  const about = readFileSync("app/about/page.tsx", "utf8");
  assert.match(header, /\["Home", "\/"\]/);
  assert.match(header, /\["Contact us", "\/contact"\]/);
  assert.doesNotMatch(about, /href="\/contact"|Work with us/);
});

test("social links stay in the footer and mission copy uses the compact layout", () => {
  const header = readFileSync("app/components/Header.tsx", "utf8");
  const footer = readFileSync("app/components/Footer.tsx", "utf8");
  const about = readFileSync("app/about/page.tsx", "utf8");
  const css = readFileSync("app/globals.css", "utf8");
  assert.doesNotMatch(header, /SocialLinks/);
  assert.match(footer, /<SocialLinks/);
  assert.match(about, /className="section-shell mission-vision"/);
  assert.doesNotMatch(about, /mission-grid/);
  assert.match(css, /\.mission-vision-list article/);
});

test("homepage hero keeps the study image and uses localized photography", () => {
  const hero = readFileSync("app/components/HomeHero.tsx", "utf8");
  assert.match(hero, /hero-bible-study\.webp/);
  assert.match(hero, /hero-child-bible-study\.webp/);
  assert.match(hero, /hero-cinema-production\.webp/);
  assert.match(hero, /Deuteronomy 6:7/);
  assert.doesNotMatch(hero, /hero-scripture-nigeria\.jpg|hero-nigerian-filmmaker\.jpg/);
});

test("launch metadata, icons, security headers and reviewer route are present", () => {
  const layout = readFileSync("app/layout.tsx", "utf8");
  const sitemap = readFileSync("app/sitemap.ts", "utf8");
  const worker = readFileSync("worker/index.ts", "utf8");
  assert.match(layout, /metadataBase:\s*new URL\("https:\/\/faithcine\.com"\)/);
  assert.match(layout, /\/icon\.png/);
  assert.match(layout, /\/og\.jpg/);
  assert.doesNotMatch(layout, /from "next\/headers"|generateMetadata/);
  assert.match(sitemap, /"\/partners"/);
  assert.match(worker, /Content-Security-Policy/);
  assert.match(worker, /Strict-Transport-Security/);
});

test("all committed media references resolve and use optimized editorial assets", () => {
  const sourceFiles = [...routes, "app/components/HomeHero.tsx", ...articles.map((slug) => `content/blog/${slug}.md`)];
  const sources = sourceFiles.map((file) => readFileSync(file, "utf8")).join("\n");
  const mediaPaths = [...new Set(sources.match(/\/media\/[a-z0-9-]+\.(?:webp|jpg|png)/g) ?? [])];
  assert.ok(mediaPaths.length >= 10, "expected the launch media library to be referenced");
  for (const mediaPath of mediaPaths) assert.ok(existsSync(`public${mediaPath}`), `${mediaPath} should exist`);
  assert.doesNotMatch(sources, /\/media\/[a-z0-9-]+\.jpg/);
  for (const icon of ["public/favicon.ico", "public/favicon-32.png", "public/icon-192.png", "public/icon.png", "public/apple-touch-icon.png", "public/og.jpg"]) {
    assert.ok(existsSync(icon), `${icon} should exist`);
  }
});

test("contact topics and request safeguards stay aligned", () => {
  const form = readFileSync("app/components/ContactForm.tsx", "utf8");
  const contactApi = readFileSync("app/api/contact/route.ts", "utf8");
  const waitlistApi = readFileSync("app/api/waitlist/route.ts", "utf8");
  const emailDelivery = readFileSync("app/lib/forms-email.ts", "utf8");
  assert.match(form, /Programmes and funding/);
  assert.match(contactApi, /Programmes and funding/);
  assert.match(contactApi, /content-length/);
  assert.match(waitlistApi, /content-length/);
  assert.match(contactApi, /Request origin is not allowed/);
  assert.match(waitlistApi, /Request origin is not allowed/);
  assert.match(contactApi, /sendFormEmail/);
  assert.match(waitlistApi, /sendFormEmail/);
  assert.match(emailDelivery, /RESEND_API_KEY/);
  assert.match(emailDelivery, /info@faithcine\.com/);
});

test("Vercel uses the standard Next.js build and documented form variables", () => {
  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
  const envExample = readFileSync(".env.example", "utf8");
  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  for (const key of ["RESEND_API_KEY", "FORMS_TO_EMAIL", "RESEND_FROM_EMAIL"]) assert.match(envExample, new RegExp(`^${key}=`, "m"));
});

test("publishable articles have required front matter", () => {
  for (const slug of articles) {
    const source = readFileSync(`content/blog/${slug}.md`, "utf8");
    for (const field of ["title", "description", "slug", "author", "publishedAt", "updatedAt", "pillar", "image", "imageAlt", "draft"]) {
      assert.match(source, new RegExp(`^${field}:`, "m"), `${slug} needs ${field}`);
    }
    assert.match(source, /^draft: false$/m);
    const body = source.split(/^---$/m).slice(2).join("---");
    assert.doesNotMatch(body, /^\*\*/m, `${slug} should not use unsupported bold markers`);
    assert.doesNotMatch(body, /^---$/m, `${slug} should not expose an unsupported divider`);
  }
});

test("journal articles use a standard long-form reading layout", () => {
  const articlePage = readFileSync("app/blog/[slug]/page.tsx", "utf8");
  const css = readFileSync("app/globals.css", "utf8");
  assert.match(articlePage, /\(max-width: 1280px\) calc\(100vw - 8rem\), 72rem/);
  assert.match(css, /--reading:\s*44rem/);
  assert.match(css, /\.article-page\s*\{[^}]*78rem/s);
  assert.match(css, /\.article-cover\s*\{[^}]*max-width:\s*72rem[^}]*aspect-ratio:\s*3\s*\/\s*2/s);
});

test("product language remains pre-launch", () => {
  const copy = routes.map((route) => readFileSync(route, "utf8")).join("\n");
  assert.doesNotMatch(copy, /millions impacted|download now|available today/i);
  assert.match(copy, /design and development/i);
});

test("brand copy leads with the global Christian mission", () => {
  const copyFiles = ["app/page.tsx", "app/layout.tsx", "app/about/page.tsx", "app/products/page.tsx", "app/stories/page.tsx", "app/partners/page.tsx", "app/components/HomeHero.tsx", "app/components/Footer.tsx", "app/manifest.ts"];
  const copy = copyFiles.map((file) => readFileSync(file, "utf8")).join("\n");
  assert.doesNotMatch(copy, /Christian media from Nigeria for Africa|for audiences across Africa|company from Africa known/i);
  assert.match(copy, /promote the Gospel/i);
  assert.match(copy, /audiences everywhere/i);
  assert.match(copy, /areaServed:\s*"Worldwide"/);
});

test("FaithCine Kids covers the full children's media vision", () => {
  const products = readFileSync("app/products/page.tsx", "utf8");
  assert.match(products, /FaithCine Kids/);
  for (const format of ["movies", "animation", "stories", "magazines", "articles", "learning"]) assert.match(products, new RegExp(format, "i"));
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

test("first-visit performance keeps image and scroll work lightweight", () => {
  const imageFiles = [
    ...routes,
    "app/blog/[slug]/page.tsx",
    "app/components/Footer.tsx",
    "app/components/Header.tsx",
    "app/components/HomeHero.tsx",
  ];
  const imageSources = imageFiles.map((file) => readFileSync(file, "utf8")).join("\n");
  const config = readFileSync("next.config.ts", "utf8");
  const motion = readFileSync("app/components/ScrollMotion.tsx", "utf8");
  const hero = readFileSync("app/components/HomeHero.tsx", "utf8");
  const css = readFileSync("app/globals.css", "utf8");

  assert.doesNotMatch(imageSources, /\bunoptimized\b/);
  assert.doesNotMatch(config, /unoptimized:\s*true/);
  assert.match(config, /minimumCacheTTL:\s*2_678_400/);
  assert.match(motion, /progressBar\.style\.transform/);
  assert.doesNotMatch(motion, /setProperty\("--scroll-progress"/);
  assert.match(css, /\.scroll-progress\s*\{[^}]*transform:\s*scaleX\(0\)/s);
  assert.doesNotMatch(css, /\.site-header\s*\{[^}]*backdrop-filter/s);
  assert.doesNotMatch(css, /@keyframes fc-card-reveal\s*\{[^}]*filter:/s);
  assert.match(hero, /slides\.slice\(0, readySlides\)/);
});
