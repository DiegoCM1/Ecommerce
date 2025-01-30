import React from "react";
import SeparatedCard from "../Cards/SeparatedCard";
import { recentItems } from "../../data/Products"; // ✅ Correct import

const FirstRecommendations = () => {
  return (
    <section className="my-8 px-32">
      {/* Items Grid */}
      <div className="grid grid-cols-6 gap-5">
        {recentItems && recentItems.length > 0 ? ( // Check if recentItems is not empty
          recentItems.map((item, index) => ( // ✅ Correct variable usage
            <SeparatedCard key={index} item={item} /> // Component call
          ))
        ) : (
          <p>No recommendations available</p> // Fallback message
        )}
      </div>
    </section>
  );
};

export default FirstRecommendations;
