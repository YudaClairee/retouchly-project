import React from "react";

export default function layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-[#1f2937] to-[#171834] min-h-screen py-10 font-[var(--font-inter)] flex justify-center items-center">
      <div className="">{children}</div>
    </div>
  );
}
