import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import bobImage from "@/assets/bob-turtle.png";

interface BobExplainsProps {
  children: React.ReactNode;
  className?: string;
}

const BobExplains = ({ children, className }: BobExplainsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("mt-4", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
      >
        <span>🐢</span>
        <span className="group-hover:underline">Bob Explains</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="mt-3 p-4 bg-card border border-border rounded-sm text-sm text-muted-foreground animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

interface BobHeroCalloutProps {
  className?: string;
}

const BobHeroCallout = ({ className }: BobHeroCalloutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("py-6 border-y border-border bg-card/50", className)}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Not technical? Bob can explain.
          </p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <span>🐢</span>
            What About Bob?
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </button>

          {isOpen && (
            <div className="mt-6 card-hostile text-left animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img
                  src={bobImage}
                  alt="Bob the turtle — your plain-language guide"
                  className="w-28 h-28 rounded-sm object-cover flex-shrink-0 mx-auto sm:mx-0"
                />
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold mb-3">Bob says:</h3>
                  <p className="text-muted-foreground mb-4">
                    "Alright. Here's the simple version.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Ruthless Technologies helps businesses automate repetitive work and build systems that don't break."
                  </p>

                  <h4 className="font-medium text-foreground mb-3">Services explained by Bob:</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-foreground text-sm">Ops Assistant</p>
                      <p className="text-sm text-muted-foreground">
                        Someone helps manage your inbox, scheduling, research, and administrative work so you can focus on running the business.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Prompt Engineering</p>
                      <p className="text-sm text-muted-foreground">
                        AI tools are powerful but easy to misuse. We design clear instructions that make AI behave reliably.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Backend Prototype Sprint</p>
                      <p className="text-sm text-muted-foreground">
                        If you have an idea for a software product, we build the technical foundation so developers can finish it later.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Veridact</p>
                      <p className="text-sm text-muted-foreground">
                        A system that records and verifies important AI decisions so there is proof of what happened and nobody gets blamed for something a machine did.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface BobFinalWordProps {
  className?: string;
}

const BobFinalWord = ({ className }: BobFinalWordProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("mt-4", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
      >
        <span>🐢</span>
        <span className="group-hover:underline">Bob's Final Word</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <div className="mt-3 p-4 bg-card border border-border rounded-sm text-sm text-muted-foreground animate-fade-in">
          <p className="font-medium text-foreground mb-2">🐢 Bob Says:</p>
          <p>Ruthless builds systems that still work when reality gets messy.</p>
          <p>Clear scope, human verification, and proof that the work was done right.</p>
        </div>
      )}
    </div>
  );
};

export { BobExplains, BobHeroCallout, BobFinalWord };
