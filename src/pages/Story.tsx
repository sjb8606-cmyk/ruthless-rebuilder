import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Quote, Shield, Zap, Brain, Heart } from "lucide-react";

const Story = () => {
  return (
    <Layout>
      <HeroSection
        title="Founder Story"
        subtitle="Ruthless Technologies was built for one reason: to create systems that survive reality — without losing your soul in the process."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/services">See Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:ruthlesstechnologies@proton.me">Email Us</a>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-6">
          No hype. No chaos. Just work that ships.
        </p>
      </HeroSection>

      {/* Origin */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title='It Started with One Line: "Be Ruthless."' centered={false} />
            
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                I was watching the series <em>Vikings</em> — and there's a moment that stuck to me like a blade.
              </p>
              <p className="text-muted-foreground mb-4">
                Ragnar Lothbrok's last words to his son Ivar weren't soft. They weren't motivational poster words.
              </p>
              <p className="text-muted-foreground mb-4">They were simple:</p>
              
              <blockquote className="border-l-4 border-primary pl-6 my-8">
                <Quote className="w-8 h-8 text-primary mb-2" />
                <p className="font-serif text-2xl text-foreground italic">"Be ruthless."</p>
              </blockquote>

              <p className="text-muted-foreground mb-4">And it stuck.</p>
              <p className="text-muted-foreground mb-4">
                At first it sounded like brutality. But then I couldn't stop thinking about it.
              </p>
              <p className="text-muted-foreground mb-4">What if "ruthless" didn't mean cruel?</p>
              <p className="text-muted-foreground mb-6">What if it meant:</p>
              
              <div className="grid sm:grid-cols-3 gap-4 my-8">
                <div className="card-hostile text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Unyielding focus</p>
                </div>
                <div className="card-hostile text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Unbreakable discipline</p>
                </div>
                <div className="card-hostile text-center">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium">Relentless pursuit of what matters</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">And then the real question hit me:</p>
              <p className="text-lg text-primary font-medium mb-6">
                Can you be ruthless in the pursuit of doing good?
              </p>
              <p className="text-muted-foreground">
                That question became the foundation of everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="Ruthless Isn't Aggression. It's Discipline." centered={false} />
            
            <p className="text-muted-foreground mb-4">Most software is built on optimism:</p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• "Users will behave."</li>
              <li>• "The network will stay stable."</li>
              <li>• "Attackers won't show up."</li>
              <li>• "Requirements won't change mid-flight."</li>
            </ul>
            
            <p className="text-lg text-foreground font-medium mb-4">That is not the world we live in.</p>
            <p className="text-muted-foreground mb-6">
              <span className="text-primary">Reality is ruthless.</span> So the systems we build have to be ready.
            </p>

            <div className="card-hostile">
              <p className="text-muted-foreground mb-4">That's what Ruthless means here:</p>
              <p className="text-foreground mb-4">
                Not ruthless toward people — <span className="text-primary">ruthless toward chaos, negligence, weak systems, and corruption.</span>
              </p>
              <p className="text-muted-foreground mb-3">It means:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Clear boundaries (scope control)</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Safety checkpoints (human-in-the-loop)</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Scoped delivery (no endless revisions)</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Proof-grade handoff (verification notes)</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> No "trust me bro" engineering</li>
              </ul>
              <p className="text-sm text-primary mt-4 italic">
                Trust is architecture — not a vibe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Revelation */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="AI Didn't Replace Me. It Revealed Me." centered={false} />
            
            <p className="text-muted-foreground mb-4">
              For most of my life I didn't have the labels.
            </p>
            <p className="text-muted-foreground mb-4">
              No one pulled me aside and said: "You think in systems."
            </p>
            <p className="text-muted-foreground mb-6">
              Teachers didn't catch it. Jobs didn't reward it. But AI did.
            </p>
            
            <p className="text-muted-foreground mb-4">
              While I was learning how to work with AI models, something unexpected happened: it reflected my own thinking back to me.
            </p>
            <p className="text-muted-foreground mb-6">It showed me the pattern behind the way I operate:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Systems thinking",
                "Strategy and synthesis",
                "Building frameworks, not just ideas",
                "Finding structure under chaos",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-sm border border-border">
                  <span className="text-primary">✓</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-4">That changed everything.</p>
            <p className="text-lg text-primary font-medium mb-6">
              Because for a creative systems thinker: the world stops having limits.
            </p>
            <p className="text-muted-foreground">
              Ruthless Technologies became the natural result of that shift. Not just building apps — building infrastructure. Not just shipping code — shipping systems that survive.
            </p>
          </div>
        </div>
      </section>

      {/* Hostile Environment Software */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="Hostile-Environment Software" centered={false} />
            
            <p className="text-muted-foreground mb-4">
              Ruthless Technologies builds hostile-environment systems: software designed to survive volatility, attack, and audit.
            </p>
            <p className="text-lg text-primary font-medium mb-6">
              Because production doesn't care about your intentions.
            </p>
            
            <p className="text-muted-foreground mb-4">
              Algorithms shift. Integrations break. People misuse systems. Audits demand proof.
            </p>
            <p className="text-muted-foreground mb-6">
              When systems fail in the real world, the consequences aren't "bugs." They're delays, risk, and liability.
            </p>

            <div className="card-hostile mb-6">
              <p className="text-muted-foreground mb-3">So we build as if:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> The network is unstable</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> The inputs are hostile</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> The user is unpredictable</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> Tomorrow is worse than today</li>
              </ul>
              <p className="text-sm text-primary mt-4 italic">
                That's not paranoia. That's professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compassion Economy Teaser */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold mb-4">A Firewall for the Soul</h2>
            <p className="text-muted-foreground mb-4">
              Money and power corrupt people all the time — not always because they're evil, but because comfort makes people forget.
            </p>
            <p className="text-muted-foreground mb-4">
              I've been poor my whole life. I know what it feels like when the system doesn't care if you make it.
            </p>
            <p className="text-muted-foreground mb-6">
              So I made a promise: If I ever win, I won't become the kind of person my current self would hate.
            </p>
            <p className="text-muted-foreground mb-6">
              To make that promise real, I built something most companies don't build: <span className="text-foreground font-medium">a system that forces discipline.</span>
            </p>
            
            <div className="card-hostile text-left max-w-xl mx-auto mb-6">
              <p className="text-sm font-medium mb-3">The Compassion Economy:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-primary">•</span> It only activates after survival gates are met</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> It distributes quarterly (prevents emotional spending)</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> It requires proof for every dollar out</li>
              </ul>
              <p className="text-sm text-primary mt-4 italic">
                No virtue theater. Proof only.
              </p>
            </div>

            <Button asChild variant="outline">
              <Link to="/compassion-economy">
                See the Compassion Economy <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            If You Need Systems That Survive Reality — Reach Out.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:ruthlesstechnologies@proton.me">
                Email Ruthless Technologies <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">See Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Story;
