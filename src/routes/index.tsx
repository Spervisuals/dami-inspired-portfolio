import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/portfolio-hero.jpg";
import profileImage from "@/assets/profile-avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dami Osoba — UX Designer Portfolio" },
      {
        name: "description",
        content: "A dashboard-style portfolio for UX designer Dami Osoba.",
      },
      { property: "og:title", content: "Dami Osoba — UX Designer Portfolio" },
      {
        property: "og:description",
        content: "Selected work, design journey, and process from UX designer Dami Osoba.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  { label: "Home", href: "#home" },
  { label: "My Journey", href: "#journey" },
  { label: "Recent Projects", href: "#projects" },
  { label: "My Design Process", href: "#process" },
];

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
        className={`fixed inset-y-3 left-3 z-40 flex w-[13.5rem] flex-col overflow-hidden rounded-lg border border-border bg-sidebar p-3 shadow-2xl transition-transform duration-300 sm:inset-y-5 sm:left-5 lg:inset-y-6 lg:left-6 lg:w-[13.5rem] lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-[120%]"}`}
      >
        <a href="#home" className="flex items-center gap-2.5 px-1 py-11" onClick={() => setMenuOpen(false)}>
          <img
            src={profileImage}
            alt="Dami Osoba"
            width={816}
            height={816}
            className="size-11 rounded-xl object-cover"
          />
          <span className="text-sm font-medium">Dami Osoba</span>
        </a>

        <nav aria-label="Portfolio sections" className="space-y-0.5">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-md px-2 py-2.5 text-xs transition-colors ${index === 0 ? "bg-sidebar-accent text-primary" : "text-sidebar-foreground hover:bg-sidebar-accent"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-12 rounded-lg bg-secondary p-2.5">
          <div className="contact-art rounded-md px-1 py-6">
            <h2 className="text-lg font-semibold">Got a project in mind?</h2>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Shoot me an email at <span className="text-primary">damiosoba.ux@gmail.com</span>. Let&apos;s
              have a conversation.
            </p>
            <Button asChild className="mt-3 w-full bg-foreground text-background hover:bg-foreground/90">
              <a href="mailto:damiosoba.ux@gmail.com?subject=Project%20Inquiry">Email me</a>
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
          <div className="relative z-10 mb-[8vh] max-w-2xl">
            <h1 className="font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Evolve your idea
              <br />
              into its final form
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">
              I&apos;m Dami Osoba, a UX Designer based in Toronto. I have had the opportunity to design
              for top Canadian franchise organizations.
            </p>
          </div>
        </section>

        <section id="journey" className="grid scroll-mt-6 gap-6 py-6 lg:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-8 sm:p-10">
            <p className="text-xs uppercase text-primary">My Journey</p>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
              A product is just an idea till you build a prototype
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              It&apos;s hard for others to visualize what only makes sense to you. They need something
              real to understand what your idea is capable of becoming.
            </p>
          </article>
          <article id="process" className="scroll-mt-6 rounded-lg border border-border bg-card p-8 sm:p-10">
            <p className="text-xs uppercase text-primary">My Design Process</p>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl">
              Perfect your product vision before committing to development
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              Design a prototype to test ideas quickly and identify potential pitfalls before
              investing in development.
            </p>
          </article>
        </section>

        <section id="projects" className="scroll-mt-6 rounded-lg border border-border bg-card p-8 sm:p-10">
          <p className="text-xs uppercase text-primary">Selected work</p>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">Recent Projects</h2>
              <p className="mt-3 text-muted-foreground">A few products and experiences designed for ambitious teams.</p>
            </div>
            <a href="mailto:damiosoba.ux@gmail.com?subject=Project%20Inquiry" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Start a conversation <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
