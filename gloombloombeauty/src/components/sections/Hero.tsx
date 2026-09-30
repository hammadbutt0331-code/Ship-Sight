import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { GENERAL_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { ProductIllustration } from "../ProductVisual";
import { WhatsAppButton, buttonClasses } from "../WhatsAppButton";
import { ChatIcon, LeafIcon, TagIcon } from "../Icons";

const trustPoints = [
  { label: "Budget-friendly skincare", Icon: TagIcon },
  { label: "Easy WhatsApp ordering", Icon: ChatIcon },
  { label: "Made for everyday routines", Icon: LeafIcon },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 right-0 -z-10 hidden h-full w-[42%] bg-oat lg:block" />

      <div className="container-page grid items-center gap-10 pt-10 pb-14 md:pt-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-16">
        <div className="max-w-xl">
          <p className="eyebrow">Skincare for women across Pakistan</p>
          <h1 id="hero-title" className="mt-5 text-[2.9rem] leading-[1.02] text-plum sm:text-6xl lg:text-[4.6rem]">
            Everyday skincare, <em className="text-rose">beautifully</em> within reach.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-plum-soft md:text-lg">
            Thoughtfully presented skincare at budget-friendly prices. Choose your products and simply order through
            WhatsApp — our team will help you with the rest.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton message={GENERAL_WHATSAPP_MESSAGE} size="lg">
              Shop on WhatsApp
            </WhatsAppButton>
            <Link href="#products" className={buttonClasses("outline", "lg")}>
              Explore Products
            </Link>
          </div>

          <ul className="mt-10 grid gap-4 border-t border-line pt-7 sm:grid-cols-3 sm:gap-6">
            {trustPoints.map(({ label, Icon }) => (
              <li key={label} className="flex items-center gap-3 text-[0.8rem] leading-snug font-medium text-plum-soft sm:flex-col sm:items-start sm:gap-2">
                <Icon className="size-6 shrink-0 text-rose" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  if (site.heroImage) {
    return (
      <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full rounded-b-3xl bg-petal lg:max-w-none">
        <Image src={site.heroImage.src} alt={site.heroImage.alt} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto aspect-[5/5.4] w-full max-w-[26rem] sm:max-w-md lg:max-w-[34rem]">
      {/* Arch backdrop */}
      <div aria-hidden="true" className="absolute inset-x-[8%] top-0 bottom-[6%] rounded-t-full rounded-b-[2rem] bg-petal" />
      <div aria-hidden="true" className="absolute inset-x-[16%] top-[7%] bottom-[6%] rounded-t-full border border-porcelain/70" />
      {/* Plinth */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[16%] rounded-[1.25rem] bg-porcelain shadow-[0_20px_50px_-30px_rgba(58,42,51,0.45)]" />

      <div
        role="img"
        aria-label="Illustration of GloomBloomBeauty skincare products (product photography coming soon)"
        className="absolute inset-x-0 bottom-[9%] flex items-end justify-center"
      >
        <ProductIllustration shape="tube" label="Cleanser" className="-mr-6 h-auto w-[30%] drop-shadow-[0_22px_24px_rgba(58,42,51,0.2)]" />
        <ProductIllustration shape="dropper" label="Serum" className="relative z-10 h-auto w-[40%] drop-shadow-[0_26px_28px_rgba(58,42,51,0.25)]" />
        <ProductIllustration shape="jar" label="Cream" className="-ml-6 h-auto w-[34%] drop-shadow-[0_22px_24px_rgba(58,42,51,0.2)]" />
      </div>

      <p className="absolute top-4 right-0 rounded-full border border-dashed border-rose/50 bg-porcelain/90 px-3 py-1 text-[0.65rem] font-semibold text-rose-deep">
        Hero photo coming soon
      </p>
    </div>
  );
}
