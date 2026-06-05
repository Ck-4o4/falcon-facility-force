import { motion } from "framer-motion";
import { Building2, Activity, Hotel, ShoppingBag, Factory, GraduationCap } from "lucide-react";

const industries = [
  { name: "Corporate Offices", icon: Building2, desc: "HQs, tech parks, and BPOs" },
  { name: "Healthcare", icon: Activity, desc: "Hospitals and clinics" },
  { name: "Hospitality", icon: Hotel, desc: "Hotels and resorts" },
  { name: "Retail & Malls", icon: ShoppingBag, desc: "Shopping centres" },
  { name: "Industrial & Mfg", icon: Factory, desc: "Plants and warehouses" },
  { name: "Education", icon: GraduationCap, desc: "Schools and campuses" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 70, damping: 16 } },
};

export function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245,197,24,0.8) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.4) 0%, transparent 50%)' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[2px] w-12 bg-accent" />
              <span className="text-accent font-bold tracking-[0.25em] uppercase text-sm">Sectors We Command</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            >
              Industries we serve.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
            className="text-white/60 md:max-w-sm text-base"
          >
            Tailored operations adapted to the unique demands of high-stakes industries.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10"
        >
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.12)", y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group flex flex-col items-center justify-center p-8 md:p-10 bg-white/[0.03] cursor-default text-center"
            >
              <div className="mb-4 w-14 h-14 rounded border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                <ind.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-black tracking-wide mb-1">{ind.name}</h3>
              <p className="text-white/40 text-xs">{ind.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
