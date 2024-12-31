import React from "react";

const TopicRecommendations = ({ topic, recommendations }) => {
  return (
    <section className="my-8 px-4">
      {/* Topic Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">{topic}</h2>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition-all duration-300"
          >
            {/* Item Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-md mb-2"
            />

            {/* Item Title */}
            <h3 className="text-sm font-medium text-gray-800 truncate">
              {item.title}
            </h3>

            {/* Item Price */}
            {item.price && (
              <p className="text-blue-600 font-semibold mt-2">
                ${item.price.toLocaleString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicRecommendations;
