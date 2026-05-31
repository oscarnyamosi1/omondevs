import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "KSH 15,000+",
    popular: false,
    color: "#ff3355",
    features: ["Business website", "Responsive design", "Contact form", "1 revision", "Basic SEO setup"],
  },
  {
    name: "Professional",
    price: "KSH 40,000+",
    popular: true,
    color: "#1f6fff",
    features: ["Business website", "Admin dashboard", "Responsive design", "API integration", "3 revisions", "Advanced SEO", "2 months support"],
  },
  {
    name: "Enterprise",
    price: "KSH 80,000+",
    popular: false,
    color: "#ff3355",
    features: ["Full-scale solution", "Admin dashboard", "AI-ready design", "Priority support", "Unlimited revisions", "Custom integrations", "6 months support"],
  },
];

export function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 bg-[#0b1220] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono tracking-widest text-[#1f6fff] uppercase">Pricing Plans</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">No hidden fees. No surprises. Pick the plan that fits your needs.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-testid={`card-pricing-${plan.name.toLowerCase()}`}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-[#1f6fff]/50 bg-[#1f6fff]/5 shadow-[0_0_40px_rgba(31,111,255,0.15)]"
                  : "border-white/8 bg-white/3"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-[#1f6fff] text-white text-xs font-bold tracking-wide uppercase shadow-[0_0_15px_rgba(31,111,255,0.5)]">
                    Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
                <div className="text-3xl font-black" style={{ color: plan.color }}>{plan.price}</div>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                className={`w-full flex items-center justify-center py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.popular
                    ? "bg-[#1f6fff] text-white shadow-[0_0_20px_rgba(31,111,255,0.3)] hover:shadow-[0_0_30px_rgba(31,111,255,0.5)]"
                    : "border border-white/15 text-white hover:bg-white/5"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
