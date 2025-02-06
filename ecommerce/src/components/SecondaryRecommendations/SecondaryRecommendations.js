import React, { useState } from "react";
import JoinedCard from "../Cards/JoinedCard";
import { recentItems } from "../../data/Products";

const ITEMS_PER_PAGE = 6;

const SecondaryRecommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + ITEMS_PER_PAGE >= recentItems.length ? 0 : prevIndex + ITEMS_PER_PAGE
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recentItems.length - ITEMS_PER_PAGE : prevIndex - ITEMS_PER_PAGE
    );
  };

  return (
    <section className="my-8 mx-32 bg-white shadow-md py-5 px-5 rounded-lg relative group">
      {/* Section Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Secondary Recommendations</h2>

      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / ITEMS_PER_PAGE) * 100}%)` }}
        >
          {recentItems.map((item, index) => (
            <div key={index} className="w-1/6 flex-shrink-0 px-2">
              <JoinedCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full p-4 bg-transparent text-transparent group-hover:bg-white group-hover:text-blue-600 hover:shadow-md"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full p-4 bg-transparent text-transparent group-hover:bg-white group-hover:text-blue-600 hover:shadow-md"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(recentItems.length / ITEMS_PER_PAGE) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * ITEMS_PER_PAGE)}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex / ITEMS_PER_PAGE === index ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default SecondaryRecommendations;
