import { Button } from "@/components/ui/button";
import HeroSection from "./_components/hero-section";
import Header from "./_components/header";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#1f2937] to-[#171834] min-h-screen py-10 font-[var(--font-inter)]">
      <Header />
      <main className="max-w-5xl mx-auto mt-18 px-4">
        <HeroSection />
      </main>
      <section></section>
    </div>
  );
}
