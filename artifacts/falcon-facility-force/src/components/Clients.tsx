import { motion } from "framer-motion";
import vmcLogo from "../assets/images/client-vmc.jpeg";
import gspcLogo from "../assets/images/client-gspc.jpeg";
import iocLogo from "../assets/images/client-ioc.jpeg";
import supercityLogo from "../assets/images/client-supercity.jpeg";

const clients = [
  { name: "Vadodara Municipal Corporation", logo: vmcLogo },
  { name: "GSPC Gas", logo: gspcLogo },
  { name: "Indian Oil Corporation", logo: iocLogo },
  { name: "Super City Lifestyle Township", logo: supercityLogo },
];

const doubled = [...clients, ...clients, ...clients];

export function Clients() {
  return (
    <section id="clients" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 70, damping: 18 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[2px] w-12 bg-accent" />
          <span className="text-primary font-bold tracking-[0.25em] uppercase text-sm">
            Trusted By
          </span>
          <div className="h-[2px] w-12 bg-accent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-center"
        >
          Our Clients.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.15 }}
          className="text-muted-foreground text-center mt-4 max-w-xl mx-auto"
        >
          Trusted by government bodies, public sector enterprises, and leading
          private organisations across India.
        </motion.p>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-0 flex-shrink-0"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 md:w-80 px-8 py-10 flex flex-col items-center justify-center border-r border-border group"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex items-center justify-center bg-white border border-border shadow-sm group-hover:shadow-md transition-shadow duration-300 mb-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-[85%] h-[85%] object-contain"
                    draggable={false}
                  />
                </div>
                <p className="text-xs font-bold text-muted-foreground text-center uppercase tracking-widest leading-tight">
                  {client.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Static grid for larger screens / fallback */}
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 70, damping: 18, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-white flex flex-col items-center justify-center gap-5 px-8 py-12 cursor-default"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-border shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 bg-white flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-[85%] h-[85%] object-contain"
                />
              </div>
              <p className="text-xs font-black text-foreground/60 text-center uppercase tracking-widest leading-snug group-hover:text-primary transition-colors duration-300">
                {client.name}
              </p>
              <div className="h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
