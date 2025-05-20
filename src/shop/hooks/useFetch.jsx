import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";

export const useFetch = (queryParam) => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [initalLoad, setInitalLoad] = useState(true);
  const [productos, setProducts] = useState([])


  const createProducts = (images) => {
    const nuevosProductos = images.map(({ src, alt }) => ({
      src: src.medium,
      price: setRandomPrice(),
      alt,
    }));

    setProducts(nuevosProductos);
    return nuevosProductos;
  };

  const getRequest = async (query) => {
    setIsLoading(true);
    const { photos } = await getProducts(query);
    createProducts(photos);
    setIsLoading(false);
  };
  
  const setRandomPrice = () => {
    const random = Math.random();
    return (random * 100).toFixed(2);
  };

  useEffect(() => {
    if (initalLoad) {
      getRequest(queryParam); //Va a hacer una busqueda por defecto la primera vez
      setInitalLoad(false);
    }
  }, []);

  return {
    productos,
    isLoading,
    query,
    setQuery,
    getRequest,
  };
};
