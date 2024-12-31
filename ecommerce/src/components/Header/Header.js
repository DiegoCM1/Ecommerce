import React from "react";
import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <header className="bg-yellow-400 shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/">
          <img
            src="path-to-logo.png"
            alt="Mercado Libre Clone Logo"
            className="h-10"
          />
        </a>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Right Icons: Cart */}
      <div className="flex items-center space-x-4">
        <NavigationMenu />
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
