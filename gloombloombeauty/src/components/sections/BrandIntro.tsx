import Link from "next/link";
import { BloomMark } from "../Logo";
import { ArrowRightIcon } from "../Icons";

export function BrandIntro() {
  return (
    <section aria-labelledby="intro-title" className="section border-y border-line/70">
      <div className="container-page flex flex-col items-center text-center">
        <BloomMark className="size-10 text-rose" />
        <h2 id="intro-title" className="sr-only">
          About GloomBloomBeauty
        </h2>
        <p className="mt-8 max-w-4xl font-serif text-[1.9rem] leading-[1.25] text-plum md:text-[2.6rem] lg:text-5xl">
          GloomBloomBeauty is everyday skincare made simple — budget-friendly products,{" "}
          <em className="text-rose">presented with care</em>, and a friendly team one WhatsApp message away.
        </p>
        <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-3 text-xs font-semibold tracking-[0.18em] text-plum-soft uppercase sm:flex sm:justify-center">
          <li>Accessible</li>
          <li aria-hidden="true" className="hidden text-rose sm:block">·</li>
          <li>Everyday</li>
          <li aria-hidden="true" className="hidden text-rose sm:block">·</li>
          <li>Easy to discover</li>
          <li aria-hidden="true" className="hidden text-rose sm:block">·</li>
          <li>Customer-focused</li>
        </ul>
        <Link
          href="/about"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-plum underline-offset-4 hover:text-rose hover:underline"
        >
          More about us <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
