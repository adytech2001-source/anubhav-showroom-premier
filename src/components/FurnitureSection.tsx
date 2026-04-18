import { motion } from "framer-motion";
import { Armchair } from "lucide-react";
import bedImg from "@/assets/products/bed.jpg";
import sofaImg from "@/assets/products/sofa.jpg";
import diningImg from "@/assets/products/dining-table.jpg";
import wardrobeImg from "@/assets/products/wardrobe.jpg";
import dressingImg from "@/assets/products/dressing-table.jpg";
import mattressImg from "@/assets/products/mattress.jpg";
import bedroomSetImg from "@/assets/products/bedroom-set.jpg";
import plasticChairsImg from "@/assets/products/plastic-chairs.jpg";
import waterTankImg from "@/assets/products/water-tank.jpg";

const furniture = [
  { image: bedImg, name: "Beds", alt: "Bed and wardrobe shop Prayagraj" },
  { image: sofaImg, name: "Sofa Sets", alt: "Modern sofa set showroom in Mukundpur Bajar" },
  { image: diningImg, name: "Dining Tables", alt: "Dining table furniture shop Prayagraj" },
  { image: wardrobeImg, name: "Wardrobes", alt: "Wardrobe furniture store near Soraon" },
  { image: dressingImg, name: "Dressing Tables", alt: "Dressing table shop in Prayagraj" },
  { image: mattressImg, name: "Mattresses", alt: "Mattress store near Mukundpur Bajar" },
  { image: bedroomSetImg, name: "Bedroom Sets", alt: "Complete bedroom set showroom Prayagraj" },
  { image: plasticChairsImg, name: "Plastic Chairs", alt: "Plastic chairs shop in Prayagraj Mukundpur Bajar" },
  { image: waterTankImg, name: "Water Tanks", alt: "Sintex water tank store near Soraon Prayagraj" },
];

const FurnitureSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="container relative">
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-12 bg-secondary/50" />
          <Armchair className="w-5 h-5 text-secondary" />
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Furniture</span>
          <div className="h-px w-12 bg-secondary/50" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Explore Stylish <span className="text-blue-gradient">Furniture</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-14 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Sofa sets, beds, dining tables, wardrobes, mattresses and complete bedroom sets — durable & stylish.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {furniture.map((item, i) => (
            <motion.div
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 hover:shadow-blue transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 text-center">
                <p className="text-foreground font-semibold">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureSection;
