import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Palette, Code2, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  { number: "01", icon: Search, title: "Discovery", desc: "Understanding your needs", color: "#ff3355" },
  { number: "02", icon: Map, title: "Planning", desc: "Strategy and roadmap", color: "#1f6fff" },
  { number: "03", icon: Palette, title: "Design", desc: "UI/UX and prototype", color: "#ff3355" },
  { number: "04", icon: Code2, title: "Development", desc: "Clean code development", color: "#1f6fff" },
  { number: "05", icon: TestTube, title: "Testing", desc: "Quality assurance & testing", color: "#ff3355" },
  { number: "06", icon: Rocket, title: "Deployment", desc: "Launch and go live", color: "#1f6fff" },
  { number: "07", icon: HeadphonesIcon, title: "Support", desc: "Ongoing support & maintenance", color: "#ff3355" },
];

export function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-24 bg-[#050b16] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-[#1f6fff] uppercase">My Process</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">How I Work</h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            A structured, transparent process that keeps you informed and ensures exceptional results every time.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute top-8 left-0 right-0 h-px origin-left"
            style={{ background: "linear-gradient(to right, #ff3355, #1f6fff)" }}
          />
          <div className="grid grid-cols-7 gap-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`step-${step.number}`}
                className="flex flex-col items-center text-center gap-4"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 bg-[#050b16] z-10 relative"
                  style={{ borderColor: step.color, boxShadow: `0 0 20px ${step.color}25` }}
                >
                  <step.icon className="w-6 h-6" style={{ color: step.color }} />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 mb-1">{step.number}</div>
                  <div className="text-white font-bold text-sm">{step.title}</div>
                  <div className="text-gray-500 text-xs mt-1 leading-relaxed">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff3355] to-[#1f6fff]" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`step-mobile-${step.number}`}
                className="relative flex items-start gap-4"
              >
                <div
                  className="absolute -left-[calc(2rem+8px)] w-8 h-8 rounded-full flex items-center justify-center border-2 bg-[#050b16]"
                  style={{ borderColor: step.color }}
                >
                  <step.icon className="w-4 h-4" style={{ color: step.color }} />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500">{step.number}</div>
                  <div className="text-white font-bold">{step.title}</div>
                  <div className="text-gray-400 text-sm">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
