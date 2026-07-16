# Publishing a FaithCine Journal article

The Journal is GitHub-first. Every article is a Markdown file and every visual is stored with the site, so there is no separate CMS to maintain.

## 1. Create the post

Copy `content/blog/_template.md` to `content/blog/your-post-slug.md`. Complete every front-matter field, keep the slug identical to the filename, and change `draft` to `false` when the article is ready.

## 2. Add visuals

Create `public/blog/your-post-slug/` and add compressed `.jpg`, `.webp`, or `.png` files. Aim for 1600–2000 px wide and under 500 KB where possible.

Use the cover in front matter:

```yaml
image: "/blog/your-post-slug/cover.jpg"
imageAlt: "A specific description of the cover image"
```

Add inline images anywhere in the article:

```md
![Descriptive alternative text](/blog/your-post-slug/behind-the-scenes.jpg "Optional visible caption and photo credit")
```

Always write meaningful alt text. Record stock media, commissioned photography, or releases in `docs/asset-rights.md`.

## 3. Preview and publish

```bash
npm run dev
npm run typecheck
npm run build
```

Commit and push the Markdown and images together. The Journal index, article route, cover, metadata, and homepage story cards update automatically on the next deployment.
