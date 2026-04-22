import { motion } from "framer-motion";
import { Check, Hammer, Truck, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FinalCTA from "@/components/FinalCTA";
import bedImg from "@/assets/products/bed.jpg";
import sofaImg from "@/assets/products/sofa.jpg";
import diningImg from "@/assets/products/dining-table.jpg";
import wardrobeImg from "@/assets/products/wardrobe.jpg";
import dressingImg from "@/assets/products/dressing-table.jpg";
import mattressImg from "@/assets/products/mattress.jpg";
import bedroomSetImg from "@/assets/products/bedroom-set.jpg";
import plasticChairsImg from "@/assets/products/plastic-chairs.jpg";
import waterTankImg from "@/assets/products/water-tank.jpg";

const products = [
  {
    image: bedImg,
    name: "Beds",
    alt: "Bed and wardrobe shop Prayagraj",
    desc: "Single, double, queen and king-size beds with hydraulic storage, box storage and classic designs in solid wood, sheesham and engineered wood finishes.",
    features: ["Hydraulic storage", "Solid wood options", "All standard sizes", "Modern & classic"],
  },
  {
    image: sofaImg,
    name: "Sofa Sets",
    alt: "Modern sofa set showroom in Mukundpur Bajar",
    desc: "3+1+1, 3+2 and L-shaped sofa sets in fabric, leatherette and premium wood frames. Comfortable foam cushioning with stylish modern and traditional designs.",
    features: ["3+1+1, 3+2, L-shape", "Fabric & leatherette", "Solid wood frames", "Premium foam"],
  },
  {
    image: diningImg,
    name: "Dining Tables",
    alt: "Dining table furniture shop Prayagraj",
    desc: "4-seater, 6-seater and 8-seater dining sets in wood, glass-top and marble-top variants. Sturdy chairs with cushioned seats for comfortable family meals.",
    features: ["4 to 8 seater", "Wood, glass, marble", "Cushioned chairs", "Strong build"],
  },
  {
    image: wardrobeImg,
    name: "Wardrobes",
    alt: "Wardrobe furniture store near Soraon",
    desc: "2-door, 3-door and 4-door wardrobes with mirror, drawer and locker options. Spacious storage with hangers, shelves and shoe racks built-in.",
    features: ["2 to 4 door options", "Mirror & locker", "Hangers + drawers", "Modern finishes"],
  },
  {
    image: dressingImg,
    name: "Dressing Tables",
    alt: "Dressing table shop in Prayagraj",
    desc: "Wall-mounted and standing dressing tables with large mirrors, drawers and storage compartments. Perfect blend of style and utility.",
    features: ["Standing & wall types", "Large mirror", "Multiple drawers", "Stylish finishes"],
  },
  {
    image: mattressImg,
    name: "Mattresses",
    alt: "Mattress store near Mukundpur Bajar",
    desc: "Coir, foam, spring and orthopaedic mattresses from Sleepwell, Kurlon, Centuary and Duroflex. Available in all standard sizes with warranty.",
    features: ["Coir, foam, spring", "Orthopaedic options", "Top brands", "All sizes"],
  },
  {
    image: bedroomSetImg,
    name: "Complete Bedroom Sets",
    alt: "Complete bedroom set showroom Prayagraj",
    desc: "Coordinated bedroom packages including bed, wardrobe, dressing table and side tables — designed to match perfectly and save you both time and money.",
    features: ["Bed + wardrobe combo", "Matching designs", "Combo discounts", "Free delivery"],
  },
  {
    image: plasticChairsImg,
    name: "Plastic Chairs",
    alt: "Plastic chairs shop in Prayagraj Mukundpur Bajar",
    desc: "Branded plastic chairs from Nilkamal, Supreme and Cello. Stackable, weather-proof and ideal for home, shop, office and outdoor use.",
    features: ["Nilkamal, Supreme", "Stackable design", "Weather-proof", "Multiple colors"],
  },
  {
    image: waterTankImg,
    name: "Water Tanks",
    alt: "Sintex water tank store near Soraon Prayagraj",
    desc: "Sintex and other branded water storage tanks from 500L to 5000L. Triple-layer, food-grade plastic with full warranty.",
    features: ["500L–5000L sizes", "Triple-layer build", "Food-grade plastic", "Brand warranty"],
  },
];

const benefits = [
  { icon: Hammer, label: "Solid build, premium finish on every piece" },
  { icon: Truck, label: "Free home delivery within Prayagraj region" },
  { icon: Sparkles, label: "Free assembly & placement at your home" },
  { icon: Check, label: "Custom orders & combo discounts available" },
];

const Furniture = () => {
  return (
    <>
      <PageHeader
        eyebrow="🛋️ Furniture Catalog"
        title="Stylish & Durable"
        highlight="Furniture"
        description="Beds, sofas, wardrobes, dining sets, mattresses and complete bedroom packages — handpicked for quality, comfort and modern Indian homes."
        breadcrumb="Furniture"
        variant="furniture"
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
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-secondary" />
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
              className={`grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-3xl overflow-hidden hover:border-secondary/40 hover:shadow-blue transition-all duration-300 ${
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
                      <Check className="w-4 h-4 text-secondary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919653032205?text=Hi%2C%20I%20am%20interested%20in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-gradient px-6 py-3 rounded-full text-secondary-foreground font-semibold hover:shadow-blue-lg transition-all duration-300 hover:scale-105"
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

export default Furniture;
