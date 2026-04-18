import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import LocalSEOSection from "@/components/LocalSEOSection";

const Contact = () => {
  return (
    <>
      <PageHeader
        eyebrow="📍 Get in Touch"
        title="Visit, Call or"
        highlight="WhatsApp Us"
        description="We're open daily 9 AM – 9 PM at Mukundpur Bajar, Holagarh, Soraon, Prayagraj. Drop by the showroom, give us a call, or send a quick WhatsApp — we'd love to help."
        breadcrumb="Contact"
      />
      <ContactSection />
      <LocalSEOSection />
    </>
  );
};

export default Contact;
