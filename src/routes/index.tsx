import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/portfolio-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tobiloba Ademowo — Senior Product Designer" },
      {
        name: "description",
        content:
          "Senior Product Designer designing digital products that make complex things simple, useful, and valuable.",
      },
      { property: "og:title", content: "Tobiloba Ademowo — Senior Product Designer" },
      {
        property: "og:description",
        content:
          "I help teams transform complex operational systems into intuitive digital experiences across enterprise, government and consumer platforms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Selected Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    name: "BoostXpress",
    summary: "Reimagining the everyday fueling experience.",
    industry: "Energy / FinTech",
  },
  {
    number: "02",
    name: "MVAA Learner's Permit System",
    summary: "Digitising a complex government service end to end.",
    industry: "Government / Public Services",
  },
  {
    number: "03",
    name: "TradeGrid Mobile",
    summary: "Energy trading, clear and on the move.",
    industry: "Energy / B2B",
  },
  {
    number: "04",
    name: "Citi X",
    summary: "Making visa applications easier to submit, track and manage.",
    industry: "Travel / Government",
  },
  {
    number: "05",
    name: "Terminal One",
    summary: "Turning complex energy trading into a clearer workflow.",
    industry: "Energy / B2B",
  },
  {
    number: "06",
    name: "PMLConcepts",
    summary: "Brand and product concept exploration.",
    industry: "Brand / Product",
  },
];

const facts = [
  { label: "Focus", value: "Enterprise · Government · Consumer" },
  { label: "Industries", value: "Energy · FinTech · Public Services · Operations" },
  { label: "Experience", value: "8+ years designing digital products" },
  { label: "Based in", value: "🇳🇬 Lagos, Nigeria" },
];

const ORANGE = "oklch(0.70 0.18 52)";

function ProjectVisual({ index, number }: { index: number; number: string }) {
  const rotate = [-14, 9, -7, 16, -11, 7][index % 6];
  const gid = `pg-${index}`;
  return (
    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-secondary">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 160 90"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.21 0 0)" />
            <stop offset="100%" stopColor="oklch(0.10 0 0)" />
          </linearGradient>
          <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="oklch(0.97 0 0 / 0.06)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="160" height="90" fill={`url(#${gid})`} />
        <rect width="160" height="90" fill={`url(#grid-${index})`} />
        <g transform={`rotate(${rotate} 80 45)`} fill="none">
          <rect x="18" y="28" width="124" height="2" fill={`${ORANGE}`} opacity="0.95" />
          <rect x="40" y="44" width="82" height="2" fill={`${ORANGE}`} opacity="0.55" />
          <rect x="62" y="60" width="42" height="2" fill={`${ORANGE}`} opacity="0.3" />
          <circle cx="128" cy="30" r="6" fill={`${ORANGE}`} opacity="0.95" />
          <rect x="30" y="18" width="2" height="56" fill="oklch(0.97 0 0 / 0.18)" />
          <rect x="110" y="18" width="2" height="56" fill="oklch(0.97 0 0 / 0.1)" />
        </g>
      </svg>
      <span className="relative z-10 font-display text-6xl font-bold text-foreground/85">{number}</span>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background p-3 text-foreground sm:p-5 lg:p-6">
      <Button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        variant="secondary"
        size="icon"
        className="fixed right-4 top-4 z-50 border border-border shadow-xl lg:hidden"
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X /> : <Menu />}
      </Button>

      {menuOpen && (
        <button
          aria-label="Close menu overlay"
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside
        data-open={menuOpen}
        className="fixed inset-y-3 left-3 z-40 flex w-[13.5rem] -translate-x-[120%] flex-col overflow-y-auto rounded-lg border border-border bg-sidebar p-3 shadow-2xl transition-transform duration-300 data-[open=true]:translate-x-0 sm:inset-y-5 sm:left-5 lg:inset-y-6 lg:left-6 lg:w-[13.5rem] lg:translate-x-0"
      >
        <a href="#home" className="flex items-center gap-2.5 px-1 py-8" onClick={() => setMenuOpen(false)}>
          <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-foreground text-xs font-semibold text-background">
            TAS
          </span>
          <span className="text-sm font-medium">Tobiloba Ademowo</span>
        </a>

        <nav aria-label="Portfolio sections" className="space-y-0.5">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-md border-l-2 px-3 py-2.5 text-xs transition-colors ${
                index === 0
                  ? "border-highlight bg-sidebar-accent text-highlight"
                  : "border-transparent text-foreground hover:bg-sidebar-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <div className="rounded-lg bg-secondary p-3">
            <h2 className="text-base font-semibold">Have a complex problem worth solving?</h2>
            <p className="mt-2 text-xs leading-5 text-foreground">
              I'm open to senior product design opportunities and product collaborations.
            </p>
            <Button asChild className="mt-3 w-full bg-highlight text-highlight-foreground hover:bg-highlight/90">
              <a href="#contact" onClick={() => setMenuOpen(false)}>Let's talk</a>
            </Button>
          </div>
        </div>
      </aside>

      <div className="lg:ml-[14.9rem]">
        <section
          id="home"
          className="hero-shade relative flex min-h-[calc(100vh-1.5rem)] scroll-mt-6 items-end overflow-hidden rounded-lg border border-border p-6 sm:min-h-[calc(100vh-2.5rem)] sm:p-10 lg:min-h-[calc(100vh-3rem)] lg:p-11"
        >
          <img
            src={heroImage}
            alt="Abstract monochrome architectural forms"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 mb-[6vh] max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase text-highlight">Senior Product Designer</p>
            <p className="mb-4 text-sm font-medium uppercase text-foreground">Tobiloba Ademowo</p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Designing digital products that make complex things simple, useful, and valuable.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground sm:text-lg">
              I help teams transform complex operational systems into intuitive digital experiences that
              improve adoption, usability, and business outcomes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="bg-highlight text-highlight-foreground hover:bg-highlight/90">
                <a href="#work">View selected work <ArrowDownRight /></a>
              </Button>
              <Button asChild variant="outline" className="border-foreground bg-background/20 text-foreground hover:bg-foreground hover:text-background">
                <a href="#contact">Let's talk</a>
              </Button>
            </div>
            <p className="mt-6 text-xs uppercase tracking-wide text-foreground/70">
              8+ years designing digital products · 🇳🇬 Lagos, Nigeria
            </p>
          </div>
        </section>

        <section id="work" className="scroll-mt-6 py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase text-highlight">Selected Work</p>
          <div className="mt-5 max-w-3xl">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Products and systems designed for the real world.</h2>
            <p className="mt-5 leading-7 text-foreground">
              A selection of products and systems I've designed across energy, government, fintech and
              consumer experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.name} className="group overflow-hidden rounded-lg border border-border bg-card">
                <ProjectVisual index={index} number={project.number} />
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-semibold text-highlight">{project.number}</p>
                    <ArrowRight aria-hidden="true" className="size-5 text-highlight transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold">{project.name}</h3>
                  <p className="mt-3 leading-7 text-foreground">{project.summary}</p>
                  <p className="mt-6 border-t border-border pt-4 text-xs uppercase tracking-wide text-foreground/70">
                    {project.industry}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="grid scroll-mt-6 gap-12 border-y border-border py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative flex items-end overflow-hidden rounded-lg border border-border bg-secondary p-8 min-h-[16rem]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="about-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.22 0 0)" />
                  <stop offset="100%" stopColor="oklch(0.10 0 0)" />
                </linearGradient>
              </defs>
              <rect width="200" height="160" fill="url(#about-grad)" />
              <g fill="none">
                <rect x="20" y="40" width="160" height="2" fill={ORANGE} opacity="0.9" />
                <rect x="40" y="70" width="120" height="2" fill={ORANGE} opacity="0.5" />
                <rect x="60" y="100" width="80" height="2" fill={ORANGE} opacity="0.25" />
                <circle cx="160" cy="40" r="8" fill={ORANGE} opacity="0.9" />
                <rect x="100" y="20" width="2" height="120" fill="oklch(0.97 0 0 / 0.15)" />
              </g>
            </svg>
            <p className="relative z-10 font-display text-2xl font-bold text-foreground">Curiosity brought me into design.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-highlight">About</p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Curiosity brought me into design. Purpose keeps me here.</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-foreground">
              <p>I began my career in graphic and brand design while studying Computer Science at Yaba College of Technology, drawn equally to how things looked and how they worked. That curiosity led me into Product Design, where I found I could combine both instincts to build things that actually improve how people get things done.</p>
              <p>Today I design across enterprise platforms, government systems and consumer products, usually where the operational complexity is high and the trust required from users is higher.</p>
            </div>
            <dl className="mt-9 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-semibold uppercase text-highlight">{fact.label}</dt>
                  <dd className="mt-2 text-sm text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="scroll-mt-6 rounded-lg border border-highlight bg-highlight px-7 py-16 text-highlight-foreground sm:px-12 sm:py-20">
          <p className="text-xs font-semibold uppercase text-highlight-foreground/70">Get in Touch</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl">Have a complex problem worth solving?</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-highlight-foreground/90">
            I'm open to Senior Product Design opportunities, product collaborations and conversations about
            meaningful digital products.
          </p>
          <Button asChild className="mt-8 bg-background text-foreground hover:bg-background/85">
            <a href="mailto:hello@tobilobaademowo.com">Email Me <ArrowRight /></a>
          </Button>
        </section>

        <footer className="flex flex-col gap-7 px-1 py-10 text-sm text-foreground sm:flex-row sm:items-end sm:justify-between">
          <div><p className="font-semibold">Tobiloba Ademowo</p><p className="mt-1">Senior Product Designer</p></div>
          <p>Designing clarity into complexity.</p>
          <div className="flex gap-5"><a href="#work">Selected Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        </footer>
      </div>
    </main>
  );
}
