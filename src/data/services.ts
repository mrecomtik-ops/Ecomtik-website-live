import {
  Palette,
  Globe,
  Package,
  Megaphone,
  Building2,
  Search,
  Layers,
  Boxes,
  Truck,
  ShieldCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  track: "A" | "B";
  trackLabel: string;
  title: string;
  short: string;
  overview: string;
  icon: LucideIcon;
  keywords: string;
  deliverables: string[];
  process: { step: string; description: string }[];
  outcomes: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  // ─── Track A — Brand Building ────────────────────────────────
  {
    slug: "logo-design",
    track: "A",
    trackLabel: "Brand Building",
    title: "Logo Design",
    short: "A distinctive mark and identity system engineered for ecommerce.",
    overview:
      "We design brand identities engineered for ecommerce — logos, colour systems, type and iconography that stay legible from a hero image to a favicon. Every asset ships with usage guidelines so your team, retailers and marketplaces stay on brand.",
    icon: Palette,
    keywords: "logo design Dubai, brand identity agency UAE, ecommerce branding, Amazon brand logo",
    deliverables: [
      "Primary logo + monogram + favicon",
      "Colour palette with print + digital tokens",
      "Typography system (display + body pairing)",
      "Iconography set and usage rules",
      "Brand guidelines PDF",
    ],
    process: [
      { step: "Discovery", description: "Category audit, competitor teardown and positioning workshop." },
      { step: "Direction", description: "Two visual territories with mood boards and rationale." },
      { step: "Design", description: "Refinement of the chosen direction into a full identity system." },
      { step: "Handover", description: "Source files, guidelines and a launch checklist." },
    ],
    outcomes: [
      "A brand that survives contact with an Amazon PDP",
      "Consistent identity across packaging, ads and storefront",
      "Faster launches — every asset already on-brand",
    ],
    faq: [
      { q: "How long does it take?", a: "Four to six weeks from kickoff to final delivery." },
      { q: "Do you handle trademark filing?", a: "We partner with a UAE trademark firm and manage the process end-to-end." },
    ],
  },
  {
    slug: "website-design",
    track: "A",
    trackLabel: "Brand Building",
    title: "Website Design",
    short: "Brand websites and DTC stores that convert and rank.",
    overview:
      "We design and build brand websites and Shopify stores that pair editorial storytelling with commerce-grade performance. SEO-clean, fast on mobile, and wired into your marketplace strategy from day one.",
    icon: Globe,
    keywords: "website design Dubai, Shopify agency UAE, ecommerce web development, brand website designer",
    deliverables: [
      "Design system in Figma",
      "Responsive build (Next.js or Shopify)",
      "Core Web Vitals-passing performance",
      "On-page SEO + schema",
      "Analytics + tracking setup",
    ],
    process: [
      { step: "Sitemap", description: "Content architecture based on search intent and buyer journey." },
      { step: "Design", description: "Wireframes, then high-fidelity design in your brand system." },
      { step: "Build", description: "Component-driven implementation with performance budgets." },
      { step: "Launch", description: "QA, migration, redirects and post-launch monitoring." },
    ],
    outcomes: [
      "A website that ranks and converts, not just looks good",
      "Faster checkout and lower bounce",
      "Clean tracking to inform paid media",
    ],
    faq: [
      { q: "Shopify or custom?", a: "We recommend Shopify for most DTC brands and custom for content-heavy or unique flows." },
      { q: "Do you handle content?", a: "Yes — copy, photography and video can be scoped into the engagement." },
    ],
  },
  {
    slug: "product-packaging-design",
    track: "A",
    trackLabel: "Brand Building",
    title: "Product Packaging Design",
    short: "Structural and graphic packaging that survives the shelf and the box.",
    overview:
      "From primary packaging to shipping boxes, we design packaging that protects the product, communicates the brand and hits Amazon's frustration-free requirements. Every design ships print-ready with dielines and material specifications.",
    icon: Package,
    keywords: "packaging design Dubai, Amazon frustration free packaging, FBA packaging design",
    deliverables: [
      "Structural design + dielines",
      "Graphic design (print-ready CMYK + Pantone)",
      "Material and finish recommendations",
      "Amazon FFP compliance review",
      "3D renders for marketing use",
    ],
    process: [
      { step: "Brief", description: "Product, category, price point and channel constraints." },
      { step: "Concepts", description: "Three directions with structural and graphic options." },
      { step: "Refinement", description: "Physical mock-ups and marketplace-ready renders." },
      { step: "Production", description: "Print supplier liaison and quality checks on first run." },
    ],
    outcomes: [
      "Packaging that survives Amazon's transport tests",
      "Higher shelf and PDP conversion",
      "Reduced returns from damaged goods",
    ],
    faq: [
      { q: "Do you work with our factory?", a: "Yes — we liaise directly with printers and suppliers in your supply chain." },
    ],
  },
  {
    slug: "digital-marketing",
    track: "A",
    trackLabel: "Brand Building",
    title: "Digital Marketing",
    short: "Full-funnel marketing that turns awareness into repeat buyers.",
    overview:
      "Search, social, creator and email programs that build brand awareness off-Amazon and drive external traffic to your PDPs and DTC store. Strategy, creative and media planning delivered as one plan.",
    icon: Megaphone,
    keywords: "digital marketing Dubai, social media agency UAE, creator marketing GCC, ecommerce marketing agency",
    deliverables: [
      "Channel strategy and media plan",
      "Meta and TikTok paid campaigns",
      "Creator and influencer sourcing",
      "Email + CRM automation",
      "Monthly performance report",
    ],
    process: [
      { step: "Plan", description: "Audience, positioning and channel mix by objective." },
      { step: "Produce", description: "Creative production and creator briefs." },
      { step: "Publish", description: "Campaign setup, tracking and QA." },
      { step: "Optimize", description: "Weekly optimization against ROAS and CAC targets." },
    ],
    outcomes: [
      "Lower blended CAC across DTC and Amazon",
      "External traffic that lifts Amazon rank",
      "A repeatable creator and paid social engine",
    ],
    faq: [
      { q: "Which platforms do you run?", a: "Meta, TikTok, Google, YouTube and creator marketplaces — depending on the audience." },
    ],
  },
  {
    slug: "company-setup",
    track: "A",
    trackLabel: "Brand Building",
    title: "Company Setup",
    short: "UAE company formation and marketplace-ready licensing.",
    overview:
      "We help entrepreneurs and international brands set up in the UAE — mainland or free zone — with the trade licence, bank account and tax registration required to sell on Amazon, Noon and DTC.",
    icon: Building2,
    keywords: "company setup Dubai, UAE trade licence, free zone company Amazon, business setup ecommerce",
    deliverables: [
      "Free zone / mainland recommendation",
      "Trade licence application",
      "Corporate bank account intro",
      "VAT registration",
      "Amazon seller onboarding docs",
    ],
    process: [
      { step: "Advise", description: "Zone selection based on activity, cost and residency needs." },
      { step: "Apply", description: "Licence application, immigration and MOA setup." },
      { step: "Bank", description: "Introductions to UAE banks and account opening support." },
      { step: "Launch", description: "VAT, Amazon and Noon seller account activation." },
    ],
    outcomes: [
      "Fastest path to a compliant UAE selling entity",
      "Bank account and VAT ready for launch",
      "Amazon and Noon accounts approved",
    ],
    faq: [
      { q: "How long does UAE setup take?", a: "Typically 2 to 4 weeks depending on zone and shareholder documents." },
    ],
  },

  // ─── Track B — Amazon Growth ─────────────────────────────────
  {
    slug: "amazon-product-sourcing",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Amazon Product Sourcing",
    short: "Vetted suppliers, clean unit economics and reliable delivery.",
    overview:
      "We help brands source new SKUs from vetted suppliers in China, India, Turkey and the UAE, manage sampling and quality control, and negotiate pricing so unit economics work on Amazon before you launch.",
    icon: Search,
    keywords: "Amazon product sourcing Dubai, private label sourcing UAE, China India Turkey suppliers",
    deliverables: [
      "Supplier shortlist + pricing",
      "Sampling and QC coordination",
      "MOQ and payment negotiation",
      "Freight and duties plan",
      "Landed cost + margin model",
    ],
    process: [
      { step: "Scope", description: "SKU spec, target margin and marketplace fit." },
      { step: "Source", description: "Supplier outreach, sampling and negotiation." },
      { step: "Verify", description: "Factory audit and pre-shipment inspection." },
      { step: "Ship", description: "Freight coordination to FBA or 3PL." },
    ],
    outcomes: [
      "Vetted suppliers and clean unit economics",
      "Fewer surprises at first inspection",
      "Landed cost model you can defend",
    ],
    faq: [
      { q: "Do you take a margin on sourcing?", a: "No. We charge a flat fee and you own the supplier relationship." },
    ],
  },
  {
    slug: "amazon-private-label",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Amazon Private Label",
    short: "Build and scale your own brand on Amazon end-to-end.",
    overview:
      "The full private label playbook — category research, product design, sourcing, branding, listing, launch and PPC. One team owning the roadmap from idea to Best Seller Rank.",
    icon: Layers,
    keywords: "Amazon private label agency, private label Dubai, Amazon FBA private label",
    deliverables: [
      "Category and keyword research",
      "Product design and packaging",
      "Sourcing and QC",
      "Listing + creative + PPC launch",
      "12-week launch plan and reporting",
    ],
    process: [
      { step: "Research", description: "Category size, competition and margin viability." },
      { step: "Develop", description: "Product design, branding and packaging." },
      { step: "Source", description: "Supplier selection, sampling and first order." },
      { step: "Launch", description: "Listing, creative, PPC and review strategy." },
    ],
    outcomes: [
      "A validated private label brand on Amazon",
      "Predictable launch timeline and cost",
      "Path from launch to profitable scale",
    ],
    faq: [
      { q: "What budget is needed?", a: "Most private label launches require $15,000–$40,000 in inventory + fees for the first SKU." },
    ],
  },
  {
    slug: "micro-private-label",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Micro Private Label",
    short: "Low-risk private label for first-time entrepreneurs.",
    overview:
      "A leaner private label path — small MOQs, focused categories and shared services — designed for first-time Amazon sellers who want to test the model with less capital and faster time to market.",
    icon: Boxes,
    keywords: "micro private label, low MOQ Amazon, first-time seller Amazon, small budget private label",
    deliverables: [
      "Curated low-MOQ suppliers",
      "Simple branded packaging",
      "Amazon UAE / KSA / US launch listing",
      "Starter PPC campaigns",
      "Shared ops support",
    ],
    process: [
      { step: "Pick", description: "Short list of validated product opportunities." },
      { step: "Brand", description: "Lightweight identity and packaging." },
      { step: "Order", description: "Small first order from vetted supplier." },
      { step: "Sell", description: "Listing, PPC and first-90-day support." },
    ],
    outcomes: [
      "First Amazon SKU live in under 90 days",
      "Lower capital at risk",
      "Foundation to reinvest into scale",
    ],
    faq: [
      { q: "Is this for beginners?", a: "Yes — this program is designed for first-time entrepreneurs testing Amazon." },
    ],
  },
  {
    slug: "amazon-wholesale",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Amazon Wholesale",
    short: "Buy from established brands and resell profitably on Amazon.",
    overview:
      "We help operators build a wholesale business on Amazon — sourcing established brand products from authorised distributors, negotiating terms and managing Buy Box eligibility and account health.",
    icon: Truck,
    keywords: "Amazon wholesale Dubai, wholesale FBA agency, authorised reseller Amazon",
    deliverables: [
      "Brand target list and outreach",
      "Distributor / manufacturer intros",
      "Pricing and margin analysis",
      "Buy Box strategy",
      "Ops and account health support",
    ],
    process: [
      { step: "Target", description: "Identify brands with room for another reseller." },
      { step: "Approach", description: "Outreach and account applications." },
      { step: "Deal", description: "Terms, pricing and shipping negotiation." },
      { step: "Operate", description: "Restock, Buy Box and account health monitoring." },
    ],
    outcomes: [
      "Live wholesale accounts with real brands",
      "Predictable margin per SKU",
      "Healthy account with Buy Box wins",
    ],
    faq: [
      { q: "Do I need retail arbitrage experience?", a: "No — we set up processes for both first-time and existing operators." },
    ],
  },
  {
    slug: "brand-registry",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Brand Registry",
    short: "Enrol in Brand Registry and defend your listings, Buy Box and IP.",
    overview:
      "We enrol you in Amazon Brand Registry, monitor MAP violations, remove unauthorised sellers and file IP claims when needed. The goal: you own the Buy Box on your own ASINs, always.",
    icon: ShieldCheck,
    keywords: "Amazon brand registry enrolment, MAP monitoring Amazon, unauthorised seller removal",
    deliverables: [
      "Brand Registry enrolment",
      "Trademark filing coordination",
      "MAP monitoring dashboard",
      "Unauthorised seller removal workflow",
      "Quarterly brand health report",
    ],
    process: [
      { step: "Register", description: "Trademark check and Brand Registry enrolment." },
      { step: "Monitor", description: "Automated MAP + seller scans." },
      { step: "Enforce", description: "Takedowns, warning letters and IP claims." },
      { step: "Report", description: "Quarterly review with brand + legal." },
    ],
    outcomes: [
      "Higher Buy Box share on your own ASINs",
      "Fewer counterfeits and price violations",
      "Protected brand equity as you scale",
    ],
    faq: [
      { q: "Do you handle trademark filing?", a: "We work with your legal team or a partner UAE firm." },
    ],
  },
  {
    slug: "amazon-brand-launch",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Amazon Brand Launch",
    short: "A structured 12-week launch across listing, creative and PPC.",
    overview:
      "A structured 12-week Amazon launch program — SEO listing, hero imagery and video, launch PPC, review strategy and rank monitoring — for brands going live on a new marketplace or SKU.",
    icon: Rocket,
    keywords: "Amazon brand launch, Amazon launch agency Dubai, Amazon new marketplace launch",
    deliverables: [
      "Keyword research and SEO listing",
      "Hero images + PDP video",
      "Launch PPC (SP, SB, SD)",
      "Review and Vine strategy",
      "Weekly launch report",
    ],
    process: [
      { step: "Prepare", description: "Listing, creative and PPC architecture." },
      { step: "Launch", description: "Go-live with launch PPC and review push." },
      { step: "Optimize", description: "Weekly bid, rank and creative optimization." },
      { step: "Handover", description: "Steady-state playbook after week 12." },
    ],
    outcomes: [
      "Rank on primary keywords within 12 weeks",
      "Category-leading PDP conversion",
      "A profitable steady-state Amazon channel",
    ],
    faq: [
      { q: "What's a realistic TACOS at launch?", a: "Category-dependent — typically 18–25% during launch, tightening to 6–14% at steady state." },
    ],
  },
];

export const trackAServices = services.filter((s) => s.track === "A");
export const trackBServices = services.filter((s) => s.track === "B");

export const getService = (slug: string) => services.find((s) => s.slug === slug);
