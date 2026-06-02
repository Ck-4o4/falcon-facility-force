import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import housekeepingIcon from "../assets/images/srv-housekeeping.png";
import deepCleaningIcon from "../assets/images/srv-deep-cleaning.png";
import pestControlIcon from "../assets/images/srv-pest-control.png";
import securityIcon from "../assets/images/srv-security.png";
import staffingIcon from "../assets/images/srv-staffing.png";
import pantryIcon from "../assets/images/srv-pantry.png";
import landscapingIcon from "../assets/images/srv-landscaping.png";
import maintenanceIcon from "../assets/images/srv-maintenance.png";

const services = [
  {
    title: "Housekeeping & Cleaning",
    desc: "Immaculate daily upkeep for corporate and commercial environments.",
    icon: housekeepingIcon,
  },
  {
    title: "Deep Cleaning",
    desc: "Intensive sanitization and restorative cleaning for high-traffic zones.",
    icon: deepCleaningIcon,
  },
  {
    title: "Pest Control",
    desc: "Proactive and reactive pest management compliant with health standards.",
    icon: pestControlIcon,
  },
  {
    title: "Security Services",
    desc: "Highly trained personnel safeguarding your assets, people, and reputation.",
    icon: securityIcon,
  },
  {
    title: "Manpower Staffing",
    desc: "Reliable, vetted workforce deployment for dynamic operational needs.",
    icon: staffingIcon,
  },
  {
    title: "Pantry & Cafeteria",
    desc: "Hygienic, efficient management of corporate dining facilities.",
    icon: pantryIcon,
  },
  {
    title: "Landscaping & Horticulture",
    desc: "Expert groundskeeping to elevate the exterior aesthetics of your facility.",
    icon: landscapingIcon,
  },
  {
    title: "Facility Maintenance",
    desc: "Comprehensive engineering and technical support for building systems.",
    icon: maintenanceIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Capabilities</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
            >
              Comprehensive facility <br className="hidden md:block" /> management solutions.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground md:max-w-sm text-lg"
          >
            We deploy specialized teams equipped with industry-leading protocols to handle every aspect of your site's operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col"
            >
              <div className="mb-6 overflow-hidden rounded bg-white shadow-sm border border-border p-2 aspect-square relative flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-3/4 h-3/4 object-contain mix-blend-darken transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow">{service.desc}</p>
              
              <div className="mt-4 flex items-center text-sm font-bold text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
