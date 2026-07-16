import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { PageIntro } from "../components/PageIntro";

export const metadata: Metadata = { title: "Contact FaithCine", description: "Contact FaithCine about product feedback, partnerships, research, media, or contributing.", alternates: { canonical: "/contact" } };
export default function ContactPage() { return <><PageIntro eyebrow="Contact" title="Start a conversation."><p>Have a question, partnership idea, research invitation, or interest in contributing? Send us a note.</p></PageIntro><section className="section-shell contact-layout"><div><p className="section-number">Contact route</p><h2>Tell us what is on your mind.</h2><p>We aim to reply within five working days.</p><a className="text-link" href="mailto:hello@faithcine.com">hello@faithcine.com</a></div><ContactForm /></section></>; }
