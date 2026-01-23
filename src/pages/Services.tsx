import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import Layout from "@/components/layout/Layout";
import {
  Bot,
  Code2,
  Rocket,
  Globe,
  Video,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  linkHref?: string;
  linkText?: string;
}

const ServiceDetail = ({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  linkHref,
  linkText,
}: ServiceDetailProps) => {
  return (
    <div className="card-hostile">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold">{title}</h3>
          <p className="text-sm text-primary">{subtitle}</p>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      {linkHref && (
        <Link
          to={linkHref}
          className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
        >
          {linkText || "Learn More"} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Ops Assistant",
      subtitle: "Automation-Enhanced VA",
      description:
        "Inbox triage, scheduling, research, document preparation, and follow-ups — all human-verified before delivery.",
      features: [
        "Inbox management and prioritization",
        "Calendar and scheduling coordination",
        "Research and documentation",
        "SOP creation and maintenance",
        "Follow-up sequences and reminders",
      ],
    },
    {
      icon: Code2,
      title: "Prompt Engineering",
      subtitle: "Production-Grade Prompt Systems",
      description:
        "We build prompt systems — not chat tricks. Bounded, testable, injection-aware, and designed to survive production reality.",
      features: [
        "Fail-closed safety rules",
        "Output contracts with deterministic formatting",
        "Verification checklists and quality gates",
        "Operating boundaries and scope constraints",
        "Human sign-off on all production prompts",
      ],
      linkHref: "/prompt-engineering",
      linkText: "See Proof",
    },
    {
      icon: Rocket,
      title: "Backend Prototype Sprint",
      subtitle: "AI / SaaS MVP Foundation",
      description:
        "A working backend prototype in 1–2 weeks with clean handoff. Postgres, Docker, Auth, REST API scaffolding.",
      features: [
        "Database schema and migrations",
        "Authentication and authorization",
        "REST API endpoints",
        "Docker containerization",
        "Documentation and handoff notes",
      ],
    },
    {
      icon: Globe,
      title: "Website & Business Copy",
      subtitle: "Copy Systems",
      description:
        "Fix your clarity. Remove friction. Convert more visitors. Homepage, pricing pages, FAQ builders, and more.",
      features: [
        "Homepage messaging clarity",
        "Pricing page optimization",
        "FAQ and documentation",
        "Value proposition refinement",
        "Conversion-focused copywriting",
      ],
    },
    {
      icon: Video,
      title: "Creator Support",
      subtitle: "Content Systems",
      description:
        "Content repurposing, hooks, calendars, scripts — without burnout. Systematize your content creation.",
      features: [
        "Content repurposing workflows",
        "Hook and script templates",
        "Content calendar planning",
        "Platform-specific adaptation",
        "Engagement optimization",
      ],
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="Systems That Survive"
        titleAccent="Production"
        subtitle="No hype. No black boxes. Just systems that work under pressure."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="mailto:ruthlesstechnologies@proton.me">Email for Availability</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/pricing">See Pricing</Link>
          </Button>
        </div>
      </HeroSection>

      <section className="py-20">
        <div className="section-container">
          <div className="space-y-8">
            {services.map((service, index) => (
              <ServiceDetail key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Email what you need. You'll receive a scoped recommendation, tier placement, and fixed deliverables list.
          </p>
          <Button asChild size="lg">
            <a href="mailto:ruthlesstechnologies@proton.me">
              Email Ruthless Technologies <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
