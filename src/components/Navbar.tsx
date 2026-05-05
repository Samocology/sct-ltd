import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/new-logo.png";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src={logoIcon} alt="Splendor" className="h-20 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm font-medium text-foreground" }}>Home</Link>
          <a href="#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Services</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</a>
          <a href="#contact" onClick={scrollToContact} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contact</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+2349025871034" className="flex items-center gap-1.5 text-xs font-medium text-foreground">
            <Phone className="h-3.5 w-3.5" />
            +234 902 587 1034
          </a>
          <Link to="/book">
            <Button variant="brand" size="sm" className="rounded-lg">Book Now</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-2.5">
            <Link to="/" className="text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Home</Link>
            <a href="#services" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground" onClick={scrollToContact}>Contact</a>
            <a href="tel:+2349025871034" className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="h-3.5 w-3.5" /> +234 902 587 1034
            </a>
            <Link to="/book" onClick={() => setMobileOpen(false)}>
              <Button variant="brand" className="w-full rounded-lg" size="sm">Book Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}