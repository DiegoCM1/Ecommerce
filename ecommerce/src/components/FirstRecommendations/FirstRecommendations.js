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
      prevIndex + ITEMS_PER_PAGE >= recentItems.length
        ? 0
        : prevIndex + ITEMS_PER_PAGE
    );
  };

  // Function to move to the previous set of items
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? recentItems.length - ITEMS_PER_PAGE
        : prevIndex - ITEMS_PER_PAGE
    );
  };

  return (
    <section className="my-8 group">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden mx-32 relative">
        {/* Sliding Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / ITEMS_PER_PAGE) * 100}%)`,
          }}
        >
          {/* Map through the items and display each one */}
          {recentItems.map((item, index) => (
            <div key={index} className="w-1/6 flex-shrink-0 px-2">
              <SeparatedCard item={item} />
            </div>
          ))}
        </div>

        {/* Left Navigation Button (Hidden at Start) */}
        {currentIndex > 0 && (
          <button
            className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 rounded-full py-5 px-7 bg-white text-blue-600 shadow-lg transition"
            onClick={prevSlide}
          >
            ❮
          </button>
        )}

        {/* Right Navigation Button (Hidden at End) */}
        {currentIndex + ITEMS_PER_PAGE < recentItems.length && (
          <button
            className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 rounded-full py-5 px-7 bg-white text-blue-600 shadow-lg transition"
            onClick={nextSlide}
          >
            ❯
          </button>
        )}
      </div>
    </section>
  );
};

export default FirstRecommendations;
