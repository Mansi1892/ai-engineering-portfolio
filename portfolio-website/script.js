const repoBase = "https://github.com/Mansi1892/ai-engineering-portfolio/tree/main";

const projects = [
  {
    name: "ConsultFlow AI",
    category: "agentic",
    description: "A five-gate consulting deck pipeline with institutional RAG, evaluation stages, human approvals, and Google Slides delivery.",
    tags: ["RAG", "n8n", "Gemini", "Supabase"],
    path: "projects/rag-agentic/consultflow-ai",
    image: "assets/consultflow-dashboard.png",
    alt: "ConsultFlow AI dashboard screenshot",
  },
  {
    name: "Knoxx Outbound Intelligence",
    category: "agentic",
    description: "Evidence-backed account research, fit scoring, buying-committee discovery, guarded outreach, and n8n evaluation workflows.",
    tags: ["Agents", "React", "Supabase", "n8n"],
    path: "projects/ai-automation/knoxx-outbound-intelligence-n8n",
    image: "assets/knoxx-dashboard.png",
    alt: "Knoxx outbound pipeline dashboard screenshot",
  },
  {
    name: "AI Customer Support Chatbot",
    category: "agentic",
    description: "An importable n8n workflow for intent classification, autonomous support responses, escalation, and interaction logging.",
    tags: ["n8n", "LLM", "Webhook"],
    path: "projects/ai-automation/ai-customer-support-chatbot-n8n",
    mark: "CS",
  },
  {
    name: "Webhook Chatbot Skeleton",
    category: "agentic",
    description: "A minimal LangChain-based n8n agent skeleton with a webhook interface, response handling, and extension points for tools and memory.",
    tags: ["n8n", "LangChain", "Agents"],
    path: "projects/ai-automation/webhook-chatbot-n8n",
    mark: "WH",
  },
  {
    name: "Job Application Bot",
    category: "automation",
    description: "An n8n workflow for collecting roles, matching profile criteria, tailoring application material, and sending daily digests.",
    tags: ["n8n", "Automation", "LLM"],
    path: "projects/ai-automation/job-application-bot-n8n",
    mark: "JB",
  },
  {
    name: "Resilient Lead Scoring",
    category: "automation",
    description: "A fault-tolerant CSV-to-Supabase scoring pipeline with structured LLM stages, guardrails, review queues, and a React operator UI.",
    tags: ["n8n", "Python", "React", "Supabase"],
    path: "projects/ai-automation/lead-scoring-n8n",
    mark: "LS",
  },
  {
    name: "Stock Analyser Agent",
    category: "automation",
    description: "An importable workflow for technical and sentiment analysis that produces structured stock briefs for scheduled delivery.",
    tags: ["n8n", "Market data", "LLM"],
    path: "projects/ai-automation/stock-analyser-agent-n8n",
    mark: "ST",
  },
  {
    name: "SupplierSnap",
    category: "automation",
    description: "A procurement intelligence workflow for monitoring supplier performance, flagging risks, and generating scorecards and alerts.",
    tags: ["n8n", "Risk scoring", "Automation"],
    path: "projects/ai-automation/suppliersnap-n8n",
    mark: "SS",
  },
  {
    name: "Advance Learner Hub",
    category: "application",
    description: "A React learner directory with cohort filters, profile detail, aggregate statistics, and Google Sheets CSV synchronization.",
    tags: ["React 19", "TanStack", "Cloudflare"],
    path: "projects/ai-applications/advance-learner-hub",
    mark: "AL",
  },
  {
    name: "Ask Kyo Insight",
    category: "application",
    description: "A CX intelligence prototype for natural-language exploration, anomaly surfacing, insight cards, and call evaluation.",
    tags: ["React", "TypeScript", "Supabase"],
    path: "projects/ai-applications/ask-kyo-insight",
    image: "assets/ask-kyo.png",
    alt: "Ask Kyo customer experience dashboard screenshot",
  },
  {
    name: "Call Insight Craft",
    category: "application",
    description: "A support-call evaluation interface with transcript review, quality scorecards, team routing, and KPI reporting.",
    tags: ["React", "TypeScript", "Vite"],
    path: "projects/ai-applications/call-insight-craft",
    image: "assets/call-insight.png",
    alt: "Call Insight Craft dashboard screenshot",
  },
  {
    name: "Frame Guide",
    category: "application",
    description: "A guided eyewear discovery prototype with preference capture, swipeable recommendations, wishlists, and a chatbot UI.",
    tags: ["React", "TypeScript", "UX prototype"],
    path: "projects/ai-applications/lenskart-frame-guide",
    mark: "FG",
  },
  {
    name: "Marzi Companion",
    category: "application",
    description: "A personalized wellness experience with interest onboarding, time-aware content, activity suggestions, and local preference state.",
    tags: ["React", "Hooks", "Personalization"],
    path: "projects/ai-applications/marzi-gentle-companion",
    mark: "MZ",
  },
  {
    name: "Resume AI Builder Pro",
    category: "application",
    description: "A multi-step resume tailoring prototype with job-description input, keyword mapping, editable output state, and tests.",
    tags: ["React", "Zustand", "Vitest"],
    path: "projects/ai-applications/resume-aibuilder-pro",
    image: "assets/resume-builder.png",
    alt: "Resume AI Builder application screenshot",
  },
  {
    name: "RiseUp Morning OS",
    category: "application",
    description: "A contextual alarm and morning-planning prototype spanning onboarding, priorities, personalized nudges, and accountability.",
    tags: ["React", "Context UI", "Vercel"],
    path: "projects/ai-applications/riseup-app",
    mark: "RU",
  },
  {
    name: "SentiSum Diagnostic",
    category: "application",
    description: "A lightweight pre-sales diagnostic that maps CX pain points to capabilities and calls a serverless API for report generation.",
    tags: ["JavaScript", "Vercel", "Anthropic API"],
    path: "projects/ai-applications/sentisum-diagnostic",
    image: "assets/sentisum-diagnostic.png",
    alt: "SentiSum diagnostic application screenshot",
  },
];

const projectGrid = document.querySelector("[data-project-grid]");

function projectCard(project, index) {
  const visual = project.image
    ? `<div class="project-image"><img src="${project.image}" alt="${project.alt}" loading="lazy" /><span class="project-image-label">Actual project screenshot</span></div>`
    : `<div class="project-abstract" aria-hidden="true"><span>${project.mark}</span></div>`;

  return `
    <article class="project-card" data-category="${project.category}">
      ${visual}
      <div class="project-card-body">
        <div class="project-meta">
          <span class="ownership contributed">Contributed / adapted</span>
          <span>${String(index + 2).padStart(2, "0")}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <a class="project-card-link" href="${repoBase}/${project.path}" target="_blank" rel="noreferrer">
          Inspect source <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>`;
}

if (projectGrid) {
  projectGrid.innerHTML = projects.map(projectCard).join("");
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    document.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

function closeMenu() {
  if (!menuButton || !nav) return;
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const header = document.querySelector("[data-header]");
const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 20);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
