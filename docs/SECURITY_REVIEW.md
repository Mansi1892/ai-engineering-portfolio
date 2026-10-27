# Security review

Review performed while integrating the two source repositories into this independent portfolio.

## Findings handled

| Finding | Source area | Action in this repository |
|---|---|---|
| Google-style API key embedded in an n8n workflow | ConsultFlow `wf00-rag.json` | Replaced with `REPLACE_WITH_GOOGLE_API_KEY` |
| Tracked frontend `.env` containing Supabase connection values | Ask Kyo | Excluded `.env`; added `.env.example` placeholders |
| Tracked frontend `.env` containing Supabase and demo configuration | Knoxx live app | Excluded `.env`; added `.env.example` placeholders |
| Hard-coded Supabase publishable key and n8n webhook URLs | Lead-scoring HTML/React frontends | Replaced with placeholders or required `VITE_*` environment variables |
| Generated frontend distribution containing compiled configuration | Lead scoring | Excluded `dist/`; it is reproducible from source |

No actual secret values are reproduced in this report.

## Rotation recommendation

The owners should rotate or revoke the exposed Google API key and any tracked provider keys or webhook URLs that grant access or trigger billable/production behavior. Supabase publishable/anonymous keys are designed for client use only when Row Level Security is correctly configured, but rotating them is still prudent after unintended source exposure. Service-role keys must never be used in browser code.

## Repository protections

- Root `.gitignore` excludes `.env`, local overrides, private keys, dependencies, build outputs, caches, and platform state.
- Only `.env.example` files with placeholders are retained.
- Nested Git metadata was removed.
- The GitHub Actions validation workflow scans tracked text for high-confidence token formats.

## Before publication

1. Run the documented secret scan again on the staged Git index.
2. Review n8n exports for credential values and production webhook URLs; credential IDs alone are not authentication secrets but may reveal deployment metadata.
3. Confirm all Supabase projects use Row Level Security appropriate to their client-facing keys.
4. Keep Vercel, Cloudflare, n8n, OpenAI-compatible provider, Tavily, Telegram, WhatsApp, and Supabase secrets only in their platform secret stores.
5. If any sensitive value was ever pushed to a public repository, remove it from active use; deleting it from a later commit does not revoke it.

