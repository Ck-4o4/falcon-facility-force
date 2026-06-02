import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-6">
                Command your space.
              </h2>
              <p className="text-muted-foreground mb-12 text-lg">
                Connect with our deployment specialists to architect a facility management solution tailored to your operational scale.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Direct Line</div>
                    <div className="font-bold text-xl">+91 1800-123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Email Command</div>
                    <div className="font-bold text-xl">ops@falconforce.in</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">HQ</div>
                    <div className="font-bold text-lg">Tower B, Cyber Hub,<br/>Gurugram, Haryana 122002</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 md:p-12 border border-border"
            >
              <h3 className="text-2xl font-bold mb-8">Request a Proposal</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Contact Name</label>
                    <Input placeholder="John Doe" className="bg-white rounded-none border-gray-300 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Company</label>
                    <Input placeholder="Acme Corp" className="bg-white rounded-none border-gray-300 h-12" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email Address</label>
                    <Input type="email" placeholder="john@acme.com" className="bg-white rounded-none border-gray-300 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" className="bg-white rounded-none border-gray-300 h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Primary Service Required</label>
                  <Select>
                    <SelectTrigger className="bg-white rounded-none border-gray-300 h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="housekeeping">Housekeeping & Cleaning</SelectItem>
                      <SelectItem value="security">Security Services</SelectItem>
                      <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                      <SelectItem value="staffing">Manpower Staffing</SelectItem>
                      <SelectItem value="comprehensive">Comprehensive Facility Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Operational Details</label>
                  <Textarea 
                    placeholder="Briefly describe your facility size and requirements..." 
                    className="bg-white rounded-none border-gray-300 min-h-[120px]" 
                  />
                </div>

                <Button className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-lg rounded-none mt-4">
                  Submit Request
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
