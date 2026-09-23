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
        content: "Senior Product Designer turning complex problems into simple digital experiences.",
      },
      { property: "og:title", content: "Tobiloba Ademowo — Senior Product Designer" },
      {
        property: "og:description",
        content: "Selected product design work across energy, government, fintech and consumer platforms.",
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
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    name: "BoostXpress",
    summary: "Reimagining the everyday fueling experience.",
    role: "Lead Product Designer / Product Owner",
    industry: "Energy Technology / FinTech",
  },
  {
    number: "02",
    name: "CitiX",
    summary: "Making visa applications easier to submit, track and manage.",
    role: "Product Designer",
    industry: "Travel / Government Services",
  },
  {
    number: "03",
    name: "MVAA Learner's Permit System",
    summary: "Digitising a complex government service.",
    role: "Product Designer / Product Lead",
    industry: "Government / Public Services",
  },
  {
    number: "04",
    name: "Terminal One",
    summary: "Turning complex energy trading into a clearer digital workflow.",
    role: "Product Designer",
    industry: "Energy / B2B",
  },
];

const capabilities = [
  "Product Thinking",
  "Systems Thinking",
  "UX & Interaction",
  "Visual Design",
  "Prototyping",
  "Design Systems",
  "Product Strategy",
  "Collaboration",
];

const industries = ["Energy", "Government", "Fintech", "Consumer", "B2B", "Operational Systems"];

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
              className={`block rounded-md px-2 py-2.5 text-xs transition-colors ${index === 0 ? "bg-sidebar-accent text-foreground" : "text-foreground hover:bg-sidebar-accent"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <div className="rounded-lg bg-secondary p-3">
            <h2 className="text-base font-semibold">Have a complex problem worth solving?</h2>
            <p className="mt-2 text-xs leading-5 text-foreground">
              I&apos;m open to senior product design opportunities and product collaborations.
            </p>
            <Button asChild className="mt-3 w-full bg-foreground text-background hover:bg-foreground/90">
              <a href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk</a>
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
            <p className="mb-5 text-xs font-semibold uppercase text-foreground">Senior Product Designer</p>
            <p className="mb-4 text-sm font-medium uppercase text-foreground">Tobiloba Ademowo</p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              I design digital products that make complex things feel simple.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground sm:text-lg">
              I help teams transform complex operational systems into intuitive digital experiences
              across energy, government, fintech and consumer platforms.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                <a href="#work">View selected work <ArrowDownRight /></a>
              </Button>
              <Button asChild variant="outline" className="border-foreground bg-background/20 text-foreground hover:bg-foreground hover:text-background">
                <a href="#contact">Let&apos;s talk</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-6 py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase text-foreground">Selected Work</p>
          <div className="mt-5 max-w-3xl">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Products and systems designed for the real world.</h2>
            <p className="mt-5 leading-7 text-foreground">
              A selection of products and systems I&apos;ve designed across energy, government, fintech and consumer experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="group overflow-hidden rounded-lg border border-border bg-card">
                <div className="flex aspect-[16/9] items-center justify-center border-b border-border bg-secondary">
                  <div className="text-center text-foreground">
                    <p className="text-xs font-semibold uppercase">Project visual</p>
                    <p className="mt-2 font-display text-2xl font-bold">Coming soon</p>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs text-foreground">{project.number}</p>
                    <ArrowRight aria-hidden="true" className="size-5 text-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-bold">{project.name}</h3>
                  <p className="mt-3 leading-7 text-foreground">{project.summary}</p>
                  <dl className="mt-8 grid gap-5 border-t border-border pt-5 text-xs sm:grid-cols-2">
                    <div><dt className="font-semibold uppercase text-foreground">Role</dt><dd className="mt-2 text-foreground">{project.role}</dd></div>
                    <div><dt className="font-semibold uppercase text-foreground">Industry</dt><dd className="mt-2 text-foreground">{project.industry}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="grid scroll-mt-6 gap-10 border-y border-border py-20 sm:py-28 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase text-foreground">About</p>
          <div>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Designing clarity into complex systems.</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-foreground">
              <p>I&apos;m a Senior Product Designer focused on turning complex products, workflows and services into experiences people can understand and trust.</p>
              <p>I enjoy working where product design meets real-world constraints—payments, operations, government services, energy and everyday consumer needs.</p>
              <p>My approach starts with understanding the problem, bringing structure to complexity and designing experiences that work for both people and the business.</p>
            </div>
          </div>
        </section>

        <section id="capabilities" className="grid scroll-mt-6 gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase text-foreground">Capabilities</p>
            <ul className="mt-7 divide-y divide-border border-y border-border">
              {capabilities.map((item, index) => (
                <li key={item} className="flex items-center justify-between py-4 text-lg text-foreground">
                  <span>{item}</span><span className="text-xs">0{index + 1}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-foreground">Industries</p>
            <ul className="mt-7 divide-y divide-border border-y border-border">
              {industries.map((item) => <li key={item} className="py-4 text-lg text-foreground">{item}</li>)}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-6 rounded-lg border border-border bg-foreground px-7 py-16 text-background sm:px-12 sm:py-20">
          <p className="text-xs font-semibold uppercase text-background">Contact</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold sm:text-6xl">Have a complex problem worth solving?</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-background">
            I&apos;m open to Senior Product Design opportunities, product collaborations and conversations about meaningful digital products.
          </p>
          <Button asChild variant="outline" className="mt-8 border-background bg-foreground text-background hover:bg-background hover:text-foreground">
            <a href="#home">Let&apos;s talk <ArrowRight /></a>
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