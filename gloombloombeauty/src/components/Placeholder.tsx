/**
 * A clearly marked placeholder shown wherever the owner has not yet
 * supplied information. It disappears automatically once the content
 * is filled in (see src/content/).
 */
export function Placeholder({ label = "Information to be added", className = "" }: { label?: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border border-dashed border-rose/50 bg-blush px-2.5 py-1 text-xs font-medium text-rose-deep ${className}`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-rose" />
      {label}
    </span>
  );
}

/** Renders the text if present, otherwise a placeholder. */
export function TextOrPlaceholder({ text, label, className = "" }: { text: string; label?: string; className?: string }) {
  return text.trim() ? <p className={className}>{text}</p> : <Placeholder label={label} />;
}

/** Renders a list if it has items, otherwise a placeholder. */
export function ListOrPlaceholder({
  items,
  label,
  ordered = false,
}: {
  items: string[];
  label?: string;
  ordered?: boolean;
}) {
  if (items.length === 0) return <Placeholder label={label} />;
  if (ordered) {
    return (
      <ol className="space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-4">
            <span className="font-serif text-lg leading-6 text-rose-deep">{String(index + 1).padStart(2, "0")}</span>
            <span className="leading-6 text-plum-soft">{item}</span>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-6 text-plum-soft">
          <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-rose" />
          {item}
        </li>
      ))}
    </ul>
  );
}
