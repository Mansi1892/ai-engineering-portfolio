# Era of Tech: agency website

Marketing website for **Era of Tech**, a web, AI and automation studio. It is the sister studio of **[Era of Marketing](https://www.eraofmarketing.com/)**. The site's one job is **lead conversion**: it shows the work, makes the offer clear, and gets visitors onto WhatsApp, a call, or the lead form.

- **Owners:** Rochak Singhal (AI Product Manager) and Mansi Gangwar (Lead Backend Engineer)
- **Contact on the site:** rochak.singhal@gmail.com · WhatsApp +91 98307 50543
- **Research and site plan:** [`docs/research.md`](docs/research.md)

## Stack
| | |
|---|---|
| Framework | [Astro 7](https://astro.build), static output (`dist/`). Hosts free on GitHub Pages, Vercel, Netlify or Cloudflare Pages |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`), tokens in `src/styles/global.css` |
| Fonts | Sora (headings) + Inter (body), self-hosted with `@fontsource` (no Google Fonts request) |
| SEO | Per-page title and description, canonical, Open Graph and Twitter cards, JSON-LD (`ProfessionalService`, `FAQPage`), `sitemap-index.xml`, `robots.txt` |
| JS | Small vanilla scripts only: scroll reveal, mobile menu, lead form, cost estimator |

Brand: black and charcoal base, lime accent `#D7E935` (shared with Era of Marketing), and a cobalt `#5B7CFA` used sparingly. The logo is an inline SVG in `src/components/Logo.astro`. The favicon is `public/favicon.svg`, plus PNG fallbacks and `og-image.png`.

Local Lighthouse (20 Nov 2026, `astro preview`, Lighthouse 12):

| Page | Mobile (Perf / A11y / BP / SEO) | Desktop |
|---|---|---|
| Home | 94 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Case study (CARPL) | 96 / 100 / 100 / 100 | 100 / 100 / 100 / 100 |
| Pricing | 99 / 98 / 100 / 100 | 100 / 98 / 100 / 100 |

## Pages
`/` home · `/work/` and `/work/{carpl,camelia,plaiss,silver-storey,robam-uae,dr-dolor}/` · `/services/` · `/ai-lab/` · `/pricing/` (with the cost estimator) · `/process/` · `/about/` · `/faq/` · `/contact/` · `/privacy/` · `404`

## Local development
From the portfolio repository root, this project lives at `projects/era-of-tech-website/`. Run the commands in that directory:

```bash
cd projects/era-of-tech-website
npm ci
npm run dev        # http://localhost:4321
npm run build      # static site → dist/
npm run preview    # serve dist/ locally
npm run check      # type-check .astro/.ts files
npm run images     # re-generate WebP screenshots from ../screenshots (Python 3 + Pillow)
```

`../screenshots` is the `screenshots/` directory next to this project (`projects/screenshots/` in the portfolio). `scripts/optimize_images.py` resolves it the same way. Requires Node 20+ (tested on Node 24).

## Editing content: `src/data/site.ts`
Every page reads its content from **one file**, `src/data/site.ts`:

| What | Export | Notes |
|---|---|---|
| Contact email, WhatsApp, booking link | `contact` | Set `bookingUrl` to a Cal.com or Calendly link. If it is empty, "Book a call" opens WhatsApp |
| Lead form endpoint | `form` | See the next section |
| Stats band | `stats` | ⚠️ **All placeholders.** Client count and rating are deliberately commented out (not rendered) until they are real |
| Testimonials | `testimonials`, `showTestimonials` | ⚠️ **SAMPLE** entries, hidden while `showTestimonials = false`. Replace with real approved quotes, then set it to `true` |
| Case studies | `projects` | Text, stack and live URL per project. `result` lines contain `[PLACEHOLDER]` where real metrics should go |
| Services, packages, care plan, estimator | `services`, `packages`, `carePlan`, `estimator` | ⚠️ Prices are placeholders (INR, with USD at `fxRate`) |
| AI Lab | `aiProjects`, `aiProof` | Demo links and repos. `aiProof` is the team's track record at previous employers |
| Team, FAQ, process, nav, sister company | `team`, `faqs`, `process`, `nav`, `sister` | |

Search the code for `PLACEHOLDER` to find every value that still needs to be replaced.

**Adding a case study:**
1. Add a screenshot pair to `../screenshots/` (`projects/screenshots/` from the portfolio root; `name.png` at 1440×900 and `name-mobile.png` at 390×844).
2. Map the file to a slug in `scripts/optimize_images.py` and run `npm run images`. This creates `public/images/work/<slug>.webp`, `-800.webp` and `-mobile.webp`.
3. Add an entry to `projects` in `site.ts`. The page `/work/<slug>/` is generated automatically.

## Lead form: plugging in an endpoint
The site is static, so the form posts to a third-party service. Edit `form` in `src/data/site.ts`.

**Web3Forms (free, recommended):**
1. Go to <https://web3forms.com>, enter `rochak.singhal@gmail.com`, and copy the access key.
2. Set `form.provider = 'web3forms'` and `form.accessKey = '<key>'`. The key is public by design, so it is safe to commit.

**Formspree:**
1. Create a form at <https://formspree.io>.
2. Set `form.provider = 'formspree'` and `form.endpoint = 'https://formspree.io/f/<id>'`.

**While no endpoint is configured** (the current state):
- Submitting opens the visitor's email app with a pre-filled email (mailto fallback).
- A **"Send via WhatsApp instead"** button sends the same details to WhatsApp.

The form also has:
- a honeypot field against bots;
- pre-filling from URL parameters (`/contact/?service=…&message=…`), which the cost estimator and the case-study CTAs use.

## Deploy
### Vercel (simplest)
1. Push the repository to GitHub, then go to **vercel.com → Add New Project** and import it. Set the root directory to `projects/era-of-tech-website` when deploying from this portfolio. If the project has been split into its own repository, leave the root at that repository root. The Astro preset is auto-detected (build `npm run build`, output `dist`).
2. Optional environment variable: `SITE_URL=https://eraoftech.com`, used for canonical, OG and sitemap URLs. It defaults to `https://eraoftech.com`.
3. Add the custom domain under Project → Settings → Domains.

Netlify and Cloudflare Pages work the same way (root directory `projects/era-of-tech-website` in this portfolio, build `npm run build`, publish `dist`).

### GitHub Pages
This folder is part of the portfolio monorepo, so the Pages workflow is **not** active here. GitHub Actions only runs workflows from the repository root `.github/workflows/` directory. The ready workflow is kept as an example at [`deploy/github-pages-workflow.yml.example`](deploy/github-pages-workflow.yml.example).

If this project is split into its own repository:

1. Copy `deploy/github-pages-workflow.yml.example` to `.github/workflows/deploy.yml` in that repository.
2. Push to GitHub, then go to **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds with `SITE_URL=https://<owner>.github.io` and `BASE_PATH=/<repo>`. All internal links respect the base path.
4. For a custom domain:
   - Add `public/CNAME` containing `eraoftech.com`.
   - In the workflow, set `BASE_PATH: /` and `SITE_URL: https://eraoftech.com`.
   - Point DNS at GitHub Pages.

Manual build for a sub-path: `SITE_URL=https://<user>.github.io BASE_PATH=/<repo> npm run build`.

## Pre-launch checklist
- [ ] **Replace placeholder stats** in `stats` (projects, experience, countries incl. USA, Lighthouse, uptime, launch time, AI automations, reply time). Only add a client count or rating when they are real and verifiable.
- [ ] **Replace placeholder prices** (`services[].from`, `packages`, `carePlan`, `estimator`) and payment terms in the FAQ.
- [ ] **Real testimonials:** named and approved by each client. Delete the SAMPLE entries, then set `showTestimonials = true`.
- [ ] **Client permissions** to show each logo, screenshot, name and live link:
  - [ ] **CARPL.ai**: the case study links to **staging.carpl.ai**, and client OK is **pending**. Get written approval, and switch the link to https://carpl.ai once the rebuild is live (`projects[0].url`).
  - [ ] Camelia · Plaiss · Silver Storey · ROBAM UAE · Dr Dolor
- [ ] Add real result metrics to each case study (replace the `[PLACEHOLDER: …]` in `result`).
- [ ] **Buy the domain eraoftech.com** (and ideally eraoftech.in), then set up `hello@eraoftech.com` and update `contact.email`. Not purchased yet.
- [ ] Add a booking link (`contact.bookingUrl`) and the company LinkedIn (`contact.linkedin`).
- [ ] Plug in a form endpoint (Web3Forms or Formspree) and send a test enquiry.
- [ ] **Fix Era of Marketing site issues** before cross-linking heavily:
  - typos ("digital maketing", "View Porfolio");
  - email domain mismatch (`contact@theeraofmarketing.com` vs `eraofmarketing.com`);
  - phone shown without +91;
  - /about, /services, /portfolio and /contact return 404.
- [ ] Get the privacy policy (`/privacy/`) reviewed for DPDP (India), UK GDPR and UAE PDPL.
- [ ] Add analytics (GA4, Plausible or Clarity) and a cookie notice if required.
- [ ] Create a Google Business Profile and a Clutch profile; link them for third-party reviews.
- [ ] Re-run Lighthouse on the live URL.

## Project structure
```
src/
  data/site.ts         ← all content, stats, prices, testimonials, contact, form config
  layouts/Base.astro   ← <head>, SEO/OG/JSON-LD, header, footer, WhatsApp button
  components/          ← Header, Footer, LeadForm, StatsBand, ProjectCard, PricingCards, …
  pages/               ← one file per route; work/[slug].astro builds the case studies
  styles/global.css    ← Tailwind theme tokens + utilities
public/                ← favicon, OG image, manifest, optimised WebP screenshots
scripts/               ← optimize_images.py (screenshots → WebP), og.html (OG image source)
docs/research.md       ← research and site plan this build is based on
deploy/github-pages-workflow.yml.example
                       ← inactive in this monorepo; copy to .github/workflows/deploy.yml
                         if this project is split into its own repository
```
