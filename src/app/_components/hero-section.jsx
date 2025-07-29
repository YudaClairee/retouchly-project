import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroSection() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col text-center font-[var(--font-sora)]">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent animate-pulse">
          Edit Images. Instantly. Beautifully.
        </h1>
        <p className="mt-8 text-retouchly-muted text-3xl font-[var(--font-inter)]">
          All the tools you need. None of the clutter.
        </p>
        <div className="mt-8 flex gap-8 items-center justify-center">
          <Button className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] p-6 rounded-md text-retouchly-text text-xl font-medium">
            Try Now
          </Button>
          <Button className="bg-[#A855F7]/20 p-6 rounded-md text-retouchly-text text-lg font-medium">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
