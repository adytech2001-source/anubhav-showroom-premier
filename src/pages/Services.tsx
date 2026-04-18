import { motion } from "framer-motion";
import { Truck, Wrench, CreditCard, Home, Package, Zap, Headphones, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FinalCTA from "@/components/FinalCTA";

const services = [
  {
    icon: Home,
    title: "Home Furnishing Solutions",
    desc: "Planning to set up a new home or redo your existing one? Our team helps you plan room layouts, suggest matching furniture and recommend the right electronics for your space and budget — all under one roof.",
  },
  {
    icon: Package,
    title: "Electronics + Furniture Combos",
    desc: "Save big with our specially curated combo deals. Pair a new bedroom set with a Smart TV, or a sofa set with an air cooler — combo discounts apply automatically and we deliver everything together.",
  },
  {
    icon: Zap,
    title: "Inverter & Battery Setup",
    desc: "End-to-end power backup solutions: load calculation, inverter sizing, battery selection, professional wiring, and on-site installation. Includes one-year free service visits and battery health checks.",
  },
  {
    icon: Truck,
    title: "Free Home Delivery",
    desc: "Free doorstep delivery across Prayagraj, Soraon, Holagarh and nearby villages on all major purchases. Our trained delivery team handles your products with care and on-time scheduling.",
  },
  {
    icon: Wrench,
    title: "Installation & Demo",
    desc: "Professional installation for ACs, TVs, washing machines, geysers and assembly for all furniture. We don't leave until your product is set up correctly and you know how to use it.",
  },
  {
    icon: CreditCard,
    title: "Easy EMI & Finance",
    desc: "No-cost EMI options through Bajaj Finserv, HDFC, Axis and other partners. Quick paperless approvals on most cards — take your dream product home today and pay over comfortable monthly instalments.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    desc: "Genuine brand warranty handling, repair coordination, spare parts and friendly customer support. One call to us and we'll guide you through any issue with your purchase.",
  },
  {
    icon: ShieldCheck,
    title: "Bulk & Institutional Orders",
    desc: "Special pricing for hotels, offices, schools, hostels and bulk buyers. Custom quotations, scheduled delivery and dedicated account manager for large orders.",
  },
];

const Services = () => {
  return (
    <>
      <PageHeader
        eyebrow="🔧 Our Services"
        title="More Than a Showroom —"
        highlight="A Complete Service"
        description="From product advice and free home delivery to installation, EMI and after-sales support — we make upgrading your home effortless."
        breadcrumb="Services"
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
};

export default Services;
