import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Splendor Cleaning Technician Ltd | Professional Cleaning in Lagos" },
      { name: "description", content: "Professional cleaning services in Lagos, Nigeria. Residential, office, deep cleaning, fumigation & more. Book your appointment today!" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
