import axios from "axios";
import React, { createContext, useState } from "react";
import { useAuthContext } from "../modules/users/hooks/useUser";
interface ProductProviderProps {
  children: React.ReactNode;
}
export const StatisticsContext = createContext({});
function StaticProvider({ children }: ProductProviderProps) {
  const [statistic, setStatistic] = useState<any>([]);
  const [month, setMonth] = useState<any>([]);
  const { user }: any = useAuthContext();
  const [page, setPage] = useState(0);
  const [monthlyCounts, setMonthlyCounts] = useState([]);
  const [monthlyname, setMonthlyName] = useState();

  const getJobStatic = async () => {
    try {
      const response = await axios
        .get(
          `http://localhost:5000/api/v1/jobs/getstats`,
          // ?page=${page}
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const formattedData = response?.data.monthlyApplications.map(
            (dataPoint: any) => ({
              ...dataPoint,
              monthName: getMonthName(dataPoint._id.month),
              // yearName: getMonthName(dataPoint._id.year),
            })
          );
          setMonthlyName(formattedData);

          setStatistic(response?.data.jobs ?? []);
          setMonth(response?.data.monthlyApplications ?? []);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(monthlyname, "?/////////////////");
  React.useEffect(() => {
    getJobStatic();
  }, []);
  const getMonthName = (monthNumber: any) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthNumber - 1];
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
        month,
        monthlyCounts,
        monthlyname,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
}

export default StaticProvider;
