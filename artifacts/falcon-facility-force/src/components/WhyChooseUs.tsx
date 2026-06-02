import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, MapPin, Clock, Zap } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "ISO-Compliant Processes", desc: "Every protocol meets rigorous international standards for safety and quality." },
  { icon: CheckCircle2, title: "Trained Workforce", desc: "Our personnel undergo continuous military-style training for discipline and efficiency." },
  { icon: MapPin, title: "Pan-India Presence", desc: "Consistent service delivery across regions, scaled for enterprise networks." },
  { icon: Clock, title: "24/7 Operations", desc: "Uninterrupted support — we are active at all hours so your business never stops." },
  { icon: Zap, title: "Cutting-Edge Equipment", desc: "Modern industrial machinery delivering superior results in less time." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18 } },
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-accent" />
                <span className="text-primary font-bold tracking-[0.25em] uppercase text-sm">The Falcon Standard</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
                Engineered for<br /><span className="text-primary">excellence.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl leading-relaxed">
                We do not believe in acceptable. We believe in exceptional. Falcon Facility Force operates with an unyielding commitment to precision, leaving nothing to chance.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-7"
            >
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group flex gap-5 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <point.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-base font-black mb-1 group-hover:text-primary transition-colors">{point.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual Panel */}
          <div className="w-full lg:w-1/2 relative h-[560px]">
            {/* Background decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 50, damping: 18, delay: 0.15 }}
              className="absolute inset-4 bg-gray-50 -skew-y-3"
            />

            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 55, damping: 18, delay: 0.25 }}
              className="absolute top-10 left-6 right-6 bottom-10 z-10 bg-primary p-10 flex flex-col justify-between shadow-2xl"
            >
              {/* Top row */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="w-10 h-[2px] bg-accent" />
                  <div className="w-6 h-[2px] bg-accent/50" />
                </div>
                <div className="text-right">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-6xl font-black text-white leading-none"
                  >
                    99.8%
                  </motion.div>
                  <div className="text-accent text-xs font-black tracking-[0.2em] uppercase mt-1">SLA Compliance Rate</div>
                </div>
              </div>

              {/* Middle stats */}
              <div className="grid grid-cols-2 gap-6">
                {[["Zero", "Missed SLAs"], ["48hr", "Onboarding Time"], ["ISO", "9001 Certified"], ["24/7", "Support Line"]].map(([val, label], i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 80, damping: 20 }}
                    className="border border-white/10 p-4"
                  >
                    <div className="text-2xl font-black text-accent">{val}</div>
                    <div className="text-white/50 text-xs uppercase tracking-widest mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom bar */}
              <div>
                <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Performance Index</div>
                <div className="w-full h-[3px] bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.8%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>
            </motion.div>

            {/* Decorative corner squares */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-0 right-0 w-20 h-20 border border-accent/30 z-20"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-0 left-0 w-14 h-14 bg-accent/20 z-20"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
