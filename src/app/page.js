import CtaSection from "@/Components/CtaSection";
import FeaturesSection from "@/Components/FeaturesSection";
import Hero from "@/Components/Hero";
import Jobs from "@/Components/Jobs";
import PricingSection from "@/Components/PricingSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Jobs/>
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}
