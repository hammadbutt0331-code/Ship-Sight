import { faqs } from "@/content/faqs";
import { Hero } from "@/components/sections/Hero";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyUs } from "@/components/sections/WhyUs";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { Reviews } from "@/components/sections/Reviews";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedProducts />
      <WhyUs />
      <ProductShowcase />
      <HowToOrder />
      <Reviews />
      <FaqSection faqs={faqs.filter((faq) => faq.onHomepage)} />
      <CtaBanner />
    </>
  );
}
