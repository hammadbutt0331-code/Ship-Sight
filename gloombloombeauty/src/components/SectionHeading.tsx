import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({ eyebrow, title, intro, align = "left", as: Tag = "h2", id, tone = "dark" }: Props) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";
  const titleColor = tone === "dark" ? "text-plum" : "text-porcelain";
  const introColor = tone === "dark" ? "text-plum-soft" : "text-porcelain/75";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <p className={`eyebrow ${tone === "light" ? "text-petal!" : ""}`}>{eyebrow}</p>}
      <Tag id={id} className={`text-4xl leading-[1.05] md:text-5xl lg:text-[3.5rem] ${titleColor}`}>
        {title}
      </Tag>
      {intro && <div className={`max-w-xl text-base leading-relaxed md:text-lg ${introColor}`}>{intro}</div>}
    </div>
  );
}
