import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteCard from "../Cards/FavoriteCard";
import { recentItems } from "../../data/Products";


const ProductCard = ({ item }) => {

  const navigate = useNavigate();

  return (
    <section className="my-8 mx-32 bg-white shadow-md rounded-sm">
      <div className="grid grid-rows-3 gap-4">
        {recentItems.map((product) => (
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
