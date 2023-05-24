import axios from "axios";
import React, { createContext, useState } from "react";
import { ISHow } from "../common/types/type";
import { useAuthContext } from "../modules/users/hooks/useUser";
interface ProductProviderProps {
  children: React.ReactNode;
}
export const StatisticsContext = createContext({});
function StaticProvider({ children }: ProductProviderProps) {
  const [statistic, setStatistic] = useState<any>([]);
  const { user }: any = useAuthContext();
  const [page, setPage] = useState(0);

  const getJobStatic = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/jobs`,
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
      setStatistic(response?.data.jobs ?? []);
      console.log(statistic, "..>>.");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const declined: number[] = [];
  const pending: number[] = [];
  const interview: number[] = [];
  const newSearchR = statistic.map((f: any) =>
    f.status === "declined"
      ? declined.push(f.status)
      : f.status === "pending"
      ? pending.push(f.status)
      : f.status === "interview"
      ? interview.push(f.status)
      : null
  );

  console.log(declined.length, ",,", interview.length, "p", pending.length);
  return (
    <StatisticsContext.Provider
      value={{
        page,
        setPage,
        getJobStatic,
        statistic,
        declined,
        pending,
        interview,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
}

export default StaticProvider;
