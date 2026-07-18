import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top section-shell">
        <div>
          <Link className="brand-link footer-brand" href="/" aria-label="FaithCine home"><Image className="footer-logo" src="/faithcine-logo-white.png" alt="FaithCine - Till Jesus be seen, Matthew 5:14-16" width={1402} height={1122} unoptimized /></Link>
          <p>FaithCine is a Christian media and technology company in Nigeria developing films, Scripture tools, learning resources, and live programmes for Africa and the wider world.</p>
          <SocialLinks className="footer-socials" />
        </div>
        <div className="footer-links">
          <div>
            <h2>Explore</h2>
            <Link href="/selah">Selah</Link>
            <Link href="/products">Products</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/blog">Journal</Link>
          </div>
          <div>
            <h2>Company</h2>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a href="mailto:info@faithcine.com">info@faithcine.com</a>
          </div>
          <div>
            <h2>Legal</h2>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <span>&copy; {new Date().getFullYear()} FaithCine</span>
        <span>Till Jesus be seen. Matthew 5:14-16.</span>
      </div>
    </footer>
  );
}
