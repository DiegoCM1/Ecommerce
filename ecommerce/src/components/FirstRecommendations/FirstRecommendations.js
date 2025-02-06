import React, { useState } from "react";
import SeparatedCard from "../Cards/SeparatedCard";
import { recentItems } from "../../data/Products"; // Import the product data

const ITEMS_PER_PAGE = 6; // Define how many items to show at once

const FirstRecommendations = () => {
  // State to track which set of items is currently visible
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next set of items
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + ITEMS_PER_PAGE >= recentItems.length ? 0 : prevIndex + ITEMS_PER_PAGE
    );
  };

  // Function to move to the previous set of items
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recentItems.length - ITEMS_PER_PAGE : prevIndex - ITEMS_PER_PAGE
    );
  };

  return (
    <section className="my-8 px-32 relative group">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative">
        {/* Sliding Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / ITEMS_PER_PAGE) * 100}%)` }}
        >
          {/* Map through the items and display each one */}
          {recentItems.map((item, index) => (
            <div key={index} className="w-1/6 flex-shrink-0 px-2">
              <SeparatedCard item={item} />
            </div>
          ))}
        </div>

              {/* Left Navigation Button */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full p-4 bg-transparent text-transparent group-hover:bg-white group-hover:text-blue-600 hover:shadow-md"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* Right Navigation Button */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full p-4 bg-transparent text-transparent group-hover:bg-white group-hover:text-blue-600 hover:shadow-md"
        onClick={nextSlide}
      >
        ❯
      </button>
      </div>



    </section>
  );
};

export default FirstRecommendations;
