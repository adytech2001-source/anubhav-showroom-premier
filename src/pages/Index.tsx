import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ElectronicsSection from "@/components/ElectronicsSection";
import FurnitureSection from "@/components/FurnitureSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import OwnerSection from "@/components/OwnerSection";
import LocalSEOSection from "@/components/LocalSEOSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <div id="hero"><HeroSection /></div>
      <TrustSection />
      <div id="electronics"><ElectronicsSection /></div>
      <div id="furniture"><FurnitureSection /></div>
      <div id="why-us"><WhyChooseUs /></div>
      <div id="services"><ServicesSection /></div>
      <OwnerSection />
      <LocalSEOSection />
      <div id="contact"><ContactSection /></div>
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
