import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { PricingCard } from "@/components/ui/pricing-card";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { XCircle, CreditCard, ArrowRight } from "lucide-react";

const Pricing = () => {
  const contractTiers = [
    {
      tier: "Tier 1",
      title: "Foundation",
      price: "$1,250–$1,500",
      bestFor: "Audits, architecture clarity, and corrective plans.",
      includes: [
        "Written recommendations",
        '"What\'s broken / risky / missing"',
        "Corrected plan + next steps",
        "Scope boundaries + pitfalls",
        "1 revision pass (scoped)",
      ],
      commonUses: "Architecture review • Prompt systems • Workflow planning",
    },
    {
      tier: "Tier 2",
      title: "Build Sprint",
      price: "$2,500–$3,000",
      bestFor: "Fast prototypes, system setup, and shipping a usable foundation.",
      includes: [
        "Working deliverable (prototype or system setup)",
        "Documentation + handoff notes",
        "Basic verification checklist (Proof Pack Lite)",
        "1 revision pass (scoped)",
      ],
      commonUses: "Backend prototypes • Business ops systems • Creator content systems",
      popular: true,
    },
    {
      tier: "Tier 3",
      title: "Full Delivery",
      price: "$4,500–$5,500",
      bestFor: "Bigger builds, deeper scope, stronger governance, and integrations.",
      includes: [
        "Expanded build scope",
        "Stronger verification + reliability checks",
        "Full Proof Pack (where applicable)",
        "Controlled rollout guidance",
        "2 revision passes (scoped)",
      ],
      commonUses: "Larger prototypes • Multi-system installs • Integration-heavy delivery",
    },
  ];

  const promptTiers = [
    {
      tier: "Tier A",
      title: "Prompt Packs",
      subtitle: "Productized",
      price: "Low to mid three figures",
      bestFor: "Content systems, operations, ideation, structured thinking",
      delivery: "Documents or templates",
      description:
        "Pre-built, stepped-down prompt systems designed for common workflows. Built from proven internal frameworks without exposing proprietary logic.",
    },
    {
      tier: "Tier B",
      title: "Custom Prompt Systems",
      subtitle: "Workflow-Specific",
      price: "Mid to high three figures / low four figures",
      bestFor: "Business-critical workflows and repeatable operations",
      delivery: "Full prompt system with documentation",
      description:
        "Tailored prompt systems built for your specific workflow or business context. Includes discovery, iteration, and real-world testing.",
      popular: true,
    },
    {
      tier: "Tier C",
      title: "Embedded Prompt Architecture",
      subtitle: "Integrated Systems",
      price: "By inquiry",
      bestFor: "Limited availability",
      delivery: "Integrated system",
      description:
        "Deep prompt systems integrated into operations, products, or content pipelines. Built alongside existing Ruthless Technologies services.",
    },
  ];

  const exclusions = [
    "Full SaaS builds (end-to-end)",
    "Polished production-grade frontends",
    "Open-ended experimentation",
    "Unlimited revisions",
    "Long-term maintenance (unless retainer is agreed)",
    "Autonomous agents without human override",
  ];

  return (
    <Layout>
      <HeroSection
        title="Pricing That"
        titleAccent="Feels Calm"
        subtitle="Fixed scope. Fixed price. No surprise invoices."
        supportingText="Everything is bounded, delivered clean, and verified before handoff."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="mailto:ruthlesstechnologies@proton.me">Email for Availability</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#tiers">See Tiers</a>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-6">
          Clarity over confusion. Scope beats ambition. Safety is a feature.
        </p>
      </HeroSection>

      {/* Contract Services */}
      <section id="tiers" className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Contract Services (Project-Based)"
            subtitle="One-time or short-term engagements with fixed deliverables."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {contractTiers.map((tier) => (
              <PricingCard
                key={tier.tier}
                tier={tier.tier}
                title={tier.title}
                price={tier.price}
                bestFor={tier.bestFor}
                includes={tier.includes}
                commonUses={tier.commonUses}
                popular={tier.popular}
                ctaText={`Request ${tier.tier}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Engineering */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            title="Prompt Engineering"
            subtitle="We design structured prompt systems that survive real use. These are not chat tricks."
          />
          <p className="text-center text-sm text-muted-foreground mb-8">
            This is a first-class service category, not an add-on.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {promptTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`card-hostile relative flex flex-col ${
                  tier.popular ? "border-primary hostile-glow" : ""
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                    Most Common
                  </Badge>
                )}

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Prompt Engineering — {tier.tier}
                  </p>
                  <h3 className="font-serif text-xl font-bold">{tier.title}</h3>
                  <p className="text-sm text-primary">{tier.subtitle}</p>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Best for:</p>
                  <p className="text-sm text-muted-foreground">{tier.bestFor}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Delivery:</p>
                  <p className="text-sm text-muted-foreground">{tier.delivery}</p>
                </div>

                <div className="mt-auto">
                  <p className="text-sm font-medium mb-1">Price Range:</p>
                  <p className="text-lg font-bold gold-gradient-text mb-4">{tier.price}</p>

                  <Button
                    asChild
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    <a href="mailto:ruthlesstechnologies@proton.me">
                      {tier.tier === "Tier C" ? "Email for Availability" : "Start a Project"}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/prompt-engineering">
                See Proof & Samples <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              title="What's Explicitly Excluded"
              subtitle="These exclusions are features, not limitations."
            />
            <div className="grid sm:grid-cols-2 gap-3">
              {exclusions.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-card rounded-sm border border-border"
                >
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold mb-6">Payment Terms</h2>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-sm font-medium mb-1">Structure:</p>
                <p className="text-muted-foreground">50% upfront, 50% on delivery</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Methods:</p>
                <p className="text-muted-foreground">PayPal only</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Refunds:</p>
                <p className="text-muted-foreground">No refunds after work begins</p>
              </div>
            </div>

            <div className="card-hostile">
              <h3 className="font-serif text-lg font-bold mb-2">Want a quote?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Email a short description of what you need. You'll receive a scoped recommendation,
                fixed-price range, and delivery timeline.
              </p>
              <Button asChild>
                <a href="mailto:ruthlesstechnologies@proton.me">Email Ruthless Technologies</a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              Based in New Brunswick, Canada.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
