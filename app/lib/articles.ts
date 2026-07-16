import anxiety from "../../content/blog/bring-anxiety-to-scripture.md?raw";
import meditation from "../../content/blog/what-scripture-meditation-is.md?raw";
import responsibleTechnology from "../../content/blog/responsible-technology-and-faith.md?raw";

export type Article = {
  title: string; description: string; slug: string; author: string;
  publishedAt: string; updatedAt: string; pillar: string; image: string;
  imageAlt: string; draft: boolean; body: string;
};

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

export const articles = [meditation, anxiety, responsibleTechnology].map(parse).filter((article) => !article.draft);
export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
