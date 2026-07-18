import {
  Palette,
  Globe,
  Package,
  Camera,
  FileText,
  Search,
  Rocket,
  Megaphone,
  Sparkles,
  ShieldCheck,
  BarChart3,
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
  // Track A — Brand Building
  {
    slug: "logo-brand-identity",
    track: "A",
    trackLabel: "Brand Building",
    title: "Logo & Brand Identity",
    short: "A distinctive mark and identity system that reads on a 5-inch screen.",
    overview:
      "We design brand identities engineered for ecommerce — logos, colour systems, type and iconography that stay legible from a hero image to a favicon. Every asset ships with usage guidelines so your team, retailers and marketplaces stay on brand.",
    icon: Palette,
    keywords:
      "logo design Dubai, brand identity agency UAE, ecommerce branding, Amazon brand identity, packaging brand design",
    deliverables: [
      "Primary logo + monogram + favicon",
      "Colour palette with print + digital tokens",
      "Typography system (display + body pairing)",
      "Iconography set and usage rules",
      "Brand guidelines PDF (25+ pages)",
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
    slug: "website-design-development",
    track: "A",
    trackLabel: "Brand Building",
    title: "Website Design & Development",
    short: "Brand websites and DTC stores that convert and rank.",
    overview:
      "We design and build brand websites and Shopify stores that pair editorial storytelling with commerce-grade performance. SEO-clean, fast on 3G, and wired into your marketplace strategy from day one.",
    icon: Globe,
    keywords:
      "website design Dubai, Shopify agency UAE, ecommerce web development, brand website designer, DTC store build",
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
    slug: "packaging-design",
    track: "A",
    trackLabel: "Brand Building",
    title: "Packaging Design",
    short: "Structural and graphic packaging that survives the shelf and the box.",
    overview:
      "From primary packaging to shipping boxes, we design packaging that protects the product, communicates the brand and hits Amazon's frustration-free requirements. Every design ships print-ready with dielines and material specifications.",
    icon: Package,
    keywords:
      "packaging design Dubai, Amazon frustration free packaging, FBA packaging design, product packaging UAE",
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
    slug: "product-photography-video",
    track: "A",
    trackLabel: "Brand Building",
    title: "Product Photography & Video",
    short: "Studio-grade product content built for marketplaces and social.",
    overview:
      "Our Dubai studio produces the full spread — white-background hero shots, lifestyle scenes, infographic imagery and short-form video — engineered for Amazon PDPs, meta ads and PDP video slots.",
    icon: Camera,
    keywords:
      "product photography Dubai, Amazon product photos UAE, ecommerce photography studio, lifestyle product video",
    deliverables: [
      "White-background hero shots",
      "Lifestyle and in-use imagery",
      "Amazon infographic images",
      "15/30/60s product videos",
      "Cutouts and packshots for retail",
    ],
    process: [
      { step: "Shot list", description: "Category best-practice + PDP conversion targets." },
      { step: "Production", description: "In-studio or on-location shoot with brand oversight." },
      { step: "Edit", description: "Retouching, colour grade and platform-specific delivery." },
      { step: "Delivery", description: "Organized folder structure and platform-ready assets." },
    ],
    outcomes: [
      "Higher click-through on ads and search",
      "PDPs that convert at category-leading rates",
      "One shoot, assets for every channel",
    ],
    faq: [
      { q: "Where do you shoot?", a: "In our Dubai studio, or on-location anywhere in the GCC." },
    ],
  },
  {
    slug: "brand-strategy-guidelines",
    track: "A",
    trackLabel: "Brand Building",
    title: "Brand Strategy & Guidelines",
    short: "Positioning, messaging and a playbook the whole team can use.",
    overview:
      "We work with founders and leadership teams to sharpen positioning, define the audience, and codify voice, messaging and visual rules into a single living document your entire organization can operate from.",
    icon: FileText,
    keywords:
      "brand strategy Dubai, brand positioning agency UAE, brand guidelines consultant, consumer brand strategy",
    deliverables: [
      "Positioning statement + value proposition",
      "Audience segments and jobs-to-be-done",
      "Messaging hierarchy and voice guide",
      "Category and competitor map",
      "Brand playbook (Notion or PDF)",
    ],
    process: [
      { step: "Research", description: "Interviews, category audit and quantitative data review." },
      { step: "Workshop", description: "Two-day working session with founder + leadership." },
      { step: "Articulation", description: "Positioning, messaging and voice codified in draft." },
      { step: "Playbook", description: "Final document + team activation session." },
    ],
    outcomes: [
      "A brand that says the same thing everywhere",
      "Faster decisions across marketing and product",
      "New hires up to speed in days, not months",
    ],
    faq: [
      { q: "How long is the engagement?", a: "Typically six to eight weeks including research and playbook." },
    ],
  },

  // Track B — Amazon Growth
  {
    slug: "amazon-seo-listing-optimization",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Amazon SEO & Listing Optimization",
    short: "Rank-first listings — keyword, copy, imagery and backend audited.",
    overview:
      "We rewrite titles, bullets, descriptions and backend keywords using Helium 10 and SEMrush data, then rebuild imagery for mobile-first conversion. Every listing gets a documented, testable ranking plan.",
    icon: Search,
    keywords:
      "Amazon SEO agency Dubai, Amazon listing optimization UAE, Amazon keyword research, Helium 10 consultant",
    deliverables: [
      "Keyword research (primary + long-tail)",
      "Optimized title, bullets, description",
      "Backend keyword strategy",
      "Image rebuild (hero + 6 supporting)",
      "A+ content brief",
    ],
    process: [
      { step: "Audit", description: "Current rank, share of voice and gap analysis." },
      { step: "Rewrite", description: "Copy, backend keywords and structured data." },
      { step: "Imagery", description: "Hero, infographic and lifestyle shots." },
      { step: "Track", description: "Weekly rank tracking with iteration loops." },
    ],
    outcomes: [
      "Higher organic rank on primary keywords",
      "Improved CTR from search",
      "PDP conversion lift from imagery upgrades",
    ],
    faq: [
      { q: "Do you guarantee page 1?", a: "No serious operator does. We commit to a documented plan and share weekly rank data." },
    ],
  },
  {
    slug: "product-sourcing-launch",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Product Sourcing & Launch",
    short: "From supplier shortlist to first sale — sourcing, sampling and launch.",
    overview:
      "We help brands source new SKUs from vetted suppliers in China, India, Turkey and the UAE, manage sampling and quality control, and run the launch plan — pricing, promo, PPC and creator seeding.",
    icon: Rocket,
    keywords:
      "Amazon product sourcing Dubai, private label sourcing UAE, Amazon launch agency, product launch strategy",
    deliverables: [
      "Supplier shortlist + pricing",
      "Sampling and QC coordination",
      "Launch pricing and promo plan",
      "Launch PPC campaign build",
      "Creator seeding brief",
    ],
    process: [
      { step: "Scope", description: "SKU spec, target margin and marketplace fit." },
      { step: "Source", description: "Supplier outreach, sampling and negotiation." },
      { step: "Prep", description: "Listing, imagery and inventory to FBA." },
      { step: "Launch", description: "Twelve-week launch window with weekly optimization." },
    ],
    outcomes: [
      "Vetted suppliers and clean unit economics",
      "Faster time-to-first-review",
      "A launch that hits Best Seller Rank targets",
    ],
    faq: [
      { q: "Do you take a margin on sourcing?", a: "No. We charge a flat fee and you own the supplier relationship." },
    ],
  },
  {
    slug: "amazon-ppc-management",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Amazon PPC Management",
    short: "Sponsored Ads, DSP and AMC — built against a TACOS target.",
    overview:
      "Full-funnel Amazon advertising: Sponsored Products, Brands, Display, DSP and AMC audiences. We build campaign architectures around defined TACOS and share-of-voice goals, then optimize weekly with commentary.",
    icon: Megaphone,
    keywords:
      "Amazon PPC agency Dubai, Amazon DSP UAE, Amazon advertising management, sponsored ads consultant",
    deliverables: [
      "Full-funnel campaign architecture",
      "Weekly bid + placement optimization",
      "Search-term harvesting cadence",
      "DSP + AMC audience strategy",
      "Weekly reporting with commentary",
    ],
    process: [
      { step: "Audit", description: "Historic performance, wasted spend and gap analysis." },
      { step: "Build", description: "Rebuild or refactor to full-funnel architecture." },
      { step: "Optimize", description: "Weekly optimization sprints against TACOS target." },
      { step: "Scale", description: "DSP and AMC layered when unit economics prove." },
    ],
    outcomes: [
      "TACOS reduction with maintained or lifted sales",
      "Higher organic rank from paid signal",
      "Transparent reporting your team can defend",
    ],
    faq: [
      { q: "What's a realistic TACOS?", a: "Category-dependent — we set targets after the initial audit, typically 6–14%." },
    ],
  },
  {
    slug: "amazon-marketing-creative",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Amazon Marketing & Creative",
    short: "A+ content, Brand Stores, Posts and video for the whole funnel.",
    overview:
      "We produce and manage the full Amazon creative surface — A+ and Premium A+ modules, Brand Store design, Posts calendar, video ads and Vine seeding — so the paid and organic story on your PDPs is consistent and always fresh.",
    icon: Sparkles,
    keywords:
      "Amazon A+ content agency, Amazon brand store design, Amazon posts management, Amazon video ads",
    deliverables: [
      "Premium A+ modules per SKU",
      "Brand Store design + build",
      "Monthly Posts calendar",
      "Video ads (Sponsored Brands + DSP)",
      "Amazon Vine and review strategy",
    ],
    process: [
      { step: "Plan", description: "Content calendar aligned with launches and promo." },
      { step: "Produce", description: "Design, copy and video from our Dubai studio." },
      { step: "Publish", description: "Upload, QA and cross-market localization." },
      { step: "Measure", description: "Attributed lift studies where AMC allows." },
    ],
    outcomes: [
      "Higher PDP conversion and time on page",
      "Better organic discovery via Posts",
      "A brand story that scales across markets",
    ],
    faq: [
      { q: "Do you localize creative?", a: "Yes — Arabic, English, German and Japanese by default." },
    ],
  },
  {
    slug: "amazon-account-management",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Amazon Account Management",
    short: "The unglamorous work that keeps your account healthy and shipping.",
    overview:
      "Case log management, listing suppressions, IP claims, account health, FBA replenishment forecasting and Vendor/Seller Central hygiene — handled by a dedicated ops lead who knows your account.",
    icon: BarChart3,
    keywords:
      "Amazon account management Dubai, Seller Central management UAE, Amazon operations agency",
    deliverables: [
      "Weekly account health monitoring",
      "Case log management",
      "FBA replenishment forecasting",
      "Listing suppression fixes",
      "Monthly ops review",
    ],
    process: [
      { step: "Onboard", description: "Access, tooling and account audit." },
      { step: "Stabilize", description: "Fix suppressions, ASIN issues and health metrics." },
      { step: "Operate", description: "Weekly ops cadence and case log grooming." },
      { step: "Report", description: "Monthly ops report with recommendations." },
    ],
    outcomes: [
      "Fewer stockouts and suppressions",
      "Faster resolution of Amazon disputes",
      "A leadership team that stops firefighting",
    ],
    faq: [
      { q: "Do you need Seller Central admin access?", a: "Yes — with scoped user roles, never your master credentials." },
    ],
  },
  {
    slug: "brand-protection-ip",
    track: "B",
    trackLabel: "Amazon Growth",
    title: "Brand Protection & IP",
    short: "Defend the Buy Box, margin and reputation with a documented process.",
    overview:
      "We enrol you in Amazon Brand Registry, monitor MAP violations, remove unauthorized sellers and file IP claims when needed. The goal: you own the Buy Box on your own ASINs, always.",
    icon: ShieldCheck,
    keywords:
      "Amazon brand protection, Amazon brand registry enrolment, MAP monitoring Amazon, unauthorized seller removal",
    deliverables: [
      "Brand Registry enrolment",
      "MAP monitoring dashboard",
      "Unauthorized seller removal workflow",
      "IP claim filing",
      "Quarterly brand health report",
    ],
    process: [
      { step: "Register", description: "Brand Registry enrolment and Transparency setup." },
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
];

export const trackAServices = services.filter((s) => s.track === "A");
export const trackBServices = services.filter((s) => s.track === "B");

export const getService = (slug: string) => services.find((s) => s.slug === slug);
