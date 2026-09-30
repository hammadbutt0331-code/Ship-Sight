import Link from "next/link";
import { site } from "@/content/site";

/**
 * Temporary text wordmark.
 * Replace with the official logo file once provided, e.g.
 * <Image src="/logo.svg" alt="GloomBloomBeauty" width={180} height={40} />
 */
export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const color = tone === "dark" ? "text-plum" : "text-porcelain";
  return (
    <Link href="/" aria-label={`${site.name} — home`} className={`group inline-flex items-center gap-2 ${color} ${className}`}>
      <BloomMark className="size-7 text-rose transition-transform duration-700 ease-(--ease-soft) group-hover:rotate-45" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.35rem] font-semibold tracking-tight">GloomBloom</span>
        <span className="mt-0.5 text-[0.55rem] font-semibold tracking-[0.42em] uppercase opacity-80">Beauty</span>
      </span>
    </Link>
  );
}

export function BloomMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.3">
      <ellipse cx="16" cy="9.5" rx="4" ry="6.5" />
      <ellipse cx="16" cy="22.5" rx="4" ry="6.5" />
      <ellipse cx="9.5" cy="16" rx="6.5" ry="4" />
      <ellipse cx="22.5" cy="16" rx="6.5" ry="4" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
