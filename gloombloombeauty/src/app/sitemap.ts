import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/about", "/faq", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const productPages = products.map((product) => ({
    url: `${site.url}/products/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...pages, ...productPages];
}
