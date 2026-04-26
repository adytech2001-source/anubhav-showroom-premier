import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Star, ShieldCheck, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";

const slides = [
  { src: heroSlide1, alt: "Anubhav Electronics & Furniture Showroom front view in Mukundpur Bajar Prayagraj", tag: "Showroom" },
  { src: heroSlide2, alt: "Premium beds and sofa sets at Anubhav Showroom Prayagraj", tag: "Sofa Sets" },
  { src: heroSlide3, alt: "Wooden furniture and wardrobes at Anubhav Furniture Showroom", tag: "Wardrobes" },
  { src: heroSlide4, alt: "Designer beds and mattresses collection in Prayagraj", tag: "Beds" },
  { src: heroSlide5, alt: "Plastic chairs, coolers and home essentials at Anubhav Showroom", tag: "Essentials" },
];

const marqueeItems = [
  "✦ Best Electronic Shop in Prayagraj",
  "✦ EMI Available",
  "✦ Best Price Guarantee",
  "✦ Trusted Since Years",
  "✦ Premium Brands",
  "✦ Expert Consultation",
  "✦ After Sales Support",
  "✦ Mukundpur Bajar, Prayagraj",
];

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden bg-background pt-24 md:pt-28 pb-12 md:pb-16">
      {/* Animated background orbs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-10 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 -right-24 w-[32rem] h-[32rem] rounded-full bg-secondary/20 blur-[120px] animate-float-slower" />
        <div className="absolute inset-0 bg-grid-pattern mask-radial-fade opacity-60" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT — Text */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs md:text-sm font-medium tracking-wide">
                Smart Living Starts Here
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 ml-2 pl-3 border-l border-border text-xs text-muted-foreground">
                <Star className="w-3 h-3 fill-primary text-primary" /> 4.9 Rated
              </span>
            </motion.div>

            <motion.h1
              className="text-[2.4rem] sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Upgrade Your Home with{" "}
              <span className="text-gold-gradient">Premium Electronics</span>{" "}
              & <span className="text-blue-gradient">Furniture</span>
            </motion.h1>

            <h2 className="sr-only">Best Electronic Shop in Prayagraj — Anubhav Electronics & Furniture Showroom</h2>

            <motion.p
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              From Smart TVs to Stylish Sofas — everything you need under one roof at{" "}
              <strong className="text-foreground">Mukundpur Bajar, Prayagraj</strong>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <a
                href="tel:9653032205"
                className="group bg-gold-gradient px-7 py-3.5 rounded-full text-primary-foreground font-semibold flex items-center gap-2 shadow-gold-lg hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" /> Call Now
              </a>
              <a
                href="https://wa.me/919653032205"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full font-semibold flex items-center gap-2 border-2 border-secondary/40 bg-secondary/5 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <Link
                to="/electronics"
                className="px-5 py-3.5 rounded-full font-semibold flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
              >
                Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
            >
              {[
                { v: "10K+", l: "Happy Customers" },
                { v: "500+", l: "Products" },
                { v: "15+", l: "Years Trust" },
              ].map((s) => (
                <div key={s.l} className="glass-card rounded-2xl p-3 text-center">
                  <div className="text-xl md:text-2xl font-display font-bold text-gold-gradient">{s.v}</div>
                  <div className="text-[11px] md:text-xs text-muted-foreground mt-0.5 leading-tight">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* decorative floating tile behind */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-3xl bg-gold-gradient opacity-20 blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-blue-gradient opacity-20 blur-2xl -z-10" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/60 bg-card aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3]">
              <div className="absolute inset-0" ref={emblaRef}>
                <div className="flex h-full">
                  {slides.map((slide, i) => (
                    <div key={i} className="min-w-0 shrink-0 grow-0 basis-full h-full relative">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        width={1600}
                        height={1200}
                        className="w-full h-full object-cover"
                        {...(i === 0 ? {} : { loading: "lazy" as const })}
                      />
                      <div className="absolute top-4 left-4 glass-card text-xs font-semibold px-3 py-1.5 rounded-full">
                        {slide.tag}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 rounded-[2rem] pointer-events-none" />
            </div>

            {/* Floating review badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden md:flex absolute -bottom-6 -left-4 glass-card rounded-2xl px-4 py-3 items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">100% Genuine</div>
                <div className="text-xs text-muted-foreground">Original Brand Warranty</div>
              </div>
            </motion.div>

            {/* Floating Best Shop badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="hidden md:flex absolute -top-5 -right-3 glass-card rounded-2xl px-4 py-3 items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-blue-gradient flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">Best Electronic Shop</div>
                <div className="text-xs text-muted-foreground">In Prayagraj Region</div>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === i
                      ? "bg-gold-gradient w-10"
                      : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee trust strip */}
      <div className="relative mt-14 md:mt-20 border-y border-border/60 bg-card/40 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-sm md:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
