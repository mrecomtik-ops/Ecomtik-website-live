import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { site, whatsappUrl } from "@/data/site";
import { services } from "@/data/services";
import { marketplaces } from "@/data/marketplaces";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ecomtik — Book a Free Consultation in Dubai" },
      {
        name: "description",
        content:
          "Get in touch with Ecomtik's Dubai team. WhatsApp, email or book a free consultation. Al Kaabi Building, Al Karama, Dubai. We usually respond within one business day.",
      },
      { name: "keywords", content: "contact Amazon agency Dubai, Ecomtik contact, Amazon consultation Dubai, WhatsApp Ecomtik" },
      { property: "og:title", content: "Contact Ecomtik" },
      { property: "og:description", content: "Tell us what you're building — we usually respond within one business day." },
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
  service: z.string().min(1, "Select the service you need"),
  marketplace: z.string().min(1, "Select a target marketplace"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().min(20, "Tell us a little more (min 20 chars)"),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree so we can contact you" }) }),
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
    defaultValues: { name: "", email: "", company: "", service: "", marketplace: "", budget: "", message: "", consent: false as unknown as true },
  });

  async function onSubmit(values: FormValues) {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Contact submission", values);
    toast.success("Thanks — we usually respond within one business day.");
    reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building."
        description="Share where your brand is and where you want it to go. We usually respond within one business day — often with an initial point of view attached."
      />

      <Section className="!pt-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 lg:col-span-3"
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Layla Al Nasser" {...register("name")} className="mt-2 bg-white/5 border-white/10" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="layla@brand.com" {...register("email")} className="mt-2 bg-white/5 border-white/10" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Aurelia Beauty" {...register("company")} className="mt-2 bg-white/5 border-white/10" />
                {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company.message}</p>}
              </div>
              <div>
                <Label htmlFor="service">Service needed</Label>
                <Select value={watch("service")} onValueChange={(v) => setValue("service", v, { shouldValidate: true })}>
                  <SelectTrigger id="service" className="mt-2 w-full bg-white/5 border-white/10">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                    ))}
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service.message}</p>}
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="marketplace">Target marketplace</Label>
                <Select value={watch("marketplace")} onValueChange={(v) => setValue("marketplace", v, { shouldValidate: true })}>
                  <SelectTrigger id="marketplace" className="mt-2 w-full bg-white/5 border-white/10">
                    <SelectValue placeholder="Select a marketplace" />
                  </SelectTrigger>
                  <SelectContent>
                    {marketplaces.map((m) => (
                      <SelectItem key={m.slug} value={m.slug}>{m.flag} {m.name}</SelectItem>
                    ))}
                    <SelectItem value="multiple">Multiple / not sure</SelectItem>
                  </SelectContent>
                </Select>
                {errors.marketplace && <p className="mt-1 text-xs text-destructive">{errors.marketplace.message}</p>}
              </div>
              <div>
                <Label htmlFor="budget">Monthly budget</Label>
                <Select value={watch("budget")} onValueChange={(v) => setValue("budget", v, { shouldValidate: true })}>
                  <SelectTrigger id="budget" className="mt-2 w-full bg-white/5 border-white/10">
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
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={6}
                placeholder="A few lines on your brand, current marketplaces, revenue and the goal for the next 12 months."
                {...register("message")}
                className="mt-2 bg-white/5 border-white/10"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={watch("consent") as unknown as boolean}
                onCheckedChange={(v) => setValue("consent", (v === true) as true, { shouldValidate: true })}
                className="mt-0.5"
              />
              <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground leading-relaxed">
                I agree that Ecomtik may contact me about my inquiry and store the details submitted in this form.
              </Label>
            </div>
            {errors.consent && <p className="mt-1 text-xs text-destructive">{errors.consent.message}</p>}

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">We usually respond within one business day.</p>
              <Button type="submit" size="lg" disabled={isSubmitting} className="bg-brand-gradient text-[oklch(0.15_0.02_265)] font-semibold hover:opacity-90">
                {isSubmitting ? "Sending…" : (<>Send inquiry <Send className="ml-2 h-4 w-4" /></>)}
              </Button>
            </div>
          </form>

          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="font-display text-xl">Dubai HQ</h3>
              <p className="mt-4 flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 text-[oklch(0.82_0.17_75)]" />
                {site.address.line1}<br />{site.address.line2}<br />{site.address.country}
              </p>
              <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-[oklch(0.82_0.17_75)]" />
                <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
              </p>
              <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4 text-[oklch(0.82_0.17_75)]" />
                <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-foreground">{site.whatsappDisplay}</a>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="font-display text-xl">Working hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {site.hours.map((h) => (
                  <li key={h.d} className="flex justify-between"><span>{h.d}</span><span>{h.h}</span></li>
                ))}
              </ul>
            </div>

            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="block rounded-2xl border border-[oklch(0.72_0.18_55)]/40 bg-gradient-to-br from-[oklch(0.22_0.05_60)]/40 to-[oklch(0.14_0.015_265)] p-8 transition-colors hover:border-[oklch(0.72_0.18_55)]/60">
              <h3 className="font-display text-xl">Prefer WhatsApp?</h3>
              <p className="mt-3 text-sm text-muted-foreground">Message us directly — usually a reply within the hour during GST business hours.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-gradient">
                <MessageCircle className="h-4 w-4" /> {site.whatsappDisplay}
              </span>
            </a>
          </aside>
        </div>
      </Section>
    </>
  );
}
