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
  const [allData, setAllData] = useState([]);
  const [newLoSorted, setLoSorted] = useState(allData);
  const [filteredCartItems, setFilteredCartItems] = useState<any>([]);
  const [filtervalue, setFilterValue] = useState("all");
  const [category, setselctedCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setInputSearch] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await getProducts();
      const newData: any = await response;

      setAllData(newData?.data?.data);
      setLoSorted(newData?.data?.data);
    }
    fetchData();
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
    setLoSorted(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    handleFilter();
  }, [category]);

  const handleFilter = () => {
    let updatedCategory = [...allData];
    if (category !== "all") {
      updatedCategory = updatedCategory.filter(
        (item: any) => item?.type === category
      );
      setLoSorted(updatedCategory);
    } else {
      setLoSorted(updatedCategory);
    }
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
        setselctedCategory,
        category,
        search,
        setInputSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
