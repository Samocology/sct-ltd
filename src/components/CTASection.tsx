import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import newLogo from "@/assets/new-logo.png";

export function CTASection() {
  return (
    <section className="bg-navy py-14">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <img src={newLogo} alt="" className="mx-auto mb-4 h-28 w-auto" />
        <h2 className="font-heading text-2xl font-bold tracking-tight text-navy-foreground sm:text-3xl">
          Dedicated to leaving your space spotless and shining.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-navy-foreground/70">
          Trust Splendor Cleaning Technician Ltd. to handle all your cleaning needs. Contact us today!
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link to="/book">
            <Button variant="brand" size="lg" className="rounded-xl px-6 py-5 text-sm">Contact Us Now</Button>
          </Link>
          <a href="mailto:splendorcleaningtechnician28@gmail.com" className="text-xs font-medium text-navy-foreground/80 underline underline-offset-4 transition-colors hover:text-navy-foreground">
            Email Us Instead
          </a>
        </div>
      </div>
    </section>
  );
}