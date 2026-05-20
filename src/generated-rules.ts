// Generated from bots.yaml. Do not edit by hand.
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
} = {
  "user_agent_patterns": [
    {
      "pattern": "GPTBot",
      "name": "GPTBot",
      "category": "crawler"
    },
    {
      "pattern": "OAI-SearchBot",
      "name": "OAI-SearchBot",
      "category": "crawler"
    },
    {
      "pattern": "ChatGPT-User",
      "name": "ChatGPT-User",
      "category": "agent"
    },
    {
      "pattern": "ChatGPT Agent",
      "name": "ChatGPT-Agent",
      "category": "agent"
    },
    {
      "pattern": "Operator",
      "name": "OpenAI-Operator",
      "category": "agent"
    },
    {
      "pattern": "ClaudeBot",
      "name": "ClaudeBot",
      "category": "crawler"
    },
    {
      "pattern": "Claude-SearchBot",
      "name": "Claude-SearchBot",
      "category": "crawler"
    },
    {
      "pattern": "Claude-User",
      "name": "Claude-User",
      "category": "agent"
    },
    {
      "pattern": "Claude-Web",
      "name": "Claude-Web",
      "category": "agent"
    },
    {
      "pattern": "anthropic-ai",
      "name": "anthropic-ai",
      "category": "crawler"
    },
    {
      "pattern": "Google-Extended",
      "name": "Google-Extended",
      "category": "crawler"
    },
    {
      "pattern": "GoogleOther",
      "name": "GoogleOther",
      "category": "crawler"
    },
    {
      "pattern": "Google-CloudVertexBot",
      "name": "Google-CloudVertexBot",
      "category": "agent"
    },
    {
      "pattern": "Google-NotebookLM",
      "name": "Google-NotebookLM",
      "category": "agent"
    },
    {
      "pattern": "NotebookLM",
      "name": "Google-NotebookLM",
      "category": "agent"
    },
    {
      "pattern": "Gemini-Deep-Research",
      "name": "Gemini-Deep-Research",
      "category": "agent"
    },
    {
      "pattern": "GoogleAgent-Mariner",
      "name": "Google-Mariner",
      "category": "agent"
    },
    {
      "pattern": "Google-Agent",
      "name": "Google-Agent",
      "category": "agent"
    },
    {
      "pattern": "Meta-ExternalAgent",
      "name": "Meta-ExternalAgent",
      "category": "crawler"
    },
    {
      "pattern": "meta-externalagent",
      "name": "Meta-ExternalAgent",
      "category": "crawler"
    },
    {
      "pattern": "Meta-ExternalFetcher",
      "name": "Meta-ExternalFetcher",
      "category": "agent"
    },
    {
      "pattern": "meta-externalfetcher",
      "name": "Meta-ExternalFetcher",
      "category": "agent"
    },
    {
      "pattern": "FacebookBot",
      "name": "FacebookBot",
      "category": "crawler"
    },
    {
      "pattern": "Applebot-Extended",
      "name": "Applebot-Extended",
      "category": "crawler"
    },
    {
      "pattern": "Amazonbot",
      "name": "Amazonbot",
      "category": "crawler"
    },
    {
      "pattern": "Amzn-SearchBot",
      "name": "Amzn-SearchBot",
      "category": "crawler"
    },
    {
      "pattern": "Amzn-User",
      "name": "Amzn-User",
      "category": "agent"
    },
    {
      "pattern": "AmazonBuyForMe",
      "name": "AmazonBuyForMe",
      "category": "agent"
    },
    {
      "pattern": "NovaAct",
      "name": "NovaAct",
      "category": "agent"
    },
    {
      "pattern": "bedrockbot",
      "name": "bedrockbot",
      "category": "agent"
    },
    {
      "pattern": "PerplexityBot",
      "name": "PerplexityBot",
      "category": "crawler"
    },
    {
      "pattern": "Perplexity-User",
      "name": "Perplexity-User",
      "category": "agent"
    },
    {
      "pattern": "MistralAI-User",
      "name": "MistralAI-User",
      "category": "agent"
    },
    {
      "pattern": "cohere-ai",
      "name": "cohere-ai",
      "category": "agent"
    },
    {
      "pattern": "cohere-training-data-crawler",
      "name": "cohere-training-data-crawler",
      "category": "crawler"
    },
    {
      "pattern": "DeepSeekBot",
      "name": "DeepSeekBot",
      "category": "crawler"
    },
    {
      "pattern": "Bytespider",
      "name": "Bytespider",
      "category": "crawler"
    },
    {
      "pattern": "TikTokSpider",
      "name": "TikTokSpider",
      "category": "crawler"
    },
    {
      "pattern": "PanguBot",
      "name": "PanguBot",
      "category": "crawler"
    },
    {
      "pattern": "PetalBot",
      "name": "PetalBot",
      "category": "crawler"
    },
    {
      "pattern": "YandexAdditional",
      "name": "YandexAdditional",
      "category": "crawler"
    },
    {
      "pattern": "ICC-Crawler",
      "name": "ICC-Crawler",
      "category": "crawler"
    },
    {
      "pattern": "DuckAssistBot",
      "name": "DuckAssistBot",
      "category": "crawler"
    },
    {
      "pattern": "YouBot",
      "name": "YouBot",
      "category": "crawler"
    },
    {
      "pattern": "Bravebot",
      "name": "Bravebot",
      "category": "crawler"
    },
    {
      "pattern": "ExaBot",
      "name": "ExaBot",
      "category": "crawler"
    },
    {
      "pattern": "PhindBot",
      "name": "PhindBot",
      "category": "crawler"
    },
    {
      "pattern": "kagi-fetcher",
      "name": "Kagi",
      "category": "agent"
    },
    {
      "pattern": "AddSearchBot",
      "name": "AddSearchBot",
      "category": "crawler"
    },
    {
      "pattern": "Andibot",
      "name": "Andibot",
      "category": "crawler"
    },
    {
      "pattern": "LinerBot",
      "name": "LinerBot",
      "category": "agent"
    },
    {
      "pattern": "CCBot",
      "name": "CCBot",
      "category": "crawler"
    },
    {
      "pattern": "AI2Bot",
      "name": "AI2Bot",
      "category": "crawler"
    },
    {
      "pattern": "Ai2Bot-Dolma",
      "name": "AI2Bot-Dolma",
      "category": "crawler"
    },
    {
      "pattern": "LAIONDownloader",
      "name": "LAIONDownloader",
      "category": "crawler"
    },
    {
      "pattern": "img2dataset",
      "name": "img2dataset",
      "category": "crawler"
    },
    {
      "pattern": "ImagesiftBot",
      "name": "ImagesiftBot",
      "category": "crawler"
    },
    {
      "pattern": "FirecrawlAgent",
      "name": "FirecrawlAgent",
      "category": "agent"
    },
    {
      "pattern": "TavilyBot",
      "name": "TavilyBot",
      "category": "agent"
    },
    {
      "pattern": "LinkupBot",
      "name": "LinkupBot",
      "category": "agent"
    },
    {
      "pattern": "Devin",
      "name": "Devin",
      "category": "agent"
    },
    {
      "pattern": "Manus-User",
      "name": "Manus-User",
      "category": "agent"
    },
    {
      "pattern": "Crawl4AI",
      "name": "Crawl4AI",
      "category": "agent"
    },
    {
      "pattern": "ApifyBot",
      "name": "ApifyBot",
      "category": "agent"
    },
    {
      "pattern": "Diffbot",
      "name": "Diffbot",
      "category": "crawler"
    },
    {
      "pattern": "SemrushBot-OCOB",
      "name": "Semrush-ContentShake",
      "category": "crawler"
    },
    {
      "pattern": "KlaviyoAIBot",
      "name": "KlaviyoAIBot",
      "category": "crawler"
    },
    {
      "pattern": "Webzio-Extended",
      "name": "Webzio-Extended",
      "category": "crawler"
    },
    {
      "pattern": "Timpibot",
      "name": "Timpibot",
      "category": "crawler"
    }
  ],
  "referer_patterns": [
    {
      "pattern": "chatgpt.com",
      "name": "ChatGPT",
      "category": "human_via_ai"
    },
    {
      "pattern": "chat.openai.com",
      "name": "ChatGPT",
      "category": "human_via_ai"
    },
    {
      "pattern": "claude.ai",
      "name": "Claude",
      "category": "human_via_ai"
    },
    {
      "pattern": "gemini.google.com",
      "name": "Gemini",
      "category": "human_via_ai"
    },
    {
      "pattern": "notebooklm.google.com",
      "name": "NotebookLM",
      "category": "human_via_ai"
    },
    {
      "pattern": "copilot.microsoft.com",
      "name": "Copilot",
      "category": "human_via_ai"
    },
    {
      "pattern": "perplexity.ai",
      "name": "Perplexity",
      "category": "human_via_ai"
    },
    {
      "pattern": "meta.ai",
      "name": "Meta-AI",
      "category": "human_via_ai"
    },
    {
      "pattern": "you.com",
      "name": "You.com",
      "category": "human_via_ai"
    },
    {
      "pattern": "phind.com",
      "name": "Phind",
      "category": "human_via_ai"
    },
    {
      "pattern": "kagi.com",
      "name": "Kagi",
      "category": "human_via_ai"
    },
    {
      "pattern": "poe.com",
      "name": "Poe",
      "category": "human_via_ai"
    },
    {
      "pattern": "t3.chat",
      "name": "T3-Chat",
      "category": "human_via_ai"
    },
    {
      "pattern": "chat.deepseek.com",
      "name": "DeepSeek",
      "category": "human_via_ai"
    },
    {
      "pattern": "chat.mistral.ai",
      "name": "LeChat",
      "category": "human_via_ai"
    },
    {
      "pattern": "grok.com",
      "name": "Grok",
      "category": "human_via_ai"
    },
    {
      "pattern": "grok.x.ai",
      "name": "Grok",
      "category": "human_via_ai"
    }
  ]
} as const;
