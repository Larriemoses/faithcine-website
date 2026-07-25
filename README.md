<div align="center">
  <a href="https://faithcine.com"><img src="public/og.jpg" alt="FaithCine, Christian media created to help people see Jesus" width="900" /></a>

# FaithCine

### Christian media created to help people see Jesus.

[![Website](https://img.shields.io/badge/Visit-faithcine.com-0F62FE?style=for-the-badge)](https://faithcine.com)
[![Vercel](https://img.shields.io/badge/Hosted_on-Vercel-111111?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-111111?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-0F62FE?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

FaithCine is a Christian media and technology company based in Nigeria. We are building films, Scripture tools, children&apos;s media, learning resources, and live programmes for Christian audiences everywhere.

</div>

## Inside this repository

- A responsive, accessible public website with light and dark themes
- A Markdown-powered Journal with support for article images
- Working contact and early-access forms delivered through Resend
- Search, social-sharing, security, and performance foundations for production

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add the three Resend values to test form delivery.

```bash
npm run typecheck
npm test
npm run build
```

## Publish to the Journal

Add a Markdown file to `content/blog/`. Store its visuals in `public/blog/<slug>/`, then reference them with standard Markdown:

```md
![Descriptive alt text](/blog/my-post/image.jpg "Optional caption")
```

See [`docs/BLOG_PUBLISHING.md`](docs/BLOG_PUBLISHING.md) for the complete workflow. Every push to `main` is deployed automatically through Vercel.

<div align="center">

[**Visit faithcine.com**](https://faithcine.com)

**Till Jesus be seen · Matthew 5:14-16**

</div>
