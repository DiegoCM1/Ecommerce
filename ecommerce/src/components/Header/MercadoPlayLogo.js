import React from "react";

const MercadoPlayLogo = () => {
  return (
    <a href="/">
    <img
      src={`${process.env.PUBLIC_URL}/images/mercado-play.png`}
      alt="Mercado Libre Logo"
      className="h-10"
    />
  </a>
  );
};

export default MercadoPlayLogo;
