import React from "react";
import JoinedCard from "../Cards/JoinedCard";
import { recentItems } from "../../data/Products"; // ✅ Correct import


const SecondaryRecommendations = () => {

  return (
    <section className="my-8 mx-32 bg-white shadow-md py-5 px-5 rounded-lg">
      {/* Section Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Secondary Recommendations
      </h2>

      {/* Items Grid */}
      <div className="grid grid-cols-6 gap-5 mb-4">
        {recentItems && recentItems.length > 0 ? ( // Check if recentItems is not empty
          recentItems.map((item, index) => ( // ✅ Correct variable usage
            <JoinedCard key={index} item={item} /> // Component call
          ))
        ) : (
          <p>No recommendations available</p> // Fallback message
        )}
      </div>
    </section>
  );
};

export default SecondaryRecommendations;
