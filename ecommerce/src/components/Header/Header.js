import React from "react";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";
import CartIcon from "./CartIcon";
import Location from "./Location";

const Header = () => {
  return (
    <header className="bg-yellow-300 shadow-md px-32 py-4">
      <div className="flex justify-around border border-red-600">
        {/* Main Logo*/}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="/images/mercado-libre-logo.png"
              alt="Mercado Libre Logo"
              className="h-10"
            />
          </a>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Mercado Play*/}
        <div className="flex-shrink-0">
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
      <div className="flex items-center space-x-4 border border-blue-600">
        <Location />
        <NavigationMenu />
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
