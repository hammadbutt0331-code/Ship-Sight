# GloomBloomBeauty — Website

A premium, mobile-first skincare website where customers order through **WhatsApp**
(no cart, checkout or accounts).

Built with Next.js, TypeScript and Tailwind CSS.

---

## Updating content (no coding knowledge needed)

All text you are likely to change lives in **`src/content/`**. You never need to touch the design files.

| What you want to change | File |
|---|---|
| WhatsApp number, email, location, social links, hero photo | `src/content/site.ts` |
| Products (name, description, benefits, how to use, ingredients, size, price…) | `src/content/products.ts` |
| FAQ questions and answers | `src/content/faqs.ts` |
| Customer reviews (real ones only) | `reviews` list at the bottom of `src/content/site.ts` |

**Placeholders:** anything left empty (`""` or `[]`) shows a dashed pink
“to be added” label on the website. Fill it in and the label disappears automatically.

### Setting the WhatsApp number

In `src/content/site.ts`:

```ts
whatsappNumber: "923001234567",      // 92 + number without the leading 0
phoneDisplay: "+92 300 1234567",     // how it is shown to visitors
```

Every WhatsApp button on the site will use it, with a pre-filled message such as:
*“Hi GloomBloomBeauty, I am interested in Radiance Serum. Please share the price and order details.”*

### Adding product photos

1. Put the photo in `public/products/` (e.g. `public/products/radiance-serum.jpg`).
   Use JPG or WebP, around 1600px tall. The website automatically creates smaller, faster versions.
2. In `src/content/products.ts`, add to the product:

```ts
image: { src: "/products/radiance-serum.jpg", alt: "GloomBloomBeauty Radiance Serum bottle" },
```

Extra photos can go in `gallery: [ ... ]` using the same format.

### Adding a product

Copy one product block in `src/content/products.ts`, change the `slug` (used in the web
address, e.g. `vitamin-c-serum`) and fill in the details. The product automatically
appears on the homepage, the products page, the footer and the sitemap.

---

## Running the site on a computer

```bash
npm install
npm run dev        # preview at http://localhost:3000
npm run build      # production build (also checks for errors)
```

## Publishing (recommended: Vercel, free)

1. Create an account at vercel.com and import this repository.
2. Set **Root Directory** to `gloombloombeauty`.
3. Add an environment variable `NEXT_PUBLIC_SITE_URL` with your final address,
   e.g. `https://www.gloombloombeauty.pk` (used for Google and social-share links).
4. Deploy. Every future change you push is published automatically.

---

## Project structure

```
src/
  content/        ← all editable text and product information
  app/            ← pages (home, products, product detail, about, faq, contact)
  components/     ← reusable design pieces (buttons, cards, header, footer…)
    sections/     ← homepage sections
  lib/whatsapp.ts ← builds the WhatsApp links and messages
public/products/  ← product photos
```
