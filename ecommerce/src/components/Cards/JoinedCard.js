import React from "react";
import { useNavigate } from "react-router-dom";

const JoinedCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/ProductCard")} className="bg-white rounded-lg shadow-md hover:shadow-lg px-2 py-2 md:px-3 md:py-3 lg:px-3 lg:py-2 transition-all duration-300 group">
      {/* Recommendations based on interest-interactions */}
      <h2 className="text-sm md:text-md lg:text-md font-semibold text-gray-800 truncate">
        {item.interaction}
      </h2>

      {/* Item Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-32 md:h-40 lg:h-40 object-contain mb-2"
      />

      {/* Item Title */}
      <h3 className="text-xs md:text-sm lg:text-sm font-normal text-gray-950 truncate group-hover:text-blue-600">
        {item.title}
      </h3>

      {/* Item Original Price */}
      <p className="text-xs line-through text-gray-400 truncate mt-1 md:mt-2 lg:mt-2">
        ${item.originalPrice.toLocaleString()}
      </p>

      {/* Item Price */}
      <p className="text-sm md:text-md lg:text-md font-semibold text-black truncate mt-1 md:mt-2 lg:mt-2">
        ${item.price.toLocaleString()}
      </p>

      {/* Item Shipping Type */}
      <p className="text-xs md:text-sm lg:text-xs font-bold text-green-600 truncate mt-1 md:mt-2 lg:mt-2">
        {item.shippingType.toLocaleString()}
      </p>
    </div>
  );
};

export default JoinedCard;