import React from "react";
import SeparatedCard from "../Cards/SeparatedCard";

const FirstRecommendations = () => {
  // Static mock data simulating recently viewed items
  const recentItems = [
    { image: "path-to-image1.jpg", title: "Item 1", price: 299 },
    { image: "path-to-image2.jpg", title: "Item 2", price: 499 },
    { image: "path-to-image3.jpg", title: "Item 3", price: 199 },
    { image: "path-to-image4.jpg", title: "Item 4", price: 699 },
    { image: "path-to-image5.jpg", title: "Item 5", price: 349 },
    { image: "path-to-image6.jpg", title: "Item 6", price: 449 },

  ];

  return (
    <section className="my-8 px-32">
      {/* Section Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        First Recommendations
      </h2>

      {/* Items Grid */}
      <div className="grid grid-cols-6 gap-5 border border-blue-700">
        {recentItems.map((item, index) => (
          <SeparatedCard key={index} item={item} /> // Component call
        ))}
      </div>
    </section>
  );
};

export default FirstRecommendations;
