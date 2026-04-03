import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5" />
      <div className="container relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Visit Our Showroom Today &{" "}
          <span className="text-gold-gradient">Upgrade Your Home</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience premium electronics and furniture firsthand
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="tel:9653032205"
            className="bg-gold-gradient px-10 py-4 rounded-lg text-primary-foreground font-semibold text-lg flex items-center gap-2 hover:shadow-gold-lg transition-shadow duration-300"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href="https://www.google.com/maps/search/Mukundpur+Bajar+Holagarh+Soraon+Prayagraj"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold px-10 py-4 rounded-lg text-gold font-semibold text-lg flex items-center gap-2 hover:bg-gold/10 transition-colors duration-300"
          >
            <MapPin className="w-5 h-5" /> Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
