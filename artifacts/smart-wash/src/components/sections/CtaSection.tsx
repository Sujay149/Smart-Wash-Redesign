import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Banner CTA 1 */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://bosmartwash.in/assets/images/machinneeeeeeeeeeeeeee.jpg" 
            alt="Washing Machine" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black font-heading text-white leading-tight mb-6">
                Book Our Services
              </h2>
              <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Easily schedule your laundry pickup at your convenience. Seamless service ensures a hassle-free experience with fast, reliable, and professional care.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-full backdrop-blur-sm border border-white/10 text-white">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-lg">Clean Result</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-full backdrop-blur-sm border border-white/10 text-white">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-lg">Fast Delivery</span>
                </div>
              </div>

              <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25" asChild>
                <a href="https://bosmartwash.in/see.html" target="_blank" rel="noopener noreferrer">
                  Schedule Pickup Now
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner CTA 2 */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-primary/95">
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover opacity-30"
          style={{ backgroundImage: 'url(https://bosmartwash.in/assets/images/cycle.jpg)' }}
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-0" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black font-heading leading-tight mb-8">
              Quality Service with<br/>Free Collection & Delivery
            </h2>
            <a 
              href="tel:+917997034445" 
              className="inline-flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold mb-12 hover:text-white/80 transition-colors"
            >
              <PhoneCall className="w-8 h-8 md:w-10 md:h-10" />
              +91 7997034445
            </a>
            <div>
              <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold text-primary bg-white hover:bg-white/90 shadow-xl" asChild>
                <a href="https://bosmartwash.in/see.html" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}