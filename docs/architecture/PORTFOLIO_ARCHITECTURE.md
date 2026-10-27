# Architecture patterns across the portfolio

The projects in this repository are independent applications and workflows rather than one deployable monolith. This document highlights the repeated engineering patterns they demonstrate.

## 1. Full-stack AI application

Smart Meal AI is the most complete application architecture in the repository.

```mermaid
flowchart TB
    Browser[React / TanStack client] -->|REST /api| FastAPI[FastAPI application]
    FastAPI --> Auth[Password and profile flows]
    FastAPI --> Planner[Meal planning orchestration]
    Planner --> Model[OpenAI-compatible model]
    Planner --> Retrieval[Recipe database + Tavily search]
    Planner --> Validation[Diet, budget, nutrition, variety guards]
    FastAPI --> Supabase[(Supabase PostgreSQL)]
    FastAPI --> Telegram[Telegram integration]
    FastAPI --> WhatsApp[WhatsApp Cloud API integration]
    Telegram --> FastAPI
    WhatsApp --> FastAPI
```

Important decisions visible in the source:

- Model output is normalized into a structured weekly plan before persistence.
- Deterministic dietary checks and replacements surround probabilistic generation.
- The application stores plan versions and recent meals, allowing regeneration without losing history and reducing repetition.
- External approval is optional. Users without a configured messaging channel follow a browser-only auto-approval path.
- Credits, support tickets, password reset state, and administrator operations are stored as application data rather than browser-only mock state.

## 2. Gate-based agent pipeline

ConsultFlow AI separates an open-ended deliverable into approved stages.

```mermaid
flowchart LR
    Sources[Documents / Drive] --> RAG[Chunk, embed, retrieve]
    Brief[Discovery brief] --> Research[Research agent]
    RAG --> Research
    Research --> H1{Human approval}
    H1 --> QA[QA / evaluator]
    QA --> Story[Storyline agent]
    RAG --> Story
    Story --> H2{Human approval}
    H2 --> Slides[Google Slides delivery]
```

The workflow JSON is the executable artifact. The included screenshots document a frontend, but the source repository did not contain that frontend implementation in this project directory; this repository does not claim otherwise.

## 3. Evidence-backed outbound orchestration

Knoxx Outbound Intelligence combines deterministic data contracts, agent stages, external providers, and explicit safety controls.

```mermaid
flowchart LR
    UI[React operator UI] --> Edge[Supabase Edge Functions]
    Edge --> Intake[n8n intake]
    Intake --> Research[Evidence + fit agent]
    Research --> Contacts[Buying committee agent]
    Contacts --> Draft[Outreach strategy agent]
    Draft --> Approval{Human approval}
    Approval --> SafeSend[Safe send adapter]
    SafeSend --> Events[Engagement controller]
    Events --> DB[(PostgreSQL + RLS)]
    DB --> UI
```

This project contains the strongest examples of idempotency, safe test delivery, organization-level stop rules, golden evaluation datasets, and contract tests.

## 4. Resilient batch automation

The lead-scoring project treats malformed input and model failure as expected workflow states.

```mermaid
flowchart LR
    CSV[Messy CSV] --> Parse[Tolerant parse]
    Parse --> Validate[Deterministic validation]
    Validate --> Classify[LLM classification]
    Classify --> Guard[Output guardrail]
    Guard --> Score[Deterministic score]
    Score --> Review{Ambiguous?}
    Review -->|Yes| Judge[LLM judge]
    Review -->|No| Summary[LLM summary]
    Judge --> Summary
    Summary --> DB[(Supabase)]
    DB --> Queue[Human review UI]
```

## Cross-cutting principles

1. **Use models for judgment, not basic computation.** Email parsing, score calculation, permissions, and data validation should remain deterministic.
2. **Persist state between stages.** Long-running or externally reviewed workflows need durable IDs, versions, and resumable status.
3. **Make human approval a first-class transition.** Approval should be modeled in the state machine, not handled as an informal side channel.
4. **Design for partial failure.** A provider error should produce a visible, recoverable state instead of silently dropping work or terminating a batch.
5. **Separate browser-safe configuration from server secrets.** Publishable client keys still belong in environment configuration; service-role and model credentials never belong in frontend code.

