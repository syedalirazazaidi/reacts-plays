import React, { useState, createContext, useEffect } from "react";
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
  // data,
};

export const ProductContext = createContext<any>({});

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [ShowIn, setShowIn] = useState<boolean>(false);
  // const [newLoSorted, setLoSorted] = useState(data?.data ?? []);

  return (
    <ProductContext.Provider value={{ ShowIn }}>
      {children}
    </ProductContext.Provider>
  );
};

// export default ProductProvider;
