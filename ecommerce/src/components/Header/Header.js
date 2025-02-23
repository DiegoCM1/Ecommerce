import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";
import CartIcon from "./CartIcon";
import Location from "./Location";
import NavigationOption from "./Navigation-Option";
import HeaderLogo from "./HeaderLogo";
import MercadoPlayLogo from "./MercadoPlayLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brightYellow shadow-md px-4 py-2 md:px-32">
      <div className="flex justify-between items-center border border-red-600">
        {/* Header logo */}
        <div className="hidden md:flex md:ml-0 md:w-2/12 lg:flex lg:w-1/12 ml-4  border border-red-600">
          <HeaderLogo />
        </div>
        {/* Burger menu button for mobile view */}
        <button
          className="md:hidden lg:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        {/* Search bar for desktop view */}
        <div className="w-4/5 md:flex md:w-3/5 lg:flex lg:md:w-3/5  border border-red-600">
          <SearchBar />
        </div>
        {/* Mercado play logo for desktop view*/}
        <div className="hidden ml-4 md:ml-0
        md:flex md:w-1/5 
        lg:flex lg:w-1/6
        border border-red-600">
          <MercadoPlayLogo />
        </div>
        {/* Cart icon */}
        <div className="flex items-center space-x-4 border border-red-600">
          <CartIcon />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 md:mt-0 md:hidden lg:hidden">
        {/* Location Icon for mobile view */}
        <Location />
      </div>

      <div className="flex justify-between items-center mt-2 border border-red-600">
        {/* Location component for desktop view */}
        <div className="hidden md:flex md:w-2/12 lg:flex lg:w-1/12 border border-blue-600">
          <Location />
        </div>
        {/* Navigation menu for desktop view */}
        <div className="hidden md:flex md:w-3/5 lg:flex lg:md:w-3/5 border border-green-600">
          <NavigationMenu />
        </div>
        {/* Navigation options for desktop view */}
        <div className="hidden md:flex space-x-4 items-center justify-end  border border-purple-600">
          <NavigationOption
            content="Profile"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
          <NavigationOption
            content="My purchases"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
          <NavigationOption
            content="Favorites"
            href="/Favorites"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
          <NavigationOption
            content="🔔"
            href="/"
            className="text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
      </div>

      {/* Dropdown menu for mobile view */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <NavigationOption
            content="Profile"
            href="/"
            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
          <NavigationOption
            content="My purchases"
            href="/"
            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
          <NavigationOption
            content="Favorites"
            href="/Favorites"
            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
          <NavigationOption
            content="🔔"
            href="/"
            className="block text-gray-800 hover:text-gray-600 text-sm font-medium"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
