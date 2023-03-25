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
interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}
interface MyContextType {
  value: string;
  setValue: (value: string) => void;
}
const { data } = useLoaderData() as LoaderData;
// const defaultState = {
//   dark: false,
// };
// export const ProductContext = createContext<IThemeContext>(defaultState);
export const ProductContext = createContext<MyContextType>({
  value: "",
  setValue: () => {},
});

export const ProductProvider = ({ children }: ProductProviderProps) => {
  // const [dark, setShowIn] = useState<boolean>(false);
  // const [name, setName] = useState<string>("");
  // const [newLoSorted, setLoSorted] = useState(data?.data ?? []);
  // const [dataNew, setData] = useState("Hello from App component!");
  const [value, setValue] = useState("");

  return (
    <ProductContext.Provider value={{ value, setValue }}>
      {children}
    </ProductContext.Provider>
  );
};

// export default ProductProvider;
