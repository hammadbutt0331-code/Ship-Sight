import Link from "next/link";
import type { Product } from "@/content/products";
import { productWhatsAppMessage } from "@/lib/whatsapp";
import { ProductVisual } from "./ProductVisual";
import { Placeholder } from "./Placeholder";
import { WhatsAppButton } from "./WhatsAppButton";
import { ArrowRightIcon } from "./Icons";

export function ProductCard({ product, headingLevel = "h3" }: { product: Product; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const href = `/products/${product.slug}`;
  return (
    <article className="group relative flex h-full flex-col">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-2xl">
        <ProductVisual
          product={product}
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 78vw"
          backdrop="oat"
          arch
          className="aspect-[4/5] rounded-2xl"
        />
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow">{product.category}</p>
        <Heading className="mt-2 text-2xl leading-tight">
          <Link href={href} className="transition-colors hover:text-rose">
            {product.name}
          </Link>
        </Heading>

        <div className="mt-2 text-sm leading-relaxed text-plum-soft">
          {product.shortDescription ? <p>{product.shortDescription}</p> : <Placeholder label="Description to be added" />}
        </div>

        {product.benefits.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Key benefits">
            {product.benefits.slice(0, 3).map((benefit) => (
              <li key={benefit} className="rounded-full border border-line px-3 py-1 text-xs text-plum-soft">
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {product.price && <p className="mt-4 text-sm font-semibold text-plum">{product.price}</p>}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
          <WhatsAppButton message={productWhatsAppMessage(product.name)} size="sm" ariaLabel={`Order ${product.name} on WhatsApp`}>
            Order on WhatsApp
          </WhatsAppButton>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-plum underline-offset-4 hover:underline"
          >
            Details <span className="sr-only">about {product.name}</span>
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
