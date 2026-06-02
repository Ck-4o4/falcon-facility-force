import { motion } from "framer-motion";
import { Building2, Activity, Hotel, ShoppingBag, Factory, GraduationCap } from "lucide-react";

export function Industries() {
  const industries = [
    { name: "Corporate Offices", icon: Building2 },
    { name: "Healthcare", icon: Activity },
    { name: "Hospitality", icon: Hotel },
    { name: "Retail & Malls", icon: ShoppingBag },
    { name: "Industrial & Mfg", icon: Factory },
    { name: "Education", icon: GraduationCap },
  ];

  return (
    <section id="industries" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Sectors We Command</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tailored operations specifically adapted to the unique demands of high-stakes industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent transition-colors duration-300"
            >
              <ind.icon className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="text-sm font-bold text-center tracking-wide">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
