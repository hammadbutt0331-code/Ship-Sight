import type { Metadata } from "next";
import { faqs } from "@/content/faqs";
import { PageHeader } from "@/components/PageHeader";
import { FaqList } from "@/components/FaqList";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about ordering GloomBloomBeauty skincare on WhatsApp, delivery in Pakistan, payment and product use.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const answered = faqs.filter((faq) => faq.answer);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answered.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
        eyebrow="Help"
        title="Frequently asked questions"
        intro="Everything you need to know about ordering. If your question is not here, message us on WhatsApp."
      />
      <section aria-label="Questions and answers" className="section">
        <div className="container-page max-w-4xl">
          <FaqList faqs={faqs} />
        </div>
      </section>
      <HowToOrder />
      <div className="pt-5">
        <CtaBanner />
      </div>
      {answered.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
    </>
  );
}
