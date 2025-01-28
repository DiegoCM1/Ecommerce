import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Implement search logic here
  };

  return (
    <form
      className="flex items-center bg-white rounded-sm shadow-sm"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className="flex w-full px-4 py-2 rounded-l-md focus:outline-none"
        placeholder="Buscar productos, marcas y más..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
