import { createFileRoute } from "@tanstack/react-router";

import { ProjectCaseStudyPlaceholder } from "@/components/project-case-study-placeholder";

export const Route = createFileRoute("/projects/terminal-one")({
  head: () => ({
    meta: [
      { title: "Terminal One Case Study — Tobiloba Ademowo" },
      { name: "description", content: "Terminal One product design case study by Tobiloba Ademowo." },
      { property: "og:title", content: "Terminal One Case Study — Tobiloba Ademowo" },
      { property: "og:description", content: "Turning complex energy trading into a clearer workflow." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProjectCaseStudyPlaceholder title="Terminal One" summary="Turning complex energy trading into a clearer workflow." industry="Energy / B2B" />,
});