"use client";

import HeroSection from "./_components/hero-section";
import Header from "./_components/header";
import Stats from "./_components/stats";
import Features from "./_components/features";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Pricing from "./_components/pricing";
import Footer from "./_components/footer";

export default function Home() {
  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const pricingAnimation = useScrollAnimation();

  return (
    <div className="bg-gradient-to-b from-[#1f2937] to-[#171834] min-h-screen font-[var(--font-inter)] pt-40">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <motion.main
        ref={heroAnimation.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={
          heroAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4"
      >
        <HeroSection />
      </motion.main>

      {/* Stats Section */}
      <motion.section
        ref={statsAnimation.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={
          statsAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-16"
      >
        <Stats />
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresAnimation.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={
          featuresAnimation.isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        id="features"
        className="mt-16"
      >
        <Features />
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={pricingAnimation.ref}
        initial={{ opacity: 0, y: 50 }}
        animate={
          pricingAnimation.isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 50 }
        }
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="mt-16"
      >
        <Pricing />
      </motion.section>

      {/* Footer */}
      <footer className="mt-16">
        <Footer />
      </footer>
    </div>
  );
}
