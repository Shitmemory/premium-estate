"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

interface HeroProps {
  scrollTargetRef: React.RefObject<HTMLDivElement | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  ready: any;
}

const HeroSection = ({ scrollTargetRef, videoRef, ready }: HeroProps) => {
  const scrollToNext = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen snap-start relative w-full overflow-hidden flex items-start justify-center pt-24 sm:pt-32 md:pt-40">
      {/* Background Gradient Overlay at Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[25%] z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 65%, rgb(23, 23, 23) 93%)",
        }}
      />

      {/* Background Video */}
      <video
        ref={videoRef}
        className=" absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg" // optional fallback
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Mobile Fallback Background */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/10 z-10" />

      {/* Main Content */}
      <div className="relative z-20 px-4 sm:px-6 md:px-8 py-4 sm:py-6 max-w-3xl w-full text-center">
        {ready && (
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-bold mb-4 text-[clamp(2rem,6vw,4rem)] leading-tight"
          >
            London Property, Elevated
          </motion.h1>
        )}

        {ready && (
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white font-bold mb-6 text-[clamp(1rem,2.5vw,1.5rem)] max-w-xl mx-auto"
          >
            Discover How Much Your Home Is Really Worth
          </motion.p>
        )}

        <a
          href="#contact"
          className="inline-block bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Your Free Valuation
        </a>
      </div>

      {/* Chevron */}
      <div className="absolute bottom-32 md:bottom-32 lg:bottom-43 xl:bottom-32 z-30 flex justify-center w-full">
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

// "use client";
// import type React from "react";
// import { motion } from "framer-motion";
// import { HiChevronDown } from "react-icons/hi";

// interface HeroProps {
//   scrollTargetRef: React.RefObject<HTMLDivElement | null>;
//   videoRef: React.RefObject<HTMLVideoElement>;
//   ready: any;
// }

// const HeroSection = ({ scrollTargetRef, videoRef, ready }: HeroProps) => {
//   const scrollToNext = () => {
//     if (scrollTargetRef.current) {
//       scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="h-screen snap-start relative w-full overflow-hidden flex items-start justify-center">
//       {/* Background Gradient Overlay at Bottom */}
//       <div
//         className="absolute bottom-0 left-0 w-full h-[25%] z-20 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 65%, rgb(23, 23, 23) 93%)",
//         }}
//       />

//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         className="hidden sm:block absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         poster="/images/hero-poster.jpg"
//       >
//         <source src="/videos/hero.mp4" type="video/mp4" />
//       </video>

//       {/* Mobile Fallback Background Image */}
//       <div
//         className="sm:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/images/hero-poster.jpg')",
//         }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/10 z-10" />

//       {/* Main Content Container */}
//       <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
//         {/* Content Wrapper with Responsive Positioning */}
//         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
//           {/* Spacer to push content up slightly from center */}
//           <div className="flex-1 min-h-[10vh] sm:min-h-[12vh] lg:min-h-[15vh]" />

//           {/* Main Content */}
//           <div className="flex-none w-full max-w-4xl">
//             {ready && (
//               <motion.h1
//                 initial={{ opacity: 0, y: -40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-white font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight
//                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
//                   tracking-tight"
//               >
//                 London Property,
//                 <br />
//                 Elevated
//               </motion.h1>
//             )}

//             {ready && (
//               <motion.p
//                 initial={{ opacity: 0, y: -40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 className="text-white font-bold mb-8 sm:mb-10 lg:mb-12 mx-auto
//                   text-base sm:text-lg md:text-xl lg:text-2xl
//                   max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
//               >
//                 Discover How Much Your Home Is Really Worth
//               </motion.p>
//             )}

//             <a
//               href="#contact"
//               className="inline-block bg-white text-black font-semibold rounded-full
//                 hover:bg-gray-100 transition-colors duration-200
//                 px-6 py-3 text-sm sm:px-7 sm:py-3 sm:text-base
//                 md:px-8 md:py-4 md:text-lg
//                 lg:px-10 lg:py-4 lg:text-xl
//                 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
//             >
//               Book Your Free Valuation
//             </a>
//           </div>

//           {/* Spacer to maintain positioning */}
//           <div className="flex-1 min-h-[15vh] sm:min-h-[18vh] lg:min-h-[20vh]" />
//         </div>
//       </div>

//       {/* Chevron Down Arrow */}
//       <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 z-30 left-1/2 transform -translate-x-1/2">
//         <button
//           onClick={scrollToNext}
//           className="animate-bounce text-white hover:text-gray-300 transition-colors duration-200
//             cursor-pointer p-2 rounded-full hover:bg-white/10 transition-all duration-200"
//           aria-label="Scroll to next section"
//         >
//           <HiChevronDown
//             size={32}
//             className="sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
//           />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
