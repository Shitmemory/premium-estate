import { forwardRef } from "react";
import PropertyCard from "./property-card";
import { featuredProperties } from "@/data/featured-properties";

const FeaturedSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="snap-start  bg-[#0B0F1A] text-white py-20 px-4 h-[95vh]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Featured Sales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {featuredProperties.map((property, i) => (
            <PropertyCard key={i} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturedSection.displayName = "FeaturedSection"; // Always define this when using forwardRef

export default FeaturedSection;
