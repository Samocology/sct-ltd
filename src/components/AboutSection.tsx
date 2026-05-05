import aboutImage from "@/assets/about-cleaner.jpg";
import { Home, Building2, LayoutGrid, Sparkles } from "lucide-react";

const highlights = [
  { icon: Home, label: "Homes", desc: "Entire residence" },
  { icon: Building2, label: "Offices", desc: "Professional spaces" },
  { icon: LayoutGrid, label: "Apartments", desc: "Move-in & maintenance" },
  { icon: Sparkles, label: "Windows", desc: "Sparkle every pane" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          <img src={aboutImage} alt="Professional cleaner at work" className="aspect-square w-full object-cover" loading="lazy" width={800} height={800} />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Welcome to<br />Splendor Cleaning Technician Ltd.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We provide reliable, thorough, and trustworthy cleaning solutions designed to keep your homes and workplaces pristine and healthy.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-start gap-2.5 rounded-lg bg-surface p-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light">
                  <h.icon className="h-4 w-4 text-brand" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground">{h.label}</span>
                  <span className="block text-[11px] text-muted-foreground">{h.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
