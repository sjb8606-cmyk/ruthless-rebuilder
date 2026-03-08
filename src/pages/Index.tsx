import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { ProcessStep } from "@/components/ui/process-step";
import { FeatureCard } from "@/components/ui/feature-card";
import Layout from "@/components/layout/Layout";
import { ImpactSection } from "@/components/ui/impact-section";
import { BobExplains, BobHeroCallout, BobFinalWord } from "@/components/ui/bob-explains";
import {
  Target,
  Shield,
  FileCheck,
  Bot,
  Code2,
  Globe,
  FileText,
  Video,
  ArrowRight,
  Clock,
  Rocket,
  Mail,
  ClipboardList,
  PackageCheck,
  Users,
  Box,
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Hostile-Environment"
        titleAccent="Software"
        subtitle="AI-assisted systems designed to survive volatility, attack, and audit."
        supportingText="Fast delivery. Clear scope. Human verification."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="mailto:ruthlesstechnologies@proton.me">Email for Availability</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">See Services</Link>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-6">
          No hype. No chaos. Just work that ships.
        </p>
        <BobExplains className="mt-4 text-left max-w-2xl mx-auto">
          Most software works fine when everything is perfect. These systems are built to keep working when things go wrong — outages, bad inputs, or security issues. AI helps build them faster, but a real person checks the results before delivery.
        </BobExplains>
      </HeroSection>

      {/* Bob Hero Callout */}
      <BobHeroCallout />

      {/* Email First Banner */}
      <section className="py-6 border-y border-border bg-card/50">
        <div className="section-container text-center">
          <p className="text-sm text-muted-foreground">
            📧 Email-first workflow. No phone required.
          </p>
        </div>
      </section>

      {/* Why Ruthless */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader title="Why Ruthless" />
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <FeatureCard
                icon={Target}
                title="Scope Beats Ambition"
                description="Most projects fail from uncontrolled scope. We ship bounded deliverables with clear constraints — no endless revisions."
              />
              <BobExplains>
                Projects fail when the work keeps expanding and never finishes. We define exactly what will be delivered before we start, then complete it and hand it over. Clear boundaries keep projects on time and on budget.
              </BobExplains>
            </div>
            <div>
              <FeatureCard
                icon={Shield}
                title="Safety Over Autonomy"
                description="No rogue agents. No black boxes. Human-in-the-loop verification is built into every delivery."
              />
              <BobExplains>
                AI is used to assist the work, not run things on its own. Every important result is reviewed by a real person before it reaches you. That keeps automation useful without creating risk.
              </BobExplains>
            </div>
            <div>
              <FeatureCard
                icon={FileCheck}
                title="Proof Over Vibes"
                description="When it matters, we don't just claim. We verify, document, and hand off with evidence."
              />
              <BobExplains>
                Instead of saying something works, we show proof. You receive documentation, verification notes, and clear instructions so you know exactly what was built and how it works.
              </BobExplains>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">
              Built for Builders Who Can't Afford Chaos
            </h2>
            <BobExplains className="mb-6">
              Some businesses can tolerate software failures. Others cannot. These systems are built for situations where reliability matters because mistakes cost time, money, or reputation.
            </BobExplains>
            <p className="text-muted-foreground text-center mb-8">
              Most founders don't need more tools. They need systems that won't break under pressure.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Founders launching products under time pressure",
                "Teams who can't afford instability or scope creep",
                "Businesses that need safe automation (with human checkpoints)",
                "Operators drowning in admin work",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-sm border border-border">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6 italic">
              If you've been burned by overpromises and under-delivery — you're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Services Available Now"
            subtitle="AI accelerates delivery. Humans verify quality."
          />
          {/* Top row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <ServiceCard
                icon={Bot}
                title="Ops Assistant"
                subtitle="Automation-Enhanced VA"
                description="Inbox, scheduling, research, docs, follow-ups — human verified."
                href="/services"
              />
              <BobExplains>
                This is like having a virtual assistant supported by AI tools. The automation handles routine tasks quickly, and a human reviews the results before sending them to you.
              </BobExplains>
            </div>
            <div>
              <ServiceCard
                icon={Code2}
                title="Prompt Engineering"
                subtitle="Prompt Systems"
                description="Production-grade prompts built for real workflows — bounded, testable, and injection-aware."
                href="/prompt-engineering"
                linkText="See Proof"
              />
              <BobExplains>
                AI tools work better when they are given clear instructions. We design structured prompts so the AI produces consistent, reliable results instead of unpredictable ones.
              </BobExplains>
            </div>
            <div>
              <ServiceCard
                icon={Rocket}
                title="Backend Prototype Sprint"
                subtitle="AI / SaaS MVP Foundation"
                description="A working backend prototype in 1–2 weeks with clean handoff."
                href="/services"
              />
            </div>
          </div>
          {/* Bottom row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={FileText}
              title="Website & Business Copy"
              subtitle="Copy Systems"
              description="Fix your clarity. Remove friction. Convert more visitors."
              href="/services"
            />
            <ServiceCard
              icon={Video}
              title="Creator Support"
              subtitle="Content Systems"
              description="Repurposing, hooks, calendars, scripts — without burnout."
              href="/services"
            />
            <div>
              <ServiceCard
                icon={Box}
                title="Veridact"
                subtitle="Live"
                description="Deterministic decision verification and audit infrastructure for high-stakes AI and automation systems."
                href="https://veridact.ruthlesstechnologies.com"
                linkText="Visit Veridact"
              />
              <BobExplains>
                When AI is involved in important decisions, Veridact checks those decisions against defined rules. It also records proof so the process can be reviewed later if needed.
              </BobExplains>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products in Development */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            title="Products in Development"
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              In addition to client services, we are building a portfolio of both internal platform systems and public-facing AI products.
            </p>
            <p className="text-muted-foreground mb-8">
              Some tools are infrastructure-first. Others are designed for everyday use. All are built under the same hostile-environment doctrine.
            </p>
            <BobExplains className="text-left mb-8">
              Alongside client work, the company is building its own software products. Some are for businesses, and others are for everyday users.
            </BobExplains>
            <Button asChild size="lg">
              <Link to="/coming-soon">
                Explore products in development <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <ImpactSection />
      <div className="section-container">
        <BobExplains className="mb-8">
          A portion of verified profits goes toward causes like veteran support, elder care, and conservation. Donations are tracked and documented so they can be verified.
        </BobExplains>
      </div>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <ProcessStep
              number={1}
              icon={Mail}
              title="Email what you need"
              description="Send a short description + links/files."
            />
            <ProcessStep
              number={2}
              icon={ClipboardList}
              title="Scope + fixed price"
              description="You get a bounded deliverables list and tier recommendation."
            />
            <ProcessStep
              number={3}
              icon={PackageCheck}
              title="Delivery + verification notes"
              description="Work ships clean with Proof Pack or Proof Pack Lite where applicable."
            />
            <ProcessStep
              number={4}
              icon={Users}
              title="Optional support"
              description="If needed, we continue monthly. If not, we close clean."
            />
          </div>
          <BobExplains className="max-w-2xl mx-auto mt-8">
            <p>You send a short email explaining what you need.</p>
            <p>You receive a clear scope, price range, and timeline.</p>
            <p>The work is delivered with verification notes.</p>
            <p>Ongoing support is optional.</p>
          </BobExplains>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="mailto:ruthlesstechnologies@proton.me">
                Email to Start <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No meetings required. No sales theater.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-20">
        <div className="section-container">
          <div className="card-hostile max-w-3xl mx-auto text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold mb-3">
              Platform Products in Development
            </h2>
            <p className="text-muted-foreground mb-6">
              We're building an internal ecosystem of hostile-environment products: routing control planes, proof systems, marketplaces, and vertical planners.
            </p>
            <p className="text-sm text-muted-foreground mb-6 italic">
              Early access will be limited. No public release dates yet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/coming-soon">See Coming Soon</Link>
              </Button>
              <Button asChild>
                <Link to="/waitlist">Join Early Access Waitlist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Email First */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="Why Email-First?" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  Most founders don't want sales calls. They want clarity — fast.
                </p>
                <p className="font-medium mb-2">Email lets you:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> Send context on your schedule
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> Avoid calendar chaos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> Get a real answer, not a pitch
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">What you'll get back:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> Scoped recommendation (which tier applies)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> Fixed deliverables list
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span> Price range + timeline
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  No Zoom fatigue. No demo theater. Just clear communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Ship Something Real?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            If you need fast delivery without reckless automation, reach out by email. You'll get a scoped recommendation, fixed deliverables, and next steps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:ruthlesstechnologies@proton.me">Email Ruthless Technologies</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Clear scope. Fixed deliverables. Human verification.
          </p>
          <BobFinalWord className="mt-6" />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
