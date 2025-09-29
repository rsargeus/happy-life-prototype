import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WebinarSection } from "@/components/WebinarSection";
import { PricingSection } from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WebinarSection />
      <PricingSection />
    </div>
  );
};

export default Index;
