import React from "react";

const HeaderLogo = () => {
  return (
    <a href="/">
      <img
        src={`${process.env.PUBLIC_URL}/images/mercado-libre-logo.png`}
        alt="Mercado Libre Logo"
        className="h-10"
      />
    </a>
  );
};

export default HeaderLogo;
