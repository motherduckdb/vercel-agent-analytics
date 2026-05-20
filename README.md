# Vercel Agent Analytics

Deploy a Vercel Log Drain that classifies AI crawlers, AI agents, and visitors arriving from AI products, then writes the request stream to MotherDuck.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmotherduckdb%2Fvercel-agent-analytics&project-name=vercel-agent-analytics&repository-name=vercel-agent-analytics&env=MOTHERDUCK_TOKEN%2CVERCEL_DRAIN_SECRET&envDescription=Set+a+MotherDuck+access+token+and+a+shared+HMAC+secret+for+the+Vercel+log+drain.+The+MotherDuck+integration+can+provide+MOTHERDUCK_TOKEN.&envLink=https%3A%2F%2Fmotherduck.com%2Fdocs%2Fkey-tasks%2Fauthenticating-to-motherduck%2F&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&skippable-integrations=1&products=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22motherduck%22%2C%22productSlug%22%3A%22motherduck%22%2C%22protocol%22%3A%22storage%22%7D%5D&demo-title=Vercel+Agent+Analytics&demo-description=Deploy+a+Vercel+log+drain+collector+that+classifies+AI+crawlers+and+agents%2C+then+writes+request+analytics+to+MotherDuck.&demo-url=https%3A%2F%2Fgithub.com%2Fmotherduckdb%2Fvercel-agent-analytics&demo-image=https%3A%2F%2Fgithub.com%2Fmotherduckdb%2Fvercel-agent-analytics%2Fblob%2Fmain%2Fpublic%2Fthumbnail.svg%3Fraw%3Dtrue)

## What It Does

```
Vercel app
  |
  | NDJSON Log Drain, HMAC signed
  v
Vercel Function /api/drain
  | verify signature
  | parse + classify user agent and referer
  | write one batch insert
  v
MotherDuck <MD_DESTINATION>.<MD_TABLE>
```

- Captures request logs without adding middleware to your app.
- Classifies known AI crawlers, prompt-driven agents, and human visits from AI referers.
- Drops static assets before insert so the table stays focused on pages and API routes.
- Creates the MotherDuck database, schema, table, and `ai_requests` view automatically on first request.
- Stores raw payload JSON so you can reclassify historical traffic later.

## Deploy

Click **Deploy with Vercel**. The clone flow can install the MotherDuck integration, which may populate `MOTHERDUCK_TOKEN` for you.

Set these required environment variables:

| Variable | Description |
| --- | --- |
| `MOTHERDUCK_TOKEN` | MotherDuck access token. |
| `VERCEL_DRAIN_SECRET` | Shared HMAC secret. Use the same value when creating the Vercel Log Drain. |

Optional variables:

| Variable | Default | Description |
| --- | --- | --- |
| `MD_DESTINATION` | `agent_analytics.raw` | Target MotherDuck destination in `<database>.<schema>` form. |
| `MD_TABLE` | `vercel_request_logs` | Target table. |
| `BOTS_ONLY` | `false` | Set to `true` to persist only rows classified as AI traffic. |
| `DUCKDB_EXTENSION_DIRECTORY` | `$HOME/.duckdb/extensions` | Override DuckDB extension cache location. |

After deploy, your collector endpoint is:

```text
https://<project>.vercel.app/api/drain
```

## Configure The Log Drain

In the Vercel dashboard for the app you want to monitor:

1. Open **Project Settings**.
2. Go to **Log Drains**.
3. Add a drain with format `NDJSON`.
4. Set the endpoint to `https://<collector-project>.vercel.app/api/drain`.
5. Set the custom secret to the same value as `VERCEL_DRAIN_SECRET`.

Vercel sends batches to the collector. On a write failure, the function returns `503` so Vercel retries the batch.

## Local Development

```bash
npm install
cp .env.example .env.local
```

Set values in `.env.local`, then export them into your shell:

```bash
set -a
source .env.local
set +a
npm run dev
```

Post the signed sample payload:

```bash
./scripts/test-local.sh
```

Test a deployed function:

```bash
./scripts/test-local.sh https://<project>.vercel.app/api/drain
```

Useful checks:

```bash
npm run typecheck
npm run build
```

## Query The Data

The function provisions this default destination:

```sql
SELECT *
FROM agent_analytics.raw.vercel_request_logs
ORDER BY event_ts DESC
LIMIT 20;
```

AI-only traffic is available through the convenience view:

```sql
SELECT *
FROM agent_analytics.raw.ai_requests
ORDER BY event_ts DESC
LIMIT 20;
```

Starter Dive queries live in [`sql/02_dive_queries.sql`](sql/02_dive_queries.sql).

## Classifier Rules

[`bots.yaml`](bots.yaml) is the source of truth:

- `crawler`: background indexing or training crawlers such as `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`, `PerplexityBot`, and similar.
- `agent`: prompt-driven fetchers such as `ChatGPT-User`, `Claude-User`, `Perplexity-User`, `MistralAI-User`, and `Gemini-Deep-Research`.
- `human_via_ai`: referer matches from AI products such as ChatGPT, Claude, Perplexity, Gemini, Copilot, Phind, Meta AI, and Mistral.

Update `bots.yaml` and redeploy to change future classification. The build regenerates `src/generated-rules.ts` from the YAML before typechecking and deployment. Raw user agent and referer values remain in MotherDuck for historical reclassification.

## Files

```text
api/drain.ts              Vercel Function entry point
src/handler.ts            parsing, filtering, classification, insert orchestration
src/signature.ts          Vercel HMAC verification
src/classify.ts           generated-rule classifier
src/db.ts                 MotherDuck connection and batch insert
bots.yaml                 classifier patterns
scripts/generate-rules.mjs build-time YAML to TypeScript generator
sql/01_setup.sql          reference DDL, also run automatically by the function
sql/02_dive_queries.sql   starter MotherDuck Dive queries
scripts/test-local.sh     sign and POST sample payloads
```

## Notes

- IPv4 addresses are anonymized before insert by zeroing the last octet.
- Static assets such as images, JavaScript, CSS, fonts, and source maps are skipped.
- Delivery is at least once. If exact counts matter, deduplicate on `event_id` in queries.
- The first request after idle can pay a DuckDB/MotherDuck extension cold start.

## License

MIT
