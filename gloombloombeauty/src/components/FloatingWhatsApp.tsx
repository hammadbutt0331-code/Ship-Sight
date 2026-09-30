import { site } from "@/content/site";
import { GENERAL_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

/**
 * Always-visible WhatsApp button.
 * Mobile: compact round button, lifted above the phone's home bar.
 * Desktop: labelled pill in the bottom-right corner.
 */
export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact">
      <a
        href={whatsappLink(GENERAL_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${site.name} on WhatsApp`}
        className="group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex items-center gap-2.5 rounded-full bg-rose p-3.5 text-white shadow-[0_14px_40px_-10px_rgba(58,42,51,0.55)] ring-4 ring-porcelain/70 transition-all duration-300 ease-(--ease-soft) hover:-translate-y-0.5 hover:bg-rose-deep md:right-6 md:bottom-6 md:py-3 md:pr-5 md:pl-4"
      >
        <WhatsAppIcon className="size-6" />
        <span className="hidden text-sm font-semibold tracking-wide md:inline">Chat with us</span>
      </a>
    </aside>
  );
}
