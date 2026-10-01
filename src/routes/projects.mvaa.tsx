import { createFileRoute } from "@tanstack/react-router";

import { ProjectCaseStudyPlaceholder } from "@/components/project-case-study-placeholder";

export const Route = createFileRoute("/projects/mvaa")({
  head: () => ({
    meta: [
      { title: "MVAA Learner's Permit System — Tobiloba Ademowo" },
      { name: "description", content: "MVAA Learner's Permit System product design case study by Tobiloba Ademowo." },
      { property: "og:title", content: "MVAA Learner's Permit System — Tobiloba Ademowo" },
      { property: "og:description", content: "Digitising a complex government service end to end." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProjectCaseStudyPlaceholder title="MVAA Learner's Permit System" summary="Digitising a complex government service end to end." industry="Government / Public Services" />,
});