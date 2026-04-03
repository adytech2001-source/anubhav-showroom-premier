import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";

const LocalSEOSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Find Us <span className="text-gold-gradient">Near You</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          We are one of the best electronics and furniture stores near Soraon and Mukundpur Bajar. 
          Customers searching for <strong className="text-foreground">electronics shops near me</strong> or{" "}
          <strong className="text-foreground">furniture showroom in Prayagraj</strong> can easily visit our store.
        </motion.p>
        <motion.p
          className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Anubhav Electronics & Furniture Showroom is located in Mukundpur Bajar, Holagarh, Soraon, 
          Prayagraj and is trusted by local customers for quality and affordable pricing.
        </motion.p>
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gold">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Mukundpur Bajar, Prayagraj</span>
          </div>
          <div className="flex items-center gap-2 text-gold">
            <Search className="w-5 h-5" />
            <span className="text-sm font-medium">Open Daily 9 AM – 9 PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalSEOSection;
