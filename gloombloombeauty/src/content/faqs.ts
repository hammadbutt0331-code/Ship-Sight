/**
 * ─────────────────────────────────────────────────────────────
 *  GloomBloomBeauty — FAQs
 *  Leave answer as "" to show a "to be added" placeholder.
 *  Set onHomepage: true to also show the question on the homepage.
 * ─────────────────────────────────────────────────────────────
 */

export type Faq = { question: string; answer: string; onHomepage?: boolean };

export const faqs: Faq[] = [
  {
    question: "How can I order?",
    answer:
      "Choose the product you like and tap any “Order on WhatsApp” button. A message opens with the product name already filled in — just send it, and our team will reply with the price and order details.",
    onHomepage: true,
  },
  {
    // ⚠️ PLACEHOLDER — waiting for delivery coverage information.
    question: "Do you deliver across Pakistan?",
    answer: "",
    onHomepage: true,
  },
  {
    question: "How can I contact GloomBloomBeauty?",
    answer:
      "The quickest way to reach us is WhatsApp. Tap “Chat on WhatsApp” anywhere on this website to start a conversation with our team.",
    onHomepage: true,
  },
  {
    question: "How should I use the products?",
    answer:
      "Each product page has a “How to use” section. If you are unsure about anything, message us on WhatsApp before you start.",
    onHomepage: true,
  },
  {
    // ⚠️ PLACEHOLDER — waiting for product suitability information.
    question: "Which product is suitable for my skin?",
    answer: "",
    onHomepage: true,
  },
  {
    // ⚠️ PLACEHOLDER — waiting for payment methods.
    question: "What payment methods are available?",
    answer: "",
    onHomepage: true,
  },
  {
    // ⚠️ PLACEHOLDER — waiting for delivery process, timing and charges.
    question: "What is the delivery process?",
    answer: "",
    onHomepage: true,
  },
];
