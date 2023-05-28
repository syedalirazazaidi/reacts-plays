import axios from "axios";
import React, { createContext, useState } from "react";
import { ISHow } from "../common/types/type";
import { useAuthContext } from "../modules/users/hooks/useUser";
interface ProductProviderProps {
  children: React.ReactNode;
}
export const MonthlyContext = createContext({});
function MonthlyProvider({ children }: ProductProviderProps) {
  const [monthly, setMonthly] = useState<any>([]);
  const { user }: any = useAuthContext();
  const getMonthlyStatic = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/jobs/getmonthly`,
        // ?page=${page}
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      //   const jsonData = await response.json();
      //   setStatistic(jsonData);
      setMonthly(response?.data.jobs ?? []);
      console.log(monthly, "///////monthly///////");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <MonthlyContext.Provider value={{ monthly, getMonthlyStatic }}>
      {children}
    </MonthlyContext.Provider>
  );
}

export default MonthlyProvider;
