export const instant = false;
import CtaSection from "@/Components/CtaSection";
import FeaturesSection from "@/Components/FeaturesSection";
import Hero from "@/Components/Hero";
import Jobs from "@/Components/Jobs";
import PricingSection from "@/Components/PricingSection";
import { getRole } from "@/lib/mechine";
import { Suspense } from "react";

const Home = async () => {
  const jobs = await getRole();
  return (
    <>
      <Hero />
      <Jobs jobs={jobs} />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
    </>
  );
};

export default Home;
