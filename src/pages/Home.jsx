import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Technologies } from "@/components/Technologies";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";


export default function Home() {
  useEffect(() => {
    document.title = "OMON_DEVs | Building Modern Digital Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Technologies />
      <Stats />
      <Process />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />

      <Analytics />
    </div>
  );
}
