import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import Layout from "@/components/layout/Layout";
import {
  ArrowRight,
  Target,
  Shield,
  FileCheck,
  Server,
  Database,
  Container,
  Cloud,
  Cpu,
  Users,
} from "lucide-react";

const Capabilities = () => {
  const doctrine = [
    {
      icon: Target,
      title: "Scope Beats Ambition",
      description: "Every project is bounded. Every deliverable is defined. No endless revisions, no scope creep.",
    },
    {
      icon: Shield,
      title: "Safety Over Autonomy",
      description: "AI accelerates, but humans verify. No black boxes. No rogue agents. Human-in-the-loop is built in.",
    },
    {
      icon: FileCheck,
      title: "Proof Over Vibes",
      description: "When it matters, we don't just claim. We verify, document, and hand off with evidence.",
    },
  ];

  const techStack = {
    backend: [
      { icon: Server, name: "REST APIs", description: "Clean, documented API architecture" },
      { icon: Database, name: "PostgreSQL", description: "Reliable relational database design" },
      { icon: Cpu, name: "Auth Systems", description: "Authentication and authorization" },
    ],
    infrastructure: [
      { icon: Container, name: "Docker", description: "Containerized deployments" },
      { icon: Cloud, name: "Cloud Infrastructure", description: "Scalable hosting solutions" },
      { icon: Users, name: "Handoff Ready", description: "Clean documentation for teams" },
    ],
  };

  return (
    <Layout>
      <HeroSection
        title="Capabilities"
        subtitle="Hostile-environment systems designed to survive volatility, attack, and audit."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="mailto:ruthlesstechnologies@proton.me">Email for Availability</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">See Services</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Doctrine */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader title="The Doctrine" />
          <div className="grid md:grid-cols-3 gap-6">
            {doctrine.map((item, index) => (
              <div key={index} className="card-hostile text-center">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applied Doctrine */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader title="Applied Doctrine" />
            <p className="text-muted-foreground mb-6">
              Our internal platforms and public systems are not experiments — they are doctrine stress-tests.
            </p>
            <p className="text-muted-foreground mb-6">
              We deliberately build in environments where failure is expensive, trust is limited, and verification is mandatory. These constraints force clarity in scope, discipline in execution, and proof at every boundary.
            </p>
            <p className="text-foreground font-medium">
              Some systems are built to scale users.
            </p>
            <p className="text-foreground font-medium">
              Others are built to scale truth.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader title="Tech Stack" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" /> Backend
              </h3>
              <div className="space-y-3">
                {techStack.backend.map((item, index) => (
                  <div key={index} className="card-hostile">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-primary" /> Infrastructure
              </h3>
              <div className="space-y-3">
                {techStack.infrastructure.map((item, index) => (
                  <div key={index} className="card-hostile">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Alternative Stacks Card */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="card-hostile">
              <h3 className="font-serif text-lg font-bold mb-2">Alternative Stacks</h3>
              <p className="text-sm text-muted-foreground">
                Other technology stacks can be supported when there is a clear operational, regulatory, or integration requirement.
                Deviations from the preferred stack are intentional, scoped, and documented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
            <SectionHeader title="AI Philosophy" />
            <p className="text-2xl font-serif font-bold mb-4 gold-gradient-text">
              AI-Assisted. Human-Verified.
            </p>
            <p className="text-muted-foreground mb-6">
              AI accelerates delivery. But every critical output is verified by a human before it ships.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "No autonomous agents without checkpoints",
                "No black-box decisions",
                "No rogue AI behavior",
                "No unverified outputs in production",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-sm border border-border">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Build Something That Survives?
          </h2>
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

export default Capabilities;
