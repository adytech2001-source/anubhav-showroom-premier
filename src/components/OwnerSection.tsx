import { motion } from "framer-motion";
import { User } from "lucide-react";

const owners = [
  { name: "Ram Lakhan Jaiswal", role: "Proprietor" },
  { name: "Pankaj Jaiswal", role: "Proprietor" },
];

const OwnerSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet the <span className="text-gold-gradient">Founders</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Serving with trust & quality
        </motion.p>
        <div className="flex flex-wrap justify-center gap-8">
          {owners.map((owner, i) => (
            <motion.div
              key={owner.name}
              className="bg-card border border-border rounded-xl p-8 text-center w-72 hover:border-gold hover:shadow-gold transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{owner.name}</h3>
              <p className="text-gold text-sm mt-1">{owner.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
