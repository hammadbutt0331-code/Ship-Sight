import Link from "next/link";
import { BloomMark } from "@/components/Logo";
import { buttonClasses } from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70svh] flex-col items-center justify-center py-24 text-center">
      <BloomMark className="size-12 text-rose" />
      <p className="eyebrow mt-8">Page not found</p>
      <h1 className="mt-4 text-5xl text-plum md:text-6xl">This page has drifted away.</h1>
      <p className="mt-4 max-w-md text-plum-soft">The page you are looking for does not exist or may have moved.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonClasses("primary", "md")}>
          Back to home
        </Link>
        <Link href="/products" className={buttonClasses("outline", "md")}>
          View products
        </Link>
      </div>
    </section>
  );
}
