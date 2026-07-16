import type { Metadata } from "next";
import { PageIntro } from "../components/PageIntro";
import { WaitlistCta } from "../components/WaitlistCta";

export const metadata: Metadata = { title: "FaithCine Stories - Coming soon", description: "FaithCine Stories will explore faith, hope, struggle, restoration, and the quiet ways truth meets ordinary life.", alternates: { canonical: "/stories" } };
export default function StoriesPage() { return <><PageIntro eyebrow="Coming soon" title="Stories that stay with you."><p>FaithCine Stories will explore faith, hope, struggle, restoration, and the quiet ways truth meets ordinary life. We are shaping the editorial and production direction now.</p></PageIntro><section className="section-shell story-manifesto"><p>Faith</p><p>Hope</p><p>Struggle</p><p>Restoration</p><p>Ordinary life</p></section><WaitlistCta title="Get FaithCine updates." /></>; }
