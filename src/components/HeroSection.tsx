import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  { src: heroSlide1, alt: "Premium electronics and furniture showroom in Prayagraj" },
  { src: heroSlide2, alt: "Stylish furniture showroom with sofa and dining sets" },
  { src: heroSlide3, alt: "Electronics store with refrigerators, ACs, washing machines" },
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel */}
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
            </div>
          ))}
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Upgrade Your Home with{" "}
            <span className="text-gold-gradient">Premium Electronics</span>{" "}
            & <span className="text-gold-gradient">Furniture</span>
          </motion.h1>

          <h2 className="sr-only">Best Electronics & Furniture Showroom in Prayagraj</h2>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From Smart TVs to Stylish Sofas – Everything You Need Under One Roof
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="tel:9653032205"
              className="bg-gold-gradient px-8 py-4 rounded-lg text-primary-foreground font-semibold text-lg flex items-center gap-2 hover:shadow-gold-lg transition-shadow duration-300"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a
              href="https://wa.me/919653032205"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold bg-transparent px-8 py-4 rounded-lg text-gold font-semibold text-lg flex items-center gap-2 hover:bg-gold/10 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </motion.div>

          {/* Dots */}
          <motion.div
            className="flex gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedIndex === i
                    ? "bg-gold w-8"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
