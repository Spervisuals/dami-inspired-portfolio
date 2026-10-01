import { createFileRoute } from "@tanstack/react-router";

import { ProjectCaseStudyPlaceholder } from "@/components/project-case-study-placeholder";

export const Route = createFileRoute("/projects/pmlconcepts")({
  head: () => ({
    meta: [
      { title: "PMLConcepts Case Study — Tobiloba Ademowo" },
      { name: "description", content: "PMLConcepts product design case study by Tobiloba Ademowo." },
      { property: "og:title", content: "PMLConcepts Case Study — Tobiloba Ademowo" },
      { property: "og:description", content: "Brand and product concept exploration." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProjectCaseStudyPlaceholder title="PMLConcepts" summary="Brand and product concept exploration." industry="Brand / Product" />,
});