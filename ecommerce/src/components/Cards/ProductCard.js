import React from "react";

const ProductCard = () => {
  return (
    <section className="h-screen bg-gray-100 flex justify-center pt-10 border border-blue-700">
      <div className="w-4/5 bg-white shadow-md p-6 rounded-lg flex gap-6 border-yellow-500">
        {/* First section */}
        <div className="w-2/5 flex items-center border border-red-600">
          <div className="flex gap-2 flex-col border border-blue-600">
            {" "}
            {/* Thumbnail container */}
            <img
              src={`${process.env.PUBLIC_URL}/images/vocho.jpg`}
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 1"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/vocho.jpg`}
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 2"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/vocho.jpg`}
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 3"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/vocho.jpg`}
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 1"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/vocho.jpg`}
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 2"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/vocho.jpg`}
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 3"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/vocho.jpg`}
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 1"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/vocho.jpg`}
              className="w-16 h-16 border p-1 cursor-pointer"
              alt="Thumb 2"
            />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/vocho.jpg`}
            alt="Product"
            className="object-fill border border-green-600 w-full"
          />
        </div>

        {/* Second section */}
        <div className="w-2/5 border border-blue-600 p-4 rounded-lg bg-white">
          {/* Brand link */}
          <p className="text-blue-600 cursor-pointer text-sm mb-2 hover:underline">
            See more products from this brand
          </p>

          {/* Condition & Sales */}
          <p className="text-sm text-gray-500 mb-1">New | +10 sold</p>

          {/* Product Title */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Volkswagen Sedan Vocho 1990
          </h1>

          {/* Reviews */}
          <p className="text-sm text-gray-400 mb-2">⭐ 5.0 | 320 Reviews</p>

          {/* Prices */}
          <p className="text-sm line-through text-gray-400">$1,500</p>
          <p className="text-4xl font-bold text-gray-900 mb-1">$1,200</p>

          {/* Payment Options */}
          <p className="text-blue-600 cursor-pointer text-sm mb-4 hover:underline">
            See more ways to pay
          </p>

          {/* Options */}
          <div>
            <div className="mb-4">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                Select Version
              </p>
              <div className="flex flex-wrap gap-2">
                <button className="border border-gray-300 px-4 py-2 text-sm text-gray-700 rounded-md hover:border-blue-600 hover:text-blue-600">
                  Standard
                </button>
                <button className="border border-gray-300 px-4 py-2 text-sm text-gray-700 rounded-md hover:border-blue-600 hover:text-blue-600">
                  Sport Edition
                </button>
                <button className="border border-gray-300 px-4 py-2 text-sm text-gray-700 rounded-md hover:border-blue-600 hover:text-blue-600">
                  Limited Edition
                </button>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-500 font-semibold mb-2">
                Select Transmission
              </p>
              <div className="flex gap-2">
                <button className="border border-gray-300 px-4 py-2 text-sm text-gray-700 rounded-md hover:border-blue-600 hover:text-blue-600">
                  Manual
                </button>
                <button className="border border-gray-300 px-4 py-2 text-sm text-gray-700 rounded-md hover:border-blue-600 hover:text-blue-600">
                  Automatic
                </button>
              </div>
            </div>
          </div>

          {/* Product Features */}
          <p className="font-semibold text-gray-800 mb-1">
            What you need to know about this product
          </p>
          <ul className="mb-4">
            <li className="text-sm text-gray-600">
              • Classic air-cooled rear-engine design
            </li>
            <li className="text-sm text-gray-600">
              • Highly fuel-efficient and low maintenance
            </li>
            <li className="text-sm text-gray-600">
              • Iconic design with a rich history
            </li>
            <li className="text-sm text-gray-600">
              • Lightweight and easy to handle
            </li>
            <li className="text-sm text-gray-600">
              • Affordable parts and strong aftermarket support
            </li>
          </ul>

          {/* Additional Links */}
          {[
            "See characteristics",
            "Related products section",
            "Other products from the seller",
            "Characteristics of the product section",
            "Description of the product section",
          ].map((text, index) => (
            <p
              key={index}
              className="text-blue-600 cursor-pointer text-sm hover:underline"
            >
              {text}
            </p>
          ))}

          {/* Final Reviews */}
          <p className="text-sm text-gray-500 mt-4">⭐ 4.8 | 320 Reviews</p>
        </div>

        {/* Third section */}
        <div className="w-1/5 border border-gray-300 p-3">
          <p className="text-sm text-green-600 font-bold mt-1">Free Shipping</p>
          <p className="text-blue-600 cursor-pointer text-sm">
            Arrives tomorrow
          </p>
          <p className="mt-6 text-sm text-gray-500">
            <span className="text-green-600 cursor-pointer">
              Retire for free
            </span>
            after tuesday in mailboxes and other places
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Available stock: <span className="text-green-600">In Stock</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">Quantity:1 unit</p>
          <div className="flex flex-col justify-center items-center">
            {" "}
            {/* Button container */}
            <button className="w-10/12 my-2  bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700">
              Buy Now
            </button>
            <button className="w-10/12 my-2 text-blue-600 bg-blue-100 py-3 rounded-md text-lg font-semibold hover:bg-blue-100">
              Add to Cart
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Sold by{" "}
            <span className="text-blue-600 cursor-pointer">
              TechStore Official
            </span>
          </p>
          <p className="text-sm text-gray-500">
            Mercado leader
            <span className="text-black">+1000 sales</span>
          </p>
          <p className="mt-6 text-sm text-gray-500">
            <span className="text-blue-600 cursor-pointer">Free return </span>
            You have 30 days from the date of delivery
          </p>
          <p className="mt-6 text-sm text-gray-500">
            <span className="text-blue-600 cursor-pointer">
              Protected purchase
            </span>
            Receive your product or get your money back
          </p>
          <div className="w-full flex flex-col justify-center items-center">
            <button className="w-10/12 my-4 border border-gray-300 text-blue-600 py-3 rounded-md font-semibold hover:bg-blue-100">
              Add to a list
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
