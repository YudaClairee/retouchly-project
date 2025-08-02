"use client";

import {
  Bot,
  Hammer,
  ImageUpscale,
  Palette,
  RulerDimensionLine,
  Scissors,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Scissors />,
      title: "Smart Crop and Resize",
      description:
        "Interactive cropping with aspect ratio constraints and intelligent resizing that preserves image quality across any dimensions.",
    },
    {
      icon: <Palette />,
      title: "Color and Light adjusment",
      description:
        "Professional-grade color correction and lighting adjustments with intuitive sliders and presets.",
    },
    {
      icon: <Bot />,
      title: "AI Background Removal",
      description:
        "Automatically remove backgrounds from images with precision using AI technology.",
    },
    {
      icon: <Hammer />,
      title: "AI Content Editor",
      description:
        "Edit images with natural language commands and AI assistance.",
    },
    {
      icon: <RulerDimensionLine />,
      title: "Image Extender",
      description:
        "Expand your canvas in any direction with AI-powered generative fill that seamlessly blends new content with existing images.",
    },
    {
      icon: <ImageUpscale />,
      title: "AI Upscaler",
      description:
        "Enhance image resolution and quality using advanced AI algorithms.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent mb-6">
          Powerful Features for Every Need
        </h2>
        <p className="text-retouchly-muted text-xl">
          Retouchly offers a comprehensive suite of tools designed to meet the
          needs of both casual users and professional photographers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            key={index}
            className="w-full flex items-start gap-4 mb-8 px-5 py-6 bg-[#A855F7]/10 rounded-lg hover:bg-[#A855F7]/20 transition-colors"
          >
            <div className="text-[#A855F7] text-3xl bg-retouchly-muted/10 p-2 rounded-lg">
              {feature.icon}
            </div>
            <div>
              <h3 className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent text-2xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-retouchly-text">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
