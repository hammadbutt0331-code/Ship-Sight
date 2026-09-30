import Image from "next/image";
import type { Product, ProductShape } from "@/content/products";

type Props = {
  product: Product;
  /** Responsive sizes hint for real photos, e.g. "(min-width: 1024px) 25vw, 80vw". */
  sizes: string;
  priority?: boolean;
  className?: string;
  backdrop?: "petal" | "oat" | "blush";
  arch?: boolean;
  showPlaceholderTag?: boolean;
};

const backdrops = {
  petal: "bg-petal/70",
  oat: "bg-oat",
  blush: "bg-blush",
};

/**
 * Shows the real product photo when one is set in src/content/products.ts.
 * Until then it draws a tasteful illustration so layouts can be reviewed,
 * and marks it clearly as a placeholder.
 */
export function ProductVisual({
  product,
  sizes,
  priority = false,
  className = "",
  backdrop = "oat",
  arch = false,
  showPlaceholderTag = true,
}: Props) {
  return (
    <div className={`relative isolate overflow-hidden ${backdrops[backdrop]} ${className}`}>
      {arch && (
        <div aria-hidden="true" className="absolute inset-x-[16%] top-[12%] bottom-0 -z-10 rounded-t-full bg-porcelain/55" />
      )}
      {product.image ? (
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-(--ease-soft) group-hover:scale-[1.04]"
        />
      ) : (
        <>
          <div className="absolute inset-0 flex items-end justify-center pb-[9%]">
            <ProductIllustration
              shape={product.placeholderShape}
              label={product.category}
              title={`${product.name} — illustration (product photo coming soon)`}
              className="h-[78%] w-auto drop-shadow-[0_24px_30px_rgba(58,42,51,0.18)] transition-transform duration-700 ease-(--ease-soft) group-hover:-translate-y-1.5"
            />
          </div>
          {showPlaceholderTag && (
            <span className="absolute top-3 left-3 rounded-full border border-dashed border-rose/50 bg-porcelain/85 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wide text-rose-deep backdrop-blur-sm">
              Product photo coming soon
            </span>
          )}
        </>
      )}
    </div>
  );
}

export function ProductIllustration({
  shape,
  label,
  title,
  className = "",
}: {
  shape: ProductShape;
  label: string;
  title?: string;
  className?: string;
}) {
  const brand = (
    <>
      <text x="100" y="0" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fill="#3a2a33" letterSpacing="0.5">
        GloomBloom
      </text>
      <text x="100" y="13" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="5.5" fill="#a4626a" letterSpacing="2.4">
        {label.toUpperCase()}
      </text>
    </>
  );

  return (
    <svg viewBox="0 0 200 280" role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true} className={className}>
      <defs>
        <linearGradient id={`sheen-${shape}`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.22" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.36" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#3a2a33" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {shape === "tube" && (
        <g>
          <rect x="58" y="34" width="84" height="14" rx="2" fill="#e2d6ca" />
          <path d="M60 48h80l-8 168H68L60 48Z" fill="#fbf8f4" />
          <path d="M60 48h80l-8 168H68L60 48Z" fill={`url(#sheen-${shape})`} />
          <rect x="70" y="216" width="60" height="38" rx="6" fill="#a4626a" />
          <rect x="70" y="216" width="60" height="38" rx="6" fill={`url(#sheen-${shape})`} />
          <g transform="translate(0 128)">{brand}</g>
          <line x1="84" y1="152" x2="116" y2="152" stroke="#a4626a" strokeWidth="0.6" />
        </g>
      )}

      {shape === "dropper" && (
        <g>
          <ellipse cx="100" cy="46" rx="15" ry="24" fill="#3a2a33" />
          <rect x="78" y="66" width="44" height="26" rx="4" fill="#3a2a33" />
          <rect x="84" y="92" width="32" height="14" fill="#c99690" />
          <rect x="52" y="104" width="96" height="150" rx="22" fill="#d7a39d" />
          <rect x="52" y="104" width="96" height="150" rx="22" fill={`url(#sheen-${shape})`} />
          <rect x="62" y="150" width="76" height="60" rx="4" fill="#fbf8f4" />
          <g transform="translate(0 177)">{brand}</g>
          <line x1="86" y1="199" x2="114" y2="199" stroke="#a4626a" strokeWidth="0.6" />
        </g>
      )}

      {shape === "jar" && (
        <g>
          <rect x="34" y="130" width="132" height="40" rx="8" fill="#3a2a33" />
          <rect x="34" y="130" width="132" height="40" rx="8" fill={`url(#sheen-${shape})`} />
          <rect x="40" y="168" width="120" height="86" rx="16" fill="#fbf8f4" />
          <rect x="40" y="168" width="120" height="86" rx="16" fill={`url(#sheen-${shape})`} />
          <g transform="translate(0 208)">{brand}</g>
          <line x1="86" y1="230" x2="114" y2="230" stroke="#a4626a" strokeWidth="0.6" />
        </g>
      )}

      {shape === "pump" && (
        <g>
          <path d="M78 44h52a4 4 0 0 1 0 8h-6v4H84v-4h-6a4 4 0 0 1 0-8Z" fill="#3a2a33" />
          <path d="M130 44h14a3 3 0 0 1 0 6h-14Z" fill="#3a2a33" />
          <rect x="94" y="56" width="12" height="22" fill="#5c4852" />
          <rect x="80" y="78" width="40" height="20" rx="3" fill="#3a2a33" />
          <rect x="58" y="96" width="84" height="158" rx="20" fill="#ecd7d2" />
          <rect x="58" y="96" width="84" height="158" rx="20" fill={`url(#sheen-${shape})`} />
          <g transform="translate(0 172)">{brand}</g>
          <line x1="86" y1="194" x2="114" y2="194" stroke="#a4626a" strokeWidth="0.6" />
        </g>
      )}
    </svg>
  );
}
