import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const customEase = [0.76, 0, 0.23, 1];
const duration = 1.2;

const slides = [
  {
    id: "premium",
    name: "Premium Laundry",
    bgColor: "#0D6EFD",
    description: "Top-tier care for your clothes with eco-friendly products. Expert cleaning that returns your garments fresh, spotless, and ready to wear.",
    themeText: "PREMIUM",
    useVideo: true,
    thumbnail: "/images/premium-thumb.png",
  },
  {
    id: "steam",
    name: "Steam Press",
    bgColor: "#2A52BE",
    description: "Flawless wrinkle-free finish using advanced steam technology. Each garment treated with precision, leaving it crisp and polished.",
    themeText: "STEAM",
    heroImage: "/images/steam-hero.png",
    thumbnail: "/images/steam-thumb.png",
  },
  {
    id: "dryclean",
    name: "Dry Cleaning",
    bgColor: "#1a3fa8",
    description: "Gentle yet effective methods that preserve the integrity of your delicate garments. Expert care maintaining shape and texture.",
    themeText: "DRY CLEAN",
    heroImage: "/images/dryclean-hero.png",
    thumbnail: "/images/dryclean-thumb.png",
  },
  {
    id: "washnfold",
    name: "Wash & Fold",
    bgColor: "#4A90D9",
    description: "Clothes carefully cleaned and neatly folded for ultimate convenience. High-quality detergents keeping your wardrobe fresh and organized.",
    themeText: "WASH & FOLD",
    heroImage: "/images/washnfold-hero.png",
    thumbnail: "/images/washnfold-thumb.png",
  },
];

export function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const nextSlide = () => {
    if (isAnimating) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleManualAdvance = () => {
    resetAutoPlay();
    nextSlide();
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(nextSlide, 4000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        resetAutoPlay();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        resetAutoPlay();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isAnimating]);

  const currentSlide = slides[currentIndex];

  return (
    <section 
      id="home"
      className="relative w-full h-[100vh] overflow-hidden select-none cursor-pointer"
      onClick={handleManualAdvance}
    >
      {/* Background Color Layers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id + "-bg"}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundColor: currentSlide.bgColor }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        />
      </AnimatePresence>

      <div className="bg-noise" />

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="flex flex-col w-full items-center"
          animate={{ y: `-${currentIndex * 100}vh` }}
          transition={{ duration, ease: customEase }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="h-[100vh] w-full flex items-center justify-center flex-shrink-0"
            >
              <h1 
                className="text-[18vw] md:text-[25vw] font-heading font-black text-white leading-[0.8] tracking-tighter text-gradient-mask select-none"
              >
                {slide.themeText}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero Image / Video Center */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mt-12 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id + "-hero"}
            initial={{ opacity: 0, x: "5%", scale: 1.05 }}
            animate={{ opacity: 1, x: "0%", scale: 1 }}
            exit={{ opacity: 0, x: "-5%", scale: 0.95 }}
            transition={{ duration, ease: customEase, delay: 0.1 }}
            className="w-full max-w-4xl h-[50vh] md:h-[75vh] flex items-center justify-center"
          >
            {currentSlide.useVideo ? (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-contain filter drop-shadow-2xl"
                src="https://bosmartwash.in/assets/images/hero.mp4"
              />
            ) : (
              <img 
                src={currentSlide.heroImage} 
                alt={currentSlide.name} 
                className="w-full h-full object-contain filter drop-shadow-2xl"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Info Panel (Bottom Left) */}
      <div className="absolute bottom-8 md:bottom-[60px] left-4 md:left-[60px] z-30 w-[280px] md:w-[360px] pointer-events-none">
        <div className="overflow-hidden h-[140px] md:h-[120px]">
          <motion.div
            className="flex flex-col w-full"
            animate={{ y: `-${currentIndex * (window.innerWidth < 768 ? 140 : 120)}px` }}
            transition={{ duration, ease: customEase }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="h-[140px] md:h-[120px] flex-shrink-0 flex flex-col justify-end pb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white font-sans uppercase tracking-widest">{slide.name}</h2>
                <div className="w-12 h-px bg-white/40 my-3 md:my-4" />
                <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-sm">
                  {slide.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tagline (Right Center) */}
      <div className="hidden md:block absolute right-[60px] top-1/2 -translate-y-1/2 z-30 pointer-events-none w-[200px]">
        <h3 className="text-white font-semibold text-2xl uppercase tracking-widest font-heading leading-tight text-right">
          Fresh. Clean. Delivered.
        </h3>
      </div>

      {/* Thumbnail (Bottom Right) */}
      <div className="absolute bottom-8 md:bottom-[60px] right-4 md:right-[60px] z-30 pointer-events-none">
        <div className="overflow-hidden rounded-xl h-[120px] w-[80px] md:h-[176px] md:w-[120px] shadow-2xl border border-white/10">
          <motion.div
            className="flex flex-col w-full"
            animate={{ y: `-${currentIndex * (window.innerWidth < 768 ? 120 : 176)}px` }}
            transition={{ duration, ease: customEase }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="h-[120px] w-[80px] md:h-[176px] md:w-[120px] flex-shrink-0 bg-black/20">
                <img 
                  src={slide.thumbnail} 
                  alt={`${slide.name} thumbnail`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(i);
              resetAutoPlay();
            }}
            className="group py-2 px-1 focus:outline-none"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div 
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                i === currentIndex ? "w-12 bg-white" : "w-4 bg-white/30 group-hover:bg-white/50"
              }`} 
            />
          </button>
        ))}
      </div>
    </section>
  );
}