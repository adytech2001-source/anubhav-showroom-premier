import { motion } from "framer-motion";
import { Shield, IndianRupee, LayoutGrid, Store } from "lucide-react";
import customersImg from "@/assets/happy-customers.jpg";

const trustItems = [
  { icon: Shield, label: "Premium Quality" },
  { icon: IndianRupee, label: "Affordable Pricing" },
  { icon: LayoutGrid, label: "Wide Variety" },
  { icon: Store, label: "Trusted Local Showroom" },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by <span className="text-gold-gradient">Hundreds</span> of Happy Customers
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <motion.div
            className="rounded-xl overflow-hidden shadow-gold"
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

          <div className="grid grid-cols-2 gap-4">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-gold transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <item.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="text-foreground font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
