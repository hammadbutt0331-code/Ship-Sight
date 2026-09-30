"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/content/site";
import { GENERAL_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/whatsapp";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import { WhatsAppButton } from "./WhatsAppButton";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
      // Keep keyboard focus inside the open menu.
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-porcelain/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[0.82rem] font-medium tracking-wide transition-colors hover:text-rose after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-rose after:transition-transform after:duration-500 ${
                      active ? "text-plum after:scale-x-100" : "text-plum-soft after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <WhatsAppButton message={GENERAL_WHATSAPP_MESSAGE} size="sm">
              Order on WhatsApp
            </WhatsAppButton>
          </div>
          <a
            href={whatsappLink(GENERAL_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ${site.name} on WhatsApp`}
            className="grid size-11 place-items-center rounded-full text-rose sm:hidden"
          >
            <WhatsAppIcon className="size-6" />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-11 place-items-center rounded-full text-plum lg:hidden"
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-50 flex h-dvh flex-col bg-porcelain lg:hidden"
      >
        <div className="container-page flex h-16 items-center justify-between border-b border-line/70">
          <Logo />
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              menuButtonRef.current?.focus();
            }}
            className="grid size-11 place-items-center rounded-full text-plum"
          >
            <CloseIcon />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav aria-label="Mobile" className="container-page flex-1 overflow-y-auto pt-8">
          <ul className="divide-y divide-line/70">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-5 font-serif text-[2rem] text-plum aria-[current=page]:text-rose"
                >
                  {link.label}
                  <span className="font-sans text-xs text-plum-soft/60">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container-page pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <WhatsAppButton message={GENERAL_WHATSAPP_MESSAGE} size="lg" className="w-full">
            Chat With GloomBloomBeauty
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
