import React from "react";
import { ProductCard } from "../components/ProductCard";
import { getProducts } from "../helpers/getProducts";
import { useFetch } from "../hooks/useFetch";

export const Clothes = () => {
  const { productos, isLoading, query, setQuery, getRequest } = useFetch("clothes");

  return (
    <div style={{ display: "flex" , flexWrap : 'wrap', gap: "1rem", padding: "2rem" }}>
      {productos.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
};
