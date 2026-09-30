import { GENERAL_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { BloomMark } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-plum px-6 py-20 text-center md:rounded-[2.5rem] md:py-28 lg:py-32">
        {/* Soft decorative blooms */}
        <BloomMark className="pointer-events-none absolute -top-24 -left-24 -z-10 size-[22rem] text-porcelain/[0.06] md:size-[30rem]" />
        <BloomMark className="pointer-events-none absolute -right-28 -bottom-28 -z-10 size-[24rem] text-petal/10 md:size-[34rem]" />
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-[36rem] -translate-1/2 rounded-full bg-rose/25 blur-3xl" />

        <p className="eyebrow text-petal!">We are here to help</p>
        <h2 id="cta-title" className="mx-auto mt-5 max-w-3xl text-[2.6rem] leading-[1.05] text-porcelain md:text-6xl lg:text-7xl">
          Ready to find your GloomBloomBeauty <em className="text-petal">skincare routine?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-porcelain/75 md:text-lg">
          Talk to us on WhatsApp and get help choosing the right products.
        </p>
        <WhatsAppButton message={GENERAL_WHATSAPP_MESSAGE} size="lg" variant="light" className="mt-10">
          Chat on WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
