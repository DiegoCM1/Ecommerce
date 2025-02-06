import React, { useState } from "react";

const PromotionsCarousel = () => {
  // Mock data for promotions
  const promotions = [
    { id: 1, image: `${process.env.PUBLIC_URL}/images/promotion1.png`, alt: "Promotion 1" },
    { id: 2, image: `${process.env.PUBLIC_URL}/images/promotion2.png`, alt: "Promotion 2" },
    { id: 3, image: `${process.env.PUBLIC_URL}/images/promotion3.png`, alt: "Promotion 3" }
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full group">
      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="min-w-full flex-shrink-0 bg-gray-200"
            >
              <img
                src={promo.image}
                alt={promo.alt}
                className="w-full h-64 object-cover"
              />
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
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PromotionsCarousel;
