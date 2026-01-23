import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  tier: string;
  title: string;
  price: string;
  bestFor: string;
  includes: string[];
  commonUses?: string;
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

const PricingCard = ({
  tier,
  title,
  price,
  bestFor,
  includes,
  commonUses,
  popular = false,
  ctaText = "Request",
  ctaHref = "mailto:ruthlesstechnologies@proton.me",
}: PricingCardProps) => {
  return (
    <div
      className={`card-hostile relative flex flex-col h-full ${
        popular ? "border-primary hostile-glow" : ""
      }`}
    >
      {popular && (
        <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}
      
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-1">{tier}</p>
        <h3 className="font-serif text-2xl font-bold mb-2">{title}</h3>
        <p className="text-3xl font-bold gold-gradient-text">{price}</p>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Best for:</p>
        <p className="text-sm text-muted-foreground">{bestFor}</p>
      </div>

      <div className="mb-4 flex-1">
        <p className="text-sm font-medium mb-2">Includes:</p>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {commonUses && (
        <p className="text-xs text-muted-foreground mb-4 border-t border-border pt-4">
          <span className="font-medium">Common uses:</span> {commonUses}
        </p>
      )}

      <Button asChild variant={popular ? "default" : "outline"} className="w-full">
        <a href={ctaHref}>{ctaText}</a>
      </Button>
    </div>
  );
};

export { PricingCard };
