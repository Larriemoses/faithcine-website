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
      "FaithCine creates thoughtful Scripture-led media and technology experiences, beginning with FaithCine Selah.",
    applicationName: "FaithCine",
    openGraph: {
      type: "website",
      siteName: "FaithCine",
      title: "FaithCine - Media that points to Christ",
      description:
        "Scripture-led media and technology, beginning with FaithCine Selah.",
      images: [{ url: "/og.png", width: 1728, height: 911, alt: "FaithCine - Media that points to Christ" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "FaithCine - Media that points to Christ",
      description: "Scripture-led media and technology, beginning with FaithCine Selah.",
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
    "A Christ-centered media and technology company creating thoughtful experiences that help people encounter, understand, and remain with biblical truth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
