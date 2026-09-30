import Link from "next/link";
import { products } from "@/content/products";
import { ProductCard } from "../ProductCard";
import { SectionHeading } from "../SectionHeading";
import { ArrowRightIcon } from "../Icons";

export function FeaturedProducts() {
  return (
    <section id="products" aria-labelledby="products-title" className="section">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          id="products-title"
          eyebrow="The collection"
          title="Our skincare essentials"
          intro="Simple products for your everyday routine. Tap any product to order or ask a question on WhatsApp."
        />
        <Link
          href="/products"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-plum underline-offset-4 hover:text-rose hover:underline"
        >
          View all products <ArrowRightIcon />
        </Link>
      </div>

      {/* Mobile: swipeable row with the next card peeking in. Tablet/desktop: grid. */}
      <ul
        aria-label="Products"
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:container-page sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <li key={product.slug} className="w-[78%] shrink-0 snap-start sm:w-auto">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
