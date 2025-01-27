// filepath: /C:/Users/luisc/OneDrive/Escritorio/Dev/Ecommerce/ecommerce/src/App.js
import React from "react";
import Header from "./components/Header/Header";
import Carrousel from "./components/Promotions/PromotionsCarousel";
import RecommendationsSection from "./components/FirstRecommendations/FirstRecommendations";
import TopicRecommendations from "./components/TopicRecommendations/TopicRecommendations";
import Products from "./components/Products";
import "./index.css";
import SecondaryRecommendations from "./components/SecondaryRecommendations/SecondaryRecommendations";

function App() {
  return (
    <div className="App bg-gray-100">
      <Header />
      <Carrousel />
      <RecommendationsSection />
      <TopicRecommendations
        topic="Popular Categories"
        recommendations={[
          { image: "path-to-image1.jpg", title: "Product 1", price: 299 },
          { image: "path-to-image2.jpg", title: "Product 2", price: 399 },
        ]}
      />
      <SecondaryRecommendations
        topic="Secondary Recommendations"
        recommendations={[
          { image: "path-to-image1.jpg", title: "Product 1", price: 299 },
          { image: "path-to-image2.jpg", title: "Product 2", price: 399 },
        ]}
      />
      <Products />
    </div>
  );
}

export default App;
