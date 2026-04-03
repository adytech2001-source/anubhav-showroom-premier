import { motion } from "framer-motion";
import { Palette, ShieldCheck, BadgePercent, Home, Heart } from "lucide-react";

const reasons = [
  { icon: Palette, title: "Stylish & Modern Designs", desc: "Curated collection of contemporary styles" },
  { icon: ShieldCheck, title: "Durable & Long-lasting", desc: "Products built to last for years" },
  { icon: BadgePercent, title: "Competitive Pricing", desc: "Best value for your money" },
  { icon: Home, title: "One-stop Solution", desc: "Everything for your home, one place" },
  { icon: Heart, title: "Trusted Locally", desc: "Serving the community with integrity" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-gold-gradient">Anubhav Showroom</span>?
        </motion.h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-8 h-8 text-gold" />
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
