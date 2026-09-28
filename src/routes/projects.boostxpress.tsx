import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/projects/boostxpress")({
  head: () => ({
    meta: [
      { title: "BoostXpress Case Study — Tobiloba Ademowo" },
      { name: "description", content: "Explore the BoostXpress product design case study by Tobiloba Ademowo." },
      { property: "og:title", content: "BoostXpress Case Study — Tobiloba Ademowo" },
      { property: "og:description", content: "Explore the BoostXpress product design case study by Tobiloba Ademowo." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BoostXpressCaseStudy,
});

const chapters = [
  { id: "overview", title: "Overview" },
  { id: "challenge", title: "The challenge" },
  { id: "goals", title: "Goals" },
  { id: "approach", title: "Approach" },
  { id: "process", title: "The process" },
  { id: "solution", title: "The solution" },
  { id: "outcome", title: "Outcome" },
  { id: "reflection", title: "Reflection" },
];

function DraftText({ children }: { children: string }) {
  return <p className="max-w-2xl text-base leading-8 text-foreground/55 sm:text-lg">{children}</p>;
}

function StorySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} data-reveal className="grid scroll-mt-24 gap-6 border-t border-border py-14 sm:py-20 lg:scroll-mt-10 lg:grid-cols-[minmax(10rem,0.42fr)_minmax(0,1fr)] lg:gap-14">
      <div className="flex items-start gap-4">
        <span className="pt-1 text-xs text-foreground/50">{number}</span>
        <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function BoostXpressCaseStudy() {
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollReveal();

  return (
    <main className="min-h-screen bg-background px-3 pb-3 pt-20 text-foreground sm:px-5 sm:pb-5 sm:pt-24 lg:p-6">
      <header className="fixed inset-x-3 top-3 z-40 grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-border bg-background/90 px-4 backdrop-blur-md sm:inset-x-5 sm:top-5 lg:hidden">
        <Link to="/" className="min-w-0 truncate text-sm font-semibold">Tobiloba Ademowo</Link>
        <span className="size-10" aria-hidden="true" />
      </header>
      <Button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        variant="secondary"
        size="icon"
        className="fixed right-5 top-5 z-50 border border-border shadow-xl sm:right-7 sm:top-7 lg:hidden"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X /> : <Menu />}
      </Button>
      {menuOpen && (
        <Button
          aria-label="Close menu overlay"
          variant="ghost"
          className="fixed inset-0 z-30 h-auto w-auto rounded-none bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside
        data-open={menuOpen}
        className="fixed inset-y-3 left-3 z-40 flex w-[14.125rem] -translate-x-[120%] flex-col overflow-y-auto rounded-lg border border-border bg-sidebar p-3 shadow-2xl transition-transform duration-300 data-[open=true]:translate-x-0 sm:inset-y-5 sm:left-5 lg:inset-y-6 lg:left-6 lg:translate-x-0"
      >
        <Link to="/" className="flex items-center gap-2.5 px-1 py-8" onClick={() => setMenuOpen(false)}>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-sm font-semibold">TA</span>
          <span className="text-sm font-medium">Tobiloba Ademowo</span>
        </Link>
        <nav aria-label="Portfolio navigation" className="space-y-0.5">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2.5 text-xs text-foreground transition-colors hover:bg-sidebar-accent">
            <ArrowLeft aria-hidden="true" className="size-3.5" /> Back to portfolio
          </Link>
        </nav>
        <div className="my-5 border-t border-border" />
        <p className="px-3 text-[11px] font-semibold uppercase text-foreground/50">In this case study</p>
        <nav aria-label="Case study sections" className="mt-3 space-y-0.5">
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`} onClick={() => setMenuOpen(false)} className="block rounded-md border-l-2 border-transparent px-3 py-2 text-xs text-foreground/75 transition-colors hover:border-foreground/50 hover:bg-sidebar-accent hover:text-foreground">
              {chapter.title}
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <div className="rounded-lg bg-secondary p-3">
            <h2 className="text-base font-semibold">Got a project in mind?</h2>
            <p className="mt-2 text-xs leading-5 text-foreground/75">I’d love to hear about it. Reach me at</p>
            <a className="mt-1 block break-all text-[13px] leading-5 text-foreground/75 underline underline-offset-2 hover:text-foreground" href="mailto:ademowotobi@gmail.com">ademowotobi@gmail.com</a>
            <Button asChild className="mt-3 w-full bg-highlight text-highlight-foreground hover:bg-highlight/90">
              <a href="mailto:ademowotobi@gmail.com">Let’s talk <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </aside>

      <div className="lg:ml-[15.525rem]">
        <section className="flex min-h-[25rem] flex-col justify-between rounded-lg border border-border bg-card p-7 sm:min-h-[30rem] sm:p-12 lg:p-16" data-reveal>
          <div className="flex items-center justify-between gap-4 text-xs uppercase text-foreground/60">
            <span>Case study / 01</span>
            <span>Energy / FinTech</span>
          </div>
          <div>
            <p className="mb-4 text-xs font-semibold uppercase text-highlight">Selected Work</p>
            <h1 className="font-display text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">BoostXpress</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/75 sm:text-xl">Reimagining the everyday fueling experience.</p>
          </div>
          <span className="text-xs uppercase text-foreground/50">Product design case study</span>
        </section>

        <div id="overview" className="grid scroll-mt-24 gap-5 py-5 lg:scroll-mt-10 lg:grid-cols-[minmax(0,2fr)_minmax(15rem,1fr)]">
          <section data-reveal className="min-h-56 rounded-lg border border-border bg-card p-7 sm:p-10">
            <p className="mb-8 text-xs font-semibold uppercase text-highlight">01 / Introduction</p>
            <h2 className="mb-5 font-display text-3xl font-semibold sm:text-4xl">Overview</h2>
            <DraftText>BoostXpress case study overview coming soon.</DraftText>
          </section>
          <section data-reveal className="min-h-56 rounded-lg border border-border bg-card p-7 sm:p-10">
            <p className="mb-8 text-xs font-semibold uppercase text-highlight">Project details</p>
            <h2 className="mb-5 font-display text-3xl font-semibold sm:text-4xl">What I did</h2>
            <DraftText>Role, responsibilities and collaborators to be added.</DraftText>
          </section>
        </div>

        <div className="px-1 sm:px-4">
          <StorySection id="challenge" number="02" title="The challenge">
            <DraftText>The problem statement and context will go here.</DraftText>
          </StorySection>

          <StorySection id="goals" number="03" title="Defining the goals">
            <DraftText>The project goals will go here.</DraftText>
            <div className="mt-9 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {["Goal 01", "Goal 02", "Goal 03", "Goal 04"].map((goal) => (
                <div key={goal} className="flex min-h-28 items-end bg-background p-5 text-sm text-foreground/60">{goal}</div>
              ))}
            </div>
          </StorySection>

          <StorySection id="approach" number="04" title="The approach">
            <DraftText>The thinking and approach behind the project will go here.</DraftText>
          </StorySection>

          <StorySection id="process" number="05" title="The design process">
            <DraftText>Research, exploration and iteration will go here.</DraftText>
            <div className="mt-9 grid gap-4 border-t border-border pt-7 sm:grid-cols-3">
              {["Discover", "Explore", "Refine"].map((step, index) => (
                <div key={step} className="flex items-center gap-3 text-sm text-foreground/70">
                  <span className="text-xs text-foreground/40">0{index + 1}</span>{step}
                </div>
              ))}
            </div>
          </StorySection>

          <StorySection id="solution" number="06" title="The solution">
            <DraftText>The final experience and key design decisions will go here.</DraftText>
            <div className="mt-10 space-y-0 border-t border-border">
              {["Experience", "Visual language", "Key interactions"].map((part, index) => (
                <div key={part} className="flex items-baseline gap-5 border-b border-border py-6">
                  <span className="text-xs text-foreground/40">0{index + 1}</span>
                  <h3 className="text-xl font-medium">{part}</h3>
                </div>
              ))}
            </div>
          </StorySection>

          <StorySection id="outcome" number="07" title="The outcome">
            <DraftText>Results, impact and what changed will go here.</DraftText>
          </StorySection>

          <StorySection id="reflection" number="08" title="Reflection">
            <DraftText>Lessons learned and closing thoughts will go here.</DraftText>
          </StorySection>
        </div>

        <nav aria-label="More work" data-reveal className="mt-4 flex flex-col gap-5 border-t border-border py-12 sm:flex-row sm:items-end sm:justify-between sm:py-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase text-highlight">More work</p>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Explore more projects.</h2>
          </div>
          <Button asChild variant="outline" className="w-fit">
            <Link to="/" hash="work">Back to selected work <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </nav>
      </div>
    </main>
  );
}