import logo from "@/assets/969e7166-4bcf-45a5-bdbf-1d211ed54479.png";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-surface border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Anubhav Showroom" className="h-16 mb-4" loading="lazy" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your one-stop destination for premium electronics and stylish furniture in Prayagraj.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2">
              {["Electronics", "Furniture", "Why Us", "Services", "Contact"].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Contact Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 9653032205</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Mukundpur Bajar, Prayagraj</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Open Daily 9 AM – 9 PM</div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Anubhav Electronics & Furniture Showroom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
