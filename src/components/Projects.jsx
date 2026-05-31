import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PlaceholderImage } from "./PlaceholderImage";

const projects = [
  { image: "/images/projects/project1.jpeg", title: "E-learning Platform", description: "Full LMS platform with courses, quizzes, and certificates. Built with Django, React, and PostgreSQL.", tech: ["Django", "React", "PostgreSQL"], color: "#ff3355" },
  { image: "/images/projects/project2.jpeg", title: "E-commerce Store", description: "Modern e-commerce platform with admin dashboard, inventory, and Stripe payment integration.", tech: ["Django", "Tailwind", "Stripe"], color: "#1f6fff" },
  { image: "/images/projects/project3.jpeg", title: "School Management System", description: "Complete school system with fees, exams, and reports. Tailored for Kenyan schools.", tech: ["Django", "Python", "MySQL"], color: "#ff3355" },
  { image: "/images/projects/project4.jpeg", title: "Business Analytics Dashboard", description: "Real-time analytics dashboard with charts, KPIs, and data export for SMEs.", tech: ["React", "REST API", "Chart.js"], color: "#1f6fff" },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-24 bg-[#050b16] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="text-xs font-mono tracking-widest text-[#ff3355] uppercase">Featured Work</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">Recent Projects</h2>
          </div>
          <a href="https://oscarnyamosi.vercel.app" target="_blank" rel="noopener noreferrer" data-testid="link-view-all-projects" className="inline-flex items-center gap-2 text-[#1f6fff] font-semibold hover:gap-3 transition-all text-sm">
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`card-project-${i}`}
              className="group rounded-2xl border border-white/8 bg-white/3 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0b1220] to-[#020617]">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${project.color}10, transparent)` }}
                />
                <PlaceholderImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  containerClassName="w-full h-full"
                  fallbackText={project.title}
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs font-mono border border-white/10 bg-white/5 text-gray-300">{t}</span>
                  ))}
                </div>
                <a href="https://oscarnyamosi.vercel.app" target="_blank" rel="noopener noreferrer" data-testid={`button-view-project-${i}`} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold transition-all" style={{ color: project.color }}>
                  View Project <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
