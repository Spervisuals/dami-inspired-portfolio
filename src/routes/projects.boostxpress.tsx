import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, ChartNoAxesCombined, CircleDollarSign, MapPinned, Menu, RefreshCw, X } from "lucide-react";
import { useState } from "react";

import boostxpressBuyFuelImage from "@/assets/boostxpress-buy-fuel.jpg";
import boostxpressImage from "@/assets/boostxpress.jpg";
import boostxpressSolutionImage from "@/assets/boostxpress-solution.svg";
import portraitImage from "@/assets/tobiloba-profile-2026.png";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/projects/boostxpress")({
  head: () => ({
    meta: [
      { title: "BoostXpress Case Study, Tobiloba Ademowo" },
      { name: "description", content: "Explore the BoostXpress product design case study by Tobiloba Ademowo." },
      { property: "og:title", content: "BoostXpress Case Study, Tobiloba Ademowo" },
      { property: "og:description", content: "Explore the BoostXpress product design case study by Tobiloba Ademowo." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BoostXpressCaseStudy,
});

const chapters = [
  { id: "problem", title: "The problem" },
  { id: "thinking", title: "My thinking" },
  { id: "business", title: "The business" },
  { id: "solution", title: "The solution" },
  { id: "experience", title: "Key experience" },
  { id: "ecosystem", title: "The ecosystem" },
  { id: "outcome", title: "Outcome" },
];

const chapterIds = chapters.map((chapter) => chapter.id);

const metadata = [
  { label: "Role", value: "Product Designer" },
  { label: "Company", value: "TradeGrid" },
  { label: "Platform", value: "iOS · Android · Station POS" },
  { label: "Scope", value: "Product Strategy · UX Design · UI Design · Prototyping" },
  { label: "Timeline", value: "[Add timeline]" },
];

function StorySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
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
  return (
    <blockquote className="max-w-2xl border-l-2 border-highlight pl-5 text-lg font-medium leading-8 text-foreground sm:text-xl">
      {children}
    </blockquote>
  );
}

function MockupPlaceholder({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-40 flex-col justify-between gap-5 rounded-lg border border-dashed border-border bg-card/50 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{label}</p>
      <p className="max-w-xl text-sm leading-6 text-foreground/60">{children}</p>
    </div>
  );
}

function TransactionFlow() {
  const groups = [
    { actor: "Customer", steps: ["Find station", "Select fuel", "Pay", "Receive verification code"] },
    { actor: "Station", steps: ["Verify payment", "Assign pump", "Start fueling"] },
    { actor: "Customer", steps: ["Monitor fueling", "Confirm completion", "Digital receipt"] },
  ];

  return (
    <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
      {groups.map((group, groupIndex) => (
        <div key={`${group.actor}-${groupIndex}`} className="flex flex-col bg-background p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{group.actor}</p>
          <ol className="mt-4 flex flex-col gap-1">
            {group.steps.map((step, stepIndex) => (
              <li key={step} className="flex items-baseline gap-3 text-sm leading-6 text-foreground/80">
                <span className="text-xs text-foreground/40">{groupIndex + 1}.{stepIndex + 1}</span>
                {step}
                {stepIndex < group.steps.length - 1 && <span aria-hidden="true" className="sr-only">↓</span>}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

function BoostXpressCaseStudy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(chapterIds);
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
          <img src={portraitImage} alt="Tobiloba Ademowo" className="size-11 shrink-0 rounded-xl border border-border object-cover object-[50%_26%]" />
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
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              aria-current={activeSection === chapter.id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-md border-l-2 px-3 py-2 text-xs transition-colors ${
                activeSection === chapter.id
                  ? "border-highlight bg-highlight-muted text-foreground"
                  : "border-transparent text-foreground/75 hover:border-highlight/60 hover:bg-highlight-muted hover:text-foreground"
              }`}
            >
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
        <section className="grid min-h-[30rem] overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,1.08fr)]" data-reveal>
          <div className="flex flex-col justify-between p-7 sm:p-12 lg:p-14">
            <p className="text-xs font-semibold uppercase text-highlight">Energy / FinTech</p>
            <div className="my-12">
              <h1 className="font-display text-5xl font-bold leading-none sm:text-7xl">BoostXpress</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-foreground/75 sm:text-xl">Reimagining the everyday fueling experience.</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/60 sm:text-base">A digital fueling ecosystem connecting station discovery, payments, real-time dispensing, rewards, and financial services.</p>
            </div>
            <dl className="grid gap-x-6 gap-y-5 text-sm sm:grid-cols-2">
              {metadata.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase text-foreground/50">{item.label}</dt>
                  <dd className={"mt-1.5 leading-6 " + (item.value.startsWith("[") ? "text-foreground/50" : "text-foreground/85")}>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="self-center overflow-hidden rounded-lg bg-secondary lg:mr-8">
            <div className="aspect-[1440/1024] overflow-hidden">
              <img src={boostxpressImage} alt="BoostXpress mobile application mockups" width={1024} height={768} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <div className="px-1 sm:px-4">
          <StorySection id="problem" title="The problem">
            <div className="space-y-6">
              <Body>Fueling was still a fragmented experience.</Body>
              <Body>Buying fuel is simple physically, but the experience around it is not. Customers often had to search for stations manually, arrive without knowing whether their preferred fuel was available, rely on cash or disconnected payment methods, and physically monitor the pump to confirm what they were receiving.</Body>
              <Body>For TradeGrid, the challenge went beyond the customer app. A digital payment still had to translate into a real-world station transaction, the product needed to connect these steps into one reliable experience without adding complexity for either the customer or the station attendant.</Body>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-foreground/50">The core UX challenge</p>
                <PullQuote>How might we make fuel purchasing feel as transparent and predictable digitally as it is physically?</PullQuote>
              </div>
              <TransactionFlow />
              <Body>The challenge wasn’t simply designing a payment experience, it was connecting a digital transaction to a physical fueling operation.</Body>
              <Body>The biggest trust gap appeared during fueling. Once a customer had paid, they still needed confidence that the correct product and quantity were being dispensed. This became an opportunity to make the physical fueling process visible through the customer’s phone.</Body>
              <figure className="overflow-hidden rounded-lg bg-card">
                <img src={boostxpressBuyFuelImage} alt="BoostXpress station discovery, fuel purchase, payment verification, and live dispensing screens" width={1920} height={1080} className="h-auto w-full" />
              </figure>
            </div>
          </StorySection>

          <StorySection id="thinking" title="My thinking">
            <div className="space-y-6">
              <Body>I started with the transaction, not the interface.</Body>
              <Body>Rather than designing the customer app as a collection of features, I mapped the complete journey from finding a station to completing a fuel purchase. This exposed a key insight: the experience had two connected users, the customer and the station attendant, and the success of one depended on the actions of the other.</Body>
              <p className="max-w-2xl font-medium text-foreground/85">Discover → Pay → Verify → Fuel → Confirm → Complete</p>
              <div>
                <SubHeading>Make the invisible visible</SubHeading>
                <Body>After payment, customers had little digital visibility into what was happening at the pump. I explored how the app could communicate the physical transaction in real time, leading to the live dispensing experience, fueling progress and a clear final quantity and transaction summary when dispensing ends.</Body>
              </div>
              <div>
                <SubHeading>Reduce operational complexity</SubHeading>
                <Body>On the station side, I designed the POS around the attendant’s actual workflow: verify payment → assign pump → start fueling → complete transaction. The customer and attendant therefore see different interfaces, but remain connected to the same transaction state.</Body>
              </div>
              <div className="mt-4 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
                {[
                  {
                    title: "Digital payment ≠ completed transaction",
                    body: "A payment confirmation alone wasn’t enough. The transaction still needed to move through verification, pump assignment, fueling, and completion.",
                    decision: "Treat the entire fueling journey as one connected transaction state.",
                  },
                  {
                    title: "Customers need visibility during fueling",
                    body: "The customer shouldn’t have to repeatedly check the physical pump to understand what is happening.",
                    decision: "Bring live dispensing feedback into the mobile experience.",
                  },
                  {
                    title: "One ecosystem, two experiences",
                    body: "Customers and attendants have different goals at the station.",
                    decision: "Create separate customer and POS workflows connected by the same transaction lifecycle.",
                  },
                  {
                    title: "Rewards shouldn’t complicate the core journey",
                    body: "BoostCircle, Price Match, Vouchers and Boost Credit add value, but shouldn’t interfere with the primary task of buying fuel.",
                    decision: "Keep the core fueling journey simple while layering additional value around it.",
                  },
                ].map((card) => (
                  <div key={card.title} className="flex flex-col bg-background p-6">
                    <h4 className="text-base font-semibold leading-6">{card.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-foreground/70">{card.body}</p>
                    <p className="mt-4 text-sm leading-6 text-foreground/85">
                      <span className="font-semibold uppercase text-foreground/50">Decision, </span>
                      {card.decision}
                    </p>
                  </div>
                ))}
              </div>
              <MockupPlaceholder label="Placeholder, journey map">
                Service blueprint or journey map showing the shared transaction states across the customer app and the station POS, from discovery to digital receipt.
              </MockupPlaceholder>
            </div>
          </StorySection>

          <StorySection id="business" title="The business">
            <div className="space-y-6">
              <Body>From fuel transactions to a customer ecosystem.</Body>
              <Body>TradeGrid’s opportunity wasn’t simply to digitize fuel payments. BoostXpress was designed to create an ongoing digital relationship with fuel consumers.</Body>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { goal: "Increase digital transactions", detail: "Make fuel purchases easier to initiate and track.", icon: CircleDollarSign },
                  { goal: "Improve station engagement", detail: "Help customers discover partner stations, products, and prices.", icon: MapPinned },
                  { goal: "Build retention", detail: "Use rebates, referrals, vouchers, Price Match, and campaigns to create reasons to return.", icon: RefreshCw },
                  { goal: "Create a foundation for financial products", detail: "Support future experiences such as Boost Credit and other TradeGrid services.", icon: ChartNoAxesCombined },
                ].map((item) => (
                  <div key={item.goal} className="flex min-h-48 flex-col rounded-md bg-card p-6 ring-1 ring-border">
                    <item.icon aria-hidden="true" className="size-6 text-foreground/60" />
                    <div className="mt-auto pt-8">
                    <p className="text-sm font-semibold text-foreground">{item.goal}</p>
                    <p className="mt-1.5 text-sm leading-6 text-foreground/70">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <SubHeading>The constraint</SubHeading>
                <Body>The biggest constraint was that fueling remains physical. I couldn’t redesign the pump, the station attendant’s physical workflow, or the customer’s environment. The digital product therefore had to work with the existing station operation rather than attempt to replace it, and that constraint shaped the entire product architecture.</Body>
              </div>
            </div>
          </StorySection>

          <StorySection id="solution" title="The solution">
            <div className="space-y-8">
              <Body>A connected digital fueling ecosystem.</Body>
              <figure className="overflow-hidden rounded-lg bg-card">
                <img src={boostxpressSolutionImage} alt="BoostXpress connected digital fueling ecosystem diagram" width={1920} height={902} className="h-auto w-full" />
              </figure>
              <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
                {[
                  { name: "Station discovery", detail: "Find partner stations, compare fuel prices, and check availability before arrival." },
                  { name: "Wallet", detail: "Stored value for fueling, with transfer and top-up flows." },
                  { name: "Payment", detail: "Pay from wallet, transfer, or cash, each mapped to one verification step." },
                  { name: "Live dispensing", detail: "Real-time fueling progress with a final quantity and transaction summary." },
                  { name: "Transactions", detail: "A complete, searchable history of every fuel purchase and receipt." },
                  { name: "Vouchers", detail: "Campaign and promotional vouchers applied at the point of payment." },
                  { name: "BoostCircle", detail: "Rebates and referral rewards layered around the core fueling journey." },
                  { name: "Price Match", detail: "Competitive pricing signals that keep purchases inside the ecosystem." },
                  { name: "Analytics", detail: "Station-side visibility into transactions, volumes, and attendant activity." },
                  { name: "Boost Credit", detail: "Foundation for future financial services built on transaction history." },
                ].map((screen) => (
                  <MockupPlaceholder key={screen.name} label={`Placeholder, ${screen.name}`}>
                    {screen.detail}
                  </MockupPlaceholder>
                ))}
              </div>
            </div>
          </StorySection>

          <StorySection id="experience" title="Key experience">
            <div className="space-y-8">
              <Body>Making an invisible transaction visible.</Body>
              <MockupPlaceholder label="Hero placeholder, live dispensing">
                The live dispensing screen at full size: real-time fueling progress on the customer’s phone, with the pump state mirrored in the app and a clear final quantity and transaction summary when dispensing ends.
              </MockupPlaceholder>
              <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
                {[
                  { step: "Before", detail: "Customer relies on the physical pump." },
                  { step: "Design opportunity", detail: "Bring the fueling state into the app in real time." },
                  { step: "After", detail: "Customer sees fueling progress on their phone." },
                ].map((item) => (
                  <div key={item.step} className="flex min-h-32 flex-col justify-end bg-background p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{item.step}</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/80">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </StorySection>

          <StorySection id="ecosystem" title="The ecosystem">
            <div className="space-y-8">
              <Body>Every part of the product connects to the same transaction lifecycle.</Body>
              <div className="rounded-lg bg-card p-6 sm:p-10">
                <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
                  {["Customer App", "Station POS", "Payment"].map((node, index) => (
                    <div key={node} className="contents">
                      <div className="flex min-h-24 items-center justify-center rounded-md bg-background p-5 text-center text-sm font-medium text-foreground/85 ring-1 ring-border">{node}</div>
                      {index < 2 && <ArrowRight aria-hidden="true" className="mx-auto hidden size-5 text-foreground/40 sm:block" />}
                    </div>
                  ))}
                </div>
                <ArrowDown aria-hidden="true" className="mx-auto my-5 size-5 text-foreground/40" />
                <div className="mx-auto grid max-w-xl items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
                  <div className="flex min-h-24 items-center justify-center rounded-md bg-highlight-muted p-5 text-sm font-medium ring-1 ring-highlight/40">Pump</div>
                  <ArrowRight aria-hidden="true" className="mx-auto hidden size-5 text-foreground/40 sm:block" />
                  <div className="flex min-h-24 items-center justify-center rounded-md bg-background p-5 text-sm font-medium ring-1 ring-border">Wallet</div>
                </div>
              </div>
              <MockupPlaceholder label="Placeholder, system diagram">
                A system diagram showing how the customer app, station POS, payment layer, pump, and wallet exchange transaction state in real time.
              </MockupPlaceholder>
            </div>
          </StorySection>

          <StorySection id="outcome" title="Outcome">
            <div className="space-y-8">
              <div className="rounded-md border border-border bg-card p-7 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">Verified result</p>
                <p className="mt-4 font-display text-4xl font-bold leading-none sm:text-6xl">3,000+ users</p>
                <p className="mt-3 text-sm text-foreground/70">in the first month after launch.</p>
              </div>
              <MockupPlaceholder label="Placeholder, outcomes">
                [Add other verified outcomes only, adoption, retention, or operational figures once officially approved.]
              </MockupPlaceholder>
            </div>
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
