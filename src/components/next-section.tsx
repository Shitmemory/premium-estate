"use client";

import React, { forwardRef } from "react";
import TestimonialsSection from "./homepage/testimonials";

const NextSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen snap-start bg-black relative z-10"
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)",
      }}
    >
      <TestimonialsSection />
    </section>
  );
});

NextSection.displayName = "NextSection";

export default NextSection;
