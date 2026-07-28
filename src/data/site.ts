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
    instagram: "https://www.instagram.com/ecomtik/",
    tiktok: "https://www.tiktok.com/@ecomtikservices",
    facebook: "https://www.facebook.com/profile.php?id=61591697604837",
  },
  stats: {
    brands: "500+",
    marketplaces: 21,
    satisfaction: "98%",
    rating: "5★",
  },
};

export const whatsappUrl = (msg = "Hi Ecomtik, I'd like to book a free consultation.") =>
  `https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(msg)}`;

export const WHATSAPP_URL = whatsappUrl();
