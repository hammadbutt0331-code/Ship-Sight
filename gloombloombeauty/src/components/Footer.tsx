import Link from "next/link";
import { navLinks, site } from "@/content/site";
import { products } from "@/content/products";
import { GENERAL_WHATSAPP_MESSAGE, hasWhatsAppNumber, whatsappLink } from "@/lib/whatsapp";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./Icons";
import { Placeholder } from "./Placeholder";

const socialLinks = [
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "TikTok", href: site.social.tiktok, Icon: TikTokIcon },
].filter((link) => link.href);

export function Footer() {
  return (
    <footer className="bg-plum pb-28 text-porcelain/80 lg:pb-10">
      <div className="container-page grid gap-12 pt-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10 lg:pt-20">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-porcelain/70">{site.description}</p>
          {socialLinks.length > 0 && (
            <ul className="mt-6 flex gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${label}`}
                    className="grid size-10 place-items-center rounded-full border border-porcelain/20 transition-colors hover:border-petal hover:text-petal"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <FooterColumn title="Explore">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-petal">
                {link.label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Products">
          {products.map((product) => (
            <li key={product.slug}>
              <Link href={`/products/${product.slug}`} className="transition-colors hover:text-petal">
                {product.name}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <li>
            <a
              href={whatsappLink(GENERAL_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-petal"
            >
              <WhatsAppIcon className="size-4" />
              {hasWhatsAppNumber && site.phoneDisplay ? site.phoneDisplay : "Chat on WhatsApp"}
            </a>
          </li>
          {!hasWhatsAppNumber && (
            <li>
              <Placeholder label="WhatsApp number to be added" />
            </li>
          )}
          {site.email && (
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-petal">
                {site.email}
              </a>
            </li>
          )}
          {site.location && <li>{site.location}</li>}
          {site.businessHours && <li>{site.businessHours}</li>}
        </FooterColumn>
      </div>

      <div className="container-page mt-16">
        <div className="flex flex-col gap-3 border-t border-porcelain/15 pt-6 text-xs text-porcelain/55 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Skincare for everyday routines, across Pakistan.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-petal uppercase">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}
