import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last Updated: January 18, 2026</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Agreement</h2>
                <p className="text-muted-foreground">By engaging Ruthless Technologies for services, you agree to these Terms of Service. These terms govern all project work, deliverables, and payments.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Jurisdiction</h2>
                <p className="text-muted-foreground">Ruthless Technologies is based in New Brunswick, Canada. These terms are governed by the laws of New Brunswick and the federal laws of Canada applicable therein.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Payment Terms</h2>
                <ul className="text-muted-foreground space-y-1">
                  <li>• 50% payment upfront before work begins</li>
                  <li>• 50% payment upon delivery</li>
                  <li>• Payment via PayPal only</li>
                  <li>• No refunds after work begins</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Scope & Deliverables</h2>
                <p className="text-muted-foreground">All projects are scoped with fixed deliverables before work begins. Changes to scope require written agreement and may affect pricing and timeline.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Intellectual Property</h2>
                <p className="text-muted-foreground mb-2">Upon full payment, you receive ownership of custom deliverables created specifically for your project.</p>
                <p className="text-muted-foreground">Ruthless Technologies retains ownership of: internal tools, frameworks, prompt systems (except custom systems explicitly transferred), and reusable components.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Limitation of Liability</h2>
                <p className="text-muted-foreground">Ruthless Technologies is not liable for indirect, incidental, or consequential damages. Total liability is limited to the amount paid for services.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold mb-3">Contact</h2>
                <p className="text-muted-foreground">Questions about these Terms? Email: <a href="mailto:ruthlesstechnologies@proton.me" className="text-primary hover:underline">ruthlesstechnologies@proton.me</a></p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
