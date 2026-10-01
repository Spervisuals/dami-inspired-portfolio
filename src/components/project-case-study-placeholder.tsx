import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

type ProjectCaseStudyPlaceholderProps = {
  title: string;
  summary: string;
  industry: string;
};

export function ProjectCaseStudyPlaceholder({ title, summary, industry }: ProjectCaseStudyPlaceholderProps) {
  return (
    <main className="min-h-screen bg-background p-3 text-foreground sm:p-5 lg:p-6">
      <section className="flex min-h-[calc(100svh-1.5rem)] flex-col justify-between rounded-lg border border-border bg-card p-7 sm:min-h-[calc(100svh-2.5rem)] sm:p-12 lg:min-h-[calc(100svh-3rem)] lg:p-16">
        <Button asChild variant="ghost" className="w-fit px-0 text-foreground/70 hover:bg-transparent hover:text-foreground">
          <Link to="/" hash="work"><ArrowLeft aria-hidden="true" /> Back to selected work</Link>
        </Button>
        <div className="py-16">
          <p className="text-xs font-semibold uppercase text-highlight">{industry}</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/70 sm:text-xl">{summary}</p>
        </div>
        <p className="border-t border-border pt-6 text-sm text-foreground/60">Full case study coming soon.</p>
      </section>
    </main>
  );
}