import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
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
  {
    src: heroSlide1,
    alt: "Anubhav Electronics & Furniture Showroom front view in Mukundpur Bajar Prayagraj",
    title: "Welcome to Anubhav Showroom",
    caption: "Mukundpur Bajar, Prayagraj — Trusted since years",
  },
  {
    src: heroSlide2,
    alt: "Premium beds and sofa sets at Anubhav Showroom Prayagraj",
    title: "Premium Beds & Sofa Sets",
    caption: "Comfort and style for every modern home",
  },
  {
    src: heroSlide3,
    alt: "Wooden furniture and wardrobes at Anubhav Furniture Showroom",
    title: "Wooden Furniture & Wardrobes",
    caption: "Durable craftsmanship at unbeatable prices",
  },
  {
    src: heroSlide4,
    alt: "Designer beds and mattresses collection in Prayagraj",
    title: "Designer Beds & Mattresses",
    caption: "Sleep better with our premium collection",
  },
  {
    src: heroSlide5,
    alt: "Plastic chairs, coolers and home essentials at Anubhav Showroom",
    title: "Home Essentials & Coolers",
    caption: "Everything you need under one roof",
  },
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
    <section className="relative overflow-hidden bg-background">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-16">
        {/* Carousel Box - Top, Full Width */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mb-12"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card aspect-[16/9] md:aspect-[21/9]">
            <div className="absolute inset-0" ref={emblaRef}>
              <div className="flex h-full">
                {slides.map((slide, i) => (
                  <div key={i} className="min-w-0 shrink-0 grow-0 basis-full h-full relative">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                      {...(i === 0 ? {} : { loading: "lazy" as const })}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-4 md:p-8">
                      <h3 className="font-display font-bold text-xl md:text-3xl text-foreground mb-1">
                        {slide.title}
                      </h3>
                      <p className="text-sm md:text-lg text-muted-foreground">
                        {slide.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 rounded-3xl pointer-events-none" />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-gradient rounded-full blur-2xl opacity-40 -z-10" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-gradient rounded-full blur-2xl opacity-40 -z-10" />

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === i
                    ? "bg-primary w-10"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Content - Below Slider */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block bg-secondary/10 border border-secondary/30 rounded-full px-4 py-1.5 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-secondary text-sm font-medium">Smart Living Starts Here</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Upgrade Your Home with{" "}
            <span className="text-gold-gradient">Premium Electronics</span>{" "}
            & <span className="text-blue-gradient">Furniture</span>
          </motion.h1>

          <h2 className="sr-only">Best Electronics & Furniture Showroom in Prayagraj</h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From Smart TVs to Stylish Sofas — Everything You Need Under One Roof at <strong className="text-foreground">Mukundpur Bajar, Prayagraj</strong>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="tel:9653032205"
              className="bg-gold-gradient px-8 py-4 rounded-full text-primary-foreground font-semibold text-lg flex items-center gap-2 hover:shadow-gold-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a
              href="https://wa.me/919653032205"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-secondary bg-secondary/10 px-8 py-4 rounded-full text-secondary font-semibold text-lg flex items-center gap-2 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <Link
              to="/electronics"
              className="px-8 py-4 rounded-full text-muted-foreground font-semibold text-lg flex items-center gap-2 hover:text-foreground transition-colors duration-300"
            >
              View Products <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
