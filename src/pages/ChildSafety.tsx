import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import Layout from "@/components/layout/Layout";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowRight,
  Shield,
  Lock,
  Users,
  Eye,
  CheckCircle2,
  XCircle,
  Monitor,
  Smartphone,
  AlertTriangle,
  Code,
  Copy,
  Download,
  Heart,
  Mail,
} from "lucide-react";

const ChildSafety = () => {
  const keyFeatures = [
    "Immutable constitutional rules",
    "Password protection for sensitive modifications",
    "Age-appropriate safety boundaries",
    "Designed for parental supervision",
  ];

  const whatThisIsNot = [
    "Not a replacement for parenting",
    "Not a substitute for professional care",
    "Not a monitoring or surveillance tool",
    'Not a "set it and forget it" solution',
  ];

  const parentResponsibilities = [
    "Review AI interactions regularly",
    "Maintain active supervision",
    "Adjust boundaries as your child grows",
    "Seek professional help when needed",
  ];

  const desktopSteps = [
    "Download the prompt pack (HTML file or text)",
    "Open in any text editor or browser",
    "Copy the full prompt text",
    "Paste into AI system's custom instructions or system prompt field",
    "Set your parent password where indicated",
  ];

  const mobileSteps = [
    "Download the prompt pack",
    "Open in Notes app or text viewer",
    "Copy the full prompt text",
    "Paste into AI app settings or custom instructions",
    "Set your parent password where indicated",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Child Safety AI Prompt Pack"
        subtitle="A constitutionally anchored prompt system for parents. Permanently free. No signup. No tracking."
      >
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This prompt pack is provided free of charge because child safety is more important than revenue. It is shared publicly so parents, educators, and developers can use or adapt it responsibly.
        </p>
      </HeroSection>

      {/* What This Is */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            title="What This Is"
            subtitle="A parent-controlled AI prompt system for supervised child and teen AI use."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Key Features */}
            <div className="card-hostile">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Key Features</h3>
              </div>
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What This Is Not */}
            <div className="card-hostile">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="font-serif text-lg font-semibold">What This Is Not</h3>
              </div>
              <ul className="space-y-3">
                {whatThisIsNot.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 max-w-2xl mx-auto text-center">
            <p className="text-primary font-medium italic">
              This system is a guardrail — not a substitute for parental presence and judgment.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="How to Use This Prompt Pack"
            subtitle="Simple setup instructions for desktop and mobile devices."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Desktop Instructions */}
            <div className="card-hostile">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Desktop (Mac/Windows)</h3>
              </div>
              <ol className="space-y-3">
                {desktopSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Mobile Instructions */}
            <div className="card-hostile">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Mobile (Phone/Tablet)</h3>
              </div>
              <ol className="space-y-3">
                {mobileSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-8 max-w-2xl mx-auto">
            <div className="p-4 rounded-sm border border-primary/30 bg-primary/5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Critical reminder:</span> Always read the parent guide and test all protections before allowing a child to use the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            title="Important Disclaimer"
            subtitle="This system does not replace parenting, supervision, or judgment. It is a guardrail — not a substitute for presence."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Parent Responsibilities */}
            <div className="card-hostile">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Your Responsibility as a Parent</h3>
              </div>
              <ul className="space-y-3">
                {parentResponsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Eye className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Free */}
            <div className="card-hostile">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Why This Is Free</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Child safety is not monetized. This prompt pack is:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Public and free to share</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Free to adapt and modify</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">No signup required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">No tracking or hidden costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Pack Section */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="The Prompt Pack"
            subtitle="Below is the full prompt system. You can copy it directly or download as HTML."
          />

          <div className="max-w-4xl mx-auto">
            <div className="mb-6 p-4 rounded-sm border border-border bg-muted/30">
              <h4 className="font-serif font-semibold mb-2">Usage Notes</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Replace <code className="text-primary bg-primary/10 px-1 rounded">[PARENT_PASSWORD]</code> with a secure password</li>
                <li>• Adjust age ranges and restrictions as needed</li>
                <li>• Test thoroughly before deployment</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button variant="outline" className="flex-1" disabled>
                <Copy className="w-4 h-4 mr-2" />
                Copy Full Prompt Pack
              </Button>
              <Button variant="outline" className="flex-1" disabled>
                <Download className="w-4 h-4 mr-2" />
                Download Prompt Pack (HTML)
              </Button>
            </div>

            {/* Scrollable Code Container */}
            <div className="rounded-sm border border-border bg-background">
              <div className="p-3 border-b border-border bg-muted/30 flex items-center gap-2">
                <Code className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">child-safety-prompt-pack.txt</span>
              </div>
              <ScrollArea className="h-64">
                <pre className="p-4 text-sm text-muted-foreground font-mono whitespace-pre-wrap">
{`[PROMPT PACK WILL BE ADDED LATER]

This placeholder will be replaced with the full Child Safety AI Prompt Pack.

The prompt pack includes:
- Constitutional rules that cannot be overridden
- Age-appropriate content boundaries
- Password-protected modification system
- Emergency contact protocols
- Parental override mechanisms

Check back soon or email ruthlesstechnologies@proton.me for updates.`}
                </pre>
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Notes */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            title="Technical Notes for Developers"
            subtitle="Implementation details for those who want to customize or audit the system."
          />

          <div className="max-w-2xl mx-auto">
            <div className="card-hostile">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Simple password challenge, not cryptographically secure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Tested with Claude (Anthropic), ChatGPT (OpenAI), and similar LLMs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Code className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Customizable and forkable for your specific needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Report bypasses or weaknesses responsibly via email
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future SaaS */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Hosted Version in Development</h2>
            <p className="text-muted-foreground mb-6">
              We are working on a hosted version. Child safety is more important than revenue — this will either remain free or be priced only to cover operational costs. No profit will be taken.
            </p>
            <Button asChild variant="outline">
              <Link to="/coming-soon">
                See Upcoming SaaS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Questions About This System?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Email us with questions, suggestions, or improvements. No sales, no lead capture.
          </p>
          <Button asChild size="lg">
            <a href="mailto:ruthlesstechnologies@proton.me">
              <Mail className="w-4 h-4 mr-2" />
              Email Ruthless Technologies
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ChildSafety;
