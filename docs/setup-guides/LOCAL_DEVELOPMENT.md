# Local development guide

Run commands from the repository root unless a section changes directory. Projects are independent; do not install every dependency unless you intend to work on every application.

## Prerequisites

- Git
- Node.js 20+ and npm
- Python 3.9+ for Smart Meal AI and the lead-scoring reference pipeline
- n8n for workflow JSON projects
- Deno 2 for the complete Knoxx verification command
- Provider accounts only for live external integrations

## Portfolio website

```bash
cd portfolio-website
python3 -m http.server 4173
```

Visit <http://localhost:4173>. The site has no build step.

## Smart Meal AI

### Backend

```bash
cd projects/smart-meal-ai
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn api:app --host 127.0.0.1 --port 8000
```

Add real values to `.env` locally. At minimum, generation and persistence require an OpenAI-compatible API key and Supabase configuration. Tavily is used for live recipe context. Telegram and WhatsApp are optional.

Check the API:

```bash
curl http://127.0.0.1:8000/health
```

### Frontend

```bash
cd projects/smart-meal-ai/frontend
npm ci
npm run dev -- --host 0.0.0.0 --port 8080
```

Visit <http://localhost:8080>.

### Tests and syntax

```bash
cd projects/smart-meal-ai
PYTHONPYCACHEPREFIX=/tmp/ai-portfolio-pycache python3 -m py_compile \
  api.py agent.py database.py tools.py telegram_bot.py whatsapp_bot.py onboarding_utils.py config.py
python3 -m pytest tests
npm --prefix frontend run build
```

Tests requiring live provider credentials may need to be skipped or configured explicitly; do not invent keys.

## React/Vite projects

These directories expose `npm run dev` and `npm run build`:

- `projects/ai-applications/advance-learner-hub`
- `projects/ai-applications/ask-kyo-insight`
- `projects/ai-applications/call-insight-craft`
- `projects/ai-applications/lenskart-frame-guide`
- `projects/ai-applications/marzi-gentle-companion`
- `projects/ai-applications/resume-aibuilder-pro`
- `projects/ai-automation/knoxx-outbound-intelligence-n8n/app`
- `projects/ai-automation/knoxx-outbound-intelligence-n8n/frontend`
- `projects/ai-automation/lead-scoring-n8n/frontend-react`

For any one project:

```bash
cd path/to/project
npm ci
npm run build
npm run dev
```

Copy a nearby `.env.example` only when the project uses an external backend. Some prototypes use fixtures or mock data and need no credentials for their core UI.

## Create React App project

```bash
cd projects/ai-applications/riseup-app
npm ci
npm test -- --watchAll=false
npm run build
npm start
```

## SentiSum Diagnostic

```bash
cd projects/ai-applications/sentisum-diagnostic
ANTHROPIC_API_KEY=your_local_value npx vercel dev
```

Keep the key in a local environment or Vercel secret store, not in source.

## Knoxx full verification

Read the project README and workflow import order first. After installing `app` and `frontend` dependencies:

```bash
cd projects/ai-automation/knoxx-outbound-intelligence-n8n
npm run verify
```

This runs Node contract tests, validates workflow exports, checks Supabase Edge Functions with Deno, tests/builds the lightweight frontend, and performs a dependency audit. The separate `app/` also has its own TypeScript, lint, and build commands.

## Lead-scoring reference pipeline

```bash
cd projects/ai-automation/lead-scoring-n8n
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python3 pipeline.py --help
```

The primary artifact is the n8n workflow. The Python script is a reference implementation for independently checking pipeline logic.

## n8n workflow-only projects

Use n8n's Import from File feature for each JSON export, inspect every node before activation, and supply credentials in n8n's encrypted credential store.

Workflow-only directories:

- `projects/rag-agentic/consultflow-ai/n8n-workflows/`
- `projects/ai-automation/ai-customer-support-chatbot-n8n/`
- `projects/ai-automation/job-application-bot-n8n/`
- `projects/ai-automation/stock-analyser-agent-n8n/`
- `projects/ai-automation/suppliersnap-n8n/`
- `projects/ai-automation/webhook-chatbot-n8n/`

Never activate a workflow until production webhook URLs, recipient addresses, scheduled triggers, and external actions have been reviewed. Use test credentials and safe recipients first.

