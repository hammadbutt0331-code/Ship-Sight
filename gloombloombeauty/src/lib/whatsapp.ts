import { site } from "@/content/site";

export const GENERAL_WHATSAPP_MESSAGE = `Hi ${site.name}, I would like help choosing the right skincare products.`;

export function productWhatsAppMessage(productName: string) {
  return `Hi ${site.name}, I am interested in ${productName}. Please share the price and order details.`;
}

/**
 * Builds a WhatsApp link with a pre-filled message.
 * Until the official number is added in src/content/site.ts, the link
 * opens WhatsApp's contact picker with the message ready to send.
 */
export function whatsappLink(message: string = GENERAL_WHATSAPP_MESSAGE) {
  const number = site.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const hasWhatsAppNumber = site.whatsappNumber.replace(/\D/g, "").length > 0;
