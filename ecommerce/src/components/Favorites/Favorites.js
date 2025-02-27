import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteCard from "../Cards/FavoriteCard";
import { recentItems as initialItems } from "../../data/Products"; // Rename to avoid confusion

const ProductCard = () => {
  const navigate = useNavigate(); // Navigate to the main page
  const [items, setItems] = useState(initialItems); // Track state
  const [isRemoving, setIsRemoving] = useState({}); // Track removing state per item

  const removeItem = (id) => {
    setIsRemoving((prev) => ({ ...prev, [id]: true })); // Mark item as animating

    setTimeout(() => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Remove after animation
      setIsRemoving((prev) => ({ ...prev, [id]: false })); // Cleanup (optional)
    }, 300); // Wait 300ms for animation
  };

  return (
    <section className="my-8 mx-32 bg-white shadow-md rounded-sm">
      <div className="grid grid-rows-3 gap-4">
        {items.map((product) => (
          <FavoriteCard
            key={product.id} // Use `id` instead of `title` for a unique key
            item={product}
            removeItem={removeItem}
            isRemoving={isRemoving[product.id] || false} // FIXED: Correctly pass the removing state
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
