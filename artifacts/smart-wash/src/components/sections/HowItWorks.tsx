import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Book Your Pickup",
    desc: "Our convenient service starts with picking up your clothes directly from your doorstep.",
    icon: "https://bosmartwash.in/assets/images/1.png"
  },
  {
    num: "02",
    title: "Convenient Collection",
    desc: "A hassle-free pickup process ensuring your garments are handled with care.",
    icon: "https://bosmartwash.in/assets/images/2.png"
  },
  {
    num: "03",
    title: "Expert Care",
    desc: "Advanced washing ensuring your clothes are thoroughly cleaned using eco-friendly detergents.",
    icon: "https://bosmartwash.in/assets/images/3.png"
  },
  {
    num: "04",
    title: "Fresh Delivery",
    desc: "Delivered fresh and neatly packed right on time to your doorstep.",
    icon: "https://bosmartwash.in/assets/images/4.png"
  }
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Process</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 leading-none mb-6">
            This is how we work
          </h2>
          <p className="text-slate-600 text-lg">
            Four simple steps to spotless, fresh clothes. We handle the hard work so you can focus on what matters.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-[120px] h-[120px] rounded-full bg-white shadow-xl flex items-center justify-center mb-8 relative border border-slate-100 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-md">
                    {step.num}
                  </div>
                  <img src={step.icon} alt={step.title} className="w-14 h-14 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}