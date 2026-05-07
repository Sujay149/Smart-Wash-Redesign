import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Clock, CreditCard, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Time & Budget Savior",
      desc: "Affordable solutions that save you hours of effort."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: "Tap, Pay, Done!",
      desc: "Seamless online payment options, just a few clicks."
    },
    {
      icon: <Smile className="w-6 h-6 text-primary" />,
      title: "Happiness, Delivered",
      desc: "Spotless results, timely delivery, complete satisfaction."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl">
              <img 
                src="https://bosmartwash.in/assets/images/toy.jpg" 
                alt="Passionate about laundry" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8 md:p-12">
                <div className="glass-panel p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <p className="text-3xl font-heading font-bold mb-2">10k+</p>
                  <p className="text-sm font-medium uppercase tracking-wider opacity-90">Happy Customers</p>
                </div>
              </div>
            </div>
            {/* Abstract decorative floating card */}
            <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl bg-white shadow-xl border border-slate-100 hidden md:block w-64">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">100%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Satisfaction</p>
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 leading-[1.1] mb-6">
              We are passionate about <span className="text-primary">Laundry</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At Smart Wash, we are passionate about providing efficient, eco-friendly laundry solutions. We focus on delivering spotless, fresh clothes while saving you time and making laundry hassle-free.
            </p>

            <ul className="space-y-4 mb-10">
              {['100% Customer Satisfaction', 'Free Collection & Delivery', 'Affordable Prices'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors">
                  <div className="mb-4 bg-white w-12 h-12 rounded-xl shadow-sm flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full px-8 text-lg bg-primary hover:bg-primary/90">
              Discover More
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}