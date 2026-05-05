import logoIcon from "@/assets/logo-icon.png";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-navy border-t border-navy-foreground/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="Splendor" className="h-8 w-8 rounded-full" />
              <div className="leading-tight">
                <span className="text-base font-bold text-navy-foreground">SPLENDOR</span>
                <span className="block text-[9px] font-medium uppercase tracking-widest text-navy-foreground/60">Cleaning Technician Ltd</span>
              </div>
            </div>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-navy-foreground/60">
              We are dedicated to leaving your space spotless and shining. Trust us to handle all your cleaning needs.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-navy-foreground">Contact Information</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-2 text-xs text-navy-foreground/60">
                <MapPin className="h-3.5 w-3.5 shrink-0" /> Lagos, Nigeria
              </li>
              <li>
                <a href="tel:+2349025871034" className="flex items-center gap-2 text-xs text-navy-foreground/60 hover:text-navy-foreground">
                  <Phone className="h-3.5 w-3.5 shrink-0" /> +234 902 587 1034
                </a>
              </li>
              <li>
                <a href="mailto:splendorcleaningtechnician28@gmail.com" className="flex items-center gap-2 text-xs text-navy-foreground/60 hover:text-navy-foreground">
                  <Mail className="h-3.5 w-3.5 shrink-0" /> splendorcleaningtechnician28@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-navy-foreground">Follow Us</h3>
            <p className="mt-3 text-xs text-navy-foreground/60">Splendor Cleaning Technician Ltd.</p>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-foreground/10 pt-4 text-center text-[11px] text-navy-foreground/40">
          © {new Date().getFullYear()} Splendor Cleaning Technician Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
