import { readFileSync, writeFileSync } from "node:fs";
import { parse } from "yaml";

const source = new URL("../bots.yaml", import.meta.url);
const target = new URL("../src/generated-rules.ts", import.meta.url);
const rules = parse(readFileSync(source, "utf8"));

const contents = `// Generated from bots.yaml. Do not edit by hand.
// Run npm run generate:rules after changing classifier rules.

import type { AiCategory } from "./classify.js";

export interface Rule {
  pattern: string;
  name: string;
  category: AiCategory;
}

export const rules: {
  user_agent_patterns: Rule[];
  referer_patterns: Rule[];
} = ${JSON.stringify(rules, null, 2)} as const;
`;

writeFileSync(target, contents);
