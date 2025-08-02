import PricingCard from "@/components/pricingcard";
import { PricingTable } from "@clerk/nextjs";
import React from "react";

export default function Pricing() {
  const plans = [
    {
      id: "free_user",
      plan: "Free",
      price: 0,
      features: [
        "3 projects maximum",
        "20 exports per month",
        "Basic crop & resize",
        "Color adjustments",
        "Text Tool",
      ],
      buttonText: "Get Started Free",
    },
    {
      id: "pro",
      plan: "Pro",
      price: 12,
      features: [
        "Unlimited projects",
        "Unlimited exports",
        "All Editing Tools",
        "AI Background Remover",
        "AI Image Extender",
        "AI Retouch, Upscaler and more",
      ],
      featured: true,
      planId: "cplan_30dHCCLqRKfVA0KbbCo3DK6OXoK",
      buttonText: "Upgrade to Pro",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-5xl bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent font-bold text-center mb-12">
        Choose Your Plan
      </h2>
      <p className="text-xl text-retouchly-muted text-center mb-12">
        Choose the plan that best fits your needs.
      </p>
      <div className="grid md:grid-cols-2 gap-8 w-full">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </div>
  );
}
