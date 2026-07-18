import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = { title: "Contact FaithCine", description: "Contact FaithCine about product research, partnerships, editorial work, Christian media, or contributing to our mission.", alternates: { canonical: "/contact" } };
export default function ContactPage() { return <><PageIntro eyebrow="Contact FaithCine" title="Talk to the FaithCine team."><p>Send us a message about product feedback, research, partnerships, media enquiries, or contributing to FaithCine.</p></PageIntro><section className="section-shell contact-layout"><div><p className="section-number">Prefer email?</p><h2>Write to us directly.</h2><p>Write to info@faithcine.com. Add a specific subject line so the right person can respond.</p><a className="text-link" href="mailto:info@faithcine.com">info@faithcine.com</a></div><ContactForm /></section></>; }
