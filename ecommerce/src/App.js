import React from "react";
import { Routes, Route } from "react-router-dom"; // ❌ No need to import Router
import Header from "./components/Header/Header";
import Carrousel from "./components/Promotions/PromotionsCarousel";
import RecommendationsSection from "./components/FirstRecommendations/FirstRecommendations";
import SecondaryRecommendations from "./components/SecondaryRecommendations/SecondaryRecommendations";
import Favorites from "./components/Favorites/Favorites";
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
      </Routes>
    </div>
  );
}

export default App;
