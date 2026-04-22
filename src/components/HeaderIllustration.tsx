import { motion } from "framer-motion";
import { Tv, Refrigerator, AirVent, Zap, Sofa, Bed, Lamp, Armchair, Wrench, Truck, CreditCard, Headphones, Heart, Award, Sparkles as SparkIcon, Phone, MessageCircle, MapPin } from "lucide-react";

type Variant = "electronics" | "furniture" | "services" | "about" | "contact";

const orbit = (delay = 0) => ({
  animate: { rotate: 360 },
  transition: { duration: 22, repeat: Infinity, ease: "linear" as const, delay },
});

const float = (delay = 0, y = 8) => ({
  animate: { y: [0, -y, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const pulse = (delay = 0) => ({
  animate: { scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay },
});

interface Props {
  variant: Variant;
}

const iconMap: Record<Variant, { center: typeof Tv; orbiters: { Icon: typeof Tv; color: string }[]; centerColor: string }> = {
  electronics: {
    center: Tv,
    centerColor: "bg-gold-gradient",
    orbiters: [
      { Icon: Refrigerator, color: "text-primary" },
      { Icon: AirVent, color: "text-secondary" },
      { Icon: Zap, color: "text-primary" },
      { Icon: Headphones, color: "text-secondary" },
    ],
  },
  furniture: {
    center: Sofa,
    centerColor: "bg-blue-gradient",
    orbiters: [
      { Icon: Bed, color: "text-secondary" },
      { Icon: Armchair, color: "text-primary" },
      { Icon: Lamp, color: "text-secondary" },
      { Icon: SparkIcon, color: "text-primary" },
    ],
  },
  services: {
    center: Wrench,
    centerColor: "bg-gold-gradient",
    orbiters: [
      { Icon: Truck, color: "text-primary" },
      { Icon: CreditCard, color: "text-secondary" },
      { Icon: Headphones, color: "text-primary" },
      { Icon: SparkIcon, color: "text-secondary" },
    ],
  },
  about: {
    center: Heart,
    centerColor: "bg-gold-gradient",
    orbiters: [
      { Icon: Award, color: "text-primary" },
      { Icon: SparkIcon, color: "text-secondary" },
      { Icon: Sofa, color: "text-primary" },
      { Icon: Tv, color: "text-secondary" },
    ],
  },
  contact: {
    center: Phone,
    centerColor: "bg-gold-gradient",
    orbiters: [
      { Icon: MessageCircle, color: "text-secondary" },
      { Icon: MapPin, color: "text-primary" },
      { Icon: Headphones, color: "text-secondary" },
      { Icon: SparkIcon, color: "text-primary" },
    ],
  },
};

const HeaderIllustration = ({ variant }: Props) => {
  const { center: CenterIcon, orbiters, centerColor } = iconMap[variant];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* concentric rings */}
      <motion.div
        className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-primary/30"
        {...orbit(0)}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-secondary/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* glow */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-primary/20 blur-3xl"
        {...pulse(0)}
      />

      {/* center icon tile */}
      <motion.div
        {...float(0, 6)}
        className={`relative z-10 w-28 h-28 rounded-3xl ${centerColor} flex items-center justify-center shadow-2xl`}
      >
        <CenterIcon className="w-14 h-14 text-primary-foreground" strokeWidth={1.5} />
        {/* sparkle dots */}
        <motion.span
          className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-secondary"
          {...pulse(0.5)}
        />
        <motion.span
          className="absolute -bottom-2 -left-2 w-2.5 h-2.5 rounded-full bg-primary"
          {...pulse(1)}
        />
      </motion.div>

      {/* orbiting icons — 4 around the center */}
      {orbiters.map((o, i) => {
        const angle = (i * 360) / orbiters.length;
        const radius = 140;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            }}
            {...float(i * 0.4, 10)}
          >
            <div className="glass-card w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl">
              <o.Icon className={`w-7 h-7 ${o.color}`} strokeWidth={1.6} />
            </div>
          </motion.div>
        );
      })}

      {/* tiny floating particles */}
      {[
        { x: -90, y: -110, d: 0 },
        { x: 110, y: -80, d: 0.6 },
        { x: -120, y: 90, d: 1.2 },
        { x: 100, y: 120, d: 1.8 },
      ].map((p, i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/70"
          style={{ left: `calc(50% + ${p.x}px)`, top: `calc(50% + ${p.y}px)` }}
          {...pulse(p.d)}
        />
      ))}
    </div>
  );
};

export default HeaderIllustration;
