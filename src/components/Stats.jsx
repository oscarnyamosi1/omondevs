import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Briefcase, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 50, suffix: "+", label: "Projects Completed", color: "#ff3355" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients", color: "#1f6fff" },
  { icon: Clock, value: 3, suffix: "+", label: "Years Experience", color: "#ff3355" },
  { icon: TrendingUp, value: 99, suffix: "%", label: "Success Rate", color: "#1f6fff" },
];

function AnimatedCounter({ value, suffix, color }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-black" style={{ color }}>
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="py-24 bg-[#0b1220] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-32 bg-[#ff3355]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-32 bg-[#1f6fff]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-center space-y-3"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto"
                style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}30` }}
              >
                <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} color={stat.color} />
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
