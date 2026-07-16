import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const routes = ["app/page.tsx", "app/selah/page.tsx", "app/products/page.tsx", "app/stories/page.tsx", "app/blog/page.tsx", "app/about/page.tsx", "app/contact/page.tsx", "app/privacy/page.tsx", "app/terms/page.tsx", "app/accessibility/page.tsx"];
const articles = ["what-scripture-meditation-is", "bring-anxiety-to-scripture", "responsible-technology-and-faith"];

test("all launch routes exist", () => {
  for (const route of routes) assert.ok(existsSync(route), `${route} should exist`);
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
