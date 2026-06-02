import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, MapPin, Clock, Zap } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: "ISO-Compliant Processes",
      desc: "Every protocol we execute meets rigorous international standards for safety and quality."
    },
    {
      icon: CheckCircle2,
      title: "Trained Workforce",
      desc: "Our personnel undergo continuous military-style training for discipline and efficiency."
    },
    {
      icon: MapPin,
      title: "Pan-India Presence",
      desc: "Consistent service delivery across regions, scaled perfectly for enterprise networks."
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      desc: "Uninterrupted support. We are active at all hours to ensure your business never stops."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Equipment",
      desc: "We leverage modern industrial machinery to deliver superior results in less time."
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-accent"></div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm">The Falcon Standard</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
                Engineered for <span className="text-primary">excellence.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl">
                We do not believe in acceptable. We believe in exceptional. Falcon Facility Force operates with an unyielding commitment to precision, leaving nothing to chance.
              </p>

              <div className="space-y-8">
                {points.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-primary/5 rounded-none flex items-center justify-center border border-primary/10">
                        <point.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Abstract Grid / Visual */}
          <div className="w-full lg:w-1/2 relative h-[600px]">
            <div className="absolute inset-0 bg-gray-50 -skew-y-6 scale-110 z-0 border-y border-border" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[80%] h-[80%] bg-primary shadow-2xl p-8 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 border-2 border-accent rounded-full opacity-50" />
                <div className="text-right">
                  <div className="text-5xl font-black text-white">99.8%</div>
                  <div className="text-accent text-sm font-bold tracking-widest uppercase mt-1">SLA Compliance</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Uncompromising<br/>standards.</h3>
                <div className="w-full h-1 bg-white/20">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '99.8%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 border border-primary/20 z-20" />
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/20 z-20" />
          </div>

        </div>
      </div>
    </section>
  );
}
