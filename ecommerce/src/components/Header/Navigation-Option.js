import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation with React Router

const NavigationOption = ({ content, onClick, href, className = "", children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e); // Trigger custom click behavior
    } else if (href) {
      if (href.startsWith("http")) {
        window.location.href = href; // External link
      } else {
        navigate(href); // Internal navigation
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`text-gray-800 hover:text-gray-600 text-sm font-medium flex space-x-4 ${className}`}
    >
      {children || content}
    </button>
  );
};

export default NavigationOption;
