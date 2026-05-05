import { Home, Building2, Sparkles, Bug, Sofa, CircleDot, Car, Truck, HardHat } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Cleaning", desc: "Comprehensive cleaning for your living spaces, tailored to your schedule." },
  { icon: Building2, title: "Office Cleaning", desc: "Maintain a professional and healthy workspace for your team." },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Thorough top-to-bottom cleaning targeting hidden dirt and grime." },
  { icon: Bug, title: "Fumigation Services", desc: "Effective pest control solutions to keep your premises safe." },
  { icon: Sofa, title: "Carpet & Upholstery", desc: "Deep extractive cleaning to revive fabrics and remove odors." },
  { icon: CircleDot, title: "Tough Stain Removal", desc: "Specialized treatments for stubborn spots on floors and surfaces." },
  { icon: Car, title: "Carwash Services", desc: "Professional exterior and interior detailing for your vehicles." },
  { icon: Truck, title: "Move-In/Move-Out", desc: "Make transitions smoother with our thorough cleaning service." },
  { icon: HardHat, title: "Renovated Buildings", desc: "Post-construction cleaning to remove dust and building debris." },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-surface py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Our Services</h2>
          <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
            From daily maintenance to specialized deep cleaning, we have the expertise to make any space shine.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-brand/30">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light transition-colors group-hover:bg-brand/10">
                <s.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
