import { Link } from "react-router-dom";

const Footer = () => {
  const columns = [
    {
      title: "Company",
      links: [
        { name: "Story", href: "/story" },
        { name: "Compassion Economy", href: "/compassion-economy" },
        { name: "Capabilities", href: "/capabilities" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Prompt Engineering", href: "/prompt-engineering" },
        { name: "Proof Pack", href: "/proof-pack" },
        { name: "Waitlist", href: "/waitlist" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
        { name: "Email Us", href: "mailto:ruthlesstechnologies@proton.me", external: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        {/* Quote */}
        <div className="text-center mb-12">
          <p className="font-serif text-xl text-muted-foreground italic">
            "Scope beats ambition. Safety is a feature. Trust is engineered."
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-serif text-sm font-semibold text-primary mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-serif text-lg font-bold gold-gradient-text">
            Ruthless Technologies
          </Link>
          <p className="text-sm text-muted-foreground">
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
