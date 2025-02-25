import React from "react";
import { useNavigate } from "react-router-dom";

const JoinedCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/Favorites")} className="bg-white transition-all duration-300 hover:shadow-md group">
      {/* Item Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-contain mb-2"
      />

      {/* Item Title (changes color when the entire card is hovered) */}
      <h3 className="text-sm font-normal text-gray-950 truncate group-hover:text-blue-600">
        {item.title}
      </h3>

      {/* Item Original Price */}
      <p className="text-xs line-through text-gray-400 truncate mt-2">
        ${item.originalPrice.toLocaleString()}
      </p>

      {/* Item Price */}
      <p className="text-md font-semibold text-black truncate mt-2">
        ${item.price.toLocaleString()}
      </p>

      {/* Item Shipping Type */}
      <p className="text-xs font-bold text-green-600 truncate mt-2">
        {item.shippingType.toLocaleString()}
      </p>
    </div>
  );
};

export default JoinedCard;
