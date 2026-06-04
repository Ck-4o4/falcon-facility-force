import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedNumber({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="tabular-nums">
      {count}{suffix}
    </div>
  );
}

const stats = [
  { target: 50, suffix: "+", label: "Enterprise Clients", desc: "served across India" },
  { target: 5, suffix: "+", label: "Years of Experience", desc: "in facility management" },
  { target: 10, suffix: "+", label: "Cities Covered", desc: "and growing" },
  { target: 250, suffix: "+", label: "Trained Personnel", desc: "deployed nationwide" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } },
};

export function Stats() {
  return (
    <section className="py-0 bg-primary overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-2 md:grid-cols-4"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group relative px-8 py-16 md:py-20 text-center border-r border-b border-white/10 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0 md:[&:nth-child(n+3)]:border-b-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-accent mb-1 leading-none">
              <AnimatedNumber target={stat.target} suffix={stat.suffix} />
            </div>
            <div className="text-white font-black text-sm md:text-base uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-white/40 text-xs">{stat.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
