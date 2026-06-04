import logo from "@assets/WhatsApp_Image_2026-06-01_at_23.19.45_1780386282569.jpeg";

export function Footer() {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <img
                  src={logo}
                  alt="Falcon Facility Force"
                  className="w-14 h-14 object-contain rounded-full"
                />
              </div>
              <span className="text-white font-black text-base leading-tight tracking-wide uppercase">
                Falcon<br />Facility Force
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
              Elite facility management delivering pristine spaces, unwavering security, and operational excellence for India's leading enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Core Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">Housekeeping</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Security Guarding</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Manpower Staffing</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Pest Control</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#why-us" className="hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#industries" className="hover:text-accent transition-colors">Industries</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Connect</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-accent">✆</span>
                <span>+91 84888 80389</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✉</span>
                <span>Sales@falconfacilityforce.com</span>
              </li>
              <li className="flex items-start gap-2 pt-2">
                <span className="text-accent mt-0.5">⊙</span>
                <span>Ahmedabad, Gujarat, India</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-800 flex gap-4">
                <a href="#" className="text-accent hover:text-white transition-colors font-bold">LinkedIn</a>
                <a href="#" className="text-accent hover:text-white transition-colors font-bold">Instagram</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Falcon Facility Force. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
