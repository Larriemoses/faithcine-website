import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const channels = [
  { label: "FaithCine on YouTube", href: "https://www.youtube.com/@faithcine_official", Icon: FaYoutube },
  { label: "FaithCine on Instagram", href: "https://www.instagram.com/faithcine_official/", Icon: FaInstagram },
  { label: "FaithCine on TikTok", href: "https://www.tiktok.com/@faithcine_official", Icon: FaTiktok },
  { label: "FaithCine on Facebook", href: "https://www.facebook.com/faithcine", Icon: FaFacebookF },
] as const;

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-links ${className}`.trim()} aria-label="FaithCine social channels">
      {channels.map(({ label, href, Icon }) => (
        <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label}>
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
