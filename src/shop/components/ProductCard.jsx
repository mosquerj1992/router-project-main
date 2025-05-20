import React from "react";

export const ProductCard = ({ src, alt, price, category, gender }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition-transform duration-300 p-4 bg-white w-full">
      <img src={src} alt={alt} style={{ width: "100%" }} />
      <h3>{alt}</h3>
      <p>${price}</p>
    </div>
  );
};
