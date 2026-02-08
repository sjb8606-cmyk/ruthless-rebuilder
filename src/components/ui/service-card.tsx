import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight, ExternalLink } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  linkText?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  href,
  linkText = "Learn More",
}: ServiceCardProps) => {
  const isExternal = href.startsWith("http");

  return (
    <div className="card-hostile group flex flex-col h-full">
      <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-serif text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-primary mb-2">{subtitle}</p>
      <p className="text-sm text-muted-foreground flex-1 mb-4">{description}</p>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
        >
          {linkText} <ExternalLink className="w-4 h-4" />
        </a>
      ) : (
        <Link
          to={href}
          className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
        >
          {linkText} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

export { ServiceCard };
