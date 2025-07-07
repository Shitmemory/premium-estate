import { forwardRef } from "react";
import PropertyCard from "./property-card";
import { featuredProperties } from "@/data/featured-properties";

const FeaturedSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="snap-start text-white py-20 px-4 h-[95vh] relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "rgb(37, 43, 51)",
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Featured Sales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProperties.map((property, i) => (
            <PropertyCard key={i} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturedSection.displayName = "FeaturedSection";

export default FeaturedSection;
