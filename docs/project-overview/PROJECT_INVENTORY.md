# Complete project inventory

This inventory is based on the copied source, manifests, workflow exports, and READMEs—not folder names alone.

## Classification summary

- **17 source projects/workflows:** one original application and sixteen contributed/adapted projects.
- **10 prompt-engineering documents:** reusable written prompts, not executable applications.
- **1 productivity reference document:** documentation only.
- **0 copied submodules:** the only configured submodule was inaccessible.
- **No empty placeholder projects:** the inaccessible submodule directory was omitted.

## Executable source and workflow projects

| Project | Purpose | Stack / dependencies | Source location | UI / backend | Configuration and run path | Deployment evidence |
|---|---|---|---|---|---|---|
| Smart Meal AI | Personalized household meal planning and approval | Python 3, FastAPI, LangChain packages, OpenAI-compatible API, Tavily, Supabase, React 19, TanStack, Vite | `projects/smart-meal-ai` | React UI; FastAPI backend; Telegram/WhatsApp handlers | `.env.example`; `pip install -r requirements.txt`; `uvicorn api:app`; frontend `npm ci && npm run dev` | Combined Vercel scripts/config; Render config; live URL documented |
| ConsultFlow AI | Institutional-RAG consulting deck generation through five gated stages | n8n, Gemini, Supabase, Google Drive/Slides APIs, QuickChart | `projects/rag-agentic/consultflow-ai` | Workflow exports; frontend screenshots only, no frontend source in this directory | Replace workflow placeholders, import `wf00`–`wf05` into n8n, configure provider credentials | Cloudflare/n8n/Supabase deployment described; no deployable frontend source included here |
| Knoxx Outbound Intelligence | Evidence-backed account research, qualification, contacts, safe outreach, and engagement control | React 18/19, TanStack, Vite, Supabase/Postgres/RLS, Edge Functions, n8n, Node tests, Deno checks | `projects/ai-automation/knoxx-outbound-intelligence-n8n` | Two React UIs; Supabase backend; five n8n workflows | App and frontend `.env.example`; `npm run verify` after dependencies; import workflows in documented order | Lovable app metadata and live URLs; Supabase deployment guides |
| AI Customer Support Chatbot | Intent classification, automated support, escalation, logging | n8n AI Agent, webhook, OpenAI/Gemini credentials | `projects/ai-automation/ai-customer-support-chatbot-n8n` | n8n webhook workflow; no standalone UI | Import JSON and connect messaging/model credentials | n8n-hosted by operator; no repo deployment config |
| Job Application Bot | Job collection, fit scoring, tailored materials, pipeline tracking, digest | n8n, scheduled triggers, AI model, external job/notification connectors | `projects/ai-automation/job-application-bot-n8n` | n8n workflow; no standalone UI | Import JSON; configure search/profile sources and notification channel | n8n-hosted by operator; no repo deployment config |
| Lead Scoring | Tolerant CSV ingestion, enrichment, LLM scoring, database upsert, human review | n8n, Gemini-style LLM nodes, Supabase/Postgres, Python reference implementation, React/Vite | `projects/ai-automation/lead-scoring-n8n` | Vite React UI and standalone HTML UIs; n8n/Python processing; SQL schemas | Frontend `.env.example`; import latest workflow; `pip install -r requirements.txt`; frontend `npm ci && npm run dev` | Vercel frontend URL documented; n8n/Supabase runtime required |
| Stock Analyser Agent | Scheduled technical/sentiment analysis and investment brief delivery | n8n, market data API, LLM, Slack/email connector | `projects/ai-automation/stock-analyser-agent-n8n` | n8n workflow only | Import JSON, add market/model/delivery credentials | n8n-hosted by operator |
| SupplierSnap | Supplier risk monitoring, anomaly flags, scorecards, alerts | n8n, scheduled trigger, AI scoring/report generation | `projects/ai-automation/suppliersnap-n8n` | n8n workflow only | Import JSON, connect procurement source, thresholds, alerts | n8n-hosted by operator |
| Webhook Chatbot | Extensible agent base with webhook request/response | n8n LangChain Agent, pluggable model/memory/tools | `projects/ai-automation/webhook-chatbot-n8n` | n8n webhook backend; no standalone UI | Import JSON, attach model credentials and optional tools | n8n-hosted by operator |
| Advance Learner Hub | Searchable participant directory and profiles from CSV/Google Sheets data | React 19, TypeScript, TanStack Router/Query, Vite, Tailwind 4, PapaParse | `projects/ai-applications/advance-learner-hub` | Frontend application; no independent backend | `npm ci && npm run dev` | Cloudflare Wrangler config and Lovable URL documented |
| Ask Kyo Insight | CX intelligence and call-evaluation product prototype | React 18, TypeScript, Vite, Tailwind, shadcn/Radix, Supabase Edge Functions | `projects/ai-applications/ask-kyo-insight` | Frontend plus Supabase integration/functions | Copy `.env.example`; `npm ci && npm run dev` | Supabase config; Lovable metadata in source history |
| Call Insight Craft | Support transcript evaluation, scorecards, routing, KPI dashboard | React 18, TypeScript, Vite, Tailwind, shadcn/Radix | `projects/ai-applications/call-insight-craft` | Frontend prototype with mock data | `npm ci && npm run dev` | No dedicated deployment file; Vite build available |
| Frame Guide | Guided eyewear recommendations, preference rail, chatbot UI, wishlist | React 18, TypeScript, Vite, Tailwind, shadcn/Radix | `projects/ai-applications/lenskart-frame-guide` | Frontend prototype | `npm ci && npm run dev` | No dedicated deployment file; Vite build available |
| Marzi Companion | Time-aware personalized wellness content and activities | React 18, TypeScript, Vite, hooks, Tailwind, shadcn/Radix | `projects/ai-applications/marzi-gentle-companion` | Frontend prototype; local preference state | `npm ci && npm run dev` | No dedicated deployment file; Vite build available |
| Resume AI Builder Pro | Multi-step resume tailoring interface | React 18, TypeScript, Zustand, Vite, Vitest, Tailwind | `projects/ai-applications/resume-aibuilder-pro` | Frontend prototype and tests | `npm ci && npm test`; `npm run dev` | No dedicated deployment file; Vite build available |
| RiseUp | Contextual alarm and morning-planning experience | React 18, Create React App | `projects/ai-applications/riseup-app` | Frontend prototype | `npm ci && npm start` | `vercel.json` included |
| SentiSum Diagnostic | Pre-sales CX questionnaire and generated diagnostic report | Vanilla HTML/CSS/JS, Vercel Node serverless function, Anthropic API | `projects/ai-applications/sentisum-diagnostic` | Static frontend and serverless backend | Set `ANTHROPIC_API_KEY`; `npx vercel dev` | `vercel.json` and deployment guide included |

## Documentation-only material

| Material | Location | Classification |
|---|---|---|
| Prompt Engineering Library | `prompt-engineering/prompts/` | Ten Markdown prompt specifications. Files 01–08 are general model prompts; 09–10 are application-generation briefs. They are documentation, not prebuilt applications. |
| Productivity AI Tools | `productivity-tools/AI Tools - Productivity.docx` | Curated reference document. No executable source. |
| ConsultFlow source notes | `docs/source-material/consultflow-ai-notes.md` | Retained supporting notes separate from the executable workflow exports. |
| Project screenshots, PDFs, PowerPoint, evaluation CSVs, Mermaid/SVG diagrams | Within project directories | Evidence, fixtures, and documentation supporting source projects; not independent applications. |

## Environment variables and external services

| Project family | Required or optional configuration observed |
|---|---|
| Smart Meal AI | `OPENAI_API_KEY`, `SUPABASE_URL`, `SUPABASE_KEY` / `SUPABASE_SERVICE_ROLE_KEY`, `TAVILY_API_KEY`; optional Telegram, WhatsApp, admin, frontend/backend URL, and reset-link settings documented in `.env.example` |
| ConsultFlow | Google model/API credentials, Supabase, Google Drive/Slides OAuth, n8n variables; the imported Google key was removed |
| Knoxx | Supabase publishable configuration in the browser; service role, n8n webhook secrets, model/provider credentials, Gmail/test recipient, tracking secrets on server/workflow side |
| Lead Scoring | Supabase URL and publishable key in frontend; n8n webhook URL; model and Supabase credentials in n8n |
| Ask Kyo | Supabase project ID, URL, and publishable key |
| SentiSum Diagnostic | `ANTHROPIC_API_KEY` on the serverless runtime |
| Other n8n workflows | Provider API/model credentials plus the source/delivery connectors described in their README files |

## Source repository submodule status

An upstream source repository declared `repo-showcase-quest` as a submodule. Recursive initialization returned “Repository not found” for its configured remote, so its content was not accessible and was not copied. The Smart Meal AI source declared no submodules. The new repository has no `.gitmodules` file and no unresolved gitlink entries.

## Notes on claims and ownership

- Smart Meal AI is original work from Mansi Gangwar's source repository.
- All other projects in this inventory are contributed/adapted with permission and retain project documentation from the original source.
- Original project READMEs may describe their creator's context or outcomes. Those statements are not presented as Mansi Gangwar's employment history or achievements in the portfolio website or main README.
