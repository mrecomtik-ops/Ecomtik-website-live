export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMins: number;
  date: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-to-launch-on-amazon-uae-2026",
    title: "How to Launch a Brand on Amazon UAE in 2026",
    excerpt: "A step-by-step launch playbook for DTC brands entering Amazon.ae — from trade licence to first PPC campaign.",
    category: "Launch",
    readMins: 8,
    date: "2026-06-18",
    body: [
      "Launching on Amazon.ae in 2026 is very different from launching in 2020. The marketplace has matured, Prime penetration is deeper, and the competitive bar for A+ content and PPC has moved sharply upward.",
      "Before you touch Seller Central, get the paperwork right. You need either a UAE trade licence with VAT registration, or you need to sell via Amazon Global FBA and route returns through a local partner. Skipping this step is the number-one reason launches stall in month two.",
      "On the catalog side, plan for bilingual PDPs from day one. A launch with English-only content will convert 30–40% worse in the GCC than one with Arabic parity. Build your imagery, A+ and Brand Store to switch cleanly between locales.",
      "For launch media, we recommend a twelve-week window with three phases: awareness (Sponsored Brands + Display), consideration (Sponsored Products against category keywords) and conversion (defensive brand and competitor conquest). Set a TACOS target upfront — usually 15–25% for launch — and hold to it.",
      "Finally, don't ignore reviews. Amazon Vine in the UAE is available and effective. Enrol as soon as Brand Registry is live, and seed 15–30 units per hero SKU in weeks 1–4.",
    ],
  },
  {
    slug: "amazon-ksa-vs-uae-which-first",
    title: "Amazon KSA vs UAE: Which Market Should You Launch First?",
    excerpt: "The trade-offs between Amazon.ae and Amazon.sa for premium consumer brands entering the GCC.",
    category: "Strategy",
    readMins: 6,
    date: "2026-05-22",
    body: [
      "Most brands entering the GCC ask the same question: should we launch in the UAE or Saudi Arabia first? The right answer depends less on marketplace size and more on your ability to execute Arabic-first content.",
      "Amazon.ae is easier operationally. English-first works, trade licences are quick, and logistics are mature. But the addressable audience is smaller — roughly 10M people vs KSA's 36M.",
      "Amazon.sa is larger and growing faster, but it demands more: full Arabic content, a Saudi-focused pricing strategy, and a partner who understands the local buyer's expectations around delivery speed and returns.",
      "Our recommendation for most premium brands: launch UAE first, prove unit economics in three months, then expand to KSA with bilingual content ready to go. You'll compound the learning and avoid burning cash on unproven creative in a bigger market.",
    ],
  },
  {
    slug: "tacos-target-setting-guide",
    title: "How to Set a TACOS Target You Can Actually Defend",
    excerpt: "A framework for setting Total Advertising Cost of Sales targets by category, lifecycle stage and P&L reality.",
    category: "PPC",
    readMins: 7,
    date: "2026-05-04",
    body: [
      "Vanity ROAS is the death of Amazon P&Ls. TACOS — Total Advertising Cost of Sales — is the metric that ties ad spend to total revenue, and it's the number your CFO will actually care about.",
      "The framework we use with clients has three inputs: contribution margin, lifecycle stage and category dynamics. High-margin, growth-stage products in defensible categories can tolerate 15–25% TACOS. Low-margin, mature products in commoditized categories need to sit at 5–10% or the P&L breaks.",
      "Start by modelling your unit economics with COGS, Amazon fees, storage, returns and creative amortization. What's left is your ceiling for ad spend. Divide by expected sessions and multiply out — that's your defensible TACOS target.",
      "Then hold to it weekly. TACOS discipline compounds: brands that hold a target through a full year almost always end with better organic rank, higher LTV and healthier margin than brands chasing ROAS spikes.",
    ],
  },
  {
    slug: "amazon-a-plus-content-that-converts",
    title: "Amazon A+ Content That Actually Moves Conversion",
    excerpt: "Seven A+ patterns we use across 40+ brands — and the two we've stopped using entirely.",
    category: "Creative",
    readMins: 5,
    date: "2026-04-11",
    body: [
      "A+ content is the last unfairly-priced surface on Amazon. It's free to build, materially lifts conversion, and yet most brands still ship generic modules that look like the seller template.",
      "The patterns that work: hero module with a single value prop, a comparison chart against your own SKUs (never competitors), infographic on the product's key mechanic, lifestyle scene with a real use case, ingredients or materials story, brand mission, and a subscribe-and-save CTA where available.",
      "The patterns we've stopped using: giant hero images with no product, and endless FAQ modules. Both increase load time and neither converts on mobile.",
      "Test aggressively. Use Amazon's built-in Manage Your Experiments to A/B test A+ variants and iterate quarterly.",
    ],
  },
  {
    slug: "packaging-for-fba",
    title: "Designing Packaging That Passes Amazon's FBA Tests",
    excerpt: "The technical requirements — and design compromises — for FBA-ready packaging.",
    category: "Brand",
    readMins: 6,
    date: "2026-03-20",
    body: [
      "Amazon's Frustration-Free Packaging programme has quietly become mandatory for most FBA sellers in premium categories. Failing it means higher returns, damage claims and Amazon's automatic re-packaging (which is ugly).",
      "The core requirements: right-sized boxes, no plastic clamshells, tear-strip openings, and dropped from 1m onto concrete without damage. Our packaging team designs to these constraints from the first sketch.",
      "The compromises: unboxing theatre is harder. You can still delight — through print, inserts and structural detail — but the outer box has to survive Amazon's tests. Build the delight inside the primary packaging, not the shipper.",
    ],
  },
  {
    slug: "expanding-from-amazon-ae-to-eu",
    title: "Expanding from Amazon.ae to Amazon Europe",
    excerpt: "The compliance, catalog and creative steps for GCC brands entering EU marketplaces.",
    category: "Expansion",
    readMins: 7,
    date: "2026-02-28",
    body: [
      "The jump from Amazon.ae to Europe is one of the highest-ROI moves a GCC brand can make — if the compliance groundwork is done right.",
      "You'll need EU VAT registration (via OSS or country-by-country), EPR (extended producer responsibility) in Germany and France at minimum, LUCID for German packaging, and translated content for each locale.",
      "On catalog, don't just translate — localize. A skincare hero image that works in Dubai often needs different lifestyle context for Berlin or Paris.",
      "Media-wise, we recommend UK as the launch market — English content works, buyers are sophisticated, and it de-risks EU expansion before you commit to full Pan-EU FBA.",
    ],
  },
  {
    slug: "amazon-brand-registry-explained",
    title: "Amazon Brand Registry Explained — What You Get and Why It Matters",
    excerpt: "The benefits, requirements and enrolment process for Amazon Brand Registry in 2026.",
    category: "Operations",
    readMins: 5,
    date: "2026-01-30",
    body: [
      "Brand Registry is the single biggest lever for controlling your ASINs on Amazon. Without it, you can't run A+ content, Brand Stores, Sponsored Brands ads, or use most brand-protection tooling.",
      "To enrol, you need a registered trademark in the marketplace you want to protect. Text or logo marks both qualify, and Amazon's IP Accelerator programme can shorten the timeline.",
      "Once enrolled, you unlock A+ content, Brand Stores, Sponsored Brands, Vine, Transparency codes, and Report a Violation for takedowns.",
      "For brands operating across multiple marketplaces, enrol Brand Registry in every market. The cost is a filed trademark; the benefit is control of your listings.",
    ],
  },
  {
    slug: "sourcing-from-turkey-for-gcc-brands",
    title: "Sourcing from Turkey for GCC Consumer Brands",
    excerpt: "Why Turkish suppliers are increasingly the smart choice for GCC brands scaling on Amazon.",
    category: "Sourcing",
    readMins: 6,
    date: "2026-01-08",
    body: [
      "China is still the default for most Amazon sellers, but Turkish suppliers have quietly become one of the best-kept secrets in GCC ecommerce.",
      "The advantages: proximity (5–10 day shipping to UAE vs 30+ from China), strong quality in textiles, cosmetics, home goods and food, and lower MOQs than most Chinese factories.",
      "The trade-offs: unit costs are typically 15–30% higher, and English communication with factories can be uneven. Work with a sourcing partner who has boots on the ground in Istanbul or Izmir.",
      "For most GCC brands scaling on Amazon.ae and Amazon.sa, Turkey is worth a serious look — especially for SKUs where speed to market and lower MOQs matter more than absolute unit cost.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
