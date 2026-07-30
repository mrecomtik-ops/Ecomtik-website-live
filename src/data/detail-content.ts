import type { Service } from "./services";
import type { Marketplace } from "./marketplaces";
import type { BlogPost } from "./blog";

/* ─────────────── SERVICES ─────────────── */

export type ServiceDetail = {
  valueProp: string;
  problem: string;
  audience: string[];
  timeline: string;
  excluded: string[];
};

const serviceDetails: Record<string, ServiceDetail> = {
  "logo-design": {
    valueProp: "An identity system that stays legible at thumbnail size and premium at full scale.",
    problem: "Most marketplace brands use a logo built for a website, not for a 300px search tile — so it disappears in results and looks generic beside category leaders.",
    audience: ["New brands pre-launch", "Existing brands rebranding for marketplace", "Private-label sellers needing Brand Registry assets"],
    timeline: "2–3 weeks from kickoff to final handover.",
    excluded: ["Trademark filing (we can refer counsel)", "Packaging dielines (see Product Packaging Design)", "Website build (see Website Design)"],
  },
  "website-design": {
    valueProp: "A fast, conversion-focused brand site that supports your marketplace presence instead of competing with it.",
    problem: "Brands either have no site — costing them Brand Registry credibility and ad landing pages — or a slow template that leaks conversions.",
    audience: ["Brands launching DTC alongside Amazon", "Businesses needing a credible brand home", "Sellers preparing for Brand Registry"],
    timeline: "3–5 weeks depending on page count and content readiness.",
    excluded: ["Ongoing content writing after launch", "Paid media management", "Custom ERP or warehouse integrations"],
  },
  "product-packaging-design": {
    valueProp: "Packaging that survives FBA testing and still delivers an unboxing worth photographing.",
    problem: "Packaging designed for retail shelves fails Amazon's drop tests, inflates dimensional fees, and drives damage returns.",
    audience: ["Private-label brands", "Brands moving from retail into FBA", "Sourcing clients finalising first production run"],
    timeline: "3–4 weeks including dieline and print-ready artwork.",
    excluded: ["Printing and production costs", "Factory tooling fees", "Regulatory label approval in each market"],
  },
  "digital-marketing": {
    valueProp: "Demand generation tied to a defensible TACOS target rather than vanity ROAS.",
    problem: "Ad spend scales faster than contribution margin because campaigns are managed on channel metrics instead of the brand P&L.",
    audience: ["Brands already live and needing growth", "Sellers with plateauing organic rank", "Teams launching in a new market"],
    timeline: "Onboarding in 2 weeks, then a rolling monthly cycle.",
    excluded: ["Ad budget itself", "Influencer contracts and fees", "Long-form video production"],
  },
  "amazon-product-sourcing": {
    valueProp: "Vetted suppliers, verified samples and landed-cost clarity before you commit capital.",
    problem: "First-time sourcing usually means overpaying, over-ordering, and discovering quality problems only after the container lands.",
    audience: ["First-time entrepreneurs", "Brands adding SKUs", "Sellers switching away from an unreliable factory"],
    timeline: "4–8 weeks including sampling and inspection.",
    excluded: ["Goods, freight and duty costs", "Customs brokerage", "Product liability insurance"],
  },
  "amazon-private-label": {
    valueProp: "A full private-label programme from category selection to a live, ranking listing.",
    problem: "Private label fails when product choice is driven by trend lists instead of margin maths and defensibility.",
    audience: ["Investors entering ecommerce", "Businesses diversifying revenue", "Sellers scaling past one SKU"],
    timeline: "12–16 weeks from category lock to launch.",
    excluded: ["Inventory purchase", "Trademark registration fees", "Amazon seller subscription and referral fees"],
  },
  "micro-private-label": {
    valueProp: "A lower-capital route into private label — smaller MOQs, faster validation.",
    problem: "Traditional private label demands large first orders, which locks new sellers into an unproven product.",
    audience: ["Budget-conscious first-time sellers", "Brands testing a new category", "Side-business operators"],
    timeline: "8–10 weeks to first live listing.",
    excluded: ["Full custom tooling", "Bespoke formulation", "Large-scale media budgets"],
  },
  "amazon-wholesale": {
    valueProp: "A compliant wholesale operation with real supplier relationships and clean buy-box economics.",
    problem: "Most wholesale accounts stall at supplier approval, or scale into unprofitable SKUs with too many competing sellers.",
    audience: ["Operators wanting faster cash cycles", "Businesses with existing distribution ties", "Sellers hedging private-label risk"],
    timeline: "6–8 weeks to first approved supplier orders.",
    excluded: ["Purchase of stock", "Prep-centre fees", "Brand-gating appeals we cannot legally support"],
  },
  "brand-registry": {
    valueProp: "Brand Registry enrolment plus the protection tooling most sellers never switch on.",
    problem: "Without Brand Registry you cannot run A+ content, Brand Stores or Sponsored Brands — and hijackers can edit your listings.",
    audience: ["Brands with a filed or registered trademark", "Sellers facing listing hijackers", "Businesses expanding to new marketplaces"],
    timeline: "1–2 weeks once the trademark is eligible.",
    excluded: ["Trademark filing and attorney fees", "Litigation or formal IP disputes", "Amazon's own review timelines"],
  },
  "amazon-brand-launch": {
    valueProp: "A structured launch window with phased media, review seeding and rank targets.",
    problem: "Launches stall because catalogue, creative, inventory and media are sequenced badly — burning budget before rank builds.",
    audience: ["Brands entering a new marketplace", "New SKU launches", "Rebrands relaunching an existing catalogue"],
    timeline: "A 12-week launch window across three phases.",
    excluded: ["Ad budget", "Inventory and FBA fees", "Vine unit costs"],
  },
  "company-setup": {
    valueProp: "The legal, tax and banking foundation required to sell compliantly from the UAE.",
    problem: "Sellers start on personal accounts or the wrong licence type and hit account verification blocks later.",
    audience: ["Founders relocating to the UAE", "International brands needing a GCC entity", "Sellers formalising an existing operation"],
    timeline: "2–6 weeks depending on free zone and visa needs.",
    excluded: ["Government and licence fees", "Legal or tax advice (we coordinate licensed advisors)", "Visa medical and Emirates ID costs"],
  },
};

export function getServiceDetail(s: Service): ServiceDetail {
  return (
    serviceDetails[s.slug] ?? {
      valueProp: s.short,
      problem: `Brands often approach ${s.title.toLowerCase()} without a clear plan, which slows launches and inflates cost.`,
      audience: ["Brands entering marketplaces", "Established sellers scaling", "Founders needing an execution partner"],
      timeline: "Typically 3–6 weeks depending on scope.",
      excluded: ["Third-party fees", "Media budgets", "Legal filings"],
    }
  );
}

/* ─────────────── MARKETPLACES ─────────────── */

export type MarketplaceDetail = {
  sellerProfile: string[];
  registration: string[];
  localisation: string[];
  fulfilment: string[];
  tax: string[];
  challenges: string[];
  launchProcess: { step: string; description: string }[];
  faq: { q: string; a: string }[];
};

export function getMarketplaceDetail(m: Marketplace): MarketplaceDetail {
  const isNoon = m.code.includes("noon");
  const platform = isNoon ? "Noon" : "Amazon";
  const arabic = m.language.toLowerCase().includes("arabic");

  return {
    sellerProfile: [
      `Brands with a defensible margin after ${m.currency} pricing, ${platform} fees and returns.`,
      `Teams able to hold stock in or ship reliably into ${m.name}.`,
      arabic
        ? "Sellers willing to invest in Arabic-first content, not machine translation."
        : `Sellers able to publish native ${m.language} content and support.`,
      "Operators who can answer buyer messages within local business hours.",
    ],
    registration: [
      `Create a ${platform} seller account with access to the ${m.code} storefront.`,
      ...m.requirements,
      "Complete identity, address and bank verification before listing.",
      "Enrol in Brand Registry (or the equivalent brand programme) once your trademark is eligible.",
    ],
    localisation: [
      `Titles, bullets and A+ content written natively in ${m.language}.`,
      `Pricing set in ${m.currency} against local competitor benchmarks, not converted from your home market.`,
      "Imagery and lifestyle context matched to local buyer expectations.",
      "Local customer-service coverage and a returns address buyers trust.",
    ],
    fulfilment: [
      `${platform} fulfilment (FBA or equivalent) for fastest delivery promise in ${m.name}.`,
      "Merchant-fulfilled as a fallback while stock is inbound or for oversized SKUs.",
      "Cross-border shipping where a local entity is not yet in place.",
      "A local return path — the single biggest driver of buyer confidence.",
    ],
    tax: [
      `Registration and filing obligations in ${m.name} depend on your entity, turnover and stock location.`,
      "Import duty, customs clearance and product compliance must be confirmed before your first shipment.",
      "Marketplace-collected tax rules differ per market and change frequently.",
      "This is general information only, not legal or tax advice — always confirm with a licensed advisor in the market.",
    ],
    challenges: [
      arabic
        ? "Under-investing in Arabic content, which suppresses conversion versus local competitors."
        : "Publishing translated rather than localised content, which reads as foreign to buyers.",
      `Pricing imported from another market without accounting for ${m.currency} expectations and local fee structures.`,
      "Running out of stock during launch and losing hard-won organic rank.",
      "Compliance and documentation gaps that stall account or listing approval.",
    ],
    launchProcess: [
      { step: "Market fit", description: `Validate category demand, pricing and margin for ${m.name} before you commit inventory.` },
      { step: "Account & compliance", description: `Set up the ${platform} account, entity and documentation required for ${m.code}.` },
      { step: "Localised catalogue", description: `Build ${m.language} listings, imagery and A+ content built for local buyers.` },
      { step: "Logistics", description: "Choose the fulfilment model, plan inbound stock and set up the returns path." },
      { step: "Launch media", description: "Phase sponsored campaigns against a defined TACOS target to build rank." },
      { step: "Scale", description: "Weekly reporting, range expansion and margin optimisation once rank stabilises." },
    ],
    faq: [
      {
        q: `Do I need a local company to sell on ${m.code}?`,
        a: `Not always. Many brands start cross-border and add a local entity once volume justifies it. The requirements for ${m.name} are listed above — we confirm your exact path during the discovery call.`,
      },
      {
        q: `How long does a ${m.name} launch take?`,
        a: "Typically 8–12 weeks from kickoff to a live, promoted catalogue — faster if your brand assets and compliance documents are already in place.",
      },
      {
        q: `Do you handle ${m.language} content?`,
        a: `Yes. We produce native ${m.language} titles, bullets, A+ content and ad copy — written for local buyers rather than translated.`,
      },
      {
        q: "Can you manage this market alongside our others?",
        a: "Yes. We operate 22 marketplaces — 20 Amazon and 2 Noon — with one team and one reporting cadence.",
      },
    ],
  };
}

/* ─────────────── BLOG ─────────────── */

export const blogAuthor = { name: "Ecomtik Editorial Team", role: "Brand & Amazon Growth, Dubai" };

const blogHeadings: Record<string, string[]> = {
  "how-to-launch-on-amazon-uae-2026": ["Why 2026 is different", "Get the paperwork right first", "Build bilingual from day one", "A twelve-week launch window", "Seed reviews early"],
  "amazon-ksa-vs-uae-which-first": ["The real deciding factor", "The case for Amazon.ae", "The case for Amazon.sa", "Our recommendation"],
  "tacos-target-setting-guide": ["Why TACOS beats ROAS", "The three inputs", "Modelling your ceiling", "Holding the target"],
  "amazon-a-plus-content-that-converts": ["The last underpriced surface", "Seven patterns that work", "Two patterns we dropped", "Test everything"],
  "packaging-for-fba": ["Frustration-Free is effectively mandatory", "The core requirements", "The design compromises"],
  "expanding-from-amazon-ae-to-eu": ["Why Europe is the highest-ROI move", "Compliance groundwork", "Localise, do not translate", "Start with the UK"],
  "amazon-brand-registry-explained": ["What Brand Registry unlocks", "Enrolment requirements", "The tooling you get", "Register in every market"],
  "sourcing-from-turkey-for-gcc-brands": ["Beyond the China default", "The advantages", "The trade-offs", "Who it suits"],
};

export function getBlogSections(p: BlogPost): { heading: string; body: string }[] {
  const headings = blogHeadings[p.slug] ?? [];
  return p.body.map((body, i) => ({
    heading: headings[i] ?? `Section ${i + 1}`,
    body,
  }));
}

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
