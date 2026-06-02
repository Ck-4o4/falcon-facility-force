import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/images/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />
        <img
          src={heroImg}
          alt="Professional facility management team"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Elite Facility Management in India
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            PRECISION <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
              OPERATIONS.
            </span>
            <br />
            PRISTINE SPACES.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-2xl text-white/80 max-w-2xl font-light mb-10 leading-relaxed"
          >
            We don't just maintain your facilities; we command them. 
            Military-grade discipline for corporate offices, hospitals, and industrial sites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 h-14 px-8 text-lg rounded-none group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Proposal
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-primary h-14 px-8 text-lg rounded-none bg-transparent"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
