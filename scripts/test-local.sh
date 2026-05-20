#!/usr/bin/env bash
# Post the sample payload to a local or deployed collector.
#
# Usage:
#   ./test-local.sh                         # defaults to http://localhost:8787/api/drain
#   ./test-local.sh https://<project>.vercel.app/api/drain
#
# Requires VERCEL_DRAIN_SECRET, or uses the first value in VERCEL_DRAIN_SECRETS,
# so we can sign the body exactly the way Vercel signs log drain deliveries.

set -euo pipefail

URL="${1:-http://localhost:8787/api/drain}"
PAYLOAD_FILE="$(dirname "$0")/sample-payload.ndjson"

SECRET="${VERCEL_DRAIN_SECRET:-}"
if [[ -z "$SECRET" && -n "${VERCEL_DRAIN_SECRETS:-}" ]]; then
  SECRET="$(printf '%s' "$VERCEL_DRAIN_SECRETS" | tr ',' '\n' | sed -n '1s/^[[:space:]]*//;1s/[[:space:]]*$//;1p')"
fi

if [[ -z "$SECRET" ]]; then
  echo "VERCEL_DRAIN_SECRET or VERCEL_DRAIN_SECRETS is required" >&2
  exit 1
fi

SIG=$(openssl dgst -sha1 -hmac "$SECRET" -hex < "$PAYLOAD_FILE" | awk '{print $2}')

curl -sS -X POST "$URL" \
  -H "content-type: application/x-ndjson" \
  -H "x-vercel-signature: $SIG" \
  --data-binary "@$PAYLOAD_FILE"
echo
