import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clean-home.jpg";
import heroOffice from "@/assets/hero-office-clean.jpg";
import heroKitchen from "@/assets/hero-kitchen-clean.jpg";
import { Sparkles, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    image: heroImage,
    quote: "They left my home looking absolutely amazing. So professional!",
    author: "Amina O., Lagos",
  },
  {
    image: heroOffice,
    quote: "Our office has never been this clean. The team is thorough and reliable.",
    author: "Chidi E., Victoria Island",
  },
  {
    image: heroKitchen,
    quote: "Best deep cleaning service in Lagos. My kitchen sparkles like new!",
    author: "Funke A., Lekki",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
        <div className="max-w-lg">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            Top-Rated Professional Cleaning
          </div>
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Let us handle the mess, enjoy your{" "}
            <span className="text-brand">space.</span>
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Professional cleaning services tailored to your needs. We take the stress out of keeping your environment spotless.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/book">
              <Button variant="brand" size="lg" className="rounded-xl px-6 py-5 text-sm">
                Book an Appointment
              </Button>
            </Link>
            <a href="tel:+2349025871034" className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent">
              <Phone className="h-4 w-4 text-brand" />
              <div className="leading-tight">
                <span className="block text-[10px] text-muted-foreground">Call anytime</span>
                <span className="font-semibold text-xs">+234 902 587 1034</span>
              </div>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={slide.image}
              alt="Professional cleaning service"
              className="aspect-[1/1] w-full object-cover transition-opacity duration-700"
              width={960}
              height={1200}
            />
          </div>
          {/* Testimonial overlay */}
          <div className="absolute bottom-4 right-0 left-4 rounded-xl border border-border/50 bg-card/90 p-3 shadow-lg backdrop-blur sm:left-auto sm:max-w-xs">
            <p className="text-xs font-medium text-foreground leading-relaxed">
              "{slide.quote}"
            </p>
            <p className="mt-1 text-[11px] text-brand font-semibold">— {slide.author}</p>
          </div>
          {/* Slide indicators */}
          <div className="absolute top-4 right-4 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-brand" : "w-2 bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}