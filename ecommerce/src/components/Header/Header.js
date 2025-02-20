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
      <div className="flex justify-between items-center">
        {/* Burger menu button for mobile view */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        {/* Search bar for desktop view */}
        <div className="hidden md:flex w-3/5">
          <SearchBar />
        </div>
        {/* Cart icon */}
        <div className="flex items-center space-x-4">
          {/* Search bar for mobile view */}
          <div className="md:hidden">
            <SearchBar />
          </div>
          <CartIcon />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 md:mt-0 md:hidden lg:hidden">
        {/* Location Icon for mobile view */}
        <Location />
      </div>

      <div className="flex justify-between items-center mt-2 md:mt-0">
        {/* Header logo */}
        <div className="hidden ml-4 md:ml-0">
          <HeaderLogo />
        </div>
        {/* Location component for desktop view */}
        <div className="hidden md:flex w-1/5">
          <Location />
        </div>
        {/* Navigation menu for desktop view */}
        <div className="hidden md:flex w-3/5 items-center">
          <NavigationMenu />
        </div>
        {/* Navigation options for desktop view */}
        <div className="hidden md:flex w-2/5 space-x-4 items-center justify-end">
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
          {/* Location component for mobile view */}
          <Location />
        </div>
      )}
    </header>
  );
};

export default Header;
