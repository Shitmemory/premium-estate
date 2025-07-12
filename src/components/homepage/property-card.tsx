type Property = {
  title: string;
  location: string;
  price: string;
  image: string;
  status?: "new" | "under-offer";
};

export default function PropertyCard({ property }: { property: any }) {
  return (
    <div className="group relative overflow-hidden bg-white">
      <img
        src={property.image}
        alt="Property image"
        className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="p-4 bg-white">
        <h3 className="text-lg font-medium text-black">{property.title}</h3>
        <p className="text-sm text-gray-600">{property.location}</p>
        <p className="text-sm text-gray-800 font-semibold mt-1">
          {property.price}
        </p>
      </div>
    </div>
  );
}
