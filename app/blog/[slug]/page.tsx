import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WaitlistCta } from "../../components/WaitlistCta";
import { articles, getArticle } from "../../lib/articles";

export function generateStaticParams(){return articles.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const article=getArticle(slug);if(!article)return {};return {title:article.title,description:article.description,alternates:{canonical:`/blog/${slug}`},openGraph:{type:"article",title:article.title,description:article.description,publishedTime:article.publishedAt,modifiedTime:article.updatedAt,authors:[article.author]}};}

function Markdown({source}:{source:string}){
  const blocks: React.ReactNode[]=[];
  const lines=source.split(/\r?\n/);
  let paragraph:string[]=[];
  let list:string[]=[];
  const flushParagraph=()=>{if(paragraph.length){blocks.push(<p key={`p-${blocks.length}`}>{paragraph.join(" ")}</p>);paragraph=[];}};
  const flushList=()=>{if(list.length){blocks.push(<ul key={`l-${blocks.length}`}>{list.map((item)=><li key={item}>{item}</li>)}</ul>);list=[];}};
  for(const line of lines){if(line.startsWith("## ")){flushParagraph();flushList();blocks.push(<h2 key={`h-${blocks.length}`}>{line.slice(3)}</h2>);}else if(line.startsWith("- ")){flushParagraph();list.push(line.slice(2));}else if(!line.trim()){flushParagraph();flushList();}else{flushList();paragraph.push(line.trim());}}
  flushParagraph();flushList();return <>{blocks}</>;
}

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=getArticle(slug);if(!article)notFound();const jsonLd={"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.description,datePublished:article.publishedAt,dateModified:article.updatedAt,author:{"@type":"Organization",name:article.author},publisher:{"@type":"Organization",name:"FaithCine"},mainEntityOfPage:`https://faithcine.com/blog/${article.slug}`};return <><article className="article-page section-shell"><Link className="back-link" href="/blog">&larr; Back to Journal</Link><header><p className="eyebrow">{article.pillar}</p><h1>{article.title}</h1><p className="article-description">{article.description}</p><p className="article-byline">By {article.author} <span aria-hidden="true">/</span> <time dateTime={article.publishedAt}>{new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString("en-NG",{day:"numeric",month:"long",year:"numeric"})}</time></p></header><div className="article-body"><Markdown source={article.body}/></div><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></article><WaitlistCta /></>}
