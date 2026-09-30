import type { Metadata } from "next";
import { site } from "@/content/site";
import { GENERAL_WHATSAPP_MESSAGE, hasWhatsAppNumber } from "@/lib/whatsapp";
import { PageHeader } from "@/components/PageHeader";
import { Placeholder } from "@/components/Placeholder";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/Icons";
import { HowToOrder } from "@/components/sections/HowToOrder";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Chat with GloomBloomBeauty on WhatsApp for product help, prices and orders across Pakistan.",
  alternates: { canonical: "/contact" },
};

const socialLinks = [
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "TikTok", href: site.social.tiktok, Icon: TikTokIcon },
].filter((link) => link.href);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="We'd love to hear from you"
        intro="The fastest way to reach us is WhatsApp — for product questions, prices or to place an order."
      />

      <section aria-label="Contact options" className="section">
        <div className="container-page grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative isolate flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-plum p-8 text-porcelain md:p-12">
            <WhatsAppIcon className="pointer-events-none absolute -right-10 -bottom-10 -z-10 size-72 text-porcelain/[0.05]" />
            <div>
              <p className="eyebrow text-petal!">WhatsApp</p>
              <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Chat with GloomBloomBeauty</h2>
              <p className="mt-4 max-w-md leading-relaxed text-porcelain/75">
                Tell us what you are looking for and we will help you choose the right products.
              </p>
              {hasWhatsAppNumber && site.phoneDisplay && <p className="mt-6 font-serif text-2xl">{site.phoneDisplay}</p>}
              {!hasWhatsAppNumber && <Placeholder label="Official WhatsApp number to be added" className="mt-6" />}
            </div>
            <WhatsAppButton message={GENERAL_WHATSAPP_MESSAGE} size="lg" variant="light" className="mt-10 self-start">
              Chat on WhatsApp
            </WhatsAppButton>
          </div>

          <div className="rounded-[1.75rem] bg-oat p-8 md:p-12">
            <h2 className="text-3xl text-plum">Other details</h2>
            <dl className="mt-8 space-y-6 text-sm">
              <ContactRow label="Email" value={site.email} href={site.email ? `mailto:${site.email}` : undefined} />
              <ContactRow label="Location" value={site.location} />
              <ContactRow label="Hours" value={site.businessHours} />
              <div>
                <dt className="eyebrow text-plum!">Social media</dt>
                <dd className="mt-2">
                  {socialLinks.length > 0 ? (
                    <ul className="flex gap-2">
                      {socialLinks.map(({ label, href, Icon }) => (
                        <li key={label}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${site.name} on ${label}`}
                            className="grid size-11 place-items-center rounded-full border border-plum/20 text-plum transition-colors hover:border-rose hover:text-rose"
                          >
                            <Icon />
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Placeholder label="Social links to be added" />
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <HowToOrder />
    </>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <dt className="eyebrow text-plum!">{label}</dt>
      <dd className="mt-2 text-base text-plum-soft">
        {value ? (
          href ? (
            <a href={href} className="underline-offset-4 hover:text-rose hover:underline">
              {value}
            </a>
          ) : (
            value
          )
        ) : (
          <Placeholder label="To be added" />
        )}
      </dd>
    </div>
  );
}
