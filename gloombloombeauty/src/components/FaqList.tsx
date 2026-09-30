import type { Faq } from "@/content/faqs";
import { PlusIcon } from "./Icons";
import { Placeholder } from "./Placeholder";

/**
 * FAQ accordion built on native <details>/<summary>:
 * keyboard and screen-reader friendly with zero JavaScript.
 */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="group/faq">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="font-serif text-xl leading-snug text-plum md:text-2xl">{faq.question}</span>
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-rose transition-transform duration-300 group-open/faq:rotate-45">
              <PlusIcon className="size-4" />
            </span>
          </summary>
          <div className="max-w-2xl pr-12 pb-7 leading-relaxed text-plum-soft">
            {faq.answer ? (
              <p>{faq.answer}</p>
            ) : (
              <div className="flex flex-col items-start gap-3">
                <Placeholder label="Answer to be added" />
                <p className="text-sm">In the meantime, please ask us directly on WhatsApp.</p>
              </div>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
