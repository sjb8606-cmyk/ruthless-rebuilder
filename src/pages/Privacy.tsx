import Layout from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last Updated: January 18, 2026</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Introduction</h2>
                <p className="text-muted-foreground mb-2">This Privacy Policy explains how Ruthless Technologies ("we," "us," or "our") collects, uses, and protects your information.</p>
                <p className="text-muted-foreground">We believe in minimal data collection and clear communication. We do not sell personal data. We do not track you across the internet.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">What We Collect</h2>
                <p className="font-medium mb-2">Information You Provide:</p>
                <ul className="text-muted-foreground space-y-1 mb-4">
                  <li>• Name and email address (when you contact us or join a waitlist)</li>
                  <li>• Company name (optional)</li>
                  <li>• Project details (when requesting services)</li>
                  <li>• Payment information (processed by third-party providers)</li>
                </ul>
                <p className="font-medium mb-2">Automatically Collected:</p>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Basic analytics (page views, referral sources)</li>
                  <li>• IP address and browser type</li>
                  <li>• No cross-site tracking cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-2">We use your information to respond to inquiries, deliver services, send project updates, process payments, and improve our website.</p>
                <p className="text-muted-foreground">We do not sell your data, share with third parties (except payment processors), use for advertising, or track you across websites.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Data Retention</h2>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Active project data: Duration of engagement + 1 year</li>
                  <li>• Waitlist information: Until you request removal</li>
                  <li>• Email correspondence: 2 years for business records</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Your Rights</h2>
                <p className="text-muted-foreground mb-2">You have the right to access, correct, or delete your personal data, opt out of communications, and ask questions about data use.</p>
                <p className="text-muted-foreground">Email: <a href="mailto:ruthlesstechnologies@proton.me" className="text-primary hover:underline">ruthlesstechnologies@proton.me</a></p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Contact</h2>
                <p className="text-muted-foreground">Questions about this Privacy Policy? Email us at <a href="mailto:ruthlesstechnologies@proton.me" className="text-primary hover:underline">ruthlesstechnologies@proton.me</a></p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
