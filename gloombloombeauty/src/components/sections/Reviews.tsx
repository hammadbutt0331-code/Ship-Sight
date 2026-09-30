import { reviews } from "@/content/site";
import { SectionHeading } from "../SectionHeading";

/** Shows real reviews from src/content/site.ts, or a clearly marked placeholder. */
export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="section">
      <div className="container-page">
        <SectionHeading id="reviews-title" eyebrow="Customer reviews" title="Kind words from our customers" align="center" />

        {reviews.length === 0 ? (
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-dashed border-rose/45 bg-blush/50 px-6 py-14 text-center">
            <p className="font-serif text-2xl text-plum md:text-3xl">Customer reviews will be added here.</p>
            <p className="mt-3 text-sm text-plum-soft">Only genuine reviews shared with permission will be displayed.</p>
          </div>
        ) : (
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li key={review.quote}>
                <figure className="flex h-full flex-col rounded-3xl bg-oat p-8">
                  <span aria-hidden="true" className="font-serif text-6xl leading-none text-rose">
                    “
                  </span>
                  <blockquote className="mt-2 flex-1 font-serif text-xl leading-snug text-plum">{review.quote}</blockquote>
                  <figcaption className="mt-6 border-t border-plum/10 pt-4 text-sm">
                    <span className="font-semibold text-plum">{review.name}</span>
                    {review.city && <span className="text-plum-soft">, {review.city}</span>}
                    {review.product && <span className="mt-1 block text-xs text-rose-deep">{review.product}</span>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
