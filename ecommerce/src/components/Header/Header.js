import React from "react";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";
import CartIcon from "./CartIcon";
import Location from "./Location";
import NavigationOption from "./Navigation-Option";
import HeaderLogo from "./HeaderLogo";
import MercadoPlayLogo from "./MercadoPlayLogo";

const Header = () => {
  return (
    <header className="bg-brightYellow shadow-md px-32 py-2">
      <div className="flex justify-around">
        <div className="w-1/5 ">
          <HeaderLogo />
        </div>
        <div className="w-3/5">
          <SearchBar />
        </div>
        <div className="w-2/5 flex justify-end">
          <MercadoPlayLogo />
        </div>
      </div>

      <div className="flex justify-around">
        <div className="w-1/5 flex justify-start">
          <Location />
        </div>
        <div className="w-3/5 flex items-center">
          <NavigationMenu />
        </div>
        <div className="w-2/5  flex space-x-4 items-center justify-end">
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
              href="/Favorites"
              className="text-gray-800 hover:text-gray-600 text-sm font-medium"
            />
          </div>
          <div className="">
            <NavigationOption
              content="🔔"
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
