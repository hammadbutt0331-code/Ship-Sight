# GloomBloomBeauty website — project memory

## Brand
- Brand name is **GloomBloomBeauty** (never "LumeCare" — that name appeared in the original brief by mistake).
- Budget-friendly skincare for women across Pakistan; premium, trustworthy presentation.
- Goal: get visitors to order/contact via **WhatsApp**. No cart, checkout, payment gateway or accounts.

## Strict content rules (from the owner)
Never invent: reviews, certifications, dermatologist/clinical claims, ingredients, percentages,
before/after results, guarantees, delivery promises, prices, WhatsApp number, social links.
Missing info → leave the field empty so the UI shows a dashed "to be added" placeholder, and ask the owner.
Reviews section shows "Customer reviews will be added here." until real reviews are supplied.

## Decisions made (owner may change)
- Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4; host on Vercel (root dir `gloombloombeauty`, env `NEXT_PUBLIC_SITE_URL`).
- Lives in `gloombloombeauty/` inside the Ship-Sight repo, branch `claude/gloombloombeauty-website-calsbv`.
- Palette: porcelain #faf6f1, oat #efe6dc, petal #e9cfcb, blush #f4e6e2, rose #a4626a (buttons),
  rose-deep #8a4d55 (small text — needed for AA contrast), plum #3a2a33 (text/dark sections), sage #8a9a86.
- Fonts: Cormorant Garamond (headings) + Manrope (body) via next/font.
- Floating WhatsApp button in brand rose; English only; product names kept as the owner wrote them.
- Temporary text wordmark logo + SVG product illustrations until real logo/photos arrive.

## Where things live
- Editable content: `src/content/site.ts` (WhatsApp number, contact, socials, hero image, reviews),
  `src/content/products.ts`, `src/content/faqs.ts`.
- WhatsApp links/messages: `src/lib/whatsapp.ts`. Product message:
  "Hi GloomBloomBeauty, I am interested in [PRODUCT]. Please share the price and order details."
- Placeholder products (names from the brief's keywords): Face Wash, Radiance Serum,
  Whitening Cream, Hand & Feet Whitening Cream — all details still empty.

## Still waiting on the owner
Logo, WhatsApp number, product photos + details (description, benefits, how to use, ingredients,
size, suitable for, usage notes), whether to show prices, delivery areas/time/charges,
payment methods, real reviews, social links.

## Checks before pushing
`npm run build` (also typechecks). Verified previously: no horizontal overflow at 390/768/1440px,
axe WCAG AA clean, all internal links 200, all WhatsApp messages correct.
Gotcha: `hidden` + a component that adds `inline-flex` conflicts — wrap in a `hidden sm:block` div instead.
