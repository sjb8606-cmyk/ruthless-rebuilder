import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { HeroSection } from "@/components/ui/hero-section";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const Waitlist = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [] as string[],
    goals: "",
  });

  const products = [
    "Service Bots",
    "Pet Planner AI",
    "Delight Engine",
    "QCore",
    "AgoraX",
    "CrystalForge",
    "AegisForge",
    "Clinic Planner AI",
    "Sous Chef Vision",
    "AI Education System",
  ];

  const handleInterestChange = (product: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, product]
        : prev.interests.filter((p) => p !== product),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent("Waitlist Signup - Ruthless Technologies");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nInterested Products:\n${formData.interests.join("\n")}\n\nGoals:\n${formData.goals}`
    );
    
    window.location.href = `mailto:ruthlesstechnologies@proton.me?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Please send the pre-filled email to complete your signup.",
    });
  };

  return (
    <Layout>
      <HeroSection
        title="Join the Waitlist"
        subtitle="Get early access to hostile-environment products designed for builders who need systems that survive production reality."
      >
        <p className="text-xs text-muted-foreground">
          Limited spots. No spam. Just updates when products launch.
        </p>
      </HeroSection>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card-hostile space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-3">
                <Label>Which products are you interested in?</Label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {products.map((product) => (
                    <div key={product} className="flex items-center space-x-2">
                      <Checkbox
                        id={product}
                        checked={formData.interests.includes(product)}
                        onCheckedChange={(checked) =>
                          handleInterestChange(product, checked as boolean)
                        }
                      />
                      <Label htmlFor={product} className="text-sm font-normal cursor-pointer">
                        {product}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">What are you trying to achieve?</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  placeholder="Tell us about your use case, challenges, or what you're building..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Already know what you need? Skip the waitlist.
              </p>
              <Button asChild variant="outline">
                <a href="mailto:ruthlesstechnologies@proton.me">Email Directly</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold mb-6">Who This Is For</h2>
            <p className="text-muted-foreground mb-6">
              Builders who need systems that survive production reality. People who are tired of tools that break under pressure.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-left">
              {[
                "Founders launching products under time pressure",
                "Teams who can't afford instability",
                "Operators automating workflows safely",
                "Anyone building with AI in production",
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
    </Layout>
  );
};

export default Waitlist;
