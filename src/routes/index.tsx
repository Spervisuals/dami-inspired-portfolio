import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/portfolio-hero.jpg";
import portraitImage from "@/assets/tobiloba-profile-2026.png";
import boostxpressImage from "@/assets/boostxpress.jpg";
import mvaaImage from "@/assets/mvaa.jpg";
import citiXImage from "@/assets/citi-x.jpg";
import tradeGridImage from "@/assets/tradegrid-mobile.jpg";
import terminalOneImage from "@/assets/terminal-one.jpg";
import pmlConceptsImage from "@/assets/pml-concepts.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tobiloba Ademowo — Senior Product Designer" },
      {
        name: "description",
        content:
          "Senior Product Designer designing digital products with clarity and purpose — turning complex systems into intuitive experiences.",
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
    name: "BoostXpress",
    summary: "Reimagining the everyday fueling experience.",
    industry: "Energy / FinTech",
    image: boostxpressAsset.url,
  },
  {
    name: "MVAA Learner's Permit System",
    summary: "Digitising a complex government service end to end.",
    industry: "Government / Public Services",
    image: mvaaAsset.url,
  },
  {
    name: "Citi X",
    summary: "Making visa applications easier to submit, track and manage.",
    industry: "Travel / Government",
    image: citiXAsset.url,
  },
  {
    name: "TradeGrid Mobile",
    summary: "Energy trading, clear and on the move.",
    industry: "Energy / B2B",
    image: tradeGridAsset.url,
  },
  {
    name: "Terminal One",
    summary: "Turning complex energy trading into a clearer workflow.",
    industry: "Energy / B2B",
    image: terminalOneAsset.url,
  },
  {
    name: "PMLConcepts",
    summary: "Brand and product concept exploration.",
    industry: "Brand / Product",
    image: pmlConceptsAsset.url,
  },
];

const facts = [
  { label: "Focus", value: "Enterprise · Government · Consumer" },
  { label: "Industries", value: "Energy · FinTech · Public Services · Operations" },
  { label: "Experience", value: "8+ years designing digital products" },
  { label: "Based in", value: "🇳🇬 Lagos, Nigeria" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollReveal();

  return (
    <main className="min-h-screen bg-background px-3 pb-3 pt-20 text-foreground sm:px-5 sm:pb-5 sm:pt-24 lg:p-6">
      <header className="fixed inset-x-3 top-3 z-40 grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-border bg-background/90 px-4 backdrop-blur-md sm:inset-x-5 sm:top-5 lg:hidden">
        <a href="#home" className="min-w-0 truncate text-sm font-semibold">
          Tobiloba Ademowo
        </a>
        <span className="size-10 shrink-0" aria-hidden="true" />
      </header>
      <Button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        variant="secondary"
        size="icon"
        className="fixed right-5 top-5 z-50 border border-border shadow-xl sm:right-7 sm:top-7 lg:hidden"
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
        className="fixed inset-y-3 left-3 z-40 flex w-[14.125rem] -translate-x-[120%] flex-col overflow-y-auto rounded-lg border border-border bg-sidebar p-3 shadow-2xl transition-transform duration-300 data-[open=true]:translate-x-0 sm:inset-y-5 sm:left-5 lg:inset-y-6 lg:left-6 lg:translate-x-0"
      >
        <a href="#home" className="flex items-center gap-2.5 px-1 py-8" onClick={() => setMenuOpen(false)}>
          <img src={portraitAsset.url} alt="Tobiloba Ademowo" className="size-11 rounded-xl border border-border object-cover object-[50%_26%]" />
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
                  ? "border-foreground/70 bg-sidebar-accent text-foreground"
                  : "border-transparent text-foreground hover:bg-sidebar-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <div className="rounded-lg bg-secondary p-3">
            <h2 className="text-base font-semibold">Got a project in mind?</h2>
            <p className="mt-2 text-xs leading-5 text-foreground/75">I’d love to hear about it. Reach me at</p>
            <a className="mt-1 block break-all text-[13px] leading-5 text-foreground/75 underline underline-offset-2 hover:text-foreground" href="mailto:ademowotobi@gmail.com">ademowotobi@gmail.com</a>
            <Button asChild className="mt-3 w-full bg-highlight text-highlight-foreground hover:bg-highlight/90">
              <a href="mailto:ademowotobi@gmail.com">Let’s talk <ArrowRight aria-hidden="true" className="size-4" /></a>
            </Button>
          </div>
        </div>
      </aside>

      <div className="pb-10 lg:ml-[15.525rem]">
        <section
          id="home"
          className="hero-shade relative flex min-h-[calc(100svh-7rem)] scroll-mt-24 lg:scroll-mt-6 items-end overflow-hidden rounded-lg border border-border bg-background p-6 sm:min-h-[calc(100svh-8rem)] sm:p-10 lg:min-h-[calc(100svh-3rem)] lg:p-11"
        >
          <img
            src={heroImage}
            alt="Abstract monochrome architectural forms"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover object-[70%_0%]"
          />
          <div className="relative z-10 grid w-full items-end gap-8 pb-2 lg:grid-cols-[minmax(0,1fr)_minmax(11rem,0.38fr)] lg:gap-10">
            <div className="max-w-3xl" data-reveal>
              <p className="mb-5 text-xs font-semibold uppercase text-highlight">Senior Product Designer</p>
              <h1 className="font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-6xl xl:text-7xl">
                Designing digital products with clarity and purpose.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-foreground sm:text-lg">
                I help teams transform complex operational systems into intuitive digital experiences that
                improve adoption, usability, and business outcomes.
              </p>
            </div>
            <p className="text-xs uppercase leading-5 text-foreground/70 lg:justify-self-end lg:text-right" data-reveal>
              8+ years designing digital products · 🇳🇬 Lagos, Nigeria
            </p>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 lg:scroll-mt-6 py-20 sm:py-28">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase text-highlight">Selected Work</p>
            <div className="mt-5 max-w-3xl">
              <h2 className="font-display text-4xl font-bold sm:text-5xl">Products and systems designed for the real world.</h2>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.name}
                data-reveal
                style={{ transitionDelay: `${(index % 3) * 90}ms` }}
                className="group overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="aspect-[1440/1024] overflow-hidden border-b border-border bg-secondary">
                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase text-foreground/60">{project.industry}</p>
                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight">{project.name}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-foreground">{project.summary}</p>
                  <div className="mt-5 flex min-h-9 items-center justify-end border-t border-border pt-3.5">
                    <span className="mr-3 translate-x-2 text-xs font-semibold uppercase text-foreground/70 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      View project
                    </span>
                    <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-foreground/70 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="grid scroll-mt-24 lg:scroll-mt-6 gap-12 border-y border-border py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[24rem] overflow-hidden rounded-lg border border-border bg-secondary lg:min-h-[36rem]" data-reveal>
            <img src={portraitAsset.url} alt="Tobiloba Ademowo working on a laptop" className="absolute inset-0 h-full w-full object-cover object-[50%_34%]" />
          </div>
          <div data-reveal>
            <p className="text-xs font-semibold uppercase text-highlight">About</p>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Curiosity brought me into design. Purpose keeps me here.</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-foreground">
              <p>I began my career in graphic and brand design while studying Computer Science at Yaba College of Technology, drawn equally to how things looked and how they worked. That curiosity led me into Product Design, where I found I could combine both instincts to build things that actually improve how people get things done.</p>
              <p>Today I design across enterprise platforms, government systems and consumer products, usually where the operational complexity is high and the trust required from users is higher.</p>
            </div>
            <dl className="mt-9 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label}>
                    <dt className="text-xs font-semibold uppercase text-foreground/60">{fact.label}</dt>
                  <dd className="mt-2 text-sm text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="contact" className="contact-geometry scroll-mt-24 lg:scroll-mt-6 overflow-hidden rounded-lg border border-border px-7 py-16 text-foreground sm:px-12 sm:py-20">
          <div className="relative z-10" data-reveal>
            <p className="text-xs font-semibold uppercase text-highlight">Get in Touch</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl">Have a complex problem worth solving?</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/80">
              I'm open to Senior Product Design opportunities, product collaborations and conversations about
              meaningful digital products.
            </p>
            <Button asChild className="mt-8 bg-highlight text-highlight-foreground hover:bg-highlight/90">
              <a href="mailto:ademowotobi@gmail.com">Email Me <ArrowRight /></a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
