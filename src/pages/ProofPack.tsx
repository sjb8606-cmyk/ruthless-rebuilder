import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import Layout from "@/components/layout/Layout";
import {
  FileText,
  Settings,
  CheckSquare,
  AlertTriangle,
  Target,
  Camera,
  History,
  ArrowRight,
} from "lucide-react";

const ProofPack = () => {
  const proofPackContents = [
    { icon: FileText, title: "Deliverables Summary", description: "What was built or changed, in plain language." },
    { icon: Settings, title: "Setup & Handoff Instructions", description: "How to run it, configure it, or use it." },
    { icon: CheckSquare, title: "Verification Checklist", description: "What was tested, confirmed, or smoke-checked." },
    { icon: AlertTriangle, title: "Risk Notes + Known Constraints", description: "What it does. What it doesn't do. Where to be careful." },
    { icon: Target, title: "Operating Boundaries", description: "Intended use cases and explicit limitations." },
    { icon: Camera, title: "Screenshots / Demo Capture", description: "Visual proof of functionality (when useful)." },
    { icon: History, title: "Changelog of Decisions + Tradeoffs", description: "Why certain choices were made." },
  ];

  return (
    <Layout>
      <HeroSection
        title="Proof Pack"
        subtitle="Every delivery ships with verification notes, clean handoff documentation, and bounded operating constraints."
        supportingText="No mystery work."
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
          Proof over vibes. Trust is engineered.
        </p>
      </HeroSection>

      {/* What Is It */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="What a Proof Pack Is" />
            <p className="text-muted-foreground text-center mb-6">
              A Proof Pack is a bundle of verification artifacts that ships with delivery.
            </p>
            <p className="text-muted-foreground text-center mb-4">It's designed to:</p>
            <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto">
              {[
                "Reduce uncertainty after handoff",
                "Prevent drift from original intent",
                "Make operating constraints clear",
                "Provide evidence of what was tested",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-sm border border-border">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-primary italic mt-6">
              If it matters, we verify it.
            </p>
          </div>
        </div>
      </section>

      {/* Contents */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="What's Included in a Proof Pack"
            subtitle="Every Proof Pack contains:"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proofPackContents.map((item, index) => (
              <div key={index} className="card-hostile">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Versions */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader title="Two Versions" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-hostile">
              <h3 className="font-serif text-xl font-bold mb-2">Proof Pack Lite</h3>
              <p className="text-sm text-muted-foreground mb-4">(Tier 1 / Some Tier 2)</p>
              <p className="text-sm font-medium mb-3">Includes:</p>
              <ul className="space-y-2">
                {[
                  "Checklist + smoke checks",
                  "Constraints + next steps",
                  "Setup notes + handoff doc",
                ].map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card-hostile border-primary hostile-glow">
              <h3 className="font-serif text-xl font-bold mb-2">Full Proof Pack</h3>
              <p className="text-sm text-muted-foreground mb-4">(Tier 2 / Tier 3)</p>
              <p className="text-sm font-medium mb-3">Includes everything in Lite, plus:</p>
              <ul className="space-y-2">
                {[
                  "Stronger verification evidence",
                  "Expanded constraints + failure mode notes",
                  "Optional recordings / diagrams / export bundle",
                  "Controlled rollout guidance (Tier 3)",
                ].map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader title="Why This Exists" />
            <p className="text-lg text-muted-foreground mb-4">
              Most vendors ship "work."<br />
              <span className="text-foreground font-medium">Ruthless ships work + proof.</span>
            </p>
            <p className="text-muted-foreground mb-6">
              Because production reality punishes assumptions.
            </p>
            <div className="card-hostile text-left">
              <p className="text-sm text-muted-foreground mb-3">
                When you receive delivery, you shouldn't have to guess:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">"Does this actually work?"</li>
                <li className="text-muted-foreground">"What are the limitations?"</li>
                <li className="text-muted-foreground">"What happens if X fails?"</li>
              </ul>
              <p className="text-sm text-primary mt-4 font-medium">
                Proof Packs answer those questions before you ask them.
              </p>
            </div>
            <p className="text-sm italic text-muted-foreground mt-6">
              Trust is engineered, not assumed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Want Proof-Grade Delivery?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Email what you need. You'll receive fixed scope, clear deliverables, and verification notes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:ruthlesstechnologies@proton.me">
                Email Ruthless Technologies <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProofPack;
