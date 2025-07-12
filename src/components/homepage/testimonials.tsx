"use client";

import { Star } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

interface TestimonialsProps {
  scrollTargetRef: React.RefObject<HTMLElement>;
}

export default function TestimonialsSection({ scrollTargetRef }: any) {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Shoreditch, London",
      rating: 5,
      text: "The Modern House provided an exceptional valuation service. Their expertise in the London market is unmatched, and they helped us achieve 15% above asking price.",
      role: "Property Seller",
    },
    {
      name: "James Richardson",
      location: "Notting Hill, London",
      rating: 5,
      text: "Professional, knowledgeable, and incredibly efficient. The team understood exactly what we were looking for and delivered beyond our expectations.",
      role: "Property Buyer",
    },
    {
      name: "Emma Thompson",
      location: "Canary Wharf, London",
      rating: 5,
      text: "From initial valuation to final sale, the process was seamless. Their market insights and strategic approach made all the difference.",
      role: "Property Investor",
    },
    {
      name: "Michael Chen",
      location: "Hackney, London",
      rating: 5,
      text: "As a first-time buyer, I was nervous about the process. The team guided me through every step with patience and expertise. Couldn't be happier with the service.",
      role: "First-Time Buyer",
    },
    {
      name: "Victoria Adams",
      location: "Kensington, London",
      rating: 5,
      text: "Their deep understanding of London's luxury property market is exceptional. They consistently deliver results that exceed expectations.",
      role: "Property Developer",
    },
    {
      name: "David Wilson",
      location: "Greenwich, London",
      rating: 5,
      text: "Outstanding service from start to finish. They sold our property in just 3 weeks at 8% above the initial valuation. Highly recommended!",
      role: "Property Seller",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const scrollToNext = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="text-white py-20 px-4 min-h-screen relative z-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide mt-55">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover why London's most discerning property owners trust us with
            their most valuable assets
          </p>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-10"
        >
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group border border-gray-700 rounded-lg p-8 hover:bg-gray-900/70 transition-all duration-300 overflow-hidden"
              style={{
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                backgroundColor: "rgba(24,24,24,0.5)",
              }}
            >
              {index === 1 ? (
                <>
                  <Corner top right />
                  <Corner bottom left />
                </>
              ) : (
                <>
                  <Corner top left />
                  <Corner bottom right />
                </>
              )}

              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              <div className="border-t border-gray-700 pt-6">
                <div className="font-medium text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-gray-400 text-sm mb-1">
                  {testimonial.role}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Carousel Navigation */}
        <div className="flex justify-center mb-16">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 border border-white ${
                i === currentPage ? "bg-white" : "bg-transparent"
              }`}
              aria-label={`Go to testimonials page ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-600 pt-16">
          <Stat label="Properties Sold" value="500+" />
          <Stat label="Total Sales Value" value="£2.5B+" />
          <Stat label="Client Satisfaction" value="98%" />
          <Stat label="Years Experience" value="15+" />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
            Book Your Free Valuation
          </button>
        </div>
      </div>

      {/* Chevron + Label */}
      <div className="absolute bottom-10 z-30 w-full flex flex-col items-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-lg font-semibold mb-4"
        >
          <button onClick={scrollToNext} className="hover:bg-muted">
            Featured Properties
          </button>
        </motion.h3>

        <motion.button
          onClick={scrollToNext}
          whileHover={{ scale: 1.1, y: 2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to Featured Properties"
          className="text-white"
        >
          <HiChevronDown
            size={39}
            className="animate-bounce text-3xl hover:text-gray-300 transition cursor-pointer"
          />
        </motion.button>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  const numberOnly = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isBillion = value.includes("B");
  const isPercent = value.includes("%");
  const isPlus = value.includes("+");
  const prefix = value.includes("\u00a3") ? "\u00a3" : "";

  return (
    <div className="text-center" ref={ref}>
      <div className="text-3xl md:text-4xl font-light mb-2 text-white">
        {startCount ? (
          <>
            {prefix}
            <CountUp
              end={numberOnly}
              duration={2}
              decimals={isBillion ? 1 : 0}
              suffix={isBillion ? "B" : isPercent ? "%" : isPlus ? "+" : ""}
            />
          </>
        ) : (
          value
        )}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

function Corner({
  top = false,
  bottom = false,
  left = false,
  right = false,
}: {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}) {
  const position = `${top ? "top-0" : "bottom-0"} ${
    left ? "left-0" : "right-0"
  }`;

  return (
    <>
      <span
        className={`absolute ${position} w-0 h-[2px] bg-white transition-all duration-400 group-hover:w-6`}
      />
      <span
        className={`absolute ${position} h-0 w-[2px] bg-white transition-all duration-400 group-hover:h-6`}
      />
    </>
  );
}
