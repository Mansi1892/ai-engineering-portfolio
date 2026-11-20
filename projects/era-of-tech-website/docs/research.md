# Agency website: research and site plan
_Prepared 20 Nov 2026 (IST) for Mansi Gangwar and Rochak Singhal. Research only. Nothing was bought and nobody was contacted._

---

## 0. Things to know first
1. **The sister marketing company is Era of Marketing, at eraofmarketing.com**. Its site loads fine (one-page Wix site; summary in §3). Its contact block lists **info@silverstorey.com** and a Kolkata (South Dumdum) address, so it appears to be part of the same group as the Silver Storey client. That makes Silver Storey a joint build + marketing case study. Screenshots: `screenshots/eraofmarketing.png` and `screenshots/eraofmarketing-mobile.png`.
2. **Fix the partner site before linking to it.** It has typos ("digital maketing", "View Porfolio"). Its email domain (contact@**the**eraofmarketing.com) doesn't match the site domain (eraofmarketing.com). Its phone is shown without a country code (+9831864222), and /about, /services, /portfolio and /contact all return 404.
3. **staging.carpl.ai** returns HTTP 500 over plain `http://` with curl. It loads fine over **https** (Next.js on Google Cloud). It also sends `noindex`. Ask the client before you show the staging URL publicly. Use screenshots plus a link to the live carpl.ai once the rebuild ships.

---

## 1. Portfolio audit

| # | Site | Business / industry | Country | Platform / stack detected | Visual style | Case-study hook |
|---|---|---|---|---|---|---|
| 1 | **robam-uae.com** | ROBAM UAE, the UAE distributor store for ROBAM premium built-in kitchen appliances (range hoods, hobs, ovens, dishwashers, bundles) | UAE (AED pricing, +971 phone) | **Shopify** behind Cloudflare. GTM, Meta Pixel, WhatsApp "Chat with us" widget, reCAPTCHA, multi-country currency selector | Dark, premium, cinematic kitchen photography, minimal white type | "A global No.1 kitchen-appliance brand's UAE e-commerce store: Shopify, WhatsApp chat and ad tracking, built to sell premium appliances in AED." |
| 2 | **plaiss.com** | Plaiss, "Your room. Made shoppable." An AI-style **shopping engine** that lets users discover, compare and visualise furniture and lighting from UK retailers (DFS, Dunelm, Amazon, Ashley, Nick Scali…) | UK (London) | **Next.js (React) on Vercel**. Retailer product-feed grid, search, category filters (Furniture, Lights, Plants, Decor), waitlist "Be the first to try" | Warm, editorial, botanical hero imagery, floating glass search bar, retailer logo strip | "A London start-up's room-shopping engine: a custom Next.js product built to aggregate products from 7+ major UK retailers." **This is the strongest tech/product story.** |
| 3 | **drdolor.co.uk** | Dr Dolor Entertainment, a record label and artist-management brand (Afrobeats artist releases: "Echoes of Endurance", "Asemota", "Amebo") | UK | **Wix** behind Cloudflare. Embedded music players, socials (TikTok, Spotify, Apple Music, YouTube, X, IG) | Bold, gritty, black-and-white with **neon yellow** display type and an artist-cutout hero | "A launch site for an album drop: a bold, music-first brand site with streaming embeds and a social funnel." |
| 4 | **silverstorey.com** | Silver Storey, an interior design firm ("India's fastest growing interior design brand"), residential and commercial | India (Kolkata) | **Wix** behind Cloudflare. **Calendly** booking, WhatsApp, "Get free estimate" popup, room-wise pricing table (₹1–2.4 L onwards), stats counters, testimonials | Warm neutral luxury, beige/stone, spaced-out display font, full-bleed interiors | "A lead-generation site for an interior design brand: free-consultation popup, Calendly booking, WhatsApp and transparent pricing. **Built to convert visitors into site visits.**" (Best fit for a conversion-focused pitch.) |
| 5 | **camelia.skin** | Camelia, "The Skin Chapter". A **D2C skincare brand** built on camel milk (Face, SPF, Lip Care, Body; Desert Bloom lotion, Sunlock 50, Butter Kiss) | India (₹ pricing, India shipping) | **Shopify** (custom theme). Video/3D-style hero, product detail pages with INCI ingredient lists, 4.9★ (1,165 reviews) widget, policies | Striking **3D desert landscape with emerald serif logotype**, floating pill nav, premium beauty | "A D2C skincare launch: a cinematic Shopify storefront with a 3D desert hero, ingredient-led product pages and reviews." (Most visually impressive item.) |
| 6 | **staging.carpl.ai** | CARPL.ai, the "World's largest radiology AI marketplace" (300+ AI apps, 100+ vendors, FDA 510(k), used by RadNet, NHS trusts, Tan Tock Seng) | India / US / UK / global (geo-routed: `x-carpl-market: in`) | **Next.js + Sanity headless CMS on Google Cloud** (Google Frontend). Market-based geo rewrites, strict security headers (CSP, HSTS, X-Frame, Permissions-Policy). Live carpl.ai is still Apache/PHP (Laravel), so this staging site is a **re-platform** | Clean enterprise healthtech, deep green and white, clinician hero, ROI calculator CTA, interactive product walkthrough (Build, Test, Deploy, Monitor) | "Re-platforming a global radiology-AI company's marketing site from PHP to Next.js + headless CMS, with geo-targeted markets and enterprise-grade security headers." **Strongest enterprise and security credential.** |

**Takeaway:** the portfolio covers **3 countries (UAE, UK, India)** and **5 industries** (home appliances, retail-tech, music/entertainment, interiors, D2C beauty, health-AI). It also covers **4 platforms (Shopify, Wix, Next.js/Vercel, Next.js + Sanity/GCP)**. Present it as: "We pick the right stack for the business: no-code when speed matters, custom code when scale matters."

### Screenshots (desktop 1440×900 and mobile 390×844), all in `/workspace/agency-site/screenshots/`
- robam-uae.png, robam-uae-mobile.png
- plaiss.png, plaiss-mobile.png
- drdolor.png, drdolor-mobile.png
- silverstorey.png, silverstorey-mobile.png
- camelia.png, camelia-mobile.png
- staging.png, staging-mobile.png (CARPL)
- eraofmarketing.png, eraofmarketing-mobile.png (sister marketing company)

Raw HTML, headers and rendered DOM are in `/workspace/agency-site/raw/`.

---

## 2. AI work that can be showcased

### Rochak Singhal: github.com/rochaksinghal01/AI-PM-Portfolio
AI PM (SentiSum, Lenskart, The Media Ant). Interactive portfolio: repo-showcase-quest.lovable.app

**Shippable demos (best for the AI services page):**
| Project | What it is | Showcase angle |
|---|---|---|
| **ConsultFlow AI** (live: tanstack-start-app.rochak-singhal.workers.dev) | End-to-end agentic system that turns research into consulting decks: 6 n8n workflows (ingest, discovery, research, storyline, QA, Google Slides). Gemini 2.5 Flash, Supabase, TanStack Start, plus an **eval system** scoring completeness and groundedness | "RAG + agents that create finished deliverables" |
| **Lead Scoring (n8n)** (live: lead-scoring-n8n-frontend.vercel.app) | Messy lead CSV goes through clean, enrich and LLM judge, then is scored Hot/Warm/Cold. Stored in Supabase, with a human-review queue in React | **Best fit for this agency:** "we automate your lead pipeline" |
| **Knoxx Outbound Intelligence** | Account research and safe outreach pipeline: n8n AI agents, Supabase, React UI, evaluation branches and golden datasets | "Agentic sales research with guardrails" |
| **AI Customer Support Chatbot (n8n)** | Intent classification, autonomous answers, escalation on low confidence or negative sentiment, interaction logs. Plugs into WhatsApp, Slack or email | The core "AI chatbot" offer |
| **Webhook Chatbot (n8n + LangChain)** | Reusable agent skeleton for any chatbot | Shows a quick start for custom bots |
| **SupplierSnap**, **Stock Analyser Agent**, **Job Application Bot** | Procurement scorecards and alerts; RSI/MACD and sentiment briefs to Slack or email; job matching and tailored applications | "Ops and analyst automations" |
| Vibe-coded prototypes | ask-kyo-insight, call-insight-craft, lenskart-frame-guide, sentisum-diagnostic, resume-aibuilder-pro, riseup-app, etc. (Lovable, Bolt, Replit) | "Clickable prototype in days" |

**Enterprise proof points from his work** (use as team credentials, not as client case studies):
- RAG media-planning tool at The Media Ant: response time went from **24 h to 2 min**, with **+27%** win rate.
- CRM and lead automation with an AI pre-qualifying chatbot: **−90%** manual effort, **+15%** conversions.
- WhatsApp plan-sharing automation: **+30%** pre-sales conversions.
- Lenskart AI video on PDPs: conversion rate **6.08% → 10.5%**.
- SentiSum "Ask Kyo" CX chatbot: **+40%** adoption.

### Mansi Gangwar: github.com/Mansi1892/ai-engineering-portfolio
Senior software engineer at SAP Labs (SuccessFactors), ex-Huawei, 8+ years in Java, Kafka, distributed systems and cloud. Live site: mansi1892.github.io/ai-engineering-portfolio
- **Smart Meal AI** (her original project, live at smart-meal-ai-one.vercel.app): a full-stack 7-day meal planner for Indian families. It uses FastAPI, React 19/TanStack, Supabase/Postgres and an LLM agent with recipe and Tavily tools. It checks allergies, budget, calories and protein, and builds a shared grocery list. It has admin credits and support, plus **Telegram/WhatsApp approval flows**, deployed on Vercel.
  - Hook: "A production-style AI SaaS: agent, database, auth, admin and WhatsApp in the loop."
- The repo also includes a security review and validation report. This supports a **"secure by default"** message.

**Combined AI offer for the site:** AI chatbots (website and WhatsApp), lead-qualification and CRM automations, RAG knowledge assistants, agentic workflows (n8n, LangChain), and AI features inside custom apps. Proof: 2 live demos (Lead Scoring, ConsultFlow) and 1 live AI product (Smart Meal AI).

---

## 3. Sister company: Era of Marketing (eraofmarketing.com)
- **What it is:** "The Era Of Marketing", "a digital marketing agency that delivers results". Tagline: **"No one can miss your brand now."** It is based in Kolkata (7th floor, Yamuna Building, 86 Golaghata Rd, South Dumdum, WB 700048).
- **Services listed:** lead generation, e-commerce ads, performance marketing, creative content, UI/UX, website design, Shopify / e-commerce, and **3D modelling**. The 3D work fits the 3D hero on Camelia and the 3D visualisation that Silver Storey sells.
- **Proof stats on its site:** **12 years** of experience across **4 countries**, **100+ clients** helped by its campaigns, and **1M customers reached**. Also has a "Worked with the finest" logo strip and a "View Portfolio" link.
- **Lead-capture setup:** "Book a Call" (Calendly), "Get A Quote", "Book Free Consultation" and WhatsApp. Contact: Contact@theeraofmarketing.com, info@silverstorey.com, +91 98318 64222.
- **Platform:** a one-page Wix site (Wix "Pepyaka" server behind Cloudflare). Only the home page exists; the other pages return 404.
- **Branding:** monochrome and moody. Grey cloudscape hero, a seated-figure silhouette logo, and large soft grey/white gradient type, with a **lime / chartreuse accent (#D7E935)** for the tagline. Palette: black #000000, charcoal #333133, greys #8D8D8D / #C2C2C2 / #EEEEEE, white, and a muted steel blue #2B5672. Fonts: **Sora** (headings), Wix Madefor / Helvetica Neue (body). Tone: confident, punchy and short ("No one can miss your brand now").

**How the new site should complement it:**
- **Split the roles:** Era of Marketing = *get seen* (ads, SEO, content, branding, lead gen). The new studio = *build, secure, host and automate* (websites, stores, platforms, AI). Cross-link each other as "Growth partner" and "Build partner".
- **Make it look like a sibling, not a copy.** Share the **black / charcoal base and the lime #D7E935 accent** so the two brands read as one family. Make the studio's look sharper and more technical: crisp white or near-black surfaces instead of clouds, a grid, code and UI details, and a second tech accent (cobalt or electric blue). Use **Sora** for headings to match, with Inter for body text.
- **Tone:** keep its punchy, confident voice, but add engineering specifics ("Lighthouse 95+, SSL and security headers, 99.9% uptime").
- **Joint offer: "Build + Grow" bundle.** We design, build, host and automate; Era of Marketing runs ads, SEO, content and branding. One team and one point of contact.
- **Shared proof:** Silver Storey works as a joint case study (site + lead gen). Era's "12 yrs, 4 countries, 100+ clients, 1M reached" can be shown on a "Growth partner" strip, credited to Era.

---

## 4. What converts for web agency and dev studio sites (2025–2026)

**Core findings** (sources: 10web.io "agency websites", urest.agency "What makes a great agency website", yuktis.com "agency website that converts", darkfactory.me OMG Agency case study, Nielsen Norman Group dwell-time research cited there):
1. **Hero = audience + outcome + one CTA.** People decide within 10–20 s (NN/g). Avoid "Creative digital solutions" and say who you help and what changes. Use a dual CTA: primary "Book a 20-min call" or "Get a quote in 24h", secondary "See our work".
2. **Trust bar right under the hero:** client logos, countries served, "ex-SAP / Huawei / Lenskart" credentials, and review stars.
3. **Case studies over galleries.** Show 3–6 featured, each card with industry, deliverable and one result or metric. Detail pages follow Challenge, Approach, What shipped, Results, Quote, CTA. Use live links and named testimonials. Never invent metrics; describe the change in words when you have no numbers.
4. **Outcome-based services**, each with scope, typical timeline and "starting from" price.
5. **Pricing or packages.** Showing "starting at" ranges qualifies leads and cuts tyre-kickers. Designjoy (designjoy.co) puts pricing and a "Book a 15-min intro call" (Cal.com/Calendly) up front. Flow Ninja (flow.ninja) leads with a **"Free website audit: scan my website"** URL input as a lead magnet, plus "Free strategy call" repeated in the nav. Halo Lab (halo-lab.com) has a **project cost calculator** and an MVP or discovery sprint ("1–2 weeks").
6. **Process in 3–5 steps** with timeline (e.g. Discover, Design, Build, Launch & secure, Grow).
7. **FAQs** covering cost, timeline, who owns the code and domain, hosting and maintenance, revisions, security, payment terms and international clients.
8. **Low-friction lead capture:** a 3–4 field form (name, WhatsApp/email, budget range, what you need), a "we reply within 2 working hours" promise, and a **WhatsApp alternative** for people who don't like forms (the darkfactory.me pattern).
9. **WhatsApp click-to-chat** is essential for India and UAE leads:
   - 360dialog's UAE Nissan case (Mar 2025): **2.9× higher click-to-lead rate** on WhatsApp than website journeys, and **56% lower CPL**.
   - WhatChimp's E-Startup India case: **60% less lead drop-off, 2× conversions**.
   - Use a floating `wa.me/919830750543?text=Hi%2C%20I%20need%20a%20website%20for…` button with a pre-filled message, plus WhatsApp as a form option. Later, add a WhatsApp AI bot that qualifies leads (it doubles as a demo of your own AI service).
10. **Book a call:** embed Cal.com or Calendly inline on the Contact page and after case studies.
11. **Speed is proof.** A heavy site is an argument against hiring a dev studio. Aim for LCP under 2.5 s and Lighthouse 95+, and show the score on the site ("This site scores 98 on Lighthouse").
12. **AI-native positioning is now standard** for studios. Pixelmatters (pixelmatters.com) calls itself an "AI-Native Product Studio" with an "AI Pilot Sprint", and Halo Lab promotes AI agents. Your AI demos are a real differentiator against typical Indian web shops.
13. **Third-party reviews** (Clutch, Google Business, DesignRush) appear on Flow Ninja, Halo Lab, Digital Silk and Pixelmatters. Set up Google Business and Clutch profiles early.
14. **Market specifics:** show prices in **INR / AED / GBP** with a geo toggle. Show the UAE/UK/India flags of past clients. Display WhatsApp and email (not only a form). Use GST invoices for India and USD/GBP invoicing for abroad.

**Reference sites to study:** designjoy.co (pricing-first, subscription), flow.ninja (free audit lead magnet, B2B), halo-lab.com (cost calculator, services by stage), pixelmatters.com (AI-native studio), digitalsilk.com (quote form in the hero, review badges), clay.global (case-study craft), ramotion.com.

**Suggested packages** (proposal only; validate with Rochak and Mansi):
| Package | For | Includes | Indicative start |
|---|---|---|---|
| **Launch** | Small business, personal brand | 5–7 page site (Wix, Webflow or Next.js), mobile, SEO basics, WhatsApp, forms, SSL, 1 yr hosting, 2–3 weeks | ₹40k / AED 2.5k / £600 |
| **Commerce** | D2C / retail | Shopify store, custom theme, payments, reviews, pixel/GA4, WhatsApp, 4–6 weeks | ₹1.2L+ / AED 6k+ / £2k+ |
| **Custom / Platform** | Start-ups, SaaS, enterprise | Next.js + headless CMS, integrations, security hardening, cloud hosting, 6–12 weeks | ₹3L+ / custom |
| **AI Add-on** | Any | Website or WhatsApp AI chatbot, lead-scoring or CRM automation (n8n) | ₹50k+ / AED 2.5k+ |
| **Care plan** | All | Hosting, backups, security patches, uptime monitoring, small edits | ₹5k/mo+ |
| **Build + Grow** | With the marketing partner | Any build package plus SEO, ads and branding retainer | Bundle pricing |

---

## 5. Brand names

Every short dictionary-style name I tried was taken as a .com (e.g. Launchsmith, Byteloom, Kilnworks, Stackwell, Codewright, Siteforge, Craftstack, Karigar Labs, Lantern Labs, Saffron Stack, Monsoon Labs, Edge of Code, Era of Code, Era of Web, Era of AI, Era of Pixels). The ideas below were picked because their domains are open.

| # | Name | Idea / why it works |
|---|---|---|
| 1 | **Era of Craft** | Mirrors **Era of Marketing**, so it is clearly a sister brand ("Era of Marketing grows it, Era of Craft builds it"). "Craft" signals design and engineering quality |
| 2 | **Shilp Labs** | *Shilp* is Sanskrit/Hindi for craft or sculpture. An Indian root that still reads cleanly abroad (UAE/UK), and "Labs" adds the tech feel |
| 3 | **Kalaa Labs** | *Kalaa* means art. Warm and memorable, with a craft + engineering duality |
| 4 | **Codevelle** | A coined, premium-sounding name (code + atelier/"velle"). Easy to trademark, neutral across markets |
| 5 | **Era of Tech** | A more literal sister-brand option to Era of Marketing (Era of Build also works) |
| 6 | Era of Build / Era of Building | Literal sibling names (.com likely available) |
| 7 | Era of Digital | Broad umbrella name (.com likely available, generic) |
| 8 | Byte Karigar / Pixel Karigar | *Karigar* means artisan. Playful and very India-coded (.com likely available) |
| 9 | Code & Kiln | Craft metaphor (kiln = where things are fired and finished) (.com likely available) |
| 10 | Shilp Code / Studio Shilp | Variants of #2 (.com likely available) |

### Availability of the top 5
Checked 20 Nov 2026 with Verisign/registry RDAP and Google DNS (NXDOMAIN). "Likely available" means no registration record and no DNS. It is not a guarantee; premium or reserved pricing can still apply. **Nothing was purchased.**

| Name | .com | .in | .studio | .dev |
|---|---|---|---|---|
| **Era of Craft** | likely available | likely available | likely available | likely available |
| **Shilp Labs** | likely available | **taken** | likely available | likely available |
| **Kalaa Labs** | likely available | likely available | likely available | likely available |
| **Codevelle** | likely available | likely available | likely available | likely available |
| **Era of Tech** | likely available | likely available | likely available | likely available |

**Recommendation:** go with **Era of Craft**. It pairs directly with Era of Marketing, so the "Build + Grow" collaboration is obvious, and the .com, .in, .studio and .dev all look available. If you want an independent brand instead, choose **Kalaa Labs** or **Codevelle**. Register the .com and .in together, then do a quick trademark search (IP India, UAE and UK IPO) before you buy.

---

## 6. Recommended sitemap
```
/                      Home (conversion page)
/work                  Case studies grid (filter: Industry · Platform · Country)
  /work/carpl          Radiology-AI re-platform (Next.js + Sanity, security)
  /work/plaiss         Room-shopping engine (Next.js product build)
  /work/camelia        D2C skincare Shopify launch
  /work/silver-storey  Interior-design lead-gen site
  /work/robam-uae      UAE appliance e-commerce
  /work/dr-dolor       Music label launch site
/services
  /services/websites   Design + development (Wix/Webflow → Shopify → Next.js)
  /services/ecommerce  Shopify / D2C
  /services/ai         AI chatbots, WhatsApp bots, workflow automation, RAG
  /services/security-hosting  Security hardening, hosting, care plans
  /services/growth     Marketing / SEO / branding / lead gen with Era of Marketing (partner link)
/ai-lab                Live demos: Lead Scoring, ConsultFlow, Smart Meal AI, Support Bot
/pricing               Packages + "starting from" + cost estimator
/process               5-step process + timelines
/about                 Team (Rochak, Mansi, 10+ engineers), values
/faq
/contact               Short form + Cal.com/Calendly + WhatsApp + email
/blog (later)          SEO content: "website cost in Dubai/India/UK", "Shopify vs custom", etc.
Legal: /privacy, /terms
Persistent: floating WhatsApp button, sticky "Book a call" in nav
```

## 7. Homepage outline (section by section)

**0. Nav:** Logo · Work · Services · AI Lab · Pricing · About · [WhatsApp icon] · **Book a call** (primary button)

**1. Hero**
- Eyebrow: *Design · Code · Security · Hosting · AI*
- **Headline options:**
  - A: **"Websites that win you customers. Built end-to-end by engineers from SAP, Huawei and Lenskart."**
  - B: **"From first sketch to secure launch, and the AI that keeps leads flowing."**
  - C: **"We design, build, secure and host websites that convert. Then we automate the follow-up with AI."**
- Sub: *"One senior team for your website, store or platform: design, development, security, hosting, AI chatbots and automation. Ads, SEO and branding come from our sister agency, Era of Marketing. Clients across India, UAE and the UK."*
- CTAs: **Get a free quote in 24h** (primary) · **Chat on WhatsApp** (secondary, wa.me link) · text link "See our work ↓"
- Visual: a device collage of Camelia, CARPL and Plaiss screenshots (already captured).

**2. Trust bar:** client logos (CARPL, Plaiss, Camelia, Silver Storey, ROBAM, Dr Dolor) · "🇮🇳 🇦🇪 🇬🇧 clients" · "Team from SAP Labs · Huawei · Lenskart · SentiSum · The Media Ant" · "Lighthouse 95+"

**2b. Stats band ⚠️ PLACEHOLDER NUMBERS: replace with real figures before launch** (Mansi asked for made-up numbers for now; none of these are verified)
| Stat | Placeholder value | Label on site |
|---|---|---|
| Projects delivered | **[PLACEHOLDER] 60+** | Websites, stores & apps shipped |
| Combined team experience | **[PLACEHOLDER] 50+ years** | Engineering & product experience |
| Happy clients | **[PLACEHOLDER] 40+** | Businesses served |
| Countries served | **[PLACEHOLDER] 4** | India · UAE · UK · USA |
| Avg. page-speed score | **[PLACEHOLDER] 95+** | Lighthouse performance score |
| Uptime on our hosting | **[PLACEHOLDER] 99.9%** | Monitored 24/7 |
| Avg. time to launch | **[PLACEHOLDER] 3 weeks** | From kick-off to go-live (Launch package) |
| Client rating | **[PLACEHOLDER] 4.9/5** | Average client rating |
| AI automations built | **[PLACEHOLDER] 25+** | Chatbots & workflows live |
| Reply time | **[PLACEHOLDER] < 2 hrs** | Average response on WhatsApp |

Implementation note: keep these in one CMS/config file tagged `placeholder: true` so they are easy to find and swap. Don't publish "4.9/5" or a client count until real reviews exist, because misleading claims are a legal and trust risk in the UK (CMA) and UAE. Countries "4" is roughly consistent with the current portfolio (India, UAE, UK) plus Era of Marketing's "4 countries".

**3. Featured work (4 large cards, then "See all work")**
1. **CARPL.ai**: *"Re-platformed a global radiology-AI leader onto Next.js + headless CMS, geo-targeted and security-hardened."* (enterprise, security)
2. **Camelia**: *"A cinematic Shopify launch for a camel-milk skincare brand."* (design wow, D2C)
3. **Plaiss**: *"A London start-up's shopping engine for 7+ UK furniture retailers."* (custom product engineering)
4. **Silver Storey**: *"An interior-design site built to book consultations: Calendly, WhatsApp, transparent pricing."* (lead gen, which is exactly what visitors want)
- Second row (smaller): ROBAM UAE (UAE e-commerce), Dr Dolor (music/entertainment).
- Each card shows industry · country flag · platform · 1-line outcome · "View case study".
- **Action:** collect 1–2 real metrics or a quote per client (traffic, leads/month, conversion rate, launch time).

**4. Services (5 tiles):** Websites & Landing Pages · E-commerce (Shopify) · Custom Platforms & Web Apps · AI Chatbots & Automation · Security, Hosting & Care. Each tile has one benefit line plus "from ₹/AED/£…". The sixth tile, "Marketing, SEO, Branding & Lead Gen with Era of Marketing", links out.

**5. AI band (differentiator)**
- Headline: **"Your website shouldn't just look good. It should answer, qualify and follow up 24/7."**
- 3 demo cards: **WhatsApp/Website AI chatbot** · **Lead scoring & CRM automation** (live demo link) · **Custom AI apps** (Smart Meal AI, ConsultFlow).
- Proof line: *"Our team built automations that cut response time from 24 hours to 2 minutes and lifted conversions 15–30% at previous companies."* Label these as team experience.
- CTA: **"Try a live demo"**, **"Add AI to my site"**

**6. Process (5 steps + timeline):** Discover (free call, 30 min) → Design (Figma, 1–2 wks) → Build (2–6 wks) → Secure & Launch (SSL, headers, backups, speed) → Grow (care plan + SEO/ads with Era of Marketing). Note: "Fixed quote before we start. You own your code and domain."

**7. Why us (4 points):** Senior engineers, not freelancers-for-hire (SAP Labs/Huawei backend lead, AI PM from SentiSum/Lenskart, 10+ devs) · Right stack for the job (Wix, Shopify, Next.js) · Security and hosting included · Build + Grow under one roof.

**8. Team:** Rochak Singhal (AI Product Manager, ex SentiSum, Lenskart, The Media Ant) · Mansi Gangwar (Lead Backend Engineer, SAP Labs, ex-Huawei, 8+ yrs Java/Kafka/distributed systems) · "+10 engineers from top companies and start-ups" (avatar strip).

**9. Testimonials:** 3 named quotes with photo, role, company and country. Ask the clients for these.

**10. Pricing teaser:** Launch / Commerce / Custom / AI add-on cards with "starting from" prices, plus **"Estimate my project"** (a 4-question calculator that ends in the lead form).

**11. FAQ (6–8):** How much does a website cost? · How long does it take? · Do I own the code and domain? · Do you host and maintain it? · Can you work with clients in UAE/UK? · Can you redesign my existing site? · What is included in security? · Can you also do SEO/ads?

**12. Final CTA block**
- Headline: **"Tell us what you want to build. Get a plan and a quote within 24 hours."**
- Short form: Name · WhatsApp/Email · What do you need (Website / Store / App / AI / Marketing) · Budget range · [Send]
- Alternatives: **WhatsApp +91 98307 50543** · **rochak.singhal@gmail.com** · **Book a 20-min call** (Cal.com embed)
- Microcopy: "Replies within 2 working hours, Mon–Sat IST. No spam."

**13. Footer:** services links · case studies · partner link · email · WhatsApp · LinkedIn · India/UAE/UK · privacy.

**Tech for the site itself (eat your own cooking):** Next.js on Vercel (matches Plaiss/CARPL), Sanity CMS for case studies, Cal.com, a WhatsApp floating button, GA4 + Meta Pixel + Microsoft Clarity, and form posts to an n8n webhook. Lead-scoring is already built, so reuse Rochak's flow to score and route every enquiry to WhatsApp or email. Security headers like CARPL's. Target Lighthouse 95+.

**Before launch:**
- Get permission from each client to show their logo, screenshots and live link, especially for the CARPL staging site.
- Fix the Era of Marketing site (typos, 404 pages, email-domain mismatch) before cross-linking.
- Use a business email on the new domain instead of gmail for credibility.
