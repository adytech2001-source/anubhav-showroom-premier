import { motion } from "framer-motion";
import { User, Award, Heart, Target, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import OwnerSection from "@/components/OwnerSection";
import FinalCTA from "@/components/FinalCTA";

const milestones = [
  { year: "Years of Trust", value: "10+", desc: "Serving Prayagraj families with care" },
  { year: "Happy Customers", value: "5000+", desc: "Satisfied homes across the region" },
  { year: "Product Range", value: "500+", desc: "Electronics & furniture varieties" },
  { year: "Top Brands", value: "50+", desc: "All leading brands under one roof" },
];

const values = [
  { icon: Heart, title: "Customer First", desc: "Every customer is family. We listen, advise honestly, and always recommend what truly fits your home and budget." },
  { icon: Award, title: "Quality Promise", desc: "We stock only branded, BIS-certified electronics and durable, well-finished furniture — no compromises on quality." },
  { icon: Target, title: "Fair Pricing", desc: "Transparent, market-best prices with festive offers and EMI options. What you see is what you pay." },
  { icon: Sparkles, title: "After-Sales Care", desc: "Free home delivery, professional installation, and dedicated service support — we stand behind every product we sell." },
];

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About"
        highlight="Anubhav Showroom"
        description="A trusted local name in Mukundpur Bajar, Prayagraj — bringing premium electronics and stylish furniture to thousands of homes across Soraon, Holagarh and beyond."
        breadcrumb="About"
        variant="about"
      />

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Built on <span className="text-gold-gradient">Trust</span>, Run with{" "}
                <span className="text-blue-gradient">Heart</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Anubhav Electronics & Furniture Showroom started with a simple promise — give the families
                  of Prayagraj access to premium, branded electronics and beautifully crafted furniture without
                  the hassle of travelling to big city malls.
                </p>
                <p>
                  Located in the heart of <strong className="text-foreground">Mukundpur Bajar, Holagarh, Soraon</strong>,
                  our showroom has grown from a small corner shop into one of the region's most trusted destinations
                  for home upgrades. Whether it's a young couple buying their first refrigerator or a family
                  redesigning their entire bedroom, we've been part of thousands of memorable moments.
                </p>
                <p>
                  What sets us apart isn't just the products — it's the people. Our founders personally greet
                  customers, our team knows every product inside-out, and we treat every sale as the start of
                  a long-term relationship.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-gold transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-2">
                    {m.value}
                  </div>
                  <div className="font-semibold text-foreground text-sm mb-1">{m.year}</div>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Values */}
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What We <span className="text-gold-gradient">Stand For</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-gold transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OwnerSection />
      <FinalCTA />
    </>
  );
};

export default About;
