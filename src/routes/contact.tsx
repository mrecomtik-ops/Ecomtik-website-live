import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ecomtik — Book an Amazon Growth Audit" },
      {
        name: "description",
        content:
          "Get in touch with Ecomtik's Dubai team. Book a free Amazon growth audit or ask about our brand-building and marketplace services.",
      },
      { property: "og:title", content: "Contact Ecomtik" },
      {
        property: "og:description",
        content:
          "Book a free Amazon growth audit with Ecomtik's Dubai team.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(2, "Please enter your company"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(20, "Tell us a little more (min 20 chars)"),
});

type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", budget: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Contact submission", values);
    toast.success("Thanks — we'll be in touch within two business days.");
    reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next quarter."
        description="Tell us where your brand is and where you want it to go. We reply to every inquiry within two business days — usually with an initial point of view attached."
      />

      <Section className="!pt-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 lg:col-span-3"
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Your name</Label>
                <Input id="name" placeholder="Layla Al Nasser" {...register("name")} className="mt-2" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Work email</Label>
                <Input id="email" type="email" placeholder="layla@brand.com" {...register("email")} className="mt-2" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Aurelia Beauty" {...register("company")} className="mt-2" />
                {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company.message}</p>}
              </div>
              <div>
                <Label htmlFor="budget">Monthly budget</Label>
                <Select
                  value={watch("budget")}
                  onValueChange={(v) => setValue("budget", v, { shouldValidate: true })}
                >
                  <SelectTrigger id="budget" className="mt-2 w-full">
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5-10k">$5,000 – $10,000</SelectItem>
                    <SelectItem value="10-25k">$10,000 – $25,000</SelectItem>
                    <SelectItem value="25k+">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budget && <p className="mt-1 text-xs text-destructive">{errors.budget.message}</p>}
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="message">What are you trying to solve?</Label>
              <Textarea
                id="message"
                rows={6}
                placeholder="A few lines on your brand, current marketplaces, revenue and the goal for the next 12 months."
                {...register("message")}
                className="mt-2"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                We reply within two business days.
              </p>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : (<>Send inquiry <Send className="ml-2 h-4 w-4" /></>)}
              </Button>
            </div>
          </form>

          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-secondary/50 p-8">
              <h3 className="font-display text-xl">Dubai HQ</h3>
              <p className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                Business Bay, Bay Square Building 3<br />
                Dubai, United Arab Emirates
              </p>
              <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" /> hello@ecomtik.com
              </p>
              <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> +971 4 000 0000
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl">Working hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between"><span>Sunday – Thursday</span> <span>9:00 – 18:00 GST</span></li>
                <li className="flex justify-between"><span>Friday</span> <span>By appointment</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>Closed</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground">
              <h3 className="font-display text-xl">Prefer email?</h3>
              <p className="mt-3 text-sm text-primary-foreground/80">
                Send a note to our new-business team and we'll route it to the right partner.
              </p>
              <a
                href="mailto:hello@ecomtik.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline"
              >
                <Mail className="h-4 w-4" /> hello@ecomtik.com
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
