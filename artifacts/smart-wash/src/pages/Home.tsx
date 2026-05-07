import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel";
import { AboutSection } from "@/components/sections/AboutSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CtaSection } from "@/components/sections/CtaSection";
import { BookingModal } from "@/components/BookingModal";
import { StickyBookingButton } from "@/components/StickyBookingButton";
import { BookingProvider, useBooking } from "@/context/BookingContext";

function HomeContent() {
  const { open, openModal, closeModal } = useBooking();
  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenBooking={openModal} />
      <HeroShowcase onOpenBooking={openModal} />
      <ServicesCarousel />
      <AboutSection />
      <HowItWorks />
      <CtaSection onOpenBooking={openModal} />
      <Footer />
      <StickyBookingButton onClick={openModal} />
      <BookingModal open={open} onClose={closeModal} />
    </main>
  );
}

export default function Home() {
  return (
    <BookingProvider>
      <HomeContent />
    </BookingProvider>
  );
}
