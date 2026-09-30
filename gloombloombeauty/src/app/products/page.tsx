import type { Metadata } from "next";
import { products } from "@/content/products";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Shop Skincare Products",
  description:
    "Browse GloomBloomBeauty skincare — face wash, radiance serum, whitening cream and hand & feet whitening cream. Order easily on WhatsApp anywhere in Pakistan.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        eyebrow="The collection"
        title="Shop our skincare"
        intro="Everyday essentials, presented with care. Choose a product and order in a single WhatsApp message."
      />
      <section aria-label="All products" className="section">
        <ul className="container-page grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </section>
      <HowToOrder />
      <div className="pt-5">
        <CtaBanner />
      </div>
    </>
  );
}
