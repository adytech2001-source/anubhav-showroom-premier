import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import fridgeImg from "@/assets/products/fridge.jpg";
import washingMachineImg from "@/assets/products/washing-machine.jpg";
import acImg from "@/assets/products/ac.jpg";
import coolerImg from "@/assets/products/cooler.jpg";
import smartTvImg from "@/assets/products/smart-tv.jpg";
import inverterImg from "@/assets/products/inverter.jpg";
import homeAppliancesImg from "@/assets/products/home-appliances.jpg";

const electronics = [
  { image: fridgeImg, name: "Fridge", alt: "Refrigerator shop in Prayagraj" },
  { image: washingMachineImg, name: "Washing Machine", alt: "Washing machine store near Mukundpur Bajar" },
  { image: acImg, name: "Air Conditioner", alt: "AC shop in Prayagraj" },
  { image: coolerImg, name: "Air Cooler", alt: "Air cooler showroom near Soraon" },
  { image: smartTvImg, name: "Smart LED & 4K TVs", alt: "Buy Smart TV in Prayagraj" },
  { image: inverterImg, name: "Inverter & Battery", alt: "Inverter battery shop near me Prayagraj" },
  { image: homeAppliancesImg, name: "Home Appliances", alt: "Home appliances store Mukundpur Bajar" },
];

const ElectronicsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="container relative">
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-12 bg-primary/50" />
          <Zap className="w-5 h-5 text-primary" />
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Electronics</span>
          <div className="h-px w-12 bg-primary/50" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Buy the Latest <span className="text-gold-gradient">Electronics</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-14 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Smart TVs, Refrigerators, Washing Machines, ACs, Coolers, Inverters and more — all top brands under one roof.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {electronics.map((item, i) => (
            <motion.div
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-gold transition-all duration-300 cursor-pointer"
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

export default ElectronicsSection;
