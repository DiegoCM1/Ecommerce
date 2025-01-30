import React from "react";

const SecondaryRecommendations = () => {
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
    <section className="my-8 mx-32  bg-white rounded-lg p-4 transition-all duration-300">
      {/* Section Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Secondary Recommendations
      </h2>

      {/* Items Grid */}
      <div className="grid grid-cols-6 gap-5">
        {recentItems.map((item, index) => (
          <div
            key={index}>
            {/* Item Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-2 hover:text-blue-600"
            />

            {/* Item Title */}
            <h3 className="text-sm font-medium text-gray-800 truncate">
              {item.title}
            </h3>

            {/* Item Price */}
            <p className="text-blue-600 font-semibold mt-2">
              ${item.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondaryRecommendations;
