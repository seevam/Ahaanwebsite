# iTester: marketing site

Static Astro + Tailwind site: landing page (`/`), About Ahaan (`/about`), and a stub `/privacy`.

```
npm install
npm run dev      # local
npm run build    # static output in dist/
```

## Content owner checklist
- Copy lives in `src/i18n/en.json`. Add `hi.json` / `ta.json` and register them in `src/i18n/index.ts` for more languages.
- `src/config/site.ts`: testimonials (real, permissioned only) and the About timeline (real dates only).
- `.env.example` lists all switches: store URLs (badges replace the "Get notified" form once set), form endpoint, Plausible domain, contact email, testimonials flag.
- Replace the vector phone mockups (`PhoneMock.astro`) with real WebP/AVIF screenshots when available.
- About page story text, photo and personal details need Ahaan's and his parents' approval before publishing.
- Replace `/privacy` with the real policy. Replace `public/og-image.png` with final artwork.

Deploy: connect the repo to Vercel or Netlify (build `npm run build`, output `dist`).

## Deploying on Vercel
1. Import `seevam/Ahaanwebsite` at vercel.com/new. Framework (Astro), build command and output are preset by `vercel.json`.
2. Add environment variables from `.env.example` (Project Settings → Environment Variables). Set `PUBLIC_SITE_URL` to the final domain; without it the Vercel production domain is used.
3. Deploy. Every PR gets a preview URL; `main` deploys to production.
4. Add your custom domain under Settings → Domains.

Security headers, long-lived asset caching, `sitemap-index.xml` and `robots.txt` are already configured.
