import { motion } from "framer-motion";
import { HomeIcon, Package, Zap } from "lucide-react";

const services = [
  { icon: HomeIcon, title: "Home Furnishing Solutions", desc: "Complete interior solutions tailored to your taste", accent: "from-primary/20 to-primary/5" },
  { icon: Package, title: "Electronics + Furniture Combos", desc: "Special bundle deals for maximum savings", accent: "from-secondary/20 to-secondary/5" },
  { icon: Zap, title: "Inverter & Battery Setup", desc: "Professional installation and setup service", accent: "from-primary/20 to-primary/5" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Special <span className="text-blue-gradient">Services</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.accent}`} />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
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
