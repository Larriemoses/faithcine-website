import Link from "next/link";
export default function NotFound(){return <section className="message-page section-shell"><p className="eyebrow">404</p><h1>This page is not here.</h1><p>The link may have changed, or the page may have moved.</p><Link className="button button-primary" href="/">Return home</Link></section>}
