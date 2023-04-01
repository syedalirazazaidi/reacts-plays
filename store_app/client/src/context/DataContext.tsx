import React, { useState, createContext, useEffect } from "react";
import { ProductsType } from "../types/interface";
import { getProducts } from "../api/getProducts";

interface ProductProviderProps {
  children: React.ReactNode;
}

type LoaderData = {
  data?: ProductsType;
};
export function loader() {
  getProducts();
}

export const DataContext = createContext({});

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [newLoSorted, setLoSorted] = useState([]);
  const [filteredCartItems, setFilteredCartItems] = useState<any>([]);
  const [filtervalue, setFilterValue] = useState("all");

  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    async function fetchData() {
      const response = await getProducts();
      const newData: any = await response;
      setLoSorted(newData?.data?.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredData(newLoSorted);
  }, []);
  const handleSort = () => {
    const sorted = [...newLoSorted].sort((a: any, b: any) => {
      if (a.name < b.name) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a.name > b.name) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    setFilteredData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleFilter = () => {
    if (filtervalue === "all") {
      setFilteredData(newLoSorted);
    }

    const filtered = newLoSorted.filter((item: any) =>
      item?.type.includes(filtervalue)
    );
    setFilteredData(filtered);
  };

  return (
    <DataContext.Provider
      value={{
        filteredCartItems,
        setFilteredCartItems,
        setLoSorted,
        newLoSorted,
        setFilterValue,
        filtervalue,
        handleFilter,
        filteredData,
        handleSort,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
