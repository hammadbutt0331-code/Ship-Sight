import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBanner } from "@/components/CtaBanner";
import { BloomMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GloomBloomBeauty is a budget-friendly skincare brand for women across Pakistan — everyday products, presented with care, and easy to order on WhatsApp.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Accessible",
    text: "We believe good-looking, well-presented skincare should be within reach — so we keep our range budget-friendly.",
  },
  {
    title: "Everyday",
    text: "Our products are made to fit into simple daily routines, without complicated steps.",
  },
  {
    title: "Personal",
    text: "Instead of a checkout page, you talk to a real team on WhatsApp who can help you choose.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow={`About ${site.name}`}
        title={
          <>
            Everyday skincare, <em className="text-rose">thoughtfully</em> presented.
          </>
        }
      />

      <section aria-labelledby="story-title" className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <BloomMark className="size-12 text-rose" />
            <h2 id="story-title" className="mt-6 text-4xl leading-tight text-plum md:text-5xl">
              Who we are
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-plum-soft">
            <p>
              {site.name} is a skincare brand for women across Pakistan. We focus on budget-friendly, everyday products
              and present them with the care you would expect from a premium brand.
            </p>
            <p>
              We keep things simple: clear product information, an easy way to discover what suits your routine, and
              ordering through a friendly WhatsApp conversation.
            </p>
          </div>
        </div>

        <ul className="container-page mt-16 grid gap-4 md:mt-24 md:grid-cols-3 md:gap-6">
          {values.map((value, index) => (
            <li key={value.title} className="rounded-3xl bg-oat p-8 md:p-10">
              <span className="font-serif text-lg text-rose-deep">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-3xl text-plum">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-plum-soft">{value.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <WhyUs />
      <div className="pt-5">
        <CtaBanner />
      </div>
    </>
  );
}
