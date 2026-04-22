import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Sparkles, Star, ShieldCheck, Truck, Award, Phone } from "lucide-react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumb: string;
}

const PageHeader = ({ eyebrow, title, highlight, description, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="relative pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden border-b border-border">
      {/* Layered background */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-surface via-background to-card" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-pattern mask-radial-fade opacity-50" />
      <div aria-hidden className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-float-slow" />
      <div aria-hidden className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-secondary/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 animate-float-slower" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT — Text content */}
          <div className="lg:col-span-7">
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
            >
              <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium">{breadcrumb}</span>
            </motion.nav>

            {eyebrow && (
              <motion.div
                className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary text-sm font-medium tracking-wide">{eyebrow}</span>
              </motion.div>
            )}

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title} {highlight && <span className="text-gold-gradient">{highlight}</span>}
            </motion.h1>

            {description && (
              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {description}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="origin-left mt-8 h-1 w-32 bg-gold-gradient rounded-full"
            />
          </div>

          {/* RIGHT — Decorative visual cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-5 relative h-[320px] md:h-[360px] hidden lg:block"
          >
            {/* Center monogram tile */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-56 h-56 rounded-[2rem] bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 border border-border/60 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <div className="absolute inset-3 rounded-3xl border border-dashed border-primary/30" />
                <div className="text-center">
                  <div className="text-7xl font-display font-bold text-gold-gradient leading-none">A</div>
                  <div className="mt-2 text-[10px] tracking-[0.3em] text-muted-foreground font-semibold">
                    ANUBHAV
                  </div>
                  <div className="text-[10px] tracking-[0.2em] text-muted-foreground">
                    SHOWROOM
                  </div>
                </div>
                {/* corner stars */}
                <Star className="absolute -top-3 -right-3 w-6 h-6 text-primary fill-primary animate-float-slow" />
                <Star className="absolute -bottom-3 -left-3 w-5 h-5 text-secondary fill-secondary animate-float-slower" />
              </div>
            </div>

            {/* Floating badge: Rated */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-2 left-0 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl animate-float-slow"
            >
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">4.9 / 5.0</div>
                <div className="text-[11px] text-muted-foreground">Customer Rated</div>
              </div>
            </motion.div>

            {/* Floating badge: Warranty */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-8 right-0 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl animate-float-slower"
            >
              <div className="w-10 h-10 rounded-full bg-blue-gradient flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">Genuine</div>
                <div className="text-[11px] text-muted-foreground">Brand Warranty</div>
              </div>
            </motion.div>

            {/* Floating badge: Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-6 left-4 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl animate-float-slow"
            >
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">Free Delivery</div>
                <div className="text-[11px] text-muted-foreground">Across Prayagraj</div>
              </div>
            </motion.div>

            {/* Floating badge: Years */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-2 right-2 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl animate-float-slower"
            >
              <div className="w-10 h-10 rounded-full bg-blue-gradient flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">15+ Years</div>
                <div className="text-[11px] text-muted-foreground">Trusted Service</div>
              </div>
            </motion.div>

            {/* Floating call chip */}
            <motion.a
              href="tel:9653032205"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute top-1/2 -right-2 -translate-y-1/2 hidden xl:flex items-center gap-2 bg-gold-gradient text-primary-foreground rounded-full px-4 py-2 shadow-gold-lg hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs font-semibold">Call Now</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
