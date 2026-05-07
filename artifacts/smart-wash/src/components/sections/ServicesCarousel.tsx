import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "premium",
    title: "Premium Laundry",
    desc: "Top-tier care for your clothes with eco-friendly products.",
    image: "https://bosmartwash.in/assets/images/premiumlaundry.jpg",
  },
  {
    id: "steam",
    title: "Steam Press",
    desc: "Flawless wrinkle-free finish using advanced steam technology.",
    image: "https://bosmartwash.in/assets/images/steamiron.jpg",
  },
  {
    id: "dryclean",
    title: "Dry Cleaning",
    desc: "Gentle methods that preserve delicate garments' shape.",
    image: "https://bosmartwash.in/assets/images/dryclean.jpg",
  },
  {
    id: "washnfold",
    title: "Wash & Fold",
    desc: "Cleaned and neatly folded for ultimate convenience.",
    image: "https://bosmartwash.in/assets/images/washandfold.jpg",
  },
  {
    id: "shoelaundry",
    title: "Shoe Laundry",
    desc: "Expert cleaning to keep your footwear in top condition.",
    image: "https://bosmartwash.in/assets/images/shoecleaning.jpg",
  },
  {
    id: "sareerolling",
    title: "Saree Rolling",
    desc: "Premium rolling services to protect your sarees.",
    image: "https://bosmartwash.in/assets/images/sareerolling.jpg",
  },
];

export function ServicesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:flex justify-between items-end"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 leading-none mb-4">
              Comprehensive Laundry Services
            </h2>
            <p className="text-slate-600 text-lg">
              Professional care for every fabric. From daily wear to delicate evening gowns, we handle it all with precision.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex gap-2 text-primary hover:text-primary hover:bg-primary/5 rounded-full" asChild>
            <a href="https://bosmartwash.in/see.html" target="_blank" rel="noopener noreferrer">
              View All Services <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>

        <div className="flex overflow-x-auto pb-12 pt-4 -mx-4 px-4 snap-x snap-mandatory gap-6 hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:px-0 md:mx-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-center min-w-[85vw] md:min-w-0 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[240px] md:h-[280px] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-slate-600 mb-6 min-h-[48px]">
                  {service.desc}
                </p>
                <Button className="w-full rounded-full group-hover:bg-primary transition-colors" asChild>
                  <a href="https://bosmartwash.in/see.html" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}