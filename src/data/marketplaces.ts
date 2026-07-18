export type Marketplace = {
  slug: string;
  name: string;
  code: string; // e.g. amazon.ae
  flag: string; // emoji
  region: "GCC & MENA" | "Europe" | "North America" | "Asia Pacific" | "Latin America";
  currency: string;
  language: string;
  overview: string;
  opportunity: string[];
  requirements: string[];
  keywords: string;
};

export const marketplaces: Marketplace[] = [
  // GCC & MENA (5)
  { slug: "amazon-ae", name: "United Arab Emirates", code: "amazon.ae", flag: "🇦🇪", region: "GCC & MENA", currency: "AED", language: "English + Arabic", overview: "Our home market. Amazon.ae is the primary marketplace for premium DTC brands entering the GCC, with strong Prime penetration in the UAE.", opportunity: ["Premium price-tolerant audience", "Prime members: fast growing", "Cross-border demand from KSA + Kuwait", "Bilingual PDPs boost conversion"], requirements: ["UAE trade licence or FBA global", "VAT registration", "Local return address"], keywords: "sell on Amazon UAE, Amazon.ae agency, Amazon Dubai launch" },
  { slug: "amazon-sa", name: "Saudi Arabia", code: "amazon.sa", flag: "🇸🇦", region: "GCC & MENA", currency: "SAR", language: "Arabic + English", overview: "Largest ecommerce economy in the GCC. Amazon.sa has seen explosive growth since 2020 and is now the fastest-growing Amazon marketplace globally.", opportunity: ["Largest GCC population", "High mobile-first shopping", "Government Vision 2030 tailwinds", "Under-served premium segments"], requirements: ["KSA business setup or FBA global", "VAT registration", "Arabic-first content required"], keywords: "sell on Amazon Saudi Arabia, Amazon.sa launch, KSA ecommerce agency" },
  { slug: "amazon-eg", name: "Egypt", code: "amazon.eg", flag: "🇪🇬", region: "GCC & MENA", currency: "EGP", language: "Arabic + English", overview: "Amazon.eg (formerly Souq) is Egypt's largest marketplace with over 100 million potential customers. Currency dynamics make local-currency pricing critical.", opportunity: ["100M+ population", "Growing middle class", "Low competition in premium categories", "Local-currency pricing advantage"], requirements: ["Local entity or FBA cross-border", "VAT registration", "Arabic content required"], keywords: "sell on Amazon Egypt, Amazon.eg agency, Egypt ecommerce launch" },
  { slug: "noon-uae", name: "Noon UAE", code: "noon.com/uae", flag: "🇦🇪", region: "GCC & MENA", currency: "AED", language: "English + Arabic", overview: "Regional marketplace with strong presence in UAE. Complementary to Amazon.ae for reach and often better for local-first brands.", opportunity: ["Strong regional brand affinity", "Growing seller programme", "Category leaders in beauty + electronics"], requirements: ["Noon seller account", "Local return capability", "Competitive pricing model"], keywords: "sell on Noon, Noon UAE seller, Noon marketplace agency" },
  { slug: "noon-ksa", name: "Noon KSA", code: "noon.com/sa", flag: "🇸🇦", region: "GCC & MENA", currency: "SAR", language: "Arabic + English", overview: "Noon's Saudi arm rivals Amazon.sa in several key categories. Essential for full GCC coverage.", opportunity: ["Deep KSA logistics network", "Complementary to Amazon.sa", "Strong in fashion and beauty"], requirements: ["Noon KSA seller onboarding", "Local warehousing preferred"], keywords: "sell on Noon KSA, Noon Saudi Arabia seller" },

  // Europe (7)
  { slug: "amazon-uk", name: "United Kingdom", code: "amazon.co.uk", flag: "🇬🇧", region: "Europe", currency: "GBP", language: "English", overview: "Most mature Amazon market in Europe. High Prime penetration, sophisticated buyers and strong opportunity for premium GCC brands entering Europe.", opportunity: ["Highest Prime density in Europe", "Ideal English-first launch pad", "Sophisticated PDP + video expectations"], requirements: ["UK VAT (or EU IOSS)", "UPC/EAN barcodes", "UK return address"], keywords: "sell on Amazon UK, Amazon.co.uk agency, UK launch strategy" },
  { slug: "amazon-de", name: "Germany", code: "amazon.de", flag: "🇩🇪", region: "Europe", currency: "EUR", language: "German", overview: "Largest Amazon market in continental Europe. German-language content and packaging compliance are non-negotiable.", opportunity: ["Largest EU consumer base", "Willingness to pay for quality", "Strong subscribe-and-save adoption"], requirements: ["German VAT + EPR", "Fully translated content", "LUCID + WEEE registration where applicable"], keywords: "sell on Amazon Germany, Amazon.de agency, Germany ecommerce launch" },
  { slug: "amazon-fr", name: "France", code: "amazon.fr", flag: "🇫🇷", region: "Europe", currency: "EUR", language: "French", overview: "Second-largest EU marketplace. French-language content required and creative expectations are high.", opportunity: ["Large premium audience", "Cross-border via Pan-EU FBA", "Strong beauty + home categories"], requirements: ["French VAT + EPR", "French content", "EU rep for non-EU sellers"], keywords: "sell on Amazon France, Amazon.fr agency" },
  { slug: "amazon-it", name: "Italy", code: "amazon.it", flag: "🇮🇹", region: "Europe", currency: "EUR", language: "Italian", overview: "Fast-growing Amazon marketplace with strong opportunity in food, home and beauty categories.", opportunity: ["Growing Prime membership", "Under-served niches", "Cross-border shipping strong"], requirements: ["Italian VAT + EPR", "Italian content"], keywords: "sell on Amazon Italy, Amazon.it agency" },
  { slug: "amazon-es", name: "Spain", code: "amazon.es", flag: "🇪🇸", region: "Europe", currency: "EUR", language: "Spanish", overview: "Gateway to Spanish-speaking Europe and LATAM. Fast growth in health, beauty and home categories.", opportunity: ["Rapid ecommerce growth", "Bridges Europe + LATAM", "Strong beauty demand"], requirements: ["Spanish VAT + EPR", "Spanish content"], keywords: "sell on Amazon Spain, Amazon.es agency" },
  { slug: "amazon-nl", name: "Netherlands", code: "amazon.nl", flag: "🇳🇱", region: "Europe", currency: "EUR", language: "Dutch + English", overview: "Newer Amazon marketplace with lower competition — a quick win for brands with EU compliance already in place.", opportunity: ["Lower competition", "High disposable income", "English content often acceptable"], requirements: ["EU VAT + EPR", "Dutch content preferred"], keywords: "sell on Amazon Netherlands, Amazon.nl launch" },
  { slug: "amazon-se", name: "Sweden", code: "amazon.se", flag: "🇸🇪", region: "Europe", currency: "SEK", language: "Swedish + English", overview: "Small but affluent Nordic marketplace with strong appetite for premium brands.", opportunity: ["Premium buyers", "Under-served categories", "Growing Prime"], requirements: ["SE VAT", "Swedish content preferred"], keywords: "sell on Amazon Sweden, Amazon.se launch" },
  { slug: "amazon-pl", name: "Poland", code: "amazon.pl", flag: "🇵🇱", region: "Europe", currency: "PLN", language: "Polish", overview: "Fastest-growing Amazon marketplace in Europe by seller count. Central Europe hub for Pan-EU FBA.", opportunity: ["Large domestic audience", "Central EU logistics hub", "Low competition today"], requirements: ["PL VAT + EPR", "Polish content"], keywords: "sell on Amazon Poland, Amazon.pl launch" },

  // North America (2)
  { slug: "amazon-us", name: "United States", code: "amazon.com", flag: "🇺🇸", region: "North America", currency: "USD", language: "English", overview: "The world's largest Amazon marketplace. Competitive but the best proving ground for brands built to scale globally.", opportunity: ["Largest ecommerce economy", "Prime + DSP + AMC full stack", "Access to US retail media"], requirements: ["US entity or FBA global", "US sales tax setup", "UPC/EAN and FDA/FCC where applicable"], keywords: "sell on Amazon US, Amazon.com launch agency, US ecommerce" },
  { slug: "amazon-ca", name: "Canada", code: "amazon.ca", flag: "🇨🇦", region: "North America", currency: "CAD", language: "English + French", overview: "North America's second-largest Amazon marketplace. Bilingual content required in Quebec.", opportunity: ["Prime membership growing", "English + French bilingual reach", "Strong cross-border from US"], requirements: ["Canadian tax numbers", "Bilingual content for Quebec"], keywords: "sell on Amazon Canada, Amazon.ca launch" },

  // Asia Pacific (5)
  { slug: "amazon-jp", name: "Japan", code: "amazon.co.jp", flag: "🇯🇵", region: "Asia Pacific", currency: "JPY", language: "Japanese", overview: "Second-largest Amazon marketplace globally. Native Japanese content and packaging are essential.", opportunity: ["Highest AOV in Asia", "Strong subscribe rate", "Premium beauty + F&B demand"], requirements: ["Japan tax registration", "Native Japanese content", "Local return address"], keywords: "sell on Amazon Japan, Amazon.co.jp launch agency" },
  { slug: "amazon-sg", name: "Singapore", code: "amazon.sg", flag: "🇸🇬", region: "Asia Pacific", currency: "SGD", language: "English", overview: "English-first Asian marketplace and gateway to SEA. Strong purchasing power and Prime penetration.", opportunity: ["APAC launch pad", "English content works", "High disposable income"], requirements: ["Singapore GST", "Local return capability"], keywords: "sell on Amazon Singapore, Amazon.sg launch" },
  { slug: "amazon-au", name: "Australia", code: "amazon.com.au", flag: "🇦🇺", region: "Asia Pacific", currency: "AUD", language: "English", overview: "Growing marketplace with strong opportunity for premium brands and lower competition than US/UK.", opportunity: ["Lower competition", "Premium buyers", "Cross-border from Asia"], requirements: ["Australian GST", "Local return address"], keywords: "sell on Amazon Australia, Amazon.com.au launch" },
  { slug: "amazon-in", name: "India", code: "amazon.in", flag: "🇮🇳", region: "Asia Pacific", currency: "INR", language: "English + Hindi", overview: "One of Amazon's most strategic global marketplaces. Requires local entity and unique catalog approach.", opportunity: ["Massive scale", "Fastest-growing Prime market", "Government made-in-India tailwinds"], requirements: ["Indian entity + GST", "Local warehousing", "Price-tier product strategy"], keywords: "sell on Amazon India, Amazon.in launch agency" },
  { slug: "amazon-tr", name: "Turkey", code: "amazon.com.tr", flag: "🇹🇷", region: "Asia Pacific", currency: "TRY", language: "Turkish", overview: "Bridge market between Europe and MENA. Strong for GCC brands sourcing from Turkey.", opportunity: ["Bridge to MENA sourcing", "Growing middle class", "Under-served premium"], requirements: ["Turkish tax setup", "Turkish content"], keywords: "sell on Amazon Turkey, Amazon.com.tr launch" },

  // Latin America (2)
  { slug: "amazon-mx", name: "Mexico", code: "amazon.com.mx", flag: "🇲🇽", region: "Latin America", currency: "MXN", language: "Spanish", overview: "Largest Amazon marketplace in Latin America. Complements US operations with NAFTA logistics.", opportunity: ["Latin America gateway", "NAFTA logistics", "Growing Prime membership"], requirements: ["Mexican RFC + IVA", "Spanish content", "Local return address"], keywords: "sell on Amazon Mexico, Amazon.com.mx launch" },
  { slug: "amazon-br", name: "Brazil", code: "amazon.com.br", flag: "🇧🇷", region: "Latin America", currency: "BRL", language: "Portuguese", overview: "South America's largest ecommerce economy. Amazon Brazil has grown rapidly since 2020.", opportunity: ["Largest LATAM population", "Rapid ecommerce growth", "Under-served premium"], requirements: ["Brazilian CNPJ", "Portuguese content", "Local warehousing"], keywords: "sell on Amazon Brazil, Amazon.com.br launch" },
];

export const regions = [
  "GCC & MENA",
  "Europe",
  "North America",
  "Asia Pacific",
  "Latin America",
] as const;

export const marketplacesByRegion = regions.map((r) => ({
  region: r,
  items: marketplaces.filter((m) => m.region === r),
}));

export const getMarketplace = (slug: string) => marketplaces.find((m) => m.slug === slug);
