import { ProductIllustration } from "../ProductVisual";
import { SectionHeading } from "../SectionHeading";
import { ChatIcon, HeartIcon, LeafIcon, SunIcon, TagIcon } from "../Icons";

const reasons = [
  {
    title: "Budget-friendly options",
    text: "Skincare that feels special without stretching your budget.",
    Icon: TagIcon,
  },
  {
    title: "Carefully presented",
    text: "Every product is chosen and presented with care, so you know exactly what you are getting.",
    Icon: SunIcon,
  },
  {
    title: "For everyday skincare",
    text: "Simple essentials that fit easily into your daily routine.",
    Icon: LeafIcon,
  },
  {
    title: "Easy WhatsApp ordering",
    text: "No accounts, no checkout forms. Just send us a message to order.",
    Icon: ChatIcon,
  },
  {
    title: "Customer-focused support",
    text: "Not sure what to choose? Ask us and we will help you find the right products.",
    Icon: HeartIcon,
  },
];

export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="section bg-oat">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            id="why-title"
            eyebrow="Why GloomBloomBeauty"
            title={
              <>
                Skincare that is simple to <em className="text-rose">choose</em> and easy to order.
              </>
            }
          />
          <div className="relative mt-12 hidden aspect-[4/3] max-w-md overflow-hidden rounded-t-full rounded-b-3xl bg-petal lg:block">
            <div className="absolute inset-x-0 bottom-[8%] flex items-end justify-center">
              <ProductIllustration shape="pump" label="Body Care" className="-mr-4 h-auto w-[26%]" />
              <ProductIllustration shape="dropper" label="Serum" className="h-auto w-[30%]" />
            </div>
          </div>
        </div>

        <ol className="divide-y divide-plum/10 border-y border-plum/10">
          {reasons.map(({ title, text, Icon }, index) => (
            <li key={title} className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 py-7 md:grid-cols-[3rem_auto_1fr] md:items-start md:gap-x-6 md:py-9">
              <span className="hidden font-serif text-lg text-rose-deep md:block">{String(index + 1).padStart(2, "0")}</span>
              <span className="grid size-12 place-items-center rounded-full bg-porcelain text-rose md:size-14">
                <Icon />
              </span>
              <div>
                <h3 className="text-2xl leading-tight text-plum md:text-[1.7rem]">{title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-plum-soft">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
