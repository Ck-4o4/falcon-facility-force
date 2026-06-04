import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Direct Line", value: "+91 84888 80389", sub: "Mon–Sat, 9am–7pm" },
  { icon: Mail, label: "Email", value: "Sales@falconfacilityforce.com", sub: "Reply within 24 hours" },
  { icon: MapPin, label: "Head Office", value: "Ahmedabad, Gujarat", sub: "India" },
  { icon: MessageSquare, label: "WhatsApp", value: "+91 84888 80389", sub: "Quick response" },
];

const formVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } },
};

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-primary font-bold tracking-[0.25em] uppercase text-sm">Get in Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-tight"
          >
            Command your space.
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left: Contact info */}
          <div className="w-full lg:w-5/12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
              className="text-muted-foreground mb-12 text-lg leading-relaxed max-w-md"
            >
              Connect with our deployment specialists to architect a facility management solution tailored to your operational scale.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 70, damping: 18, delay: idx * 0.08 }}
                  className="group flex gap-4 items-start"
                >
                  <div className="w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-0.5">{item.label}</div>
                    <div className="font-black text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 55, damping: 18, delay: 0.2 }}
              className="bg-gray-50 border border-border p-8 md:p-12"
            >
              <h3 className="text-xl font-black mb-8 pb-6 border-b border-border">Request a Proposal</h3>
              <motion.form
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <motion.div variants={fieldVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-foreground uppercase tracking-widest">Contact Name</label>
                    <Input placeholder="Your full name" className="bg-white rounded-none border-gray-300 h-12 focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-foreground uppercase tracking-widest">Company</label>
                    <Input placeholder="Company name" className="bg-white rounded-none border-gray-300 h-12 focus:border-primary transition-colors" />
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-foreground uppercase tracking-widest">Email Address</label>
                    <Input type="email" placeholder="you@company.com" className="bg-white rounded-none border-gray-300 h-12 focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-foreground uppercase tracking-widest">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" className="bg-white rounded-none border-gray-300 h-12 focus:border-primary transition-colors" />
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants} className="space-y-2">
                  <label className="text-xs font-black text-foreground uppercase tracking-widest">Service Required</label>
                  <Select>
                    <SelectTrigger className="bg-white rounded-none border-gray-300 h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="housekeeping">Housekeeping & Cleaning</SelectItem>
                      <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                      <SelectItem value="pest-control">Pest Control</SelectItem>
                      <SelectItem value="security">Security Services</SelectItem>
                      <SelectItem value="staffing">Manpower Staffing</SelectItem>
                      <SelectItem value="pantry">Pantry & Cafeteria Management</SelectItem>
                      <SelectItem value="landscaping">Landscaping & Horticulture</SelectItem>
                      <SelectItem value="maintenance">Facility Maintenance</SelectItem>
                      <SelectItem value="comprehensive">Comprehensive FM Package</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div variants={fieldVariants} className="space-y-2">
                  <label className="text-xs font-black text-foreground uppercase tracking-widest">Operational Details</label>
                  <Textarea
                    placeholder="Briefly describe your facility size, location, and key requirements..."
                    className="bg-white rounded-none border-gray-300 min-h-[120px] focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-base font-black rounded-none tracking-wide transition-all duration-300 group">
                    Submit Request
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
