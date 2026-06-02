import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceholderImage } from "./PlaceholderImage";

const testimonials = [
  {
    text: "Working with OMON_DEVs was an amazing experience. The website was delivered on time and exceeded my expectations. Dev Malik is professional, skilled, and easy to work with.",
    name: "John Muiruri",
    title: "Business Owner",
    image: "/images/testimonials/client1.svg",
    stars: 5,
  },
  {
    text: "The school management system Dev Malik built transformed how we handle student records, fees, and exams. Absolutely brilliant work — our staff love using it every day.",
    name: "Zedekiah Odhiambo",
    title: "School Principal",
    image: "/images/testimonials/client2.svg",
    stars: 5,
  },
  {
    text: "Dev Malik built our entire SaaS platform in record time. Clean code, great communication, and 100% committed to the project. I will definitely be hiring again.",
    name: "Michael Tsavula",
    title: "Startup Founder",
    image: "/images/testimonials/client3.svg",
    stars: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1f6fff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono tracking-widest text-[#ff3355] uppercase">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">What Clients Say</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              data-testid={`testimonial-${index}`}
              className="relative rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8 md:p-12"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#ff3355]/10 via-transparent to-[#1f6fff]/10 -z-10" />
              <Quote className="w-10 h-10 text-[#ff3355]/30 mb-6" />
              <div className="flex mb-4 gap-1">
                {Array.from({ length: testimonials[index].stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff3355] text-[#ff3355]" />
                ))}
              </div>
              <p className="text-white text-xl leading-relaxed mb-8 italic">
                "{testimonials[index].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#1f6fff]/40 shrink-0">
                  <PlaceholderImage
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                    fallbackText=""
                  />
                </div>
                <div>
                  <div className="text-white font-bold">{testimonials[index].name}</div>
                  <div className="text-gray-400 text-sm">{testimonials[index].title}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} data-testid="button-testimonial-prev" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} data-testid={`dot-testimonial-${i}`} className={`rounded-full transition-all ${i === index ? "w-6 h-2 bg-[#ff3355]" : "w-2 h-2 bg-white/20"}`} />
              ))}
            </div>
            <button onClick={next} data-testid="button-testimonial-next" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
