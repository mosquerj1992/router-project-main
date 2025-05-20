import React from "react";
import { getProductList } from "../helpers/Products";
import { ProductCard } from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const products = getProductList();

  const navigate = useNavigate();

  const onNavigate = (id) => {

    console.log(id)
    navigate(`/item/${id}`)
  }

  return (
    <div
    className="flex flex-wrap justify-center gap-6 p-4"
    >
      {products.map((p, i) => (
        <div 
          key={i} 
          className="flex flex-grow basis-[300px] max-w-[300px]"
          onClick={() => onNavigate(i)}
        >
          <ProductCard {...p}/>
        </div>
      ))}
    </div>
  );
};
