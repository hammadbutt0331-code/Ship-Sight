import { GENERAL_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { SectionHeading } from "../SectionHeading";
import { WhatsAppButton } from "../WhatsAppButton";

const steps = [
  { title: "Choose your product", text: "Browse the collection and pick what suits your routine." },
  { title: "Tap WhatsApp", text: "Press any WhatsApp button — your message is written for you." },
  { title: "Send your order", text: "Send the message and share your order details with us." },
  { title: "We confirm your order", text: "GloomBloomBeauty replies to confirm your order and next steps." },
];

export function HowToOrder({ id = "how-to-order" }: { id?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="section bg-blush/60">
      <div className="container-page">
        <SectionHeading
          id={`${id}-title`}
          eyebrow="How to order"
          title="Ordering is as easy as sending a message"
          intro="No accounts, no checkout forms — just a simple conversation."
          align="center"
        />

        <ol className="relative mt-14 grid gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 rounded-2xl bg-porcelain p-6 lg:flex-col lg:gap-8 lg:p-8">
              <span className="font-serif text-5xl leading-none text-rose lg:text-6xl">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-2xl leading-tight text-plum">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-soft">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <WhatsAppButton message={GENERAL_WHATSAPP_MESSAGE} size="lg">
            Start Your Order
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
