import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Visit <span className="text-gold-gradient">Our Showroom</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">Mukundpur Bajar, Holagarh, Soraon, Prayagraj (UP)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">Open Daily: 9 AM – 9 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:9653032205" className="text-gold hover:text-gold-light transition-colors block">📞 9653032205</a>
                <a href="tel:9580639466" className="text-gold hover:text-gold-light transition-colors block">📞 9580639466</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden border border-border shadow-gold"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Anubhav Showroom Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.0!2d81.85!3d25.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzAwLjAiTiA4McKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="300"
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
