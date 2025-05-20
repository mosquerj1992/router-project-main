import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

export const Accesories = () => {

  const { productos, isLoading, query, setQuery, getRequest } = useFetch("accesories");

  return (
    <div style={{ display: "flex", flexWrap: 'wrap' ,gap: "1rem", padding: "2rem" }}>
      {productos.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
};
