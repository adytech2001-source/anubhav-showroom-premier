import { motion } from "framer-motion";
import { Check, Shield, Truck, Wrench } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FinalCTA from "@/components/FinalCTA";
import fridgeImg from "@/assets/products/fridge.jpg";
import washingMachineImg from "@/assets/products/washing-machine.jpg";
import acImg from "@/assets/products/ac.jpg";
import coolerImg from "@/assets/products/cooler.jpg";
import smartTvImg from "@/assets/products/smart-tv.jpg";
import inverterImg from "@/assets/products/inverter.jpg";
import homeAppliancesImg from "@/assets/products/home-appliances.jpg";
import kitchenAppliancesImg from "@/assets/products/kitchen-appliances.jpg";

const products = [
  {
    image: fridgeImg,
    name: "Refrigerators",
    alt: "Refrigerator shop in Prayagraj",
    desc: "Single door, double door & side-by-side fridges from LG, Samsung, Whirlpool, Haier and Godrej. 5-star energy ratings with inverter compressor technology for huge electricity savings.",
    features: ["Frost-free models", "Inverter compressor", "5-star ratings", "Capacity: 190L–650L"],
  },
  {
    image: washingMachineImg,
    name: "Washing Machines",
    alt: "Washing machine store near Mukundpur Bajar",
    desc: "Top load, front load and semi-automatic washing machines. Whisper-quiet motors, multiple wash programs, and inverter technology for fabric care and lower bills.",
    features: ["6.5kg–10kg capacity", "Inverter motor", "Multiple wash modes", "Fully automatic"],
  },
  {
    image: acImg,
    name: "Air Conditioners",
    alt: "AC shop in Prayagraj",
    desc: "Split & window ACs in 1 ton, 1.5 ton and 2 ton sizes. Latest 5-star inverter ACs with copper coils, anti-bacterial filters and turbo cooling for Prayagraj summers.",
    features: ["Split & Window", "Inverter technology", "5-star efficiency", "Copper condenser"],
  },
  {
    image: smartTvImg,
    name: "Smart LED & 4K TVs",
    alt: "Buy Smart TV in Prayagraj",
    desc: "32-inch to 65-inch Smart LED, 4K UHD and Android TVs. Crystal-clear picture, Dolby sound, built-in apps for Netflix, YouTube, Hotstar and more.",
    features: ["32\" to 65\" sizes", "4K UHD & HDR", "Android & Smart OS", "Dolby Audio"],
  },
  {
    image: coolerImg,
    name: "Air Coolers",
    alt: "Air cooler showroom near Soraon",
    desc: "Personal, desert and tower air coolers. Honeycomb pads, large water tanks and powerful air throw — perfect for the Prayagraj climate at affordable prices.",
    features: ["20L–90L tank", "Honeycomb cooling pads", "Powerful air throw", "Low power use"],
  },
  {
    image: inverterImg,
    name: "Inverter & Battery",
    alt: "Inverter battery shop near me Prayagraj",
    desc: "Pure sine-wave inverters and tubular batteries from Luminous, Exide, Microtek and Amaron. Complete setup with installation for uninterrupted power at home.",
    features: ["Pure sine wave", "Tubular batteries", "150–1500 VA", "Free installation"],
  },
  {
    image: kitchenAppliancesImg,
    name: "Kitchen Appliances",
    alt: "Kitchen appliances mixer microwave shop Prayagraj",
    desc: "Mixer grinders, microwaves, induction cooktops, gas stoves, chimneys, water purifiers and small appliances — everything to make your kitchen modern and efficient.",
    features: ["Mixer & grinders", "Microwave ovens", "Induction & gas", "Chimneys & RO"],
  },
  {
    image: homeAppliancesImg,
    name: "Home Appliances",
    alt: "Home appliances store Mukundpur Bajar",
    desc: "Iron boxes, fans, geysers, room heaters, vacuum cleaners and more. Trusted brands and full warranty on every appliance.",
    features: ["Fans & geysers", "Iron & heaters", "Branded warranty", "Best prices"],
  },
];

const benefits = [
  { icon: Shield, label: "Genuine brand warranty on every product" },
  { icon: Truck, label: "Free home delivery in Prayagraj region" },
  { icon: Wrench, label: "Professional installation & demo included" },
  { icon: Check, label: "Easy EMI options on most items" },
];

const Electronics = () => {
  return (
    <>
      <PageHeader
        eyebrow="⚡ Electronics Catalog"
        title="Premium"
        highlight="Electronics"
        description="From the latest 4K Smart TVs to energy-saving refrigerators, ACs and inverters — explore our complete range of branded electronics with full warranty and after-sales support."
        breadcrumb="Electronics"
        variant="electronics"
      />

      <section className="py-12 bg-surface border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                className="flex items-center gap-3 bg-card border border-border rounded-xl p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-foreground font-medium">{b.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container space-y-10">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              className={`grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-gold transition-all duration-300 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                  {p.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919653032205?text=Hi%2C%20I%20am%20interested%20in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold-gradient px-6 py-3 rounded-full text-primary-foreground font-semibold hover:shadow-gold-lg transition-all duration-300 hover:scale-105"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
};

export default Electronics;
