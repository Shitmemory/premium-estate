"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

interface HeroProps {
  scrollTargetRef: React.RefObject<HTMLDivElement | null>;
  videoRef: React.RefObject<HTMLVideoElement>;
  ready: any;
}

const HeroSection = ({ scrollTargetRef, videoRef, ready }: HeroProps) => {
  const scrollToNext = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen snap-start relative w-full overflow-hidden flex items-start justify-center pt-[18vh]">
      {/* Background Layers */}
      <div
        className="absolute bottom-0 left-0 w-full h-[25%] z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 65%,rgb(0, 0, 0) 80%)",
        }}
      />
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/10 z-10" />

      {/* Content */}
      <div className="relative z-20 px-4 py-8 mt-5 text-center">
        {ready && (
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold mb-4"
          >
            London Property, Elevated
          </motion.h1>
        )}
        {ready && (
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-lg md:text-xl max-w-xl mx-auto font-bold mb-6"
          >
            Discover How Much Your Home Is Really Worth
          </motion.p>
        )}
        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Your Free Valuation
        </a>
      </div>

      {/* Chevron */}
      <div className="absolute bottom-20 z-30">
        <button
          onClick={scrollToNext}
          className="animate-bounce text-white text-3xl hover:text-gray-300 transition cursor-pointer"
        >
          <HiChevronDown size={39} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
