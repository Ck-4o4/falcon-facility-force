import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Falcon transformed our facility operations. Their team is invisible yet everywhere — ensuring our 500,000 sq ft campus runs flawlessly. Absolute professionals.",
    author: "Rajiv M.",
    role: "VP Operations",
    company: "Nexus Tech Parks",
    initial: "R",
  },
  {
    quote: "In healthcare, sanitation isn't just cleaning — it's safety. Falcon's protocols and disciplined staff have exceeded our strict compliance requirements every single audit.",
    author: "Dr. Ananya S.",
    role: "Director",
    company: "Apex Medical Center",
    initial: "A",
  },
  {
    quote: "We switched to Falcon after years of inconsistent service. Their 24/7 responsiveness and high standards have made them an invaluable partner to our business.",
    author: "Vikram D.",
    role: "Procurement Head",
    company: "Horizon Retail Group",
    initial: "V",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 65, damping: 18 } },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-gray-50 overflow-hidden relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-primary font-bold tracking-[0.25em] uppercase text-sm">Client Trust</span>
            <div className="h-[2px] w-12 bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          >
            The Verdict.
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative bg-white p-8 md:p-10 border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Large quote icon */}
              <Quote className="w-12 h-12 text-primary/8 mb-6 flex-shrink-0" strokeWidth={1} />

              <p className="text-base text-foreground/90 leading-relaxed mb-8 flex-grow">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-black text-sm text-foreground">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role} &mdash; {t.company}</div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
