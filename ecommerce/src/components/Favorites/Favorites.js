import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteCard from "../Cards/FavoriteCard";

const ProductCard = ({ item }) => {
  const favoriteProducts = [
    {
      image: `${process.env.PUBLIC_URL}/images/challenger.jpg`,
      title: "Item 1",
      price: 299,
      originalPrice: 389,
      shippingType: "Free Shipping",
      interaction: "Seen recently",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/camaro.jpg`,
      title: "Item 2",
      price: 499,
      originalPrice: 649,
      shippingType: "⚡Full",
      interaction: "In your cart",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/challenger.jpg`,
      title: "Item 3",
      price: 199,
      originalPrice: 259,
      shippingType: "Pickup Available",
      interaction: "Visited",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/mustang.jpg`,
      title: "Item 4",
      price: 699,
      originalPrice: 909,
      shippingType: "Free Shipping",
      interaction: "You might like this",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/vocho.jpg`,
      title: "Item 5",
      price: 349,
      originalPrice: 459,
      shippingType: "Market Shipping",
      interaction: "In your favorites",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/audi.jpg`,
      title: "Item 6",
      price: 449,
      originalPrice: 589,
      shippingType: "Agreed with Seller",
      interaction: "Based on your searches",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/camaro2.png`,
      title: "Item 7",
      price: 599,
      originalPrice: 799,
      shippingType: "Free Shipping",
      interaction: "New Arrival",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/mclaren.png`,
      title: "Item 8",
      price: 799,
      originalPrice: 999,
      shippingType: "⚡Full",
      interaction: "Trending",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/mercedez.png`,
      title: "Item 9",
      price: 999,
      originalPrice: 1199,
      shippingType: "Pickup Available",
      interaction: "Best Seller",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/musclecar.png`,
      title: "Item 10",
      price: 399,
      originalPrice: 499,
      shippingType: "Market Shipping",
      interaction: "Limited Stock",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/mustang2.png`,
      title: "Item 11",
      price: 299,
      originalPrice: 389,
      shippingType: "Free Shipping",
      interaction: "Seen recently",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/pickuptruck.png`,
      title: "Item 12",
      price: 299,
      originalPrice: 389,
      shippingType: "Free Shipping",
      interaction: "Seen recently",
    },
  ];
  const navigate = useNavigate();

  return (
    <section className="my-8 mx-32 bg-white shadow-md py-5 px-5 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Your Favorites ❤️</h2>
      <div className="grid grid-cols-3 gap-4">
        {favoriteProducts.map((product) => (
            <FavoriteCard key={product.title} item={product} />
            ))
        }
        </div>
        <button onClick={() => navigate("/")}>
            Go back to the main page
        </button>
    </section>
  );
};

export default ProductCard;
