import React from "react";
import NavigationOption from "./Navigation-Option";

const NavigationMenu = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        <div className="">
          <NavigationOption
            content="Categories"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
        <div className="">
          <NavigationOption
            content="Offers"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
        <div className="">
          <NavigationOption
            content="Historial"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
        <div className="">
          <NavigationOption
            content="Supermarket"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
        <div className="">
          <NavigationOption
            content="Fashion"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
        <div className="">
          <NavigationOption
            content="Mercado Play"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
        <div className="">
          <NavigationOption
            content="Sell"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
        <div className="">
          <NavigationOption
            content="Help"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
