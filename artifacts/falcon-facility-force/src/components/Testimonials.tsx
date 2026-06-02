import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Falcon transformed our facility operations. Their team is invisible yet everywhere, ensuring our 500,000 sq ft campus runs flawlessly. Absolute professionals.",
      author: "Rajiv M.",
      role: "VP Operations, Nexus Tech Parks"
    },
    {
      quote: "In healthcare, sanitation isn't just cleaning—it's safety. Falcon's deep cleaning protocols and disciplined staff have exceeded our strict compliance requirements.",
      author: "Dr. Ananya S.",
      role: "Director, Apex Medical Center"
    },
    {
      quote: "We switched to Falcon after dealing with inconsistent service from others. Their 24/7 responsiveness and high standards have made them an invaluable partner.",
      author: "Vikram D.",
      role: "Procurement Head, Horizon Retail Group"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Client Trust</span>
            <div className="h-[1px] w-12 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">The Verdict</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 border border-border relative group hover:border-primary/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-8 left-8" />
              <div className="relative z-10">
                <p className="text-lg text-foreground font-serif italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-bold text-primary">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
