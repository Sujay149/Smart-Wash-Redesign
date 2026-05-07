import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroShowcase />
      <ServicesCarousel />
      <AboutSection />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </main>
  );
}