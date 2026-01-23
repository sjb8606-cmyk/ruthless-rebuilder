import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What kind of projects do you work on?",
      answer: "We focus on bounded, scoped projects: backend prototypes, prompt engineering systems, business copy, ops automation, and creator content systems. We don't do full SaaS builds, production-grade frontends, or open-ended experimentation.",
    },
    {
      question: "How does pricing work?",
      answer: "Fixed scope, fixed price. We operate in three tiers: Foundation ($1,250–$1,500), Build Sprint ($2,500–$3,000), and Full Delivery ($4,500–$5,500). Prompt engineering has separate tiers. Payment is 50% upfront, 50% on delivery via PayPal.",
    },
    {
      question: "What's a Proof Pack?",
      answer: "A Proof Pack is a bundle of verification artifacts that ships with your delivery. It includes deliverables summary, setup instructions, verification checklist, risk notes, operating boundaries, and evidence of testing. No mystery work.",
    },
    {
      question: "Do you do phone calls?",
      answer: "No. We're email-first. Email lets you send context on your schedule, avoid calendar chaos, and get a real answer instead of a sales pitch. You'll get a scoped recommendation, fixed deliverables list, and price range.",
    },
    {
      question: "How long does a project take?",
      answer: "It depends on the tier. Tier 1 (Foundation) typically takes 1 week. Tier 2 (Build Sprint) takes 1-2 weeks. Tier 3 (Full Delivery) takes 2-4 weeks. We'll give you a specific timeline when we scope your project.",
    },
    {
      question: "What's your refund policy?",
      answer: "No refunds after work begins. This is part of why we scope carefully upfront — so both sides know exactly what's being delivered before any work starts.",
    },
    {
      question: "What's 'hostile-environment software'?",
      answer: "Software designed to survive real-world conditions: unstable networks, hostile inputs, unpredictable users, and changing requirements. We build as if reality is trying to break your system — because it is.",
    },
    {
      question: "How do you use AI?",
      answer: "AI accelerates delivery, but humans verify quality. We don't ship autonomous AI outputs. Every critical decision has a human checkpoint. No black boxes, no rogue agents.",
    },
    {
      question: "Where are you based?",
      answer: "New Brunswick, Canada. We work asynchronously with clients globally via email.",
    },
    {
      question: "Can I get ongoing support after a project?",
      answer: "Yes, if needed. We can set up a retainer for ongoing support. If not needed, we close clean — no pressure to continue.",
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="Frequently Asked"
        titleAccent="Questions"
        subtitle="Clear answers to common questions about working with Ruthless Technologies."
      >
        <Button asChild size="lg">
          <a href="mailto:ruthlesstechnologies@proton.me">Still have questions? Email us</a>
        </Button>
      </HeroSection>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-hostile border-border"
                >
                  <AccordionTrigger className="text-left font-serif hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Email what you need. You'll receive a scoped recommendation and fixed deliverables.
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

export default FAQ;
