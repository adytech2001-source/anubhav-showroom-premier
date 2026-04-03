import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ElectronicsSection from "@/components/ElectronicsSection";
import FurnitureSection from "@/components/FurnitureSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import OwnerSection from "@/components/OwnerSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TrustSection />
      <ElectronicsSection />
      <FurnitureSection />
      <WhyChooseUs />
      <ServicesSection />
      <OwnerSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
