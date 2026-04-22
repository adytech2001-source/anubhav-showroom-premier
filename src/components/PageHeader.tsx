import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Sparkles } from "lucide-react";
import HeaderIllustration from "./HeaderIllustration";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumb: string;
  variant?: "electronics" | "furniture" | "services" | "about" | "contact";
}

const PageHeader = ({ eyebrow, title, highlight, description, breadcrumb, variant = "electronics" }: PageHeaderProps) => {
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

          {/* RIGHT — Animated illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-5 relative h-[340px] md:h-[380px] hidden lg:block"
          >
            <HeaderIllustration variant={variant} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
