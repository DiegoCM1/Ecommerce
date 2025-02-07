import React from "react";

const ProductCard = () => {
  return (
    <section className="h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-4/5 bg-white shadow-md p-6 rounded-lg flex gap-6">
        {/* Left Side: Product Images */}
        <div className="w-2/5 flex items-center border border-red-600">
          <div className="flex gap-2 flex-col border border-blue-600">
            <img
              src=""
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 1"
            />
            <img
              src="/images/sample-product.jpg"
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 2"
            />
            <img
              src="/images/sample-product.jpg"
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 3"
            />
            <img
              src=""
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 1"
            />
            <img
              src="/images/sample-product.jpg"
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 2"
            />
            <img
              src="/images/sample-product.jpg"
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 3"
            />
            <img
              src=""
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 1"
            />
            <img
              src="/images/sample-product.jpg"
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 2"
            />
          </div>
          <img
            src="/images/sample-product.jpg"
            alt="Product"
            className="w-full h-96 object-contain border border-green-600"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="w-2/5 border border-blue-600">
          <p className="text-sm text-gray-500">New | +100 sold</p>
          <h1 className="text-2xl font-semibold">
            High-Performance Gaming Laptop - 16GB RAM, 1TB SSD
          </h1>
          <p className="text-4xl font-bold mt-2">$1,299</p>
          <p className="text-sm text-green-600 font-bold mt-1">Free Shipping</p>
          <p className="text-sm text-gray-500 mt-1">
            Delivery in 2-5 business days
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Sold by{" "}
            <span className="text-blue-600 cursor-pointer">
              TechStore Official
            </span>
          </p>
          <p className="text-sm text-gray-500">⭐ 4.8 | 320 Reviews</p>
        </div>
        <div className="w-1/5 border border-red-600">
        <div className="flex flex-col justify-center items-center">
            <button className="w-10/12 my-2  bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700">
              Buy Now
            </button>
            <button className="w-10/12 my-2 border border-blue-600 text-blue-600 py-3 rounded-md text-lg font-semibold hover:bg-blue-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
