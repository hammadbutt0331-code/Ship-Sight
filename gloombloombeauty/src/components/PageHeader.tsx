import type { ReactNode } from "react";
import Link from "next/link";

type Crumb = { label: string; href?: string };

/** Title block used at the top of inner pages. */
export function PageHeader({ eyebrow, title, intro, breadcrumbs }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; breadcrumbs?: Crumb[] }) {
  return (
    <div className="border-b border-line/70 bg-oat/60">
      <div className="container-page pt-10 pb-14 md:pt-14 md:pb-20">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && <p className="eyebrow mt-8">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.02] text-plum md:text-6xl lg:text-7xl">{title}</h1>
        {intro && <div className="mt-6 max-w-xl text-base leading-relaxed text-plum-soft md:text-lg">{intro}</div>}
      </div>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-plum-soft">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="underline-offset-4 hover:text-rose hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-plum">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
