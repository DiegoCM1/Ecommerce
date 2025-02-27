import React, { useState, useEffect } from "react";
import JoinedCard from "../Cards/JoinedCard";
import HorizontalCardMobile from "../Cards/HorizontalCardMobile";
import { recentItems } from "../../data/Products";

const ITEMS_PER_PAGE = 6;

const SecondaryRecommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // md breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + ITEMS_PER_PAGE >= recentItems.length
        ? 0
        : prevIndex + ITEMS_PER_PAGE
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? recentItems.length - ITEMS_PER_PAGE
        : prevIndex - ITEMS_PER_PAGE
    );
  };

  return (
    <section className="my-8 sm:mx-4 md:mx-16 lg:mx-32 bg-white shadow-md py-5 px-5 rounded-lg relative group">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold text-gray-800 mb-4">
        Secondary Recommendations
      </h2>

      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div
          className={`flex flex-col md:flex-row transition-transform duration-500 ease-in-out ${
            isMobile ? "overflow-y-scroll" : ""
          }`}
          style={{
            transform: isMobile
              ? "none"
              : `translateX(-${(currentIndex / ITEMS_PER_PAGE) * 100}%)`,
          }}
        >
          {recentItems.map((item, index) => (
            <div
              key={index}
              className={`px-2 ${
                isMobile ? "w-full flex-shrink-0" : "lg:w-1/6 flex-shrink-0"
              }`}
            >
              {isMobile ? (
                <HorizontalCardMobile item={item} />
              ) : (
                <JoinedCard item={item} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons (Hidden on Mobile and Tablet) */}
      {!isMobile && currentIndex > 0 && (
        <button
          className="absolute top-1/2 left-[-10px] md:left-[-15px] lg:left-[-20px] transform -translate-y-1/2 rounded-full py-3 px-5 md:py-4 md:px-6 lg:py-5 lg:px-7 bg-white text-blue-600 shadow-lg transition"
          onClick={prevSlide}
        >
          ❮
        </button>
      )}

      {!isMobile && currentIndex + ITEMS_PER_PAGE < recentItems.length && (
        <button
          className="absolute top-1/2 right-[-10px] md:right-[-15px] lg:right-[-20px] transform -translate-y-1/2 rounded-full py-3 px-5 md:py-4 md:px-6 lg:py-5 lg:px-7 bg-white text-blue-600 shadow-lg transition"
          onClick={nextSlide}
        >
          ❯
        </button>
      )}

      {/* Indicators (Hidden on Mobile and Tablet) */}
      {!isMobile && (
        <div className="flex justify-center mt-4">
          {Array.from({
            length: Math.ceil(recentItems.length / ITEMS_PER_PAGE),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * ITEMS_PER_PAGE)}
              className={`h-2 w-2 rounded-full mx-1 ${
                currentIndex / ITEMS_PER_PAGE === index
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      )}
    </section>
  );
};

export default SecondaryRecommendations;