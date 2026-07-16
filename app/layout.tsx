import type { Metadata } from "next";
import { headers } from "next/headers";
import { ConsentBanner } from "./components/ConsentBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "faithcine.com";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") || host.startsWith("127.") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: { default: "FaithCine", template: "%s | FaithCine" },
    description:
      "FaithCine is building a Christ-centered media ecosystem of films, shows, live experiences, learning, and community.",
    applicationName: "FaithCine",
    openGraph: {
      type: "website",
      siteName: "FaithCine",
      title: "FaithCine - Media that points to Christ",
      description:
        "Christ-centered media from Africa for a generation.",
      images: [{ url: "/media/family-screen.jpg", width: 1800, height: 1013, alt: "A family watching FaithCine together" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "FaithCine - Media that points to Christ",
      description: "Christ-centered media from Africa for a generation.",
      images: ["/media/family-screen.jpg"],
    },
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FaithCine",
  url: "https://faithcine.com",
  description:
    "A Christ-centered media platform building films, shows, live experiences, learning, and community from Africa for a wider world.",
  sameAs: [
    "https://www.youtube.com/@faithcine_official",
    "https://www.instagram.com/faithcine_official/",
    "https://www.tiktok.com/@faithcine_official",
    "https://www.facebook.com/faithcine",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('faithcine-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){document.documentElement.dataset.theme='dark'}})()` }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ConsentBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
