import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

type Variant = "primary" | "outline" | "light" | "ghost";
type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  primary: "bg-rose text-white hover:bg-rose-deep shadow-[0_10px_30px_-12px_rgba(164,98,106,0.7)]",
  outline: "border border-plum/25 text-plum hover:border-plum hover:bg-plum hover:text-porcelain",
  light: "bg-porcelain text-plum hover:bg-white",
  ghost: "text-plum underline-offset-4 hover:underline px-0!",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-[0.8rem]",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-[0.95rem]",
};

export const buttonClasses = (variant: Variant = "primary", size: Size = "md", className = "") =>
  `inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ease-(--ease-soft) active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`;

type Props = {
  message?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Extra context for screen readers, e.g. the product name. */
  ariaLabel?: string;
  showIcon?: boolean;
};

export function WhatsAppButton({ message, children, variant = "primary", size = "md", className, ariaLabel, showIcon = true }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ? `${ariaLabel} (opens WhatsApp)` : undefined}
      className={buttonClasses(variant, size, className)}
    >
      {showIcon && <WhatsAppIcon className="size-[1.15em]" />}
      {children}
    </a>
  );
}
