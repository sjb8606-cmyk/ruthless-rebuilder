import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import Layout from "@/components/layout/Layout";
import {
  ArrowRight,
  Heart,
  Scale,
  ShieldCheck,
  Receipt,
  Wallet,
  Building2,
  TrendingUp,
  PiggyBank,
  Landmark,
} from "lucide-react";

const CompassionEconomy = () => {
  const threeLaws = [
    {
      icon: ShieldCheck,
      title: "Survival First",
      description: "The business must be stable before any giving. No heroic gestures from shaky ground.",
    },
    {
      icon: TrendingUp,
      title: "Profit Only",
      description: "Giving comes from verified post-tax profit, not revenue. Real surplus, not projections.",
    },
    {
      icon: Receipt,
      title: "Receipts Always",
      description: "Every dollar out is tracked and accountable. No invisible charity. Proof or it didn't happen.",
    },
  ];

  const gates = [
    { name: "Runway Gate", description: "Minimum 3 months operating expenses in reserve" },
    { name: "Tax Gate", description: "Tax obligations fully funded" },
    { name: "Margin Gate", description: "Healthy profit margins maintained" },
    { name: "Cashflow Gate", description: "Positive cashflow for 3 consecutive months" },
    { name: "Debt Gate", description: "No high-interest debt obligations" },
  ];

  const accounts = [
    { icon: Building2, name: "Operating", description: "Day-to-day business expenses" },
    { icon: Landmark, name: "Tax", description: "Reserved for tax obligations" },
    { icon: ShieldCheck, name: "Runway", description: "Emergency reserve fund" },
    { icon: TrendingUp, name: "Growth", description: "Investment in business development" },
    { icon: Heart, name: "Compassion Fund", description: "Regulated giving account" },
  ];

  return (
    <Layout>
      <HeroSection
        title="The Compassion"
        titleAccent="Economy"
        subtitle="A regulated system that converts a controlled percentage of verified post-tax profit into measurable impact — governed by gates, discipline, and receipts."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/story">Read the Full Story</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">See Services</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Definition */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader title="What Is the Compassion Economy?" />
            <p className="text-lg text-muted-foreground mb-6">
              <span className="text-foreground font-medium">Compassion isn't charity. It's a regulated output of profit.</span>
            </p>
            <p className="text-muted-foreground mb-4">
              Most companies donate randomly — or not at all. Giving becomes a PR exercise or an afterthought.
            </p>
            <p className="text-muted-foreground">
              The Compassion Economy is different. It's an internal operating system that makes giving <span className="text-primary">systematic, disciplined, and accountable.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Laws */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader title="The 3 Laws" />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {threeLaws.map((law, index) => (
              <div key={index} className="card-hostile text-center">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <law.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">
                  Law {index + 1}: {law.title}
                </h3>
                <p className="text-sm text-muted-foreground">{law.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gates */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="The Gates"
              subtitle="Before any giving happens, the business must pass all gates. If any gate fails, the system enters Fortress Mode — all giving pauses until stability returns."
            />
            <div className="space-y-3">
              {gates.map((gate, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-sm border border-border">
                  <div className="w-8 h-8 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{gate.name}</h4>
                    <p className="text-sm text-muted-foreground">{gate.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="card-hostile mt-6 text-center">
              <Scale className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Fortress Mode:</span> If any gate fails, giving pauses until all gates pass again. This protects both the business and the consistency of future giving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Accounts */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="The 5 Accounts"
            subtitle="Every dollar is allocated with intention. No mystery spending."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {accounts.map((account, index) => (
              <div key={index} className="card-hostile text-center">
                <account.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-serif font-semibold mb-1">{account.name}</h4>
                <p className="text-xs text-muted-foreground">{account.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <SectionHeader title="Why This Matters" />
            <p className="text-muted-foreground mb-4">
              Money changes people. Success corrupts judgment. Comfort breeds apathy.
            </p>
            <p className="text-muted-foreground mb-6">
              The Compassion Economy is a <span className="text-foreground font-medium">firewall for the soul</span> — a system designed to ensure that if this business ever succeeds at scale, a portion of that success is systematically converted into real impact.
            </p>
            <p className="text-sm italic text-primary">
              No virtue signaling. No empty promises. Just regulated, verifiable giving with receipts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Want to Work with a Company That Plans for Integrity?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            The Compassion Economy is just one part of how we build systems that survive reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:ruthlesstechnologies@proton.me">
                Email Ruthless Technologies <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/story">Read the Full Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompassionEconomy;
