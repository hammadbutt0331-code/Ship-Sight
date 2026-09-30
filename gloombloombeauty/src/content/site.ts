/**
 * ─────────────────────────────────────────────────────────────
 *  GloomBloomBeauty — site settings
 *  Edit this file to update contact details and brand text.
 *  Anything left as an empty string ("") shows a clearly marked
 *  "to be added" placeholder on the website.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "GloomBloomBeauty",
  shortName: "GloomBloom",

  /** Public website address, e.g. "https://www.gloombloombeauty.pk" (no trailing slash). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  tagline: "Everyday skincare, beautifully simple.",
  description:
    "GloomBloomBeauty brings budget-friendly everyday skincare to women across Pakistan — thoughtfully presented and easy to order on WhatsApp.",

  /**
   * Official WhatsApp number in international format, digits only.
   * Example: "923001234567"  (92 = Pakistan, without the leading 0)
   * ⚠️ PLACEHOLDER — waiting for the official number.
   */
  whatsappNumber: "",

  /** Optional extra contact details. Leave "" to hide. */
  email: "",
  phoneDisplay: "",
  location: "",
  businessHours: "",

  /**
   * Optional main hero photo, e.g. { src: "/hero.jpg", alt: "GloomBloomBeauty products on a vanity" }.
   * Until set, the hero shows the drawn product illustrations.
   */
  heroImage: null as { src: string; alt: string } | null,

  /** Social links. Leave "" to hide. */
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },
} as const;

/** Main navigation. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

/** Customer reviews. Only add real reviews you have permission to publish. */
export type Review = { quote: string; name: string; city?: string; product?: string };
export const reviews: Review[] = [];
