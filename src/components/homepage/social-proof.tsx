"use client";

import React, { forwardRef } from "react";
import TestimonialsSection from "./testimonials";

interface SocialProofProps {
  scrollTargetRef: React.RefObject<HTMLElement | null>;
}

const SocialProof = forwardRef<HTMLDivElement, SocialProofProps>(
  ({ scrollTargetRef }, ref) => {
    return (
      <section
        ref={ref}
        className="h-screen snap-start bg-neutral-900 relative z-10"
        style={{
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
      >
        {/* Content */}
        <TestimonialsSection scrollTargetRef={scrollTargetRef} />

        {/* Subtle Bottom Gradient Layer */}
        <div
          className="absolute bottom-0 left-0 w-full h-[20%] pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23, 23, 23, 1) 0%,rgb(37, 43, 51) 100%)",
          }}
        />
      </section>
    );
  }
);

SocialProof.displayName = "SocialProof";

export default SocialProof;
