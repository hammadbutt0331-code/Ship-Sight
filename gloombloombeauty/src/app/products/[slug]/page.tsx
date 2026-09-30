import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, getRelatedProducts, products } from "@/content/products";
import { site } from "@/content/site";
import { productWhatsAppMessage } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/PageHeader";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductCard } from "@/components/ProductCard";
import { ListOrPlaceholder, Placeholder, TextOrPlaceholder } from "@/components/Placeholder";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CtaBanner } from "@/components/CtaBanner";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  const description =
    product.shortDescription ||
    `${product.name} by ${site.name}. Ask for the price and order easily on WhatsApp — skincare for customers across Pakistan.`;
  return {
    title: `${product.name} in Pakistan`,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description,
      images: product.image ? [{ url: product.image.src, alt: product.image.alt }] : ["/opengraph-image"],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.slug);
  const message = productWhatsAppMessage(product.name);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${site.url}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${site.url}/products/${product.slug}` },
    ],
  };

  return (
    <>
      <div className="container-page pt-6 md:pt-10">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]} />
      </div>

      <article className="container-page grid gap-10 pt-6 pb-20 md:pt-10 lg:grid-cols-2 lg:gap-20 lg:pb-28">
        {/* Photography */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <ProductVisual
            product={product}
            priority
            sizes="(min-width: 1024px) 45vw, 92vw"
            backdrop="petal"
            arch
            className="aspect-[4/5] rounded-[1.75rem]"
          />
          {product.gallery && product.gallery.length > 0 && (
            <ul className="mt-4 grid grid-cols-4 gap-3">
              {product.gallery.map((image) => (
                <li key={image.src} className="relative aspect-square overflow-hidden rounded-xl bg-oat">
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 10vw, 22vw" className="object-cover" />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Details */}
        <div className="max-w-xl">
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-3 text-5xl leading-[1.02] text-plum md:text-6xl">{product.name}</h1>
          {product.price && <p className="mt-4 text-lg font-semibold text-plum">{product.price}</p>}

          <div className="mt-6 text-base leading-relaxed text-plum-soft md:text-lg">
            <TextOrPlaceholder text={product.introduction || product.shortDescription} label="Product introduction to be added" />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={message} size="lg" ariaLabel={`Order ${product.name} on WhatsApp`}>
              Order on WhatsApp
            </WhatsAppButton>
            <WhatsAppButton message={message} size="lg" variant="outline" showIcon={false} ariaLabel={`Get details about ${product.name} on WhatsApp`}>
              Get Product Details
            </WhatsAppButton>
          </div>
          {!product.price && <p className="mt-4 text-sm text-plum-soft">Message us for the latest price and order details.</p>}

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            <div className="bg-porcelain p-5">
              <dt className="eyebrow text-plum!">Size</dt>
              <dd className="mt-2 text-sm text-plum-soft">{product.size || <Placeholder label="To be added" />}</dd>
            </div>
            <div className="bg-porcelain p-5">
              <dt className="eyebrow text-plum!">Suitable for</dt>
              <dd className="mt-2 text-sm text-plum-soft">{product.suitableFor || <Placeholder label="To be added" />}</dd>
            </div>
          </dl>

          <div className="mt-12 divide-y divide-line border-y border-line">
            <DetailBlock title="Benefits">
              <ListOrPlaceholder items={product.benefits} label="Benefits to be added" />
            </DetailBlock>
            <DetailBlock title="How to use">
              <ListOrPlaceholder items={product.howToUse} label="Usage steps to be added" ordered />
            </DetailBlock>
            <DetailBlock title="Ingredients & information">
              <ListOrPlaceholder items={product.ingredients} label="Ingredients to be added" />
            </DetailBlock>
            <DetailBlock title="Important usage notes">
              <ListOrPlaceholder items={product.usageNotes} label="Usage notes to be added" />
            </DetailBlock>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="section border-t border-line/70 bg-oat/50">
          <div className="container-page">
            <p className="eyebrow">You may also like</p>
            <h2 id="related-title" className="mt-3 text-4xl text-plum md:text-5xl">
              Related products
            </h2>
            <ul className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <ProductCard product={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div className="pt-5">
        <CtaBanner />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-7">
      <h2 className="text-2xl text-plum">{title}</h2>
      <div className="mt-4 text-[0.95rem]">{children}</div>
    </section>
  );
}
