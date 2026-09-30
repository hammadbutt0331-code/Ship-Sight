/**
 * ─────────────────────────────────────────────────────────────
 *  GloomBloomBeauty — products
 *  One entry per product. Only add information you can confirm.
 *  Empty text ("") or empty lists ([]) automatically show a
 *  "to be added" placeholder on the website — nothing breaks.
 *
 *  Photos: put files in /public/products/ and set
 *  image: { src: "/products/face-wash.jpg", alt: "..." }
 * ─────────────────────────────────────────────────────────────
 */

export type ProductImage = { src: string; alt: string };

/** Shape used for the drawn illustration shown until a real photo is added. */
export type ProductShape = "tube" | "dropper" | "jar" | "pump";

export type Product = {
  /** Used in the web address: /products/<slug> */
  slug: string;
  name: string;
  /** Short label shown above the name, e.g. "Cleanser". */
  category: string;
  /** One or two sentences for cards. */
  shortDescription: string;
  /** Longer introduction for the product page. */
  introduction: string;
  benefits: string[];
  howToUse: string[];
  ingredients: string[];
  size: string;
  suitableFor: string;
  usageNotes: string[];
  /** Optional. Leave "" to keep prices on WhatsApp only. */
  price: string;
  image?: ProductImage;
  gallery?: ProductImage[];
  placeholderShape: ProductShape;
};

// ⚠️ PLACEHOLDERS — names are based on the product types mentioned in the brief.
//    All other details are waiting for the owner's confirmed information.
export const products: Product[] = [
  {
    slug: "face-wash",
    name: "Face Wash",
    category: "Cleanser",
    shortDescription: "",
    introduction: "",
    benefits: [],
    howToUse: [],
    ingredients: [],
    size: "",
    suitableFor: "",
    usageNotes: [],
    price: "",
    placeholderShape: "tube",
  },
  {
    slug: "radiance-serum",
    name: "Radiance Serum",
    category: "Serum",
    shortDescription: "",
    introduction: "",
    benefits: [],
    howToUse: [],
    ingredients: [],
    size: "",
    suitableFor: "",
    usageNotes: [],
    price: "",
    placeholderShape: "dropper",
  },
  {
    slug: "whitening-cream",
    name: "Whitening Cream",
    category: "Face Cream",
    shortDescription: "",
    introduction: "",
    benefits: [],
    howToUse: [],
    ingredients: [],
    size: "",
    suitableFor: "",
    usageNotes: [],
    price: "",
    placeholderShape: "jar",
  },
  {
    slug: "hand-and-feet-whitening-cream",
    name: "Hand & Feet Whitening Cream",
    category: "Body Care",
    shortDescription: "",
    introduction: "",
    benefits: [],
    howToUse: [],
    ingredients: [],
    size: "",
    suitableFor: "",
    usageNotes: [],
    price: "",
    placeholderShape: "pump",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3) {
  return products.filter((product) => product.slug !== slug).slice(0, count);
}
