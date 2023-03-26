import React, { useState, createContext, useEffect } from "react";
import { ProductsType } from "../types/interface";
import { getProducts } from "../api/getProducts";
import { useLoaderData } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
// import { ProductsType } from "../types/interface";
// interface IProductContext {
//   ShowIn: boolean;
//   data?: ProductsType;
// }
interface ProductProviderProps {
  children: React.ReactNode;
}
// type LoaderData = {
//   data?: ProductsType;
// };
// interface IThemeContext {
//   dark: boolean;
//   toggleDark?: () => void;
// }
// interface MyContextType {
//   value: string;
//   setValue: (value: string) => void;
// }
// const { data } = useLoaderData() as LoaderData;
// const defaultState = {
//   dark: false,
// };
// export const ProductContext = createContext<IThemeContext>(defaultState);
// export const ProductContext = createContext<MyContextType>({
//   value: "",
//   setValue: () => {},
// });
type LoaderData = {
  data?: ProductsType;
};
export function loader() {
  getProducts();
}

export const DataContext = createContext({});

export const ProductProvider = ({ children }: ProductProviderProps) => {
  // const { data } = useLoaderData() as LoaderData;
  // console.log(data, "?????");
  // const [newLoSorted, setLoSorted] = useState();
  const { data } = useLoaderData() as LoaderData;

  const [value, setValue] = useState("aliraza");

  return (
    <DataContext.Provider value={{ value, setValue }}>
      {children}
    </DataContext.Provider>
  );
};
