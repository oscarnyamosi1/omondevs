import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiPython, SiDjango, SiReact, SiJavascript, SiTailwindcss, SiPostgresql, SiMysql, SiGit, SiGithub, SiLinux, SiVercel, SiCloudinary } from "react-icons/si";
import { Globe } from "lucide-react";

const techs = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiDjango, name: "Django", color: "#092E20" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#ffffff" },
  { icon: Globe, name: "REST APIs", color: "#1f6fff" },
  { icon: SiCloudinary, name: "Cloudinary", color: "#3448C5" },
  { icon: SiLinux, name: "Linux", color: "#FCC624" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff" },
];

export function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technologies" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-0 bottom-1/3 w-64 h-64 bg-[#1f6fff]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono tracking-widest text-[#1f6fff] uppercase">Technologies I Use</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">My Tech Stack</h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            I work with the best tools and frameworks in the industry to build modern, scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              data-testid={`tech-${tech.name.toLowerCase().replace(/\s/g, "-")}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" style={{ background: tech.color }} />
                <tech.icon className="w-8 h-8 relative z-10 transition-transform group-hover:scale-110" style={{ color: tech.color }} />
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors font-medium text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
