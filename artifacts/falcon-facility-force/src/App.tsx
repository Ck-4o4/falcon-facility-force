import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Industries } from "./components/Industries";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background font-body text-foreground selection:bg-accent selection:text-primary">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Industries />
            <Stats />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
