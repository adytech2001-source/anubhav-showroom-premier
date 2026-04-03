import { motion } from "framer-motion";
import { HomeIcon, Package, Zap } from "lucide-react";

const services = [
  { icon: HomeIcon, title: "Home Furnishing Solutions", desc: "Complete interior solutions tailored to your taste" },
  { icon: Package, title: "Electronics + Furniture Combos", desc: "Special bundle deals for maximum savings" },
  { icon: Zap, title: "Inverter & Battery Setup", desc: "Professional installation and setup service" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Special <span className="text-gold-gradient">Services</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-card border border-border rounded-xl p-8 hover:border-gold hover:shadow-gold transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <s.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
