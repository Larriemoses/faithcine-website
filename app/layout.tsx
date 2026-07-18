import type { Metadata } from "next";
import { headers } from "next/headers";
import { ConsentBanner } from "./components/ConsentBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "@fontsource-variable/inter";
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
      "FaithCine develops Christian films, guided Scripture tools, learning resources, and live programmes from Nigeria for audiences across Africa.",
    applicationName: "FaithCine",
    openGraph: {
      type: "website",
      siteName: "FaithCine",
      title: "FaithCine | Christian media from Nigeria for Africa",
      description:
        "Christian media and technology from Nigeria for audiences across Africa.",
      images: [{ url: "/og.png", width: 1730, height: 909, alt: "FaithCine: Stories and experiences that help people see Jesus" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "FaithCine | Christian media from Nigeria for Africa",
      description: "Christian media and technology from Nigeria for audiences across Africa.",
      images: ["/og.png"],
    },
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FaithCine",
  url: "https://faithcine.com",
  description:
    "A Christian media and technology company in Nigeria developing films, Scripture tools, learning resources, and live programmes for Africa and the wider world.",
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
