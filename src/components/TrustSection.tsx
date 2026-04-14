import { motion } from "framer-motion";
import { Shield, IndianRupee, LayoutGrid, Store } from "lucide-react";
import customersImg from "@/assets/happy-customers.jpg";

const trustItems = [
  { icon: Shield, label: "Premium Quality", color: "text-primary" },
  { icon: IndianRupee, label: "Affordable Pricing", color: "text-secondary" },
  { icon: LayoutGrid, label: "Wide Variety", color: "text-primary" },
  { icon: Store, label: "Trusted Local Store", color: "text-secondary" },
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by <span className="text-gold-gradient">Hundreds</span> of Happy Customers
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-gold-lg ring-1 ring-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={customersImg}
              alt="Happy customers shopping at Anubhav Electronics & Furniture Showroom in Prayagraj"
              loading="lazy"
              width={960}
              height={640}
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-gold hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <p className="text-foreground font-semibold text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
