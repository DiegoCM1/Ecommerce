import React from "react";
import JoinedCard from "../Cards/JoinedCard";

const SecondaryRecommendations = () => {
  // Static mock data simulating recently viewed items
  const recentItems = [
    { image: "/images/challenger.jpg", title: "Item 1", price: 299, originalPrice: 389, shippingType: "Free Shipping" },
    { image: "/images/camaro.jpg", title: "Item 2", price: 499, originalPrice: 649, shippingType: "⚡Full" },
    { image: "/images/challenger.jpg", title: "Item 3", price: 199, originalPrice: 259, shippingType: "Pickup Available" },
    { image: "/images/mustang.jpg", title: "Item 4", price: 699, originalPrice: 909, shippingType: "Free Shipping" },
    { image: "/images/vocho.jpg", title: "Item 5", price: 349, originalPrice: 459, shippingType: "Market Shipping" },
    { image: "/images/audi.jpg", title: "Item 6", price: 449, originalPrice: 589, shippingType: "Agreed with Seller" },
  ];

  return (
    <section className="my-8 px-32">
      {/* Section Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Secondary Recommendations
      </h2>

      {/* Items Grid */}
      <div className="grid grid-cols-6 gap-5 bg-white">
        {recentItems.map((item, index) => (
          <JoinedCard key={index} item={item} /> // Component call
        ))}
      </div>
    </section>
  );
};

export default SecondaryRecommendations;
