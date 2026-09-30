import Link from "next/link";
import { products } from "@/content/products";
import { productWhatsAppMessage } from "@/lib/whatsapp";
import { ProductVisual } from "../ProductVisual";
import { SectionHeading } from "../SectionHeading";
import { ListOrPlaceholder, TextOrPlaceholder } from "../Placeholder";
import { WhatsAppButton } from "../WhatsAppButton";
import { ArrowRightIcon } from "../Icons";

const backdrops = ["petal", "oat", "blush", "petal"] as const;

export function ProductShowcase() {
  return (
    <section aria-labelledby="showcase-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="showcase-title"
          eyebrow="In focus"
          title="Get to know each product"
          intro="What each product is for, and how to use it. Have a question? Ask us directly."
          align="center"
        />

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
          {products.map((product, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={product.slug}
                aria-labelledby={`showcase-${product.slug}`}
                className="group grid items-center gap-9 md:grid-cols-2 md:gap-14 lg:gap-24"
              >
                <Link
                  href={`/products/${product.slug}`}
                  tabIndex={-1}
                  aria-hidden="true"
                  className={`block overflow-hidden rounded-[1.75rem] ${reversed ? "md:order-2" : ""}`}
                >
                  <ProductVisual
                    product={product}
                    sizes="(min-width: 768px) 45vw, 92vw"
                    backdrop={backdrops[index % backdrops.length]}
                    arch
                    className="aspect-[4/5] rounded-[1.75rem] lg:aspect-[5/6]"
                  />
                </Link>

                <div className="max-w-lg">
                  <p className="flex items-center gap-4 font-serif text-lg text-rose-deep">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span aria-hidden="true" className="h-px w-10 bg-rose/50" />
                    <span className="eyebrow">{product.category}</span>
                  </p>
                  <h3 id={`showcase-${product.slug}`} className="mt-4 text-4xl leading-[1.05] text-plum md:text-5xl">
                    {product.name}
                  </h3>
                  <div className="mt-5 text-base leading-relaxed text-plum-soft md:text-lg">
                    <TextOrPlaceholder text={product.introduction || product.shortDescription} label="Description to be added" />
                  </div>

                  <div className="mt-8 grid gap-8 border-t border-line pt-8 sm:grid-cols-2">
                    <div>
                      <h4 className="eyebrow text-plum!">Benefits</h4>
                      <div className="mt-4 text-sm">
                        <ListOrPlaceholder items={product.benefits} label="Benefits to be added" />
                      </div>
                    </div>
                    <div>
                      <h4 className="eyebrow text-plum!">How to use</h4>
                      <div className="mt-4 text-sm">
                        <ListOrPlaceholder items={product.howToUse} label="Usage steps to be added" ordered />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <WhatsAppButton message={productWhatsAppMessage(product.name)} ariaLabel={`Ask about ${product.name} on WhatsApp`}>
                      Ask About This Product
                    </WhatsAppButton>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-plum underline-offset-4 hover:text-rose hover:underline"
                    >
                      Full details <span className="sr-only">for {product.name}</span>
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
