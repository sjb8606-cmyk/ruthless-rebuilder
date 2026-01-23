import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  FileInput,
  FileOutput,
  ShieldOff,
  Lock,
  CheckSquare,
  AlertTriangle,
  ArrowRight,
  Code,
  Sparkles,
} from "lucide-react";

const PromptEngineering = () => {
  const blueprintSteps = [
    { icon: Target, title: "Objective", description: "What the system must accomplish" },
    {
      icon: FileInput,
      title: "Inputs + Allowed Formats",
      description: "What the user provides • What formats are allowed • How untrusted inputs are handled",
    },
    {
      icon: FileOutput,
      title: "Output Contract",
      description: "Exact structure: JSON / checklist / steps / table • Deterministic formatting • Validation rules",
    },
    {
      icon: ShieldOff,
      title: "Operating Boundaries",
      description: "What it will NOT do • Explicit limitations • Scope constraints",
    },
    {
      icon: Lock,
      title: "Security Rules",
      description: "Injection resistance • Untrusted input handling • Tool-call constraints",
    },
    {
      icon: CheckSquare,
      title: "Verification Checklist",
      description: "How outputs are validated • What gets flagged for review • Quality gates",
    },
    {
      icon: AlertTriangle,
      title: "Failure Modes + Escalation Path",
      description: "How it breaks • What to do when it breaks • Escalation paths",
    },
  ];

  const promptSamples = [
    {
      id: 0,
      featured: true,
      name: "Meme Alchemist",
      version: "meme_alchemist.v1.0",
      purpose: "Turn ideas into viral meme outputs",
      outputContract: "Meme Truth + Archetype + Image Template + Caption + Propagation Notes",
      safetyModel: "Fail-closed ethos rules (no punching down; mock systems not people)",
      regenControls: "mood, generation, platform, style",
      verificationGates: "Hook strength check, clarity check, ethics check",
      promptFile: `# MEME ALCHEMIST v1.0

---

# OBJECTIVE
Transform raw ideas into platform-optimized meme content with
viral propagation potential and embedded cultural resonance.

---

# DOCTRINE ANCHORS
█████████████████████████████████████████
[REDACTED: doctrine anchors]

---

# CULTURAL PATTERN DETECTION
██████████████████████████████████████████████████████████████████████████████████
[REDACTED: cultural pattern detection rules]

---

# ARCHETYPE ENGINE
Meme Archetypes: { absurdist, relatable, satirical, meta, }
█████████████████████████████████████████
[REDACTED: scoring rubric]

---

# OUTPUT CONTRACT
Return: { meme_truth, archetype, visual_template, caption, hashtags, propagation_insight }`,
      exampleInput: `Turn this idea into memes:
"AI doesn't replace you — it reveals you."
Platform: TikTok
Mood: Satirical`,
      exampleOutput: `meme_truth: "AI is a mirror, not a mask"
archetype: satirical_mirror
visual_template: Split-screen reveal format (before/after AI usage showing same person, different execution quality)
caption: "POV: You thought AI would make you creative but it just showed you were lazy all along 💀"
hashtags: #AIexposedme #TechTok #CreatorLife #HardTruth
propagation_insight: High share potential in creator/founder circles. Self-deprecating humor + truth bomb = engagement magnet.`,
      whyMatters: [
        "Eliminates the \"blank page\" problem with structured cultural pattern matching",
        "Built-in ethics gates prevent brand-damaging outputs before they're created",
      ],
    },
    {
      id: 1,
      name: "Messy Notes → Clean Execution Plan",
      version: "notes_to_plan.v2.1",
      purpose: "Transform chaos into actionable plans",
      outputContract: "JSON: priorities[], timeline{}, risks[], next_actions[]",
      safetyModel: "Refuse if notes contain only complaints with no actionable items",
      regenControls: "urgency_weight, detail_level",
      verificationGates: "Timeline feasibility, dependency check, risk coverage",
      promptFile: `# NOTES TO PLAN v2.1

---

# OBJECTIVE
Transform unstructured notes into actionable execution plan
with priorities, timelines, risks, and next actions.

---

# CORE TRANSFORMATION LOGIC
█████████████████████████████████████████
[REDACTED: Core transformation logic]

---

# PRIORITY WEIGHTING
█████████████████████████████████████████
[REDACTED: Priority weighting algorithm]

---

# RISK ASSESSMENT
█████████████████████████████████████████
[REDACTED: Risk assessment criteria]

---

# OUTPUT FORMAT
JSON with: priorities[], timeline{}, risks[], next_actions[]`,
      exampleInput: `"need to fix the landing page, also talk to mike about backend, launch is in 2 weeks maybe? budget is tight. sarah mentioned something about SEO..."`,
      exampleOutput: `priorities: ["Backend sync (Mike)", "Landing page fixes", "SEO review"]
timeline: { deadline: '2 weeks', confidence: 'medium' }
risks: ["Budget constraint", "Unclear SEO scope"]
next_actions: ["Schedule Mike call", "Get Sarah's SEO notes"]`,
      whyMatters: [
        "Reduces decision chaos — structure emerges from messiness automatically",
        "Prevents planning drift — output contract enforces consistency every time",
      ],
    },
    {
      id: 2,
      name: "Agent Safety Prompt",
      version: "agent_safety.v3.0",
      purpose: "Enforce human checkpoints + fail-closed behavior",
      outputContract: "Action proposal + risk assessment + approval request",
      safetyModel: "HALT on uncertainty; escalate high-risk actions",
      regenControls: "risk_threshold, verbosity",
      verificationGates: "Action scope check, reversibility check, human approval gate",
      promptFile: `# AGENT SAFETY SYSTEM v3.0

---

# OPERATING BOUNDARIES
Never execute actions that:
- Cannot be reversed
- Affect external systems without approval
- Exceed defined scope

---

# RISK CLASSIFICATION
█████████████████████████████████████████
[REDACTED: Risk classification matrix]

---

# ESCALATION PROTOCOL
█████████████████████████████████████████
[REDACTED: Escalation rules]

---

# HALT CONDITIONS
█████████████████████████████████████████
[REDACTED: Halt trigger conditions]`,
      exampleInput: `"Delete all records older than 30 days from the production database"`,
      exampleOutput: `⚠️ HALT
action: "Bulk delete from production"
risk_level: HIGH
reversible: NO
requires: Human approval + backup confirmation
recommendation: "Stage in dev first, verify count, get explicit sign-off"`,
      whyMatters: [
        "Prevents catastrophic agent actions — fail-closed means no action on uncertainty",
        "Human-in-the-loop enforcement — critical decisions always require approval",
      ],
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="Prompt Engineering,"
        titleAccent="Engineered."
        subtitle="Most people write prompts like wishes. Ruthless Technologies engineers prompt systems — bounded, testable, and built for hostile reality."
        supportingText="Proof over vibes. Trust is engineered."
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

      {/* What This Page Is */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="This Is Proof. Not a Giveaway." />
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Prompts are intellectual property.
              </p>
              <p className="text-muted-foreground mb-4">
                This page is designed to do two things at once:
              </p>
              <ul className="text-muted-foreground space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Show how we engineer prompt systems (structure + discipline)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Protect the parts that make them uncopyable
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                You will see real proof: prompt architecture, operating boundaries, verification logic, sample outputs.
              </p>
              <p className="text-sm text-primary italic">
                Critical sections are intentionally redacted. We show the craft. We protect the engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="Who This Is For" />
            <div className="space-y-4 text-muted-foreground mb-6">
              <p><strong className="text-foreground">Prompts are not magic spells.</strong> They are executable systems that require structure, testing, and maintenance.</p>
              <p><strong className="text-foreground">"Just ask ChatGPT" is not a strategy.</strong> Production systems need boundaries, not improvisation.</p>
              <p><strong className="text-foreground">AI does not replace judgment.</strong> It amplifies it — which means bad prompts amplify chaos.</p>
            </div>
            
            <div className="card-hostile">
              <p className="font-medium mb-3">Best fit:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Founders building AI-powered products</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Teams running agents in production</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Operators automating workflows safely</li>
                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Anyone tired of prompts that worked once and broke later</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Non-technical is fine. That is exactly why this service exists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Blueprint */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            title="The Prompt Blueprint"
            subtitle="What Every Serious Prompt Needs"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {blueprintSteps.map((step, index) => (
              <div key={index} className="card-hostile">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-primary italic">
            Structure beats cleverness. Every time.
          </p>
        </div>
      </section>

      {/* Redaction Key */}
      <section className="py-12">
        <div className="section-container">
          <div className="max-w-xl mx-auto card-hostile text-center">
            <h3 className="font-serif text-lg font-bold mb-4">Redaction Key</h3>
            <div className="space-y-2 text-sm">
              <p><code className="bg-muted px-2 py-1 rounded text-primary">█████████</code> = Proprietary internal logic</p>
              <p><code className="bg-muted px-2 py-1 rounded text-primary">[REDACTED]</code> = Client-only components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prompt Samples */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            title="Prompt System Files (Redacted)"
            subtitle="These are real systems. We show structure and output. We redact the logic that creates competitive advantage."
          />
          <p className="text-center text-sm text-primary italic mb-12">
            Proof, not giveaways.
          </p>

          <div className="space-y-12">
            {promptSamples.map((sample) => (
              <div key={sample.id} className="card-hostile relative">
                {sample.featured && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                    <Sparkles className="w-3 h-3 mr-1" /> Featured Showcase
                  </Badge>
                )}

                <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  SAMPLE {sample.id} — "{sample.name}"
                </h3>

                {/* Metadata */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 p-4 bg-background rounded-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Version</p>
                    <p className="text-sm font-mono">{sample.version}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Purpose</p>
                    <p className="text-sm">{sample.purpose}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Output Contract</p>
                    <p className="text-sm">{sample.outputContract}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Safety Model</p>
                    <p className="text-sm">{sample.safetyModel}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Regen Controls</p>
                    <p className="text-sm font-mono">{sample.regenControls}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Verification Gates</p>
                    <p className="text-sm">{sample.verificationGates}</p>
                  </div>
                </div>

                {/* Prompt File */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Prompt File (Redacted)</h4>
                  <pre className="bg-background p-4 rounded-sm overflow-x-auto text-xs font-mono text-muted-foreground whitespace-pre-wrap">
                    {sample.promptFile}
                  </pre>
                </div>

                {/* Example Run */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-medium mb-2">Input</h4>
                    <pre className="bg-background p-4 rounded-sm text-xs font-mono text-muted-foreground whitespace-pre-wrap">
                      {sample.exampleInput}
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Output</h4>
                    <pre className="bg-primary/5 border border-primary/20 p-4 rounded-sm text-xs font-mono whitespace-pre-wrap">
                      {sample.exampleOutput}
                    </pre>
                  </div>
                </div>

                {/* Why This Matters */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-medium mb-2">Why This Matters</h4>
                  <ul className="space-y-1">
                    {sample.whyMatters.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-muted-foreground mt-4 italic">
                  Outputs shown are representative. Internal logic is protected.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Redacted */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader title="Why This Is Redacted" />
            <p className="text-muted-foreground mb-4">
              Publishing full systems would destroy client advantage, expose security logic, and enable copying without understanding.
            </p>
            <p className="text-muted-foreground mb-6">
              So we show the structure, the discipline, the quality. <span className="text-primary font-medium">We protect the engine.</span>
            </p>
            <p className="text-sm italic text-muted-foreground">
              "You don't hire a chef for the grocery list. You hire them for the recipe."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Want a Prompt System Built for Your Workflow?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            If you need custom prompt packs, content prompt systems, safe agent prompts (fail-closed), operations prompts (SOP-ready), or evaluation prompts to prevent drift — email us with your use case.
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

export default PromptEngineering;
