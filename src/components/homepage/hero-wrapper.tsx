"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "./hero";
import NextSection from "../next-section";
import Loader from "@/components/loading";
import FeaturedSection from "./featured-section";

export default function HeroWrapper() {
  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const featuredRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = "none";

    const video = videoRef.current;

    const endLoading = () => {
      setLoading(false);
      setTimeout(() => {
        html.style.scrollSnapType = "y mandatory";
      }, 50);
    };

    const onCanPlay = () => endLoading();

    if (video) {
      video.addEventListener("canplaythrough", onCanPlay);
    }

    const fallbackTimeout = setTimeout(() => {
      endLoading();
    }, 4000);

    return () => {
      clearTimeout(fallbackTimeout);
      if (video) {
        video.removeEventListener("canplaythrough", onCanPlay);
      }
    };
  }, []);

  return (
    <main
      id="page-wrapper"
      className="relative h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
    >
      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-opacity duration-500 ${
          loading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Loader />
      </div>

      {/* Dark Overlay */}
      {searchOpen && (
        <div
          id="overlay"
          className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-500"
        />
      )}

      {/* Main Content */}
      <div
        id="main-content"
        className="transition-all duration-500 relative z-10"
        style={{
          willChange: "transform, opacity",
          transform: "translateZ(0)",
          isolation: "isolate",
        }}
      >
        <HeroSection
          scrollTargetRef={nextSectionRef}
          videoRef={videoRef}
          ready={!loading}
        />
        <NextSection ref={nextSectionRef} />

        <FeaturedSection ref={featuredRef} />
      </div>
    </main>
  );
}
