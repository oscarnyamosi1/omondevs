import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PlaceholderImage } from "./PlaceholderImage";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const highlights = [
  "Full-stack development with modern technologies",
  "Clean, maintainable, and scalable code architecture",
  "End-to-end delivery from concept to deployment",
  "Continuous support after project completion",
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-[#050b16] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -left-32 top-1/2 w-64 h-64 bg-[#1f6fff]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-mono tracking-widest text-[#ff3355] uppercase">About</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
                Who I Am
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              I'm a full-stack developer passionate about building modern, efficient, and scalable
              digital solutions. Through <span className="font-mono text-white">&lt;OMON_DEVs/&gt;</span>,
              I help clients bring their ideas to life using clean code and the latest technologies.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Based in Kenya, I work with businesses, startups, schools and organizations across
              Africa and beyond. Every project I take on gets my full attention — from architecture
              to deployment and beyond.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#1f6fff] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div className="text-2xl font-black text-[#ff3355]">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              data-testid="button-more-about"
              className="inline-flex items-center gap-2 text-[#1f6fff] font-semibold hover:gap-3 transition-all"
            >
              More About Me <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent z-10 pointer-events-none" />
              <PlaceholderImage
                src="/images/founder/oscar nyamosi.png"
                alt="Dev Malik - Full Stack Developer omon devs Developer hero oscar nyamosi happy client"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                fallbackText="Dev Malik"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20 rounded-xl border border-white/10 bg-[#050b16]/90 backdrop-blur-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#ff3355]/40 shrink-0">
                  <PlaceholderImage
                    src="/images/founder/founder.svg"
                    alt="Dev Malik"
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    fallbackText=""
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Dev Malik</div>
                  <div className="text-xs text-gray-400">Full Stack Developer</div>
                </div>
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=61590586166938"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-follow-facebook"
                className="text-xs px-3 py-1.5 rounded-lg bg-[#1f6fff] text-white font-semibold hover:bg-[#1a5ae8] transition-colors"
              >
                Follow
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
