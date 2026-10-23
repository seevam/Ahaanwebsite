# Impact an Eye Every Day: marketing site

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
