import { motion } from "framer-motion";
import { Refrigerator, WashingMachine, Wind, Fan, Tv, Battery, Home } from "lucide-react";

const electronics = [
  { icon: Refrigerator, name: "Fridge" },
  { icon: WashingMachine, name: "Washing Machine" },
  { icon: Wind, name: "Air Conditioner" },
  { icon: Fan, name: "Air Cooler" },
  { icon: Tv, name: "Smart LED & 4K TVs" },
  { icon: Battery, name: "Inverter & Battery" },
  { icon: Home, name: "Home Appliances" },
];

const ElectronicsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold-gradient">Electronics</span> Range
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Top brands, latest models, best prices
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {electronics.map((item, i) => (
            <motion.div
              key={item.name}
              className="group bg-card border border-border rounded-xl p-8 text-center hover:border-gold hover:shadow-gold transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <item.icon className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-foreground font-medium">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectronicsSection;
