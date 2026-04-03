import { motion } from "framer-motion";
import fridgeImg from "@/assets/products/fridge.jpg";
import washingMachineImg from "@/assets/products/washing-machine.jpg";
import acImg from "@/assets/products/ac.jpg";
import coolerImg from "@/assets/products/cooler.jpg";
import smartTvImg from "@/assets/products/smart-tv.jpg";
import inverterImg from "@/assets/products/inverter.jpg";
import homeAppliancesImg from "@/assets/products/home-appliances.jpg";

const electronics = [
  { image: fridgeImg, name: "Fridge" },
  { image: washingMachineImg, name: "Washing Machine" },
  { image: acImg, name: "Air Conditioner" },
  { image: coolerImg, name: "Air Cooler" },
  { image: smartTvImg, name: "Smart LED & 4K TVs" },
  { image: inverterImg, name: "Inverter & Battery" },
  { image: homeAppliancesImg, name: "Home Appliances" },
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
          Buy the Latest <span className="text-gold-gradient">Electronics</span> in Prayagraj
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
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

export default ElectronicsSection;
