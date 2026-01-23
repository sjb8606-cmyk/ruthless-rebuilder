import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  supportingText?: string;
  children?: ReactNode;
}

const HeroSection = ({
  title,
  titleAccent,
  subtitle,
  supportingText,
  children,
}: HeroSectionProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="gold-gradient-text">{titleAccent}</span>
              </>
            )}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
          {supportingText && (
            <p className="text-sm text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              {supportingText}
            </p>
          )}
          {children && (
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
