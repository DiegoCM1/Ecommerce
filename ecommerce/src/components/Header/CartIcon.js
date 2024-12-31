import React from "react";

const CartIcon = () => {
  return (
    <div className="relative">
      <a href="/cart" className="text-gray-800 hover:text-gray-600">
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </a>
    </div>
  );
};

export default CartIcon;
