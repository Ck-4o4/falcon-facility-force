import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Droplets, Bug, Shield, Users, Coffee, Leaf, Wrench } from "lucide-react";

const services = [
  { title: "Housekeeping & Cleaning", desc: "Immaculate daily upkeep for corporate and commercial environments.", icon: Sparkles, number: "01" },
  { title: "Deep Cleaning", desc: "Intensive sanitization and restorative cleaning for high-traffic zones.", icon: Droplets, number: "02" },
  { title: "Pest Control", desc: "Proactive and reactive pest management compliant with health standards.", icon: Bug, number: "03" },
  { title: "Security Services", desc: "Highly trained personnel safeguarding your assets, people, and reputation.", icon: Shield, number: "04" },
  { title: "Manpower Staffing", desc: "Reliable, vetted workforce deployment for dynamic operational needs.", icon: Users, number: "05" },
  { title: "Pantry & Cafeteria", desc: "Hygienic, efficient management of corporate dining facilities.", icon: Coffee, number: "06" },
  { title: "Landscaping & Horticulture", desc: "Expert groundskeeping to elevate exterior aesthetics of your facility.", icon: Leaf, number: "07" },
  { title: "Facility Maintenance", desc: "Comprehensive engineering and technical support for building systems.", icon: Wrench, number: "08" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-gray-50 relative overflow-hidden">
      <div className="absolute -bottom-6 -right-4 text-[180px] md:text-[260px] font-black text-primary/[0.03] leading-none select-none pointer-events-none uppercase tracking-tighter">
        SERVICES
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[2px] w-12 bg-accent" />
              <span className="text-primary font-bold tracking-[0.25em] uppercase text-sm">Our Capabilities</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight"
            >
              Comprehensive <br className="hidden md:block" />facility solutions.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
            className="text-muted-foreground md:max-w-sm text-lg"
          >
            Specialized teams equipped with industry-leading protocols handling every aspect of your operations.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative flex flex-col bg-white p-8 md:p-10 cursor-default"
            >
              <div className="text-5xl font-black text-primary/[0.06] mb-6 leading-none select-none">{service.number}</div>

              {/* Icon */}
              <div className="mb-6 w-16 h-16 bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-black mb-3 group-hover:text-primary transition-colors duration-200 leading-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm flex-grow leading-relaxed">{service.desc}</p>

              <div className="mt-6 flex items-center gap-1 text-xs font-black text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn more <ArrowUpRight className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
