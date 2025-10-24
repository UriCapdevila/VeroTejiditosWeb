import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import CatalogSection from "./CatalogSection";
import BenefitsSection from "./BenefitsSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

const VerotejiditsLanding = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default VerotejiditsLanding;