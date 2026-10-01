import { createFileRoute } from "@tanstack/react-router";

import { ProjectCaseStudyPlaceholder } from "@/components/project-case-study-placeholder";

export const Route = createFileRoute("/projects/citi-x")({
  head: () => ({
    meta: [
      { title: "Citi X Case Study — Tobiloba Ademowo" },
      { name: "description", content: "Citi X product design case study by Tobiloba Ademowo." },
      { property: "og:title", content: "Citi X Case Study — Tobiloba Ademowo" },
      { property: "og:description", content: "Making visa applications easier to submit, track and manage." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProjectCaseStudyPlaceholder title="Citi X" summary="Making visa applications easier to submit, track and manage." industry="Travel / Government" />,
});