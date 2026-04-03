import { motion } from "framer-motion";
import bedImg from "@/assets/products/bed.jpg";
import sofaImg from "@/assets/products/sofa.jpg";
import diningImg from "@/assets/products/dining-table.jpg";
import wardrobeImg from "@/assets/products/wardrobe.jpg";
import dressingImg from "@/assets/products/dressing-table.jpg";
import mattressImg from "@/assets/products/mattress.jpg";
import bedroomSetImg from "@/assets/products/bedroom-set.jpg";

const furniture = [
  { image: bedImg, name: "Beds" },
  { image: sofaImg, name: "Sofa Sets" },
  { image: diningImg, name: "Dining Tables" },
  { image: wardrobeImg, name: "Wardrobes" },
  { image: dressingImg, name: "Dressing Tables" },
  { image: mattressImg, name: "Mattresses" },
  { image: bedroomSetImg, name: "Bedroom Sets" },
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
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-gold hover:shadow-gold transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-foreground font-medium">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureSection;
