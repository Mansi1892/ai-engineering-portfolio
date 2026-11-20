/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ERA OF TECH: SINGLE SOURCE OF TRUTH FOR SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Edit this file to change contact details, stats, testimonials, pricing,
 *  projects and FAQs. Every page reads from here.
 *
 *  ⚠️  Anything marked `PLACEHOLDER` is made-up / unverified and MUST be
 *      replaced with real figures before launch (see README → Pre-launch).
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Brand & contact ─────────────────────────────────────────────────────────
export const brand = {
  name: 'Era of Tech',
  tagline: 'Websites, stores & AI that win you customers.',
  description:
    'Era of Tech designs, builds, secures and hosts high-converting websites, Shopify stores, web apps and AI automations for businesses in India, UAE and the UK. Sister studio of Era of Marketing.',
  domain: 'eraoftech.com', // NOTE: domain not purchased yet (see README pre-launch checklist)
  locale: 'en_IN',
};

export const contact = {
  email: 'rochak.singhal@gmail.com', // TODO: switch to hello@eraoftech.com once the domain + mailbox exist
  whatsappNumber: '919830750543', // E.164 without "+", used for wa.me links
  whatsappDisplay: '+91 98307 50543',
  whatsappMessage: "Hi Era of Tech! I'd like to discuss a project. Here's what I need: ",
  // Booking link for "Book a call". Leave empty to fall back to WhatsApp.
  // e.g. 'https://cal.com/eraoftech/20min' or a Calendly URL.
  bookingUrl: '', // PLACEHOLDER: add Cal.com / Calendly link
  replyPromise: 'We reply within 2 working hours, Mon–Sat (IST).', // PLACEHOLDER promise; confirm you can keep it
  locations: ['India', 'UAE', 'UK'],
  linkedin: '', // PLACEHOLDER: company LinkedIn URL
};

// ── Lead form endpoint ──────────────────────────────────────────────────────
//  The site is static, so forms need a third-party endpoint.
//  1) Web3Forms (free): get an access key at https://web3forms.com, then set
//       provider: 'web3forms', accessKey: '<YOUR_KEY>'
//  2) Formspree: create a form, then set
//       provider: 'formspree', endpoint: 'https://formspree.io/f/<FORM_ID>'
//  While empty, the form falls back to opening the visitor's email app
//  (mailto) and offers a one-tap WhatsApp send with the same details.
export const form = {
  provider: '' as '' | 'web3forms' | 'formspree', // ← CONFIG SLOT
  accessKey: '', // ← Web3Forms access key (public, safe to commit)
  endpoint: '', // ← Formspree endpoint URL
  subject: 'New project enquiry from eraoftech.com',
};

// ── Sister company ──────────────────────────────────────────────────────────
export const sister = {
  name: 'Era of Marketing',
  url: 'https://www.eraofmarketing.com/',
  pitch: 'Ads, SEO, content, branding & lead generation',
  // Their public stats, credited to them (from eraofmarketing.com, Nov 2026)
  stats: ['12 yrs experience', '4 countries', '100+ clients', '1M customers reached'],
};

// ── Stats ───────────────────────────────────────────────────────────────────
//  ⚠️ ALL VALUES ARE PLACEHOLDERS (made up at Mansi's request, Nov 2026).
//  Replace with real numbers before launch.
export const stats: { value: string; label: string; placeholder: boolean }[] = [
  { value: '60+', label: 'Websites, stores & apps shipped', placeholder: true }, // PLACEHOLDER: projects delivered
  { value: '50+ yrs', label: 'Combined engineering & product experience', placeholder: true }, // PLACEHOLDER: combined experience
  { value: '4', label: 'Countries served: India · UAE · UK · USA', placeholder: true }, // PLACEHOLDER: verify USA before launch
  { value: '95+', label: 'Avg. Lighthouse performance score', placeholder: true }, // PLACEHOLDER: avg page-speed score
  { value: '99.9%', label: 'Uptime on sites we host', placeholder: true }, // PLACEHOLDER: uptime
  { value: '3 wks', label: 'Avg. time to launch (Launch package)', placeholder: true }, // PLACEHOLDER: time to launch
  { value: '25+', label: 'AI chatbots & automations built', placeholder: true }, // PLACEHOLDER: AI automations
  { value: '< 2 hrs', label: 'Avg. reply time on WhatsApp', placeholder: true }, // PLACEHOLDER: reply time
  // ── Deliberately NOT rendered (legal note: no client counts or ratings
  //    until they are real and verifiable; UK CMA / UAE consumer rules):
  // { value: '40+', label: 'Happy clients', placeholder: true },   // PLACEHOLDER: client count (hidden)
  // { value: '4.9/5', label: 'Average client rating', placeholder: true }, // PLACEHOLDER: rating (hidden)
];

// ── Testimonials ────────────────────────────────────────────────────────────
//  SAMPLE ONLY: these are invented examples to show the layout. They are
//  hidden while `showTestimonials` is false. Replace with real, named,
//  client-approved quotes, then set showTestimonials = true.
export const showTestimonials = false;
export const testimonials = [
  { sample: true, quote: 'SAMPLE: They rebuilt our site in three weeks and enquiries on WhatsApp started the same day.', name: 'Sample Client', role: 'Founder', company: 'Sample D2C Brand', country: 'India' },
  { sample: true, quote: 'SAMPLE: Senior engineers, clear process, and the AI chatbot now qualifies our leads overnight.', name: 'Sample Client', role: 'Head of Growth', company: 'Sample SaaS', country: 'UK' },
  { sample: true, quote: 'SAMPLE: Fast, secure and easy to update. Our team edits everything without calling a developer.', name: 'Sample Client', role: 'GM', company: 'Sample Retailer', country: 'UAE' },
];

// ── Team ────────────────────────────────────────────────────────────────────
export const team = [
  {
    name: 'Rochak Singhal',
    role: 'Co-founder · AI Product Manager',
    exp: 'SentiSum · Lenskart · The Media Ant',
    bio: 'Ships AI products end-to-end: RAG systems, LLM chatbots and agentic workflows that moved real metrics, including 24-hour media plans cut to 2 minutes and +15% lead conversions through CRM automation.',
    initials: 'RS',
    links: [{ label: 'GitHub', url: 'https://github.com/rochaksinghal01/AI-PM-Portfolio' }, { label: 'LinkedIn', url: 'https://linkedin.com/in/rochak-singhal' }],
  },
  {
    name: 'Mansi Gangwar',
    role: 'Co-founder · Lead Backend Engineer',
    exp: 'SAP Labs · ex-Huawei',
    bio: '8+ years building enterprise SaaS on Java, Kafka and distributed systems. Leads architecture, security and hosting, and builds AI products like Smart Meal AI.',
    initials: 'MG',
    links: [{ label: 'GitHub', url: 'https://github.com/Mansi1892/ai-engineering-portfolio' }, { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mansi-gangwar-588551136' }],
  },
];
export const teamExtra = '10+ engineers from top companies and startups'; // keep in sync with reality

export const credentials = ['SAP Labs', 'Huawei', 'Lenskart', 'SentiSum', 'The Media Ant'];

// ── Case studies ────────────────────────────────────────────────────────────
//  `result` lines are qualitative on purpose. Add real metrics (traffic,
//  leads/month, conversion) when clients share them. Do NOT invent numbers.
export type Project = {
  slug: string; name: string; client: string; industry: string; country: string; flag: string;
  platform: string; stack: string[]; url: string; urlLabel: string; hook: string; summary: string;
  challenge: string; approach: string[]; shipped: string[]; result: string; featured: boolean;
  accent: string; note?: string;
};

export const projects: Project[] = [
  {
    slug: 'carpl',
    name: 'CARPL.ai',
    client: 'CARPL.ai, the world’s largest radiology AI marketplace',
    industry: 'Healthcare AI',
    country: 'Global (IN · US · UK)',
    flag: '🌐',
    platform: 'Next.js + headless CMS',
    stack: ['Next.js', 'Sanity CMS', 'Google Cloud', 'Geo-routing', 'Security headers'],
    // CLIENT OK PENDING: linking the *staging* site. Confirm with CARPL before launch,
    // and switch to https://carpl.ai once the rebuild is live.
    url: 'https://staging.carpl.ai/',
    urlLabel: 'staging.carpl.ai',
    hook: 'Re-platformed a global radiology-AI leader onto Next.js + headless CMS: geo-targeted and security-hardened.',
    summary: 'An enterprise marketing site for an FDA-cleared AI platform used by 600+ healthcare sites, moved from a PHP stack to a modern, editable, fast front end.',
    challenge: 'CARPL’s marketing site had to speak to hospitals, radiology groups and AI vendors across several markets, look as credible as the clinical product, and be easy for the marketing team to update without engineers.',
    approach: [
      'Re-platformed from a PHP/Apache site to Next.js with Sanity as a headless CMS, so marketing can publish case studies, news and events on their own.',
      'Market-aware routing (e.g. India vs global) through edge middleware, so each region sees the right content.',
      'Enterprise-grade security headers (CSP, HSTS, frame and permissions policies) and Google Cloud hosting.',
    ],
    shipped: ['Product & solution pages', 'Interactive Build → Test → Deploy → Monitor walkthrough', 'ROI calculator & demo-booking CTAs', 'Case studies, news, events & media kit via CMS'],
    result: 'A faster, safer, CMS-driven site ready for multi-market growth. [PLACEHOLDER: add launch metrics once live]',
    featured: true,
    accent: '#0F5132',
  },
  {
    slug: 'camelia',
    name: 'Camelia',
    client: 'Camelia: The Skin Chapter',
    industry: 'D2C Skincare',
    country: 'India',
    flag: '🇮🇳',
    platform: 'Shopify',
    stack: ['Shopify', 'Custom theme', '3D / video hero', 'Reviews', 'Policies & checkout'],
    url: 'https://camelia.skin/',
    urlLabel: 'camelia.skin',
    hook: 'A cinematic Shopify launch for a camel-milk skincare brand.',
    summary: 'A premium D2C storefront with a 3D desert hero, ingredient-led product pages and a full launch-ready checkout.',
    challenge: 'Launch a new skincare brand built on an unusual hero ingredient (camel milk) and make it feel premium and trustworthy from the very first scroll.',
    approach: [
      'Art-directed a cinematic 3D desert hero with the emerald serif wordmark to own the brand story instantly.',
      'Ingredient-first product pages: hero actives with percentages, full INCI list, rituals and reviews.',
      'Custom Shopify theme with floating category navigation (Face, SPF, Lip Care, Body) and launch pricing.',
    ],
    shipped: ['Custom Shopify theme', '3D/video hero', 'Product detail pages with INCI', 'Reviews widget', 'Shipping, returns & privacy policies'],
    result: 'A launch-ready brand store that looks like a category leader from day one. [PLACEHOLDER: add conversion / AOV metrics]',
    featured: true,
    accent: '#1F5E46',
  },
  {
    slug: 'plaiss',
    name: 'Plaiss',
    client: 'Plaiss: “Your room. Made shoppable.”',
    industry: 'Retail tech / Home',
    country: 'United Kingdom',
    flag: '🇬🇧',
    platform: 'Custom Next.js app',
    stack: ['Next.js', 'React', 'Vercel', 'Product feeds', 'Search & filters'],
    url: 'https://www.plaiss.com/',
    urlLabel: 'plaiss.com',
    hook: 'A London start-up’s shopping engine for 7+ UK furniture retailers.',
    summary: 'A custom product, not a template: discover, compare and visualise furniture and lighting from DFS, Dunelm, Amazon, Ashley and more.',
    challenge: 'Shoppers bounce between dozens of retailer sites to furnish one room. Plaiss needed a fast product experience that aggregates catalogues and makes comparison effortless.',
    approach: [
      'Built a custom Next.js front end on Vercel for speed and SEO.',
      'Aggregated retailer catalogues into one browsable, filterable grid (Furniture, Lights, Plants, Decor).',
      'Floating search + category bar and a waitlist flow for early users and retailer partners.',
    ],
    shipped: ['Shopping engine UI', 'Retailer logo network', 'Search & category filters', 'Waitlist / early-access capture', 'Blog, about & retailer pages'],
    result: 'An investor- and retailer-ready product that proves the concept live. [PLACEHOLDER: add waitlist / usage metrics]',
    featured: true,
    accent: '#6B5B4B',
  },
  {
    slug: 'silver-storey',
    name: 'Silver Storey',
    client: 'Silver Storey: interior design',
    industry: 'Interior design',
    country: 'India (Kolkata)',
    flag: '🇮🇳',
    platform: 'Wix',
    stack: ['Wix', 'Calendly', 'WhatsApp', 'Lead popup', 'Local SEO'],
    url: 'https://www.silverstorey.com/',
    urlLabel: 'silverstorey.com',
    hook: 'An interior-design site built to book consultations: Calendly, WhatsApp and transparent pricing.',
    summary: 'A lead-generation website for one of Kolkata’s fastest-growing interior brands, built together with our sister agency Era of Marketing.',
    challenge: 'Turn visitors browsing beautiful interiors into booked site visits, and stand out in “interior designers near me” searches.',
    approach: [
      'Free-consultation popup and “Get free estimate” CTAs across every page.',
      'Calendly booking, click-to-call and WhatsApp so leads choose their channel.',
      'Room-wise “starting from” pricing and guarantees (45-day delivery, price match) to pre-qualify leads.',
      'Local SEO copy for Kolkata searches; campaigns run by Era of Marketing.',
    ],
    shipped: ['Residential & commercial portfolios', 'Pricing structure page', 'Booking + WhatsApp + call funnel', 'Testimonials & stats', 'SEO meta'],
    result: 'A website that works as a sales funnel, not a brochure. [PLACEHOLDER: add leads/month or cost-per-lead]',
    featured: true,
    accent: '#8C7B6B',
    note: 'Build + Grow project with Era of Marketing',
  },
  {
    slug: 'robam-uae',
    name: 'ROBAM UAE',
    client: 'ROBAM UAE: premium kitchen appliances',
    industry: 'Home appliances e-commerce',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    platform: 'Shopify',
    stack: ['Shopify', 'AED pricing', 'WhatsApp chat', 'Meta Pixel', 'GTM'],
    url: 'https://robam-uae.com/',
    urlLabel: 'robam-uae.com',
    hook: 'The UAE store for a global No.1 premium kitchen-appliance brand.',
    summary: 'A dark, cinematic Shopify store selling range hoods, hobs, ovens and dishwashers in AED, with WhatsApp sales chat and full ad tracking.',
    challenge: 'Sell high-ticket built-in appliances online in the UAE, where buyers want reassurance and a human to talk to before they buy.',
    approach: [
      'Premium dark theme with full-bleed kitchen photography to match the brand’s positioning.',
      'Guided navigation (“Which hood is right for me?”) and bundle deals to lift order value.',
      'WhatsApp “Chat with us”, Meta Pixel and Google Tag Manager for measurable, conversational selling.',
    ],
    shipped: ['Shopify store in AED', 'Product range & bundle pages', 'Brand story, history & technology pages', 'WhatsApp chat', 'Ad & analytics tracking'],
    result: 'A premium store that sells and starts conversations. [PLACEHOLDER: add revenue / enquiry metrics]',
    featured: false,
    accent: '#1B2A3A',
  },
  {
    slug: 'dr-dolor',
    name: 'Dr Dolor',
    client: 'Dr Dolor Entertainment',
    industry: 'Music & entertainment',
    country: 'United Kingdom',
    flag: '🇬🇧',
    platform: 'Wix',
    stack: ['Wix', 'Music embeds', 'Social funnel', 'Release campaign'],
    url: 'https://www.drdolor.co.uk/',
    urlLabel: 'drdolor.co.uk',
    hook: 'A bold, music-first launch site for an album drop.',
    summary: 'A high-energy brand site for a record label and artist, built around the “Echoes of Endurance” release.',
    challenge: 'Create hype for a release date and move fans from the site to streaming platforms and socials.',
    approach: [
      'Neon-on-monochrome art direction that matches the album artwork.',
      'Embedded players for singles and one-tap links to Spotify, Apple Music, YouTube, TikTok and Instagram.',
      'Release-date messaging and a community join CTA.',
    ],
    shipped: ['Release landing page', 'Music players', 'Social & streaming hub', 'Mobile-first layout'],
    result: 'A launch page that feels like the album. [PLACEHOLDER: add streams / click-through metrics]',
    featured: false,
    accent: '#C9A227',
  },
];

// ── Services ────────────────────────────────────────────────────────────────
export const services = [
  { id: 'websites', icon: 'layout', title: 'Websites & landing pages', blurb: 'Fast, beautiful, SEO-ready sites that turn visitors into enquiries.', from: '₹40k / $500', points: ['Strategy, UX & UI design', 'Wix, Webflow or custom Next.js/Astro', 'Copy, SEO meta & analytics', 'WhatsApp, forms & booking built in'] },
  { id: 'ecommerce', icon: 'cart', title: 'E-commerce & Shopify', blurb: 'D2C and retail stores that look premium and convert on mobile.', from: '₹1.2L / $1,500', points: ['Custom Shopify themes', 'Payments, shipping & tax (INR/AED/GBP)', 'Reviews, bundles & upsells', 'Meta Pixel, GA4 & server tracking'] },
  { id: 'platforms', icon: 'code', title: 'Custom platforms & web apps', blurb: 'Products, portals and dashboards engineered to scale.', from: '₹3L / $3,600', points: ['Next.js / React front ends', 'Java, Python (FastAPI) & Node back ends', 'Headless CMS, APIs & integrations', 'Kafka, Postgres & cloud architecture'] },
  { id: 'ai', icon: 'spark', title: 'AI chatbots & automation', blurb: 'Bots and workflows that answer, qualify and follow up 24/7.', from: '₹50k / $600', points: ['Website & WhatsApp AI chatbots', 'Lead scoring & CRM automation (n8n)', 'RAG knowledge assistants', 'Agentic workflows with human review'] },
  { id: 'security', icon: 'shield', title: 'Security, hosting & care', blurb: 'We launch it, secure it and keep it running.', from: '₹5k/mo / $60/mo', points: ['SSL, security headers & backups', 'Vercel, Cloudflare, AWS or GCP hosting', 'Uptime monitoring & patching', 'Monthly edits & performance checks'] },
];

// ── AI Lab ──────────────────────────────────────────────────────────────────
export const aiProjects = [
  {
    name: 'Smart Meal AI', by: 'Mansi Gangwar', tag: 'Live AI product',
    desc: 'Full-stack AI meal planner for Indian families: an LLM agent with recipe + web tools builds 7-day plans that respect allergies, budget, calories and protein, then sends them for approval on WhatsApp or Telegram.',
    stack: ['FastAPI', 'React 19', 'Supabase', 'LLM agent', 'WhatsApp/Telegram'],
    links: [{ label: 'Try it live', url: 'https://smart-meal-ai-one.vercel.app' }, { label: 'Source', url: 'https://github.com/Mansi1892/ai-engineering-portfolio/tree/main/projects/smart-meal-ai' }],
  },
  {
    name: 'Lead Scoring Engine', by: 'Rochak Singhal', tag: 'Live demo',
    desc: 'Upload a messy CSV of leads: it cleans, enriches and scores every row Hot / Warm / Cold with an LLM judge, stores results in Supabase and gives your team a human-review queue.',
    stack: ['n8n', 'LLM judge', 'Supabase', 'React', 'Vercel'],
    links: [{ label: 'Try it live', url: 'https://lead-scoring-n8n-frontend.vercel.app' }, { label: 'Source', url: 'https://github.com/rochaksinghal01/AI-PM-Portfolio/tree/main/Agentic%20Workflows/lead-scoring-n8n' }],
  },
  {
    name: 'ConsultFlow AI', by: 'Rochak Singhal', tag: 'Live demo',
    desc: 'An agentic RAG system that turns research into finished consulting decks: six n8n workflows for ingestion, discovery, research, storyline, QA and Google Slides delivery, with an eval system scoring every output.',
    stack: ['n8n', 'Gemini 2.5 Flash', 'Supabase', 'TanStack Start', 'Google Slides API'],
    links: [{ label: 'Try it live', url: 'https://tanstack-start-app.rochak-singhal.workers.dev' }, { label: 'Source', url: 'https://github.com/rochaksinghal01/AI-PM-Portfolio/tree/main/RAG%20%26%20Agentic%20AI%20Projects/ConsultFlow-AI' }],
  },
  {
    name: 'Knoxx Outbound Intelligence', by: 'Rochak Singhal', tag: 'Agentic workflow',
    desc: 'Evidence-backed account research and safe outreach: researches a company, ranks the buying committee, drafts approved outreach and enforces org-wide stop rules, tested with golden datasets.',
    stack: ['n8n AI Agents', 'Supabase', 'React', 'Evals'],
    links: [{ label: 'Source', url: 'https://github.com/rochaksinghal01/AI-PM-Portfolio/tree/main/Agentic%20Workflows/knoxx-outbound-intelligence-n8n' }],
  },
  {
    name: 'AI Customer Support Chatbot', by: 'Rochak Singhal', tag: 'Chatbot',
    desc: 'Classifies intent, resolves common questions on its own, escalates to a human when confidence is low or sentiment turns negative, and logs every conversation. Plugs into WhatsApp, Slack or email.',
    stack: ['n8n', 'OpenAI / Gemini', 'WhatsApp', 'Webhooks'],
    links: [{ label: 'Source', url: 'https://github.com/rochaksinghal01/AI-PM-Portfolio/tree/main/Agentic%20Workflows/ai-customer-support-chatbot-n8n' }],
  },
];

// Team track record (prior-employer experience, not client work)
export const aiProof = [
  { value: '24h → 2 min', label: 'Media-plan response time with a RAG tool (The Media Ant)' },
  { value: '−90%', label: 'Manual effort after CRM + AI lead automation' },
  { value: '+30%', label: 'Pre-sales conversions via WhatsApp automation' },
  { value: '6.1% → 10.5%', label: 'Product-page conversion with AI video (Lenskart)' },
];

// ── Pricing (PLACEHOLDER prices, "from" values to validate) ─────────────────
export const packages = [
  { name: 'Launch', for: 'Small businesses & personal brands', inr: '₹40,000', usd: '$500', time: '2–3 weeks', points: ['5–7 page website', 'Mobile-first design', 'SEO basics & analytics', 'WhatsApp, forms & booking', 'SSL + 1 year hosting'], highlight: false }, // PLACEHOLDER prices
  { name: 'Commerce', for: 'D2C & retail brands', inr: '₹1,20,000', usd: '$1,500', time: '4–6 weeks', points: ['Custom Shopify theme', 'Payments, shipping & tax', 'Reviews, bundles & upsells', 'Pixel, GA4 & tracking', 'WhatsApp sales chat'], highlight: true }, // PLACEHOLDER prices
  { name: 'Custom / Platform', for: 'Startups, SaaS & enterprise', inr: '₹3,00,000', usd: '$3,600', time: '6–12 weeks', points: ['Next.js + headless CMS or web app', 'APIs & integrations', 'Security hardening', 'Cloud hosting & CI/CD', 'Architecture by senior engineers'], highlight: false }, // PLACEHOLDER prices
  { name: 'AI Add-on', for: 'Any website or business', inr: '₹50,000', usd: '$600', time: '1–3 weeks', points: ['Website or WhatsApp AI chatbot', 'Lead scoring & CRM routing', 'Knowledge-base (RAG) assistant', 'Human-in-the-loop controls'], highlight: false }, // PLACEHOLDER prices
];
export const carePlan = { inr: '₹5,000/mo', usd: '$60/mo', points: ['Hosting & SSL', 'Backups & security patches', 'Uptime monitoring', 'Small monthly edits'] }; // PLACEHOLDER prices

// Cost estimator inputs (PLACEHOLDER figures, INR base; USD shown at fxRate)
export const estimator = {
  fxRate: 83, // INR per USD (approx.). PLACEHOLDER: update periodically
  types: [
    { id: 'website', label: 'Business website', base: 40000, perPage: 4000, includedPages: 6 },
    { id: 'store', label: 'Shopify / e-commerce store', base: 120000, perPage: 5000, includedPages: 10 },
    { id: 'app', label: 'Custom platform / web app', base: 300000, perPage: 10000, includedPages: 10 },
    { id: 'ai', label: 'AI chatbot / automation only', base: 50000, perPage: 0, includedPages: 0 },
  ],
  addons: [
    { id: 'chatbot', label: 'AI chatbot (website / WhatsApp)', price: 50000 },
    { id: 'seo', label: 'SEO setup + content (with Era of Marketing)', price: 25000 },
    { id: 'copy', label: 'Copywriting', price: 15000 },
    { id: 'lang', label: 'Extra language (e.g. Arabic / Hindi)', price: 30000 },
    { id: 'brand', label: 'Logo & brand kit', price: 25000 },
    { id: 'crm', label: 'CRM / lead-scoring automation', price: 35000 },
  ],
  rushMultiplier: 1.25,
  rangeSpread: 0.25, // shows estimate as a range: base → base +25%
};

// ── Process ─────────────────────────────────────────────────────────────────
export const process = [
  { step: '01', title: 'Discover', time: 'Free 30-min call', desc: 'Goals, audience, competitors and budget. You get a written plan and a fixed quote, no obligation.' },
  { step: '02', title: 'Design', time: '1–2 weeks', desc: 'Wireframes and high-fidelity designs in Figma. You review on desktop and mobile before a line of code.' },
  { step: '03', title: 'Build', time: '2–6 weeks', desc: 'Senior engineers build on the right stack (Wix, Shopify or custom code) with weekly demos on a staging link.' },
  { step: '04', title: 'Secure & launch', time: '2–3 days', desc: 'SSL, security headers, backups, speed tuning, analytics and SEO checks. Then we go live together.' },
  { step: '05', title: 'Grow', time: 'Ongoing', desc: 'Care plan for hosting and updates, plus ads, SEO and content with our sister agency Era of Marketing.' },
];

// ── Why us ──────────────────────────────────────────────────────────────────
export const whyUs = [
  { title: 'Senior engineers, not a freelancer relay', desc: 'Led by a SAP Labs / ex-Huawei backend lead and an AI product manager from SentiSum, Lenskart & The Media Ant, backed by 10+ engineers.' },
  { title: 'The right stack for the job', desc: 'Wix when speed matters, Shopify for commerce, Next.js and cloud when scale matters. No over-engineering, no lock-in.' },
  { title: 'Security & hosting included', desc: 'Every launch ships with SSL, security headers, backups and monitoring. You own your code, domain and data.' },
  { title: 'Build + Grow under one roof', desc: 'We build it; Era of Marketing fills it with traffic. One team, one plan, one point of contact.' },
];

// ── FAQ ─────────────────────────────────────────────────────────────────────
export const faqs = [
  { q: 'How much does a website cost?', a: 'Business websites start from about ₹40,000 ($500), Shopify stores from ₹1.2 lakh ($1,500) and custom platforms from ₹3 lakh ($3,600). Use our cost estimator for a ballpark; after a free call we send a fixed quote.' },
  { q: 'How long does it take?', a: 'A typical business website takes 2–3 weeks, a Shopify store 4–6 weeks and a custom platform 6–12 weeks. Rush timelines are possible.' },
  { q: 'Do I own the code, domain and content?', a: 'Yes. Domains, hosting accounts, code and content are registered in your name or transferred to you at launch. No lock-in.' },
  { q: 'Do you host and maintain the site?', a: 'Yes. Our care plan covers hosting, SSL, backups, security patches, uptime monitoring and small monthly edits. You can also self-host; we hand over everything.' },
  { q: 'Do you work with clients outside India?', a: 'Yes. We work with clients in India, the UAE and the UK, with calls in IST/GST/GMT-friendly hours, invoicing in INR, AED, GBP or USD, and support for Arabic and multi-currency stores.' },
  { q: 'Can you redesign my existing website?', a: 'Absolutely. We audit your current site for speed, SEO and conversion first, then redesign or re-platform it (e.g. from WordPress/PHP to Next.js or Shopify) without losing your rankings.' },
  { q: 'What does “security” include?', a: 'HTTPS everywhere, modern security headers (CSP, HSTS), spam-protected forms, least-privilege access, automated backups and dependency updates, plus monitoring after launch.' },
  { q: 'Can you also do SEO, ads and branding?', a: 'Yes, through our sister agency Era of Marketing. The Build + Grow bundle combines your website with ads, SEO, content and branding under one plan.' },
  { q: 'What AI work can you add to my business?', a: 'Website and WhatsApp chatbots, lead scoring and CRM routing, internal knowledge assistants (RAG) and custom agentic workflows, all with human review where it matters.' },
  { q: 'How do payments work?', a: 'Typically 40% to start, 40% on design/build sign-off and 20% at launch. Care plans are billed monthly. GST invoices for India.' }, // PLACEHOLDER terms: confirm
];

// ── Navigation ──────────────────────────────────────────────────────────────
export const nav = [
  { label: 'Work', href: '/work/' },
  { label: 'Services', href: '/services/' },
  { label: 'AI Lab', href: '/ai-lab/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Process', href: '/process/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
];
