import Link from "next/link";
import type { Faq } from "@/content/faqs";
import { GENERAL_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { FaqList } from "../FaqList";
import { SectionHeading } from "../SectionHeading";
import { WhatsAppButton } from "../WhatsAppButton";

export function FaqSection({ faqs, showAllLink = true }: { faqs: Faq[]; showAllLink?: boolean }) {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section border-t border-line/70">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="faq-title"
            eyebrow="FAQs"
            title="Questions, answered"
            intro="Can't find what you are looking for? Send us a message — we are happy to help."
          />
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <WhatsAppButton message={GENERAL_WHATSAPP_MESSAGE} variant="outline">
              Ask on WhatsApp
            </WhatsAppButton>
            {showAllLink && (
              <Link href="/faq" className="text-sm font-semibold text-plum underline-offset-4 hover:text-rose hover:underline">
                All FAQs
              </Link>
            )}
          </div>
        </div>
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}
