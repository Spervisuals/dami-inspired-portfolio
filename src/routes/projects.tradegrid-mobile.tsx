import { createFileRoute } from "@tanstack/react-router";

import { ProjectCaseStudyPlaceholder } from "@/components/project-case-study-placeholder";

export const Route = createFileRoute("/projects/tradegrid-mobile")({
  head: () => ({
    meta: [
      { title: "TradeGrid Mobile Case Study — Tobiloba Ademowo" },
      { name: "description", content: "TradeGrid Mobile product design case study by Tobiloba Ademowo." },
      { property: "og:title", content: "TradeGrid Mobile Case Study — Tobiloba Ademowo" },
      { property: "og:description", content: "Energy trading, clear and on the move." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProjectCaseStudyPlaceholder title="TradeGrid Mobile" summary="Energy trading, clear and on the move." industry="Energy / B2B" />,
});