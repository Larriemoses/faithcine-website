import type { Metadata, Viewport } from "next";
import { ConsentBanner } from "./components/ConsentBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://faithcine.com"),
  title: { default: "FaithCine", template: "%s | FaithCine" },
  description:
    "FaithCine develops Christian films, documentaries, Scripture tools, children's media, learning resources, and live programmes that help people see Jesus.",
  applicationName: "FaithCine",
  category: "Christian media and technology",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://faithcine.com",
    siteName: "FaithCine",
    title: "FaithCine | Christian films and Gospel media",
    description: "Christian films, documentaries, Scripture tools, and media created to promote the Gospel and help people see Jesus.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "FaithCine: Stories and experiences that help people see Jesus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FaithCine | Christian films and Gospel media",
    description: "Christian films, documentaries, Scripture tools, and media created to promote the Gospel and help people see Jesus.",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020202" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://faithcine.com/#organization",
      name: "FaithCine",
      url: "https://faithcine.com",
      logo: "https://faithcine.com/icon.png",
      email: "info@faithcine.com",
      foundingLocation: { "@type": "Country", name: "Nigeria" },
      areaServed: "Worldwide",
      description:
        "A Christian media and technology company based in Nigeria developing Gospel-centred films, documentaries, Scripture tools, children's media, learning resources, and live programmes for audiences everywhere.",
      knowsAbout: ["Christian media", "Gospel media", "Christian films", "Scripture tools", "children's media", "film production", "responsible technology", "digital learning"],
      sameAs: [
        "https://www.youtube.com/@faithcine_official",
        "https://www.instagram.com/faithcine_official/",
        "https://www.tiktok.com/@faithcine_official",
        "https://www.facebook.com/faithcine",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://faithcine.com/#website",
      url: "https://faithcine.com",
      name: "FaithCine",
      publisher: { "@id": "https://faithcine.com/#organization" },
      inLanguage: "en",
    },
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
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <ConsentBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
