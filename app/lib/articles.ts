export type Article = {
  title: string; description: string; slug: string; author: string;
  publishedAt: string; updatedAt: string; pillar: string; image: string;
  imageAlt: string; draft: boolean; body: string;
};

const articleFiles = import.meta.glob("../../content/blog/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

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

export const articles = Object.values(articleFiles)
  .map(parse)
  .filter((article) => !article.draft)
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
