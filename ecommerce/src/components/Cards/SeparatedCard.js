import React from "react";

const SeparatedCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-4 transition-all duration-300">
      {/* Item Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover rounded-md mb-2"
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
  );
};

export default SeparatedCard;
