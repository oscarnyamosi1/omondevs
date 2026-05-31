import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Clock, Layers, Heart, Send } from "lucide-react";
import { PlaceholderImage } from "./PlaceholderImage";

const tabContent = {
  Projects: (
    <div className="space-y-3">
      {["E-learning Platform", "E-commerce Store", "School System"].map((p) => (
        <div key={p} className="flex items-center gap-3 text-sm text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#1f6fff]" />
          {p}
        </div>
      ))}
    </div>
  ),
  Services: (
    <div className="space-y-3">
      {["Custom Websites", "Web Applications", "API Development"].map((s) => (
        <div key={s} className="flex items-center gap-3 text-sm text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#ff3355]" />
          {s}
        </div>
      ))}
    </div>
  ),
  Support: (
    <div className="space-y-2">
      <p className="text-sm text-gray-400">Continuous support after delivery.</p>
      <div className="flex items-center gap-2 text-xs text-green-400">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Available now
      </div>
    </div>
  ),
};

const features = [
  { icon: Code2, label: "Clean Code" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Layers, label: "Scalable Solutions" },
  { icon: Heart, label: "Client Focused" },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [projectDesc, setProjectDesc] = useState("");

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#1f6fff 1px, transparent 1px), linear-gradient(to right, #1f6fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#ff3355]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#1f6fff]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-mono tracking-widest text-gray-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3355] animate-pulse" />
              SOFTWARE DEVELOPMENT & DIGITAL SOLUTIONS
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="text-white">Building Modern</span>
                <br />
                <span className="text-[#1f6fff]">Digital</span>{" "}
                <span className="text-white">Solutions</span>
                <br />
                <span className="text-white">That Grow</span>
                <br />
                <span className="text-[#ff3355]">Businesses</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed max-w-md"
            >
              <span className="font-mono text-white">&lt;OMON_DEVs/&gt;</span> helps
              businesses, startups, schools and organizations build scalable, secure and
              high-performance digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#portfolio"
                data-testid="button-view-portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
              >
                View Portfolio <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590586166938"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-hire-me"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#ff3355] text-white font-semibold shadow-[0_0_20px_rgba(255,51,85,0.35)] hover:shadow-[0_0_30px_rgba(255,51,85,0.5)] hover:bg-[#e8304d] transition-all"
              >
                Hire Me
              </a>
              <a
                href="#contact"
                data-testid="button-get-quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1f6fff]/40 text-[#1f6fff] font-semibold hover:bg-[#1f6fff]/10 transition-all"
              >
                <Send className="w-4 h-4" /> Get A Quote
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                  <Icon className="w-4 h-4 text-[#1f6fff]" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[3/4] rounded-2xl overflow-hidden">
              <div className="absolute -left-8 inset-y-0 w-24 bg-gradient-to-r from-[#ff3355]/30 to-transparent z-10 pointer-events-none" />
              <div className="absolute -right-8 inset-y-0 w-24 bg-gradient-to-l from-[#1f6fff]/30 to-transparent z-10 pointer-events-none" />
              <PlaceholderImage
                src="/images/hero/oscar nyamosi.png"
                alt="omon devs Developer hero oscar nyamosi"
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
                fallbackText="Developer workspace"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-64 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-5"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#1f6fff]/20 to-[#ff3355]/10 -z-10 blur-sm" />

              <div className="flex gap-1 mb-4 rounded-lg bg-white/5 p-1">
                {["Projects", "Services", "Support"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    data-testid={`tab-${tab.toLowerCase()}`}
                    className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all ${
                      activeTab === tab
                        ? "bg-[#1f6fff] text-white shadow"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="min-h-[72px] mb-4">{tabContent[activeTab]}</div>

              <textarea
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
                placeholder="Describe your project..."
                data-testid="input-project-description"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-gray-300 placeholder-gray-500 resize-none focus:outline-none focus:border-[#1f6fff]/50 transition-colors"
                rows={2}
              />
              <a
                href="#contact"
                data-testid="button-request-quote"
                className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-[#1f6fff] to-[#1f6fff]/80 text-white text-sm font-semibold shadow-[0_0_15px_rgba(31,111,255,0.3)] hover:shadow-[0_0_25px_rgba(31,111,255,0.5)] transition-all"
              >
                <Send className="w-3.5 h-3.5" /> Request Quote
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
