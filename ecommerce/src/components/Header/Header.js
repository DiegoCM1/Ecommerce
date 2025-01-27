import React from "react";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";
import CartIcon from "./CartIcon";
import Location from "./Location";
import NavigationOption from "./Navigation-Option";

const Header = () => {
  return (
    <header className="bg-yellow-300 shadow-md px-32 py-4">
      <div className="flex justify-around ">
        {/* Main Logo*/}
        <div className="w-1/5 ">
          <a href="/">
            <img
              src="/images/mercado-libre-logo.png"
              alt="Mercado Libre Logo"
              className="h-10"
            />
          </a>
        </div>

        {/* Search Bar */}
        <div className="w-3/5 ">
          <SearchBar />
        </div>

        {/* Mercado Play*/}
        <div className="w-2/5">
          <a href="/">
            <img
              src="/images/mercado-play.png"
              alt="Mercado Libre Logo"
              className="h-10"
            />
          </a>
        </div>
      </div>

      {/* Right Icons: Cart */}
      <div className="flex justify-around">
        <div className="w-1/5 ">
          <Location />
        </div>
        <div className="w-3/5 ">
          <NavigationMenu />
        </div>
        <div className="w-2/5  flex space-x-4">
          <div className="">
            <NavigationOption
              content="Profile"
              href="/"
              className="text-gray-800 hover:text-gray-600 text-sm font-medium"
            />
          </div>
          <div className="">
            <NavigationOption
              content="My purchases"
              href="/"
              className="text-gray-800 hover:text-gray-600 text-sm font-medium"
            />
          </div>
          <div className="">
            <NavigationOption
              content="Favorites"
              href="/"
              className="text-gray-800 hover:text-gray-600 text-sm font-medium"
            />
          </div>
          <div className="">
            <NavigationOption
              content="Notifications"
              href="/"
              className="text-gray-800 hover:text-gray-600 text-sm font-medium"
            />
          </div>
          <div>
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
