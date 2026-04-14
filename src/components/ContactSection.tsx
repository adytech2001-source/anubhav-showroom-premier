import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Visit <span className="text-blue-gradient">Our Showroom</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: MapPin, title: "Address", text: "Mukundpur Bajar, Holagarh, Soraon, Prayagraj (UP)" },
              { icon: Clock, title: "Hours", text: "Open Daily: 9 AM – 9 PM" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:9653032205" className="text-primary hover:text-primary/80 transition-colors block font-medium">📞 9653032205</a>
                <a href="tel:9580639466" className="text-primary hover:text-primary/80 transition-colors block font-medium">📞 9580639466</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden border border-border shadow-gold ring-1 ring-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Anubhav Showroom Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d81.8833!3d25.4333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb00f8cf3c0b%3A0x8e5f4c3e2d1a0b9c!2sMukundpur%20Bajar%2C%20Holagarh%2C%20Soraon%2C%20Prayagraj%2C%20Uttar%20Pradesh%20212503!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
