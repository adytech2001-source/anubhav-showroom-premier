import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Premium home interior" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>


      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Upgrade Your Home with{" "}
            <span className="text-gold-gradient">Premium Electronics</span>{" "}
            & <span className="text-gold-gradient">Furniture</span>
          </motion.h1>

          <h2 className="sr-only">Best Electronics & Furniture Showroom in Prayagraj</h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From Smart TVs to Stylish Sofas – Everything You Need Under One Roof
          </motion.p>

          <motion.p
            className="text-base text-gold font-medium italic mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {" "}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="tel:9653032205"
              className="bg-gold-gradient px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg flex items-center gap-2 hover:shadow-gold-lg transition-shadow duration-300"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a
              href="https://wa.me/919653032205"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold bg-transparent px-8 py-4 rounded-lg text-gold font-semibold text-lg flex items-center gap-2 hover:bg-gold/10 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
