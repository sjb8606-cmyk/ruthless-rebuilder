import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Shield, FileCheck, MessageSquare, DollarSign, CheckCircle, XCircle } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <HeroSection
        title="About"
        titleAccent="Ruthless Technologies"
        subtitle="We build systems that survive reality — without losing our soul in the process."
        supportingText="We help individuals and businesses build reliable software systems without the chaos, confusion, or broken promises common in the industry."
      />

      {/* Single Operator */}
      <section className="py-12 section-container">
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
          A focused, single-operator studio — eliminating overhead, reducing complexity, and enabling faster, more accountable delivery.
        </p>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* What We Do */}
      <section className="py-20 section-container">
        <SectionHeader title="What We Do" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Client Services",
              icon: <MessageSquare className="h-6 w-6 text-primary" />,
              text: "Backend prototypes, prompt engineering, workflow automation, business copy, and operations support — all AI-assisted with human verification.",
            },
            {
              title: "Platform Products",
              icon: <Shield className="h-6 w-6 text-primary" />,
              text: "Veridact (decision verification), Service Bots (intake automation), Child Safety AI (free forever), and vertical planners for pet care, shelter operations, and healthcare.",
            },
            {
              title: "Engineered Integrity",
              icon: <FileCheck className="h-6 w-6 text-primary" />,
              text: "The Compassion Economy — a system that converts verified profit into accountable giving. No virtue theater, just proof.",
            },
          ].map((item) => (
            <Card key={item.title} className="card-hostile">
              <CardContent className="p-6 flex flex-col gap-3">
                {item.icon}
                <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* How We Work */}
      <section className="py-20 section-container">
        <SectionHeader title="How We Work" />
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Email-first", text: "No phone calls. No sales theater. Just clear communication." },
            { title: "Fixed scope, fixed price", text: "Agree on deliverables upfront. No hourly billing surprises." },
            { title: "Human verification", text: "AI accelerates delivery. Humans verify critical outputs." },
            { title: "Proof-grade handoff", text: "Documentation, verification notes, constraints. No mystery work." },
          ].map((item) => (
            <div key={item.title} className="card-hostile p-6">
              <h3 className="font-serif text-lg font-bold mb-2 gold-gradient-text">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Philosophy */}
      <section className="py-20 section-container">
        <SectionHeader title="The Philosophy" />
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg text-muted-foreground italic">
            "Ruthless" doesn't mean cruel. It means unyielding discipline in pursuit of what matters.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            {[
              "Scope beats ambition",
              "Safety over autonomy",
              "Proof over vibes",
              "Trust is architecture, not a claim",
            ].map((principle) => (
              <div key={principle} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{principle}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            We are ruthless toward chaos, negligence, and weak systems — not toward people.
          </p>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Who We Work With */}
      <section className="py-20 section-container">
        <SectionHeader title="Who We Work With" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card-hostile p-6">
            <h3 className="font-serif text-xl font-bold mb-4 gold-gradient-text">Best Fit</h3>
            <ul className="space-y-3">
              {[
                "Founders launching under time pressure",
                "Teams needing safe automation (with checkpoints)",
                "Businesses in regulated or liability-sensitive environments",
                "Operators overwhelmed with admin work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-hostile p-6">
            <h3 className="font-serif text-xl font-bold mb-4 text-destructive">Not a Fit</h3>
            <ul className="space-y-3">
              {[
                "Cheap labor expectations",
                "24/7 phone availability requirements",
                "Open-ended projects without scope",
                "Fully autonomous AI expectations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Compassion Economy */}
      <section className="py-20 section-container">
        <SectionHeader title="The Compassion Economy" />
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-lg text-muted-foreground">Money changes people. Success creates blind spots.</p>
          <p className="text-muted-foreground">
            The Compassion Economy is a structured system that converts verified post-tax profit into measurable impact — only after operational stability is secured.
          </p>
          <p className="text-primary font-semibold">No virtue signaling. Just proof.</p>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* Location */}
      <section className="py-16 section-container">
        <div className="flex flex-col items-center gap-2 text-center">
          <MapPin className="h-5 w-5 text-primary" />
          <p className="text-foreground font-serif text-lg">Based in New Brunswick, Canada.</p>
          <p className="text-muted-foreground text-sm">Working globally via email.</p>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto" />

      {/* CTA */}
      <section className="py-20 section-container text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Ready to build something that actually works under pressure?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Email us with what you need. You'll get clear scope, honest pricing, and fast execution.
        </p>
        <Button size="lg" asChild>
          <a href="mailto:ruthlesstechnologies@proton.me" className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" /> Email Us
          </a>
        </Button>
      </section>
    </Layout>
  );
};

export default About;
