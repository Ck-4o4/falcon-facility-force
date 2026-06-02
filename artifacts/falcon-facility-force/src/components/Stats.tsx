import { motion } from "framer-motion";

export function Stats() {
  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "40+", label: "Cities Covered" },
    { value: "10k+", label: "Trained Personnel" },
  ];

  return (
    <section className="py-24 bg-white border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-black text-primary mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold text-muted-foreground tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
