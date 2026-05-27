// Central place to update contact info / branding across the site.

export const site = {
  name: "THAANA HARDWARE LIMITED",
  shortName: "THAANA HARDWARE",
  tagline: "Quality Building Materials Across Kenya",
  whatsappNumber: "254703840750", // wa.me uses no '+'
  phone: "+254 703 840 750",
  phoneAlt: "+254 704 118 502",
  email: "thaanahardware@gmail.com",
  address: "Ekalakala, Machakos County, Kenya",
  hours: "Mon – Sat · 7:30 AM – 6:00 PM",
};

export const categories = [
  "Cement & Concrete",
  "Steel & Reinforcement",
  "Roofing Materials",
  "Plumbing Materials",
  "Electrical Supplies",
  "Paint & Finishing",
  "Tools & Equipment",
  "Tiles & Flooring",
  "Timber & Lumber",
  "Hardware & Fasteners",
  "Safety Equipment",
  "Agricultural & Outdoor",
  "Glass & Aluminium",
  "Water & Sanitation",
];

export const whatsappLink = (text) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
