import { createContext, useState, useEffect } from "react";
interface DataProviderProps {
  children: React.ReactNode;
}
export const DataContext = createContext({});
export const DataProvider = ({ children }: DataProviderProps) => {
  const [nameMy, setNameMy] = useState("aliraza");
  return (
    <DataContext.Provider
      value={{
        nameMy,
        setNameMy,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
