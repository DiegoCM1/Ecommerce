// filepath: /C:/Users/luisc/OneDrive/Escritorio/Dev/Ecommerce/ecommerce/src/App.js
import React from "react";
import Header from "./components/Header/Header";
import Carrousel from "./components/Promotions/PromotionsCarousel";
import RecommendationsSection from "./components/FirstRecommendations/FirstRecommendations";
import "./index.css";
import SecondaryRecommendations from "./components/SecondaryRecommendations/SecondaryRecommendations";

function App() {
  return (
    <div className="App bg-gray-100 font-montserrat font-sans-serif">
      <Header />
      <Carrousel />
      <RecommendationsSection />
      <SecondaryRecommendations
        topic="Secondary Recommendations"
      />

      <SecondaryRecommendations
        topic="Third Recommendations"
      />

      <SecondaryRecommendations
        topic="Fourth Recommendations"
      />
    </div>
  );
}

export default App;
