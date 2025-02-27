import React, { useState } from "react";

const PromotionsCarousel = () => {
  // Mock data for promotions (simulates data you might get from an API)
  const promotions = [
    { id: 1, image: `${process.env.PUBLIC_URL}/images/promotion1.png`, alt: "Promotion 1" },
    { id: 2, image: `${process.env.PUBLIC_URL}/images/promotion2.png`, alt: "Promotion 2" },
    { id: 3, image: `${process.env.PUBLIC_URL}/images/promotion3.png`, alt: "Promotion 3" }
  ];

  // State to track the current slide's index (starts at 0)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide (loops back to the first slide if at the last one)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide (loops back to the last slide if at the first one)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  return (
    // Main container for the carousel
    <div className="relative w-full group">
      {/* Carousel container (controls overflow for sliding effect) */}
      <div className="overflow-hidden relative">
        {/* Slide track (translates horizontally to show current slide) */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Mapping through promotions to create slides */}
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="w-full flex-shrink-0 bg-gray-200"
            >
              {/* Slide image */}
              <img
                src={promo.image}
                alt={promo.alt}
                className="w-full h-32 md:h-56 lg:h-64 object-fill md:object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full p-2 sm:p-3 md:p-4 bg-transparent text-transparent group-hover:bg-white group-hover:text-blue-600 hover:shadow-md"
        onClick={prevSlide} // Triggers previous slide function
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full p-2 sm:p-3 md:p-4 bg-transparent text-transparent group-hover:bg-white group-hover:text-blue-600 hover:shadow-md"
        onClick={nextSlide} // Triggers next slide function
      >
        ❯
      </button>

      {/* Slide indicators (dots) */}
      <div className="flex justify-center mt-4">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)} // Sets the current slide when clicked
            className={`h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 rounded-full mx-1 ${
              currentIndex === index
                ? "bg-blue-500" // Active slide indicator
                : "bg-gray-300 hover:bg-gray-400" // Inactive slide indicator
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PromotionsCarousel;
