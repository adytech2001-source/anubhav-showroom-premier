import { motion } from "framer-motion";
import { Palette, ShieldCheck, BadgePercent, Home, Heart } from "lucide-react";

const reasons = [
  { icon: Palette, title: "Stylish & Modern", desc: "Curated contemporary collection", accent: "bg-primary/10 text-primary" },
  { icon: ShieldCheck, title: "Durable & Strong", desc: "Products built to last", accent: "bg-secondary/10 text-secondary" },
  { icon: BadgePercent, title: "Best Prices", desc: "Competitive pricing always", accent: "bg-primary/10 text-primary" },
  { icon: Home, title: "One-stop Solution", desc: "Everything under one roof", accent: "bg-secondary/10 text-secondary" },
  { icon: Heart, title: "Locally Trusted", desc: "Serving with integrity", accent: "bg-primary/10 text-primary" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-gold-gradient">Anubhav</span>?
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-gold hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className={`w-16 h-16 rounded-2xl ${r.accent} flex items-center justify-center mx-auto mb-4`}>
                <r.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
