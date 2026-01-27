import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Bot,
  Calendar,
  Sparkles,
  Box,
  Store,
  Shield,
  Hammer,
  GraduationCap,
  Stethoscope,
  ChefHat,
  Clock,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  stage: "ready" | "prototype" | "concept" | "dream";
  linkHref?: string;
  linkText?: string;
}

const ProductCard = ({ icon: Icon, name, description, stage, linkHref, linkText }: ProductCardProps) => {
  const stageColors = {
    ready: "bg-green-500/20 text-green-400 border-green-500/30",
    prototype: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    concept: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    dream: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  };

  const stageLabels = {
    ready: "Ready Soon",
    prototype: "Prototype Phase",
    concept: "Concept",
    dream: "Long-Term Vision",
  };

  return (
    <div className="card-hostile">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <Badge variant="outline" className={stageColors[stage]}>
          {stageLabels[stage]}
        </Badge>
      </div>
      <h3 className="font-serif font-semibold mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
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

const ComingSoon = () => {
  const readyProducts = [
    {
      icon: Bot,
      name: "Service Bots",
      description: "Automation-enhanced virtual assistants with human verification checkpoints.",
    },
    {
      icon: Calendar,
      name: "Pet Planner AI",
      description: "Intelligent scheduling and care coordination for pet owners.",
    },
    {
      icon: Sparkles,
      name: "Delight Engine",
      description: "Content optimization and engagement prediction system.",
    },
  ];

  const prototypeProducts = [
    {
      icon: Shield,
      name: "Child Safety AI Prompt Pack (Hosted SaaS)",
      description: "A managed, web-based version of our free Child Safety AI Prompt Pack. No downloads, no setup — just safe, supervised AI access for children. Child safety comes first. This system will either remain free or be priced only to cover operational costs. There is no profit motive.",
      linkHref: "/child-safety",
      linkText: "Get the Free Prompt Pack Now",
    },
    {
      icon: Box,
      name: "QCore",
      description: "Quality control and verification infrastructure for AI-generated outputs. Designed to detect errors, inconsistencies, and trust breakdowns before results are used or shared.",
    },
    {
      icon: Store,
      name: "AgoraX",
      description: "Marketplace and exchange infrastructure designed for use in hostile or low-trust environments. Focuses on verification, reputation, and safe coordination between unknown parties.",
    },
    {
      icon: Hammer,
      name: "CrystalForge",
      description: "A structured prompt engineering and testing workbench for building, refining, and validating AI prompts at scale.",
    },
    {
      icon: Shield,
      name: "AegisForge",
      description: "An AI safety, governance, and risk-simulation framework for evaluating system behavior before deployment.",
    },
  ];

  const conceptProducts = [
    {
      icon: Stethoscope,
      name: "Clinic Planner AI",
      description: "Healthcare scheduling optimization with safety-first design.",
    },
    {
      icon: ChefHat,
      name: "Sous Chef Vision",
      description: "Intelligent meal planning and kitchen workflow automation.",
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="Coming Soon"
        subtitle="We're building an internal ecosystem of hostile-environment products: routing control planes, proof systems, marketplaces, and vertical planners."
        supportingText="Early access will be limited. No public release dates yet."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/waitlist">Join Early Access Waitlist</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">See Current Services</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Ready Soon */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            title="Ready Soon"
            subtitle="Products nearing completion with limited early access coming."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {readyProducts.map((product) => (
              <ProductCard
                key={product.name}
                icon={product.icon}
                name={product.name}
                description={product.description}
                stage="ready"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prototype Phase */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            title="Prototype Phase"
            subtitle="Active development with core functionality being validated."
          />
          {/* Top row: 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {prototypeProducts.slice(0, 3).map((product) => (
              <ProductCard
                key={product.name}
                icon={product.icon}
                name={product.name}
                description={product.description}
                stage="prototype"
                linkHref={product.linkHref}
                linkText={product.linkText}
              />
            ))}
          </div>
          {/* Bottom row: 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {prototypeProducts.slice(3).map((product) => (
              <ProductCard
                key={product.name}
                icon={product.icon}
                name={product.name}
                description={product.description}
                stage="prototype"
                linkHref={product.linkHref}
                linkText={product.linkText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <SectionHeader
            title="Concept Stage"
            subtitle="Early exploration and design validation."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {conceptProducts.map((product) => (
              <ProductCard
                key={product.name}
                icon={product.icon}
                name={product.name}
                description={product.description}
                stage="concept"
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Dream */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6 opacity-50" />
            <h2 className="font-serif text-3xl font-bold mb-4">The Dream</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A free-to-use AI education system focused on critical thinking, reasoning, and intellectual independence — not credentials, not hype.
            </p>
            <p className="text-muted-foreground mb-6">
              Built slowly. Released responsibly. Designed to teach <span className="text-foreground font-medium">how to think</span>, not what to think.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Early research · No timeline · Not commercially driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Want Early Access?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the waitlist to be notified when products launch. Limited spots for early adopters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/waitlist">
                Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:ruthlesstechnologies@proton.me">Email for Updates</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComingSoon;
