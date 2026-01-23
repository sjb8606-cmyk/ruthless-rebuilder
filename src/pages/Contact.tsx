import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    need: "",
    links: "",
    timeline: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent("Project Inquiry - Ruthless Technologies");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\n\nWhat do you need help with?\n${formData.need}\n\nLinks/Docs:\n${formData.links || "N/A"}\n\nTimeline: ${formData.timeline || "N/A"}`
    );
    
    window.location.href = `mailto:ruthlesstechnologies@proton.me?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Please send the pre-filled email to complete your request.",
    });
  };

  return (
    <Layout>
      <HeroSection
        title="Contact"
        titleAccent="Ruthless Technologies"
        subtitle="Email-first, scope-first. Send what you need — I'll reply with a clear recommendation and fixed deliverables."
      >
        <Button asChild size="lg">
          <a href="mailto:ruthlesstechnologies@proton.me">
            <Mail className="mr-2 h-4 w-4" /> Email Us
          </a>
        </Button>
        <p className="text-xs text-muted-foreground mt-4">
          No phone required. Fast responses.
        </p>
      </HeroSection>

      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Email Direct */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Email (Preferred)</h2>
              <p className="text-muted-foreground mb-6">
                The fastest way to reach Ruthless Technologies is email.
              </p>
              
              <div className="card-hostile mb-6">
                <p className="font-medium mb-3">Include:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> What you need</li>
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> What you're trying to achieve</li>
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> Any links or docs</li>
                </ul>
              </div>

              <Button asChild size="lg" className="w-full">
                <a href="mailto:ruthlesstechnologies@proton.me">
                  Email Ruthless Technologies <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Request Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <div className="space-y-2">
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="need">What do you need help with? *</Label>
                  <Textarea
                    id="need"
                    required
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    placeholder="Describe your project or challenge..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="links">Links / Docs (optional)</Label>
                  <Input
                    id="links"
                    value={formData.links}
                    onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                    placeholder="Any relevant links or documents"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline (optional)</Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g., ASAP, 2 weeks, flexible"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Request <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Email First */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeader title="Why Email-First?" />
            <p className="text-muted-foreground mb-6">
              Most founders don't want phone calls. They want clarity — fast.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "Send context on your schedule",
                "Avoid sales theater",
                "Get a real answer, not a pitch",
              ].map((item, index) => (
                <div key={index} className="p-4 bg-background rounded-sm border border-border">
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

export default Contact;
