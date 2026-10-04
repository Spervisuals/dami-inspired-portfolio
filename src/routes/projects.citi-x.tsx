import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import citiXApplyImage from "@/assets/citi-x-apply.jpg";
import citiXDocsImage from "@/assets/citi-x-docs.jpg";
import citiXImage from "@/assets/citi-x.jpg";
import portraitImage from "@/assets/tobiloba-profile-2026.png";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/projects/citi-x")({
  head: () => ({
    meta: [
      { title: "Citi X Case Study, Tobiloba Ademowo" },
      { name: "description", content: "Designing an end-to-end visa application and travel services platform." },
      { property: "og:title", content: "Citi X Case Study, Tobiloba Ademowo" },
      { property: "og:description", content: "A connected visa-processing ecosystem for travellers, agents, corporates, and administrators." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CitiXCaseStudy,
});

const chapters = [
  { id: "problem", title: "The problem" },
  { id: "thinking", title: "My thinking" },
  { id: "business", title: "The business" },
  { id: "principle", title: "Design principle" },
];

const chapterIds = chapters.map((chapter) => chapter.id);

const metadata = [
  { label: "Role", value: "Product Designer" },
  { label: "Product", value: "Citi X" },
  { label: "Users", value: "Travellers · Agents · Corporate · Admin" },
  { label: "Scope", value: "Product Strategy · UX Design · UI Design" },
  { label: "Timeline", value: "[Add timeline]" },
];

function StorySection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} data-reveal className="grid scroll-mt-24 gap-6 border-t border-border py-14 sm:py-20 lg:scroll-mt-10 lg:grid-cols-[minmax(10rem,0.42fr)_minmax(0,1fr)] lg:gap-14">
      <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className="max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">{children}</p>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-10 font-display text-xl font-semibold sm:text-2xl">{children}</h3>;
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return <blockquote className="max-w-2xl border-l-2 border-highlight pl-5 text-lg font-medium leading-8 text-foreground sm:text-xl">{children}</blockquote>;
}

function MockupPlaceholder({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-40 flex-col justify-between gap-5 rounded-lg border border-dashed border-border bg-card/50 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{label}</p>
      <p className="max-w-xl text-sm leading-6 text-foreground/60">{children}</p>
    </div>
  );
}

function Flow({ items }: { items: string[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => <div key={item} className="flex min-h-24 items-end bg-background p-5 text-sm font-medium text-foreground/85">{item}</div>)}
    </div>
  );
}

function CitiXCaseStudy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(chapterIds);
  useScrollReveal();

  return (
    <main className="min-h-screen bg-background px-3 pb-3 pt-20 text-foreground sm:px-5 sm:pb-5 sm:pt-24 lg:p-6">
      <header className="fixed inset-x-3 top-3 z-40 grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-lg border border-border bg-background/90 px-4 backdrop-blur-md sm:inset-x-5 sm:top-5 lg:hidden">
        <Link to="/" className="min-w-0 truncate text-sm font-semibold">Tobiloba Ademowo</Link>
        <span className="size-10" aria-hidden="true" />
      </header>
      <Button aria-label={menuOpen ? "Close menu" : "Open menu"} variant="secondary" size="icon" className="fixed right-5 top-5 z-50 border border-border shadow-xl sm:right-7 sm:top-7 lg:hidden" onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X /> : <Menu />}
      </Button>
      {menuOpen && <Button aria-label="Close menu overlay" variant="ghost" className="fixed inset-0 z-30 h-auto w-auto rounded-none bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)} />}

      <aside data-open={menuOpen} className="fixed inset-y-3 left-3 z-40 flex w-[14.125rem] -translate-x-[120%] flex-col overflow-y-auto rounded-lg border border-border bg-sidebar p-3 shadow-2xl transition-transform duration-300 data-[open=true]:translate-x-0 sm:inset-y-5 sm:left-5 lg:inset-y-6 lg:left-6 lg:translate-x-0">
        <Link to="/" className="flex items-center gap-2.5 px-1 py-8" onClick={() => setMenuOpen(false)}>
          <img src={portraitImage} alt="Tobiloba Ademowo" className="size-11 shrink-0 rounded-xl border border-border object-cover object-[50%_26%]" />
          <span className="text-sm font-medium">Tobiloba Ademowo</span>
        </Link>
        <nav aria-label="Portfolio navigation" className="space-y-0.5">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2.5 text-xs text-foreground transition-colors hover:bg-sidebar-accent"><ArrowLeft aria-hidden="true" className="size-3.5" /> Back to portfolio</Link>
        </nav>
        <div className="my-5 border-t border-border" />
        <p className="px-3 text-[11px] font-semibold uppercase text-foreground/50">In this case study</p>
        <nav aria-label="Case study sections" className="mt-3 space-y-0.5">
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`} aria-current={activeSection === chapter.id ? "location" : undefined} onClick={() => setMenuOpen(false)} className={`block rounded-md border-l-2 px-3 py-2 text-xs transition-colors ${activeSection === chapter.id ? "border-highlight bg-highlight-muted text-foreground" : "border-transparent text-foreground/75 hover:border-highlight/60 hover:bg-highlight-muted hover:text-foreground"}`}>{chapter.title}</a>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <div className="rounded-lg bg-secondary p-3">
            <h2 className="text-base font-semibold">Got a project in mind?</h2>
            <p className="mt-2 text-xs leading-5 text-foreground/75">I’d love to hear about it. Reach me at</p>
            <a className="mt-1 block break-all text-[13px] leading-5 text-foreground/75 underline underline-offset-2 hover:text-foreground" href="mailto:ademowotobi@gmail.com">ademowotobi@gmail.com</a>
            <Button asChild className="mt-3 w-full bg-highlight text-highlight-foreground hover:bg-highlight/90"><a href="mailto:ademowotobi@gmail.com">Let’s talk <ArrowRight aria-hidden="true" /></a></Button>
          </div>
        </div>
      </aside>

      <div className="lg:ml-[15.525rem]">
        <section className="grid min-h-[30rem] overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,1.08fr)]" data-reveal>
          <div className="flex flex-col justify-between p-7 sm:p-12 lg:p-14">
            <p className="text-xs font-semibold uppercase text-highlight">Travel / Government</p>
            <div className="my-12">
              <h1 className="font-display text-5xl font-bold leading-none sm:text-7xl">Citi X</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/75 sm:text-xl">Designing an end-to-end visa application and travel services platform.</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/60 sm:text-base">A connected ecosystem for travellers, visa agents, corporate users, and internal administrators, from registration and submission to review, payment, processing, and decision.</p>
            </div>
            <dl className="grid gap-x-6 gap-y-5 text-sm sm:grid-cols-2">
              {metadata.map((item) => <div key={item.label}><dt className="text-xs font-semibold uppercase text-foreground/50">{item.label}</dt><dd className={`mt-1.5 leading-6 ${item.value.startsWith("[") ? "text-foreground/50" : "text-foreground/85"}`}>{item.value}</dd></div>)}
            </dl>
          </div>
          <div className="self-center overflow-hidden rounded-lg bg-secondary lg:mr-8">
            <div className="aspect-[1440/1024] overflow-hidden">
              <img src={citiXImage} alt="Citi X application mockups" width={1905} height={1423} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <div className="px-1 sm:px-4">
          <StorySection id="problem" title="The problem">
            <div className="space-y-6">
              <Body>Visa processing was fragmented across too many touchpoints.</Body>
              <Body>Applying for a visa involves more than completing a form. Users need to understand which visa they need, provide supporting documents, make payments, track progress, respond to requests, and receive a decision.</Body>
              <Body>For agents and corporate users, the complexity increases further. They may manage applications for multiple travellers at once, while administrators review documents, update statuses, monitor transactions, manage users, and maintain visibility across the platform.</Body>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                {[
                  { title: "Travellers", text: "Understand visa requirements, submit documents, confirm payment, track progress, and know what happens next." },
                  { title: "Visa agents", text: "Manage client applications, documents, payments, commissions, wallet activity, transactions, and communication." },
                  { title: "Corporate users", text: "Manage multiple travellers and group activity without treating every application as an isolated transaction." },
                  { title: "Citi X admins", text: "Review applications and documents, control statuses, monitor financial activity, manage users, and trace decisions." },
                ].map((item) => <div key={item.title} className="min-h-36 bg-background p-5"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-foreground/70">{item.text}</p></div>)}
              </div>
              <PullQuote>How might we create one connected visa-processing ecosystem that makes the journey understandable for travellers, manageable for agents and corporates, and operationally controllable for Citi X?</PullQuote>
              <Body>The challenge shifted from “How do we design a visa application?” to “How do we design the entire system around the visa application?”</Body>
              <MockupPlaceholder label="Placeholder, stakeholder journey">A four-part journey map showing the connected needs of travellers, agents, corporate teams, and Citi X administrators.</MockupPlaceholder>
            </div>
          </StorySection>

          <StorySection id="thinking" title="My thinking">
            <div className="space-y-8">
              <Body>I started with the ecosystem, not individual screens.</Body>
              <Body>Instead of designing each page independently, I mapped the major actors and their relationship with the application. This exposed an important design principle: the application was the central object connecting most parts of the product.</Body>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { actor: "Traveller", flow: "Register → Apply → Upload documents → Pay → Track → Decision" },
                  { actor: "Agent", flow: "Manage clients → Apply → Documents → Payments → Commissions → Wallet" },
                  { actor: "Corporate", flow: "Manage travellers → Group applications → Documents → Payments → Tracking" },
                  { actor: "Admin", flow: "Manage users → Review → Update status → Transactions → Monitor → Configure" },
                ].map((item) => <MockupPlaceholder key={item.actor} label={item.actor}>{item.flow}</MockupPlaceholder>)}
              </div>
              <PullQuote>The application was the central object connecting most parts of the product.</PullQuote>

              <div><SubHeading>Separate financial records from wallet operations</SubHeading><Body>Treating payments, transactions, earnings, commissions, revenue, wallet activity, and invoices as separate primary destinations would create unnecessary complexity. I grouped historical financial records under Payments & Transactions and kept Wallet focused on money available to the user and wallet operations.</Body></div>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                <div className="bg-background p-6"><h4 className="font-semibold">Payments & Transactions</h4><p className="mt-2 text-sm leading-6 text-foreground/70">What financial activity has happened? Application payments, commission records, refunds, statuses, references, methods, invoices, and receipts.</p></div>
                <div className="bg-background p-6"><h4 className="font-semibold">Wallet</h4><p className="mt-2 text-sm leading-6 text-foreground/70">What money is available and what has happened to it? Balance, funding, payments, commission credits, withdrawals, and history.</p></div>
              </div>

              <div><SubHeading>Design status as a journey, not just a label</SubHeading><Body>A simple Pending, Processing, Approved, or Declined badge provides little context. A progressive tracker gives users a mental model of where they are and what comes next, reducing uncertainty throughout the process.</Body></div>
              <Flow items={["Application submitted", "Documents under review", "Embassy processing", "Decision"]} />
              <MockupPlaceholder label="Placeholder, application progress">A detailed application page with a progressive status tracker, current-stage explanation, expected processing window, and the next required action.</MockupPlaceholder>

              <div><SubHeading>Separate application review from document review</SubHeading><Body>An application can exist while individual documents are pending review, approved, or declined. Giving documents their own review interaction makes the workflow actionable and keeps the reason for any decline attached to the record.</Body></div>
              <Flow items={["Review", "Preview document", "Approve or decline", "Provide reason"]} />
              <MockupPlaceholder label="Placeholder, document review">The administrator’s document preview with approve and decline controls, including the reason field shown when a document is declined.</MockupPlaceholder>

              <div><SubHeading>Design the admin dashboard around decisions</SubHeading><Body>Instead of filling the dashboard with generic charts, I structured analytics around actual platform activity and the questions administrators needed to answer quickly.</Body></div>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                {[
                  ["Application analytics", "Totals, visa types, status distribution, and application trends."],
                  ["User analytics", "Travellers, agents, corporate users, registrations, and active users."],
                  ["Financial analytics", "Revenue, payments, commissions, wallet activity, and transaction trends."],
                  ["Operational analytics", "Applications awaiting review, document activity, processing, and system issues."],
                ].map(([title, text]) => <div key={title} className="bg-background p-5"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm leading-6 text-foreground/70">{text}</p></div>)}
              </div>
              <MockupPlaceholder label="Placeholder, admin overview">An operations dashboard combining application, user, financial, and review activity with clear attention states rather than decorative charts.</MockupPlaceholder>

              <div><SubHeading>Keep service categories consistent</SubHeading><Body>Tourism and Business Visa, Student Visa, Work and Relocation Visa, and Litigation Services stay consistent across forms, dashboards, analytics, and tables to reduce cognitive load.</Body></div>

              <div><SubHeading>Design for different levels of complexity</SubHeading><Body>The goal was not to give every user the same interface. The goal was to give each user enough functionality for their job without exposing unnecessary complexity.</Body></div>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
                {[
                  ["Individuals", "Application → Documents → Payment → Status → Decision"],
                  ["Agents", "Clients → Applications → Documents → Payments → Commissions → Wallet"],
                  ["Corporate", "Travellers → Group applications → Documents → Payments → Tracking"],
                ].map(([title, text]) => <div key={title} className="bg-background p-5"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm leading-6 text-foreground/70">{text}</p></div>)}
              </div>

              <div><SubHeading>Key design tradeoffs</SubHeading></div>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                {[
                  ["Simplicity vs. financial visibility", "Consolidate financial records while keeping Wallet focused on available money and operations."],
                  ["Status simplicity vs. operational detail", "Show major stages in a progressive tracker and keep detailed information inside the application."],
                  ["One flow vs. different user needs", "Use the application as the shared core, then tailor surrounding workflows to each role."],
                  ["Admin control vs. user transparency", "Connect internal actions to visible tracker updates and user notifications."],
                ].map(([title, text]) => <div key={title} className="bg-background p-5"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm leading-6 text-foreground/70">{text}</p></div>)}
              </div>
            </div>
          </StorySection>

          <StorySection id="business" title="The business">
            <div className="space-y-8">
              <Body>Citi X needed more than a visa application form.</Body>
              <Body>The business was building a platform for individual travellers, visa agents, and corporate customers, supported by applications, document processing, payments, commissions, wallets, user management, reporting, and analytics.</Body>
              <PullQuote>The product needed to support both customer acquisition and operational scalability.</PullQuote>
              <div><SubHeading>A platform model, not a single-user product</SubHeading><Body>The tiered direction required a flexible architecture that could introduce differentiated capabilities without rebuilding the core experience for every user type.</Body></div>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
                {[
                  ["Individuals", "Simple visa application and tracking."],
                  ["Agents", "Client management, group applications, commissions, and operational workflows."],
                  ["Corporate", "Advanced management for larger teams and multiple travellers."],
                ].map(([title, text]) => <div key={title} className="min-h-32 bg-background p-5"><h4 className="font-semibold">{title}</h4><p className="mt-2 text-sm leading-6 text-foreground/70">{text}</p></div>)}
              </div>
              <div><SubHeading>Support revenue without compromising the experience</SubHeading><Body>Payment was not treated as an isolated checkout screen. It remained connected to the application lifecycle, so users could understand what they were paying for, why they were paying it, and what happens next.</Body></div>
              <Flow items={["Application", "Fees", "Payment", "Transaction", "Receipt", "Application status"]} />
              <MockupPlaceholder label="Placeholder, payment lifecycle">Application fees, payment confirmation, receipt, and the resulting application-status update shown as one connected experience.</MockupPlaceholder>
              <div><SubHeading>Build operational scalability into the product</SubHeading><Body>Structured application management, document review, status updates, transaction records, user management, analytics, and activity history provide the operational foundation needed to manage a growing platform.</Body></div>
              <div><SubHeading>The constraint</SubHeading><Body>There were many actors, workflows, and financial concepts, but the interface still needed to feel simple. The central question became: how do we expose the right information at the right moment without making the platform feel complicated?</Body></div>
            </div>
          </StorySection>

          <StorySection id="principle" title="Design principle">
            <div className="space-y-8">
              <PullQuote>Complexity should exist in the system, not in the user’s head.</PullQuote>
              <Body>The platform may need to manage applications, documents, payments, commissions, wallets, users, statuses, and administrative controls. Each person should still see only the information required to understand their next step.</Body>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
                {[
                  ["Traveller", "What do I need to do? Where is my application? What happens next?"],
                  ["Agent", "Which clients need attention? Which applications are progressing? What have I paid and earned?"],
                  ["Administrator", "What needs attention? What is happening across the platform? Where are the operational or financial issues?"],
                ].map(([title, text]) => <div key={title} className="min-h-40 bg-background p-5"><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-foreground/70">{text}</p></div>)}
              </div>
              <MockupPlaceholder label="Placeholder, connected platform">A final system map showing how applications connect travellers, agents, corporate teams, administrators, documents, payments, wallets, and status updates.</MockupPlaceholder>
              <div className="rounded-md border border-border bg-card p-7 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Outcome</p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/75">Verified post-launch metrics will be added when available. No performance or conversion figures have been assumed.</p>
              </div>
            </div>
          </StorySection>
        </div>

        <nav aria-label="More work" data-reveal className="mt-4 flex flex-col gap-5 border-t border-border py-12 sm:flex-row sm:items-end sm:justify-between sm:py-16">
          <div><p className="mb-3 text-xs font-semibold uppercase text-highlight">More work</p><h2 className="font-display text-3xl font-semibold sm:text-4xl">Explore more projects.</h2></div>
          <Button asChild variant="outline" className="w-fit"><Link to="/" hash="work">Back to selected work <ArrowRight aria-hidden="true" /></Link></Button>
        </nav>
      </div>
    </main>
  );
}
