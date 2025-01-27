import React from "react";

const NavigationMenu = () => {
  const categories = ["Categorias", "Ofertas", "Historial", "Supermercado", "Moda", "Mercado Play", "Vender", "Ayuda"];

  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href={`/${category.toLowerCase()}`}
              className="text-gray-800 hover:text-gray-600 text-sm font-medium"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
