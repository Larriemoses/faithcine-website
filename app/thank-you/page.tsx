import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Thank you", robots: { index: false, follow: false } };
export default function ThankYouPage(){return <section className="message-page section-shell"><p className="eyebrow">Message received</p><h1>Thank you.</h1><p>Your message has been received. For a time-sensitive enquiry, email <a href="mailto:info@faithcine.com">info@faithcine.com</a>.</p><Link className="button button-primary" href="/">Return home</Link></section>}
