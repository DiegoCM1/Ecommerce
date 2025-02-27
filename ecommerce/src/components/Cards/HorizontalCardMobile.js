import React from "react";

const HorizontalCardMobile = ({ item, removeItem, isRemoving }) => {
  return (
    <div
      className={`bg-white group flex border-b border-gray-200 transition-all duration-300 ${
        isRemoving ? "opacity-0 -translate-x-20" : "opacity-100 translate-x-0"
      }`}
    >
      {/* Item Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-40 h-40 object-contain my-4 mx-4"
      />
      <div className="flex flex-col justify-between my-4">
        {/* Item Title */}
        <h3 className="text-lg font-medium text-black truncate group-hover:text-blue-600">
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
    </div>
  );
};

export default HorizontalCardMobile;
