import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, AppWindow, ShoppingCart, GraduationCap, Zap, Plug, Database, Atom, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Custom Websites", description: "Beautiful, responsive and fast business websites that represent your brand and convert visitors.", color: "#ff3355" },
  { icon: AppWindow, title: "Web Applications", description: "Scalable web applications built with modern tech stacks, best practices, and clean architecture.", color: "#1f6fff" },
  { icon: ShoppingCart, title: "E-commerce Solutions", description: "High-converting online stores with secure payment integrations and admin dashboards.", color: "#ff3355" },
  { icon: GraduationCap, title: "School Management Systems", description: "Complete school management systems for managing fees, exams, reports, and institutions.", color: "#1f6fff" },
  { icon: Zap, title: "Business Automation", description: "Custom tools to automate your workflows, reporting and improve overall productivity.", color: "#ff3355" },
  { icon: Plug, title: "API Development", description: "Robust, well-documented REST APIs that power your applications and third-party integrations.", color: "#1f6fff" },
  { icon: Database, title: "Django Development", description: "Full-stack Django applications with clean MVC architecture, ORM, and admin panels.", color: "#ff3355" },
  { icon: Atom, title: "React Development", description: "Modern, performant React frontends with state management and great UX.", color: "#1f6fff" },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-[#ff3355]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-[#ff3355] uppercase">What I Do</span>
          <div className="flex items-end justify-between mt-3 flex-wrap gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Powerful Solutions
              <br />
              <span className="text-gray-400">For Your Business</span>
            </h2>
            <div className="max-w-xs">
              <p className="text-gray-400 text-sm leading-relaxed">
                From custom websites to complex web applications, I provide end-to-end development services tailored to your needs.
              </p>
              <a href="#contact" data-testid="button-explore-services" className="mt-4 inline-flex items-center gap-2 text-[#1f6fff] text-sm font-semibold hover:gap-3 transition-all">
                Explore All Services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-testid={`card-service-${i}`}
              className="group relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
              whileHover={{ y: -4 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)` }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs font-semibold transition-all" style={{ color: service.color }}>
                Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
