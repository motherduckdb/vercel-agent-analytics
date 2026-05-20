import { rules } from "./generated-rules.js";

export type AiCategory = "crawler" | "agent" | "human_via_ai";

export interface Classification {
  category: AiCategory | null;
  name: string | null;
}

export function classify(
  userAgent: string | null | undefined,
  referer: string | null | undefined
): Classification {
  if (userAgent) {
    for (const rule of rules.user_agent_patterns) {
      if (userAgent.includes(rule.pattern)) {
        return { category: rule.category, name: rule.name };
      }
    }
  }

  if (referer) {
    for (const rule of rules.referer_patterns) {
      if (referer.includes(rule.pattern)) {
        return { category: rule.category, name: rule.name };
      }
    }
  }

  return { category: null, name: null };
}
