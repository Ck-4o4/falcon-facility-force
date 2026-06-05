import { useState } from "react";
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
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 70, damping: 18 } },
};

export function Contact() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    formData.append("subject", "New Lead - Falcon Facility Force");
    formData.append("from_name", "Falcon Facility Force Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        e.currentTarget.reset();
        setSelectedService("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                onSubmit={handleSubmit}
              >
                {/* 
                  To connect Web3Forms to your email (Sales@falconfacilityforce.com):
                  1. Visit https://web3forms.com/ and enter your email to get a free Access Key.
                  2. Replace "YOUR_ACCESS_KEY_HERE" in the value below with your key.
                */}
                <input type="hidden" name="access_key" value="7711f400-33a9-4cb5-8042-354652984bec" />

                <motion.div variants={fieldVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-foreground uppercase tracking-widest">Contact Name</label>
                    <Input name="name" required placeholder="Your full name" className="bg-white rounded-none border-gray-300 h-12 focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-foreground uppercase tracking-widest">Company</label>
                    <Input name="company" placeholder="Company name" className="bg-white rounded-none border-gray-300 h-12 focus:border-primary transition-colors" />
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-foreground uppercase tracking-widest">Email Address</label>
                    <Input type="email" name="email" required placeholder="you@company.com" className="bg-white rounded-none border-gray-300 h-12 focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-foreground uppercase tracking-widest">Phone Number</label>
                    <Input type="tel" name="phone" placeholder="+91 98765 43210" className="bg-white rounded-none border-gray-300 h-12 focus:border-primary transition-colors" />
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants} className="space-y-2">
                  <label className="text-xs font-black text-foreground uppercase tracking-widest">Service Required</label>
                  <Select onValueChange={setSelectedService} value={selectedService}>
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
                  <input type="hidden" name="service" value={selectedService} />
                </motion.div>

                <motion.div variants={fieldVariants} className="space-y-2">
                  <label className="text-xs font-black text-foreground uppercase tracking-widest">Operational Details</label>
                  <Textarea
                    name="message"
                    required
                    placeholder="Briefly describe your facility size, location, and key requirements..."
                    className="bg-white rounded-none border-gray-300 min-h-[120px] focus:border-primary transition-colors"
                  />
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-base font-black rounded-none tracking-wide transition-all duration-300 group"
                  >
                    {isSubmitting ? "Sending Request..." : "Submit Request"}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Button>
                </motion.div>

                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium"
                  >
                    Thank you! Your request has been sent successfully. We will get back to you shortly.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium"
                  >
                    Something went wrong. Please check your network or email us directly at Sales@falconfacilityforce.com.
                  </motion.div>
                )}
              </motion.form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
