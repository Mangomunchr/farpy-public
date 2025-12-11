import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { EZPZUpload } from "@/components/EZPZUpload";
import { CostEstimator } from "@/components/CostEstimator";
import { PricingTeaser } from "@/components/PricingTeaser";
import { TrustBlock } from "@/components/TrustBlock";
import { NodeMuncherCTA } from "@/components/NodeMuncherCTA";
import { StatusPanel } from "@/components/StatusPanel";
import { Audience } from "@/components/Audience";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="global-container space-y-20">
        <Hero />
        <About />
        <HowItWorks />
        <EZPZUpload />
        <CostEstimator />
        <PricingTeaser />
        <TrustBlock />
        <NodeMuncherCTA />
        <StatusPanel />
        <Audience />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
