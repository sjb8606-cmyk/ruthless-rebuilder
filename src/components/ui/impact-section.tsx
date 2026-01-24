import { Heart, Handshake } from "lucide-react";

const ImpactSection = () => {
  const causes = [
    "Veterans and first responders",
    "Support for the elderly",
    "Environmental conservation and wildlife protection",
    "Endangered species preservation",
  ];

  return (
    <section className="py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-sm border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-sm bg-primary/5 blur-xl -z-10" />
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-primary" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-center">
                Your Work Supports Real Impact
              </h2>
              <Handshake className="w-6 h-6 text-primary" />
            </div>

            <p className="text-muted-foreground text-center mb-6">
              Using Ruthless Technologies' services and products doesn't just keep your systems safe and reliable — it also fuels measurable impact through the Compassion Economy.
            </p>

            <p className="text-foreground font-medium text-center mb-4">
              A portion of verified post-tax profits is directed to causes that matter:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {causes.map((cause, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-background/50 rounded-sm border border-border"
                >
                  <span className="text-primary">•</span>
                  <span className="text-sm text-muted-foreground">{cause}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-primary text-center italic">
              Every project you engage with contributes to real, accountable giving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ImpactSection };
