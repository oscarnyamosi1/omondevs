import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Mail, Facebook } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", type: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#050b16] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -right-20 bottom-0 w-80 h-80 bg-[#ff3355]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 top-1/3 w-80 h-80 bg-[#1f6fff]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono tracking-widest text-[#ff3355] uppercase">Get In Touch</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">Start Your Project</h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">Have a project in mind? Let's talk. I'm always open to discussing new opportunities.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-white font-bold text-xl">Reach Out Directly</h3>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-[#ff3355]" />
              <span>Kenya</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail className="w-5 h-5 text-[#1f6fff]" />
              <span>Available via the contact form</span>
            </div>
            <div className="space-y-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61590586166938"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-contact-facebook"
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-[#1877F2] text-white font-semibold hover:bg-[#166fe5] transition-colors shadow-[0_0_20px_rgba(24,119,242,0.25)]"
              >
                <Facebook className="w-5 h-5" />
                Message on Facebook
              </a>
              <a
                href={`https://wa.me/254795404843?text=${encodeURIComponent(
                  "Hello OMON_DEVs! I found your website and I'm interested in your services. I'd like to discuss my project requirements and get a consultation on the best solution. Please let me know how we can get started. Thank you."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-contact-whatsapp"
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors shadow-[0_0_20px_rgba(37,211,102,0.25)]"
              >
                <SiWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
            <p className="text-gray-500 text-sm">Based in Kenya — available for remote projects worldwide.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl p-8"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#1f6fff]/10 via-transparent to-[#ff3355]/5 -z-10" />

            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <Send className="w-7 h-7 text-green-400" />
                </div>
                <h4 className="text-white font-bold text-xl">Message Sent!</h4>
                <p className="text-gray-400 text-sm">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-contact">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">Your Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required data-testid="input-name" placeholder="John Mwangi" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1f6fff]/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required data-testid="input-email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1f6fff]/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium">Project Type</label>
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} required data-testid="select-project-type" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#1f6fff]/50 transition-colors appearance-none">
                    <option value="" className="bg-[#050b16]">Select project type...</option>
                    <option value="website" className="bg-[#050b16]">Custom Website</option>
                    <option value="webapp" className="bg-[#050b16]">Web Application</option>
                    <option value="ecommerce" className="bg-[#050b16]">E-commerce Store</option>
                    <option value="school" className="bg-[#050b16]">School Management System</option>
                    <option value="api" className="bg-[#050b16]">API Development</option>
                    <option value="other" className="bg-[#050b16]">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-medium">Project Details</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} data-testid="textarea-message" placeholder="Tell me about your project, goals, timeline and budget..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:border-[#1f6fff]/50 transition-colors" />
                </div>
                <button type="submit" data-testid="button-submit-contact" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#ff3355] to-[#1f6fff] text-white font-bold shadow-[0_0_20px_rgba(255,51,85,0.25)] hover:shadow-[0_0_30px_rgba(255,51,85,0.4)] transition-all">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
