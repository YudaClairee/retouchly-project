"use client";

import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, to, { duration });
      return animation.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <motion.span
      ref={ref}
      className="text-6xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent"
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

export default function Stats() {
  const stats = [
    { label: "Image Processed", value: 6600, suffix: "+" },
    { label: "Active Users", value: 50, suffix: "+" },
    { label: "AI Transformation", value: 900, suffix: "+" },
    { label: "User Satisfaction", value: 91, suffix: "%" },
  ];

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-5xl mx-auto p-6 rounded-lg flex items-center justify-between">
        {stats.map((stat, index) => (
          <motion.div
            className="flex flex-col gap-1"
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Counter
              to={stat.value}
              suffix={stat.suffix}
              duration={2 + index * 0.2}
            />
            <span className="text-md font-semibold text-retouchly-muted uppercase">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
