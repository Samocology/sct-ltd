import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Home, Truck, Calendar, Clock, MapPin, User, Phone, CheckCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book Now | Splendor Cleaning Technician Ltd" },
      { name: "description", content: "Book your cleaning appointment in Lagos. Select your service, pick a date, and we'll handle the rest." },
    ],
  }),
});

const serviceTypes = [
  { id: "deep", label: "Deep Clean", icon: Sparkles, popular: true },
  { id: "standard", label: "Standard", icon: Home, popular: false },
  { id: "moveinout", label: "Move-In/Out", icon: Truck, popular: false },
];

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  date: z.string().refine((date) => new Date(date) > new Date(), { message: "Please select a future date." }),
  time: z.string().optional(),
  address: z.string().min(10, { message: "Please enter a full address." }),
});

function BookPage() {
  const [selectedService, setSelectedService] = useState("deep");
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      address: "",
    },
  });

  const serviceLabel = serviceTypes.find((s) => s.id === selectedService)?.label || selectedService;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const message = `Hello Splendor Cleaning!%0A%0AI'd like to book a *${serviceLabel}* service.%0A%0A*Name:* ${values.name}%0A*Phone:* ${values.phone}%0A*Date:* ${values.date}%0A*Time:* ${values.time || "Flexible"}%0A*Address:* ${values.address}`;
    const whatsappUrl = `https://wa.me/2349025871034?text=${message}`;

    // Fire off the email request without waiting for it to complete
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values, serviceLabel }),
    }).catch(error => {
      console.error('Error sending email:', error);
    });

    // Open WhatsApp and mark as submitted immediately
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="mx-auto flex max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
          <CheckCircle className="h-14 w-14 text-brand mb-4" />
          <h1 className="font-heading text-2xl font-bold text-foreground">Booking Sent!</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your booking request has been sent via WhatsApp and email. We'll get back to you shortly!
          </p>
          <Button variant="brand" className="mt-6 rounded-xl" onClick={() => { setSubmitted(false); form.reset(); }}>
            Book Another Service
          </Button>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand">
          <Sparkles className="h-3.5 w-3.5" />
          Fast, Easy, and Secure
        </div>
        <h1 className="font-heading text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
          Book your cleaning <span className="text-brand">in a few clicks.</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Select your service and tell us when to arrive. We bring the supplies and the sparkle!
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm">
            <h2 className="font-heading text-sm font-semibold text-foreground">1. What do you need help with?</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {serviceTypes.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`relative flex items-center gap-2 rounded-lg border-2 px-4 py-3 text-xs font-medium transition-all ${
                    selectedService === s.id
                      ? "border-brand bg-brand-light text-brand"
                      : "border-border bg-background text-muted-foreground hover:border-brand/30"
                  }`}
                >
                  {s.popular && (
                    <span className="absolute -top-2 right-1 rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-bold uppercase text-brand-foreground">
                      Popular
                    </span>
                  )}
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </button>
              ))}
            </div>

            <h2 className="mt-6 font-heading text-sm font-semibold text-foreground">2. Your Details</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="Full Name" className="h-10 rounded-lg pl-9 text-sm" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="+234 902 587 1034" className="h-10 rounded-lg pl-9 text-sm" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                        <Input type="date" className="h-10 rounded-lg pl-9 text-sm" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                        <Input type="time" className="h-10 rounded-lg pl-9 text-sm" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-3.5 w-3.5 text-muted-foreground" />
                        <textarea
                          placeholder="Full service address in Lagos..."
                          className="flex min-h-[60px] w-full rounded-lg border border-input bg-transparent px-3 py-2.5 pl-9 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              variant="brand"
              size="lg"
              className="mt-5 w-full rounded-lg py-5 text-sm"
            >
              Confirm & Book Now ✨
            </Button>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              No payment required until service is complete.
            </p>
          </form>
        </Form>
      </section>
      <Footer />
    </div>
  );
}