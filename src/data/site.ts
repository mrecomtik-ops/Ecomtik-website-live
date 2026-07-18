export const site = {
  name: "Ecomtik",
  legal: "Ecomtik FZ-LLC",
  tagline: "Global Brands. Amazon Growth. Engineered in Dubai.",
  email: "mr.ecomtik@gmail.com",
  whatsapp: "+971561677408",
  whatsappDisplay: "+971 56 167 7408",
  phone: "+971561677408",
  address: {
    line1: "Al Kaabi Building",
    line2: "Al Karama, Dubai",
    country: "United Arab Emirates",
  },
  hours: [
    { d: "Sunday – Thursday", h: "9:00 – 18:00 GST" },
    { d: "Friday", h: "By appointment" },
    { d: "Saturday", h: "Closed" },
  ],
  socials: {
    linkedin: "https://linkedin.com/company/ecomtik",
    instagram: "https://instagram.com/ecomtik",
  },
  stats: {
    marketplaces: 21,
    servicesTrackA: 5,
    servicesTrackB: 6,
    brands: "40+",
    gmv: "$180M+",
  },
};

export const whatsappUrl = (msg = "Hi Ecomtik, I'd like to discuss my brand.") =>
  `https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(msg)}`;
