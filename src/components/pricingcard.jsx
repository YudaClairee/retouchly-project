import { useAuth } from "@clerk/nextjs";
import { Check } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function PricingCard({
  id,
  plan,
  price,
  features,
  featured = false,
  planId,
  buttonText,
}) {
  const { has } = useAuth();

  const isCurrentPlan = id ? has?.({ plan: id }) : false;

  async function handlePopUp() {
    if (isCurrentPlan) return;

    try {
      if (window.Clerk && window.Clerk.__internal_openCheckout) {
        await window.Clerk.__internal_openCheckout({
          planId: planId,
          planPeriod: "month",
          subscriberType: "user",
        });
      }
    } catch (error) {
      console.error("Error opening checkout:", error);
      toast.error(
        "An error occurred while trying to open the checkout. Please try again later."
      );
    }
  }

  return (
    <div className="relative group">
      <div className="w-full h-full flex flex-col items-start gap-4 mb-8 px-6 py-10 bg-[#A855F7]/10 rounded-lg hover:bg-[#A855F7]/20 transition-all duration-500 ease-out transform group-hover:-rotate-2 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        <div className="text-center w-full">
          <h3
            className={`text-4xl font-bold mb-1 transition-all duration-300 ${
              featured
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]"
                : "text-white/80 group-hover:text-white"
            }`}
          >
            {plan}
          </h3>
          <p
            className={`text-2xl mb-4 font-semibold transition-all duration-300
            ${
              featured
                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#ec4899]"
                : "text-white/80 group-hover:text-white"
            }
          `}
          >
            {price > 0 ? `$${price}/month` : "$0/month"}
          </p>
        </div>
        <ul className="list-disc mb-6 text-retouchly-text text-lg space-y-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="mb-2 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1"
            >
              <Check className="text-[#A855F7] transition-all duration-300 group-hover:text-[#EC4899] group-hover:scale-110" />
              <div className="transition-all duration-300 group-hover:text-white">
                {feature}
              </div>
            </div>
          ))}
        </ul>
        <Button
          className={`px-6 py-6 rounded-full text-white w-full font-semibold text-xl transition-all duration-300 transform group-hover:scale-105 ${
            featured
              ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
          disabled={isCurrentPlan || !planId}
          onClick={handlePopUp}
        >
          {isCurrentPlan ? "Current Plan" : buttonText}
        </Button>
      </div>

      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 font-bold rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:-top-6 group-hover:-rotate-2 group-hover:shadow-lg">
          Worth to Upgrade
        </div>
      )}
    </div>
  );
}
