import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Carrousel from "./components/Promotions/PromotionsCarousel";
import RecommendationsSection from "./components/FirstRecommendations/FirstRecommendations";
import SecondaryRecommendations from "./components/SecondaryRecommendations/SecondaryRecommendations";
import Favorites from "./components/Favorites/Favorites";
import Product from "./components/Cards/ProductCard";
import "./index.css";

function App() {
  return (
    <div className="App bg-gray-100 font-montserrat font-sans-serif">
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Carrousel />
              <RecommendationsSection />
              <SecondaryRecommendations topic="Secondary Recommendations" />
              <SecondaryRecommendations topic="Third Recommendations" />
              <SecondaryRecommendations topic="Fourth Recommendations" />
            </>
          }
        />
        {/* Favorites Page */}
        <Route path="/favorites" element={<Favorites />} />
        {/* Product Page */}
        <Route path="/ProductCard" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
