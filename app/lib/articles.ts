import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export type Article = {
  title: string; description: string; slug: string; author: string;
  publishedAt: string; updatedAt: string; pillar: string; image: string;
  imageAlt: string; draft: boolean; body: string;
};

const articleDirectory = path.join(process.cwd(), "content", "blog");
const articleFiles = readdirSync(articleDirectory)
  .filter((file) => file.endsWith(".md"))
  .map((file) => readFileSync(path.join(articleDirectory, file), "utf8"));

function parse(source: string): Article {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("Article front matter is missing");
  const values: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const index = line.indexOf(":");
    if (index > -1) values[line.slice(0, index).trim()] = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, "");
  }
  return {
    title: values.title, description: values.description, slug: values.slug,
    author: values.author, publishedAt: values.publishedAt, updatedAt: values.updatedAt,
    pillar: values.pillar, image: values.image, imageAlt: values.imageAlt,
    draft: values.draft === "true", body: match[2].trim(),
  };
}

export const articles = articleFiles
  .map(parse)
  .filter((article) => !article.draft)
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
