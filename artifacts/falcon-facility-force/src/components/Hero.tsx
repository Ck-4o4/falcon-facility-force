import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg1 from "../assets/images/hero1.jpg";
import heroImg2 from "../assets/images/hero2.jpg";
import heroImg3 from "../assets/images/hero3.jpg";

const slides = [
  { src: heroImg1, alt: "Professional facility management team in corporate lobby" },
  { src: heroImg2, alt: "Expert cleaning team at work in a modern office" },
  { src: heroImg3, alt: "Landscaping and horticulture team maintaining corporate grounds" },
];

const INTERVAL = 3000;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      style={{ position: "relative" }}
      className="min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-primary"
    >
      {/* Slideshow background */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          style={{ y: bgY }}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/35 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent z-10" />
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover object-center scale-105"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[5] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Slide indicators */}
      <div className="absolute bottom-24 right-8 md:right-16 z-30 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`block w-[2px] transition-all duration-500 ${
              i === current ? "h-10 bg-accent" : "h-4 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-accent font-black text-xl tabular-nums">0{current + 1}</span>
        <div className="w-[1px] h-8 bg-white/20" />
        <span className="text-white/30 text-sm tabular-nums">0{slides.length}</span>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="container relative z-20 mx-auto px-4 md:px-6"
      >
        <div className="max-w-5xl">
          {/* Headline */}
          <div className="mb-8">
            <div className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-[1.0] tracking-tight">
              {["PRECISION", "OPERATIONS."].map((word, i) => (
                <motion.span
                  key={word}
                  className={`inline-block mr-6 ${
                    i === 1
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200"
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.12 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-[1.0] tracking-tight">
              {["PRISTINE", "SPACES."].map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-6"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.35 + i * 0.12 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl font-light mb-12 leading-relaxed"
          >
            We don't just maintain your facilities; we command them. Military-grade discipline for
            corporate offices, hospitals, and industrial sites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-yellow-300 h-14 px-10 text-base font-bold rounded-none group transition-all duration-300"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Request a Proposal
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-primary h-14 px-10 text-base font-bold rounded-none bg-transparent transition-all duration-300"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </Button>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
