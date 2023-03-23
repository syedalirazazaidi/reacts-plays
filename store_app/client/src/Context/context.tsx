import React, { useState, createContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ProductsType } from "../types/interface";
interface IProductContext {
  ShowIn: boolean;
  data?: ProductsType;
}
interface ProductProviderProps {
  children: React.ReactNode;
}
type LoaderData = {
  data?: ProductsType;
};

const { data } = useLoaderData() as LoaderData;
const defaultState = {
  ShowIn: false,
  data,
};

export const ProductState = createContext<any>(defaultState);

const ContextProduct = ({ children }: ProductProviderProps) => {
  const [ShowIn, setShowIn] = useState<boolean>(false);
  const [newLoSorted, setLoSorted] = useState(data?.data);

  return (
    <ProductState.Provider value={{ ShowIn, newLoSorted, setLoSorted }}>
      {children}
    </ProductState.Provider>
  );
};

export default ContextProduct;
