import { motion } from "framer-motion";
import { BedDouble, Sofa, UtensilsCrossed, DoorOpen, Sparkles, SquareStack, Lamp } from "lucide-react";

const furniture = [
  { icon: BedDouble, name: "Beds" },
  { icon: Sofa, name: "Sofa Sets" },
  { icon: UtensilsCrossed, name: "Dining Tables" },
  { icon: DoorOpen, name: "Wardrobes" },
  { icon: Sparkles, name: "Dressing Tables" },
  { icon: SquareStack, name: "Mattresses" },
  { icon: Lamp, name: "Bedroom Sets" },
];

const FurnitureSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Premium <span className="text-gold-gradient">Furniture</span> Collection
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Elegant designs that transform your home
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {furniture.map((item, i) => (
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

export default FurnitureSection;
