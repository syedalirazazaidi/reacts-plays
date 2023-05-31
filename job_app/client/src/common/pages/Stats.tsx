import { useContext, useEffect, useState } from "react";
import { StatisticsContext } from "../../contexts/StaticticsContext";
interface count {
  count: number;
}
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
function Stats() {
  const {
    getJobStatic,
    month,

    monthlyname,
    declined,
    pending,
    interview,
  }: any = useContext(StatisticsContext);
  const [barChart, isbarOpen] = useState(false);
  useEffect(() => {
    getJobStatic()
      .then((data: any) => {
        // Do something with the retrieved data
        console.log(data);
      })
      .catch((error: any) => {
        console.error("Error retrieving data:", error);
      });
  }, []);
  const handleClick = () => {
    isbarOpen(!barChart);
  };
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
  const monthName = getMonthName(month._id?.month);
  return (
    <div>
      <div className="flex justify-between gap-2 flex-wrap p-6">
        <div className="bg-white rounded-md shadow-lg px-10 py-5  w-96   border-b-4 border-yellow-600">
          <div className="flex justify-evenly gap-16 text-4xl	 text-yellow-600">
            <h2 className=" font-semibold mb-2 text-6xl">{pending.length}</h2>
            <i className="ri-briefcase-line bg-yellow-100 p-3 rounded-md"></i>
          </div>
          <p className="text-gray-600 text-2xl text-center p-1 mt-10">
            Pending Applications
          </p>
        </div>

        <div className="bg-white rounded-md shadow-lg px-10 py-5  w-96   border-b-4 border-cyan-600">
          <div className="flex justify-evenly gap-16 text-4xl	 text-yellow-600">
            <h2 className=" font-semibold mb-2 text-6xl">{interview.length}</h2>

            <i className="ri-honour-line bg-cyan-100 p-3 rounded-md"></i>
          </div>
          <p className="text-gray-600 text-2xl text-center p-1 mt-10">
            Interviews Scheduled
          </p>
        </div>

        <div className="bg-white rounded-md shadow-lg px-10 py-5  w-96   border-b-4 border-teal-600">
          <div className="flex justify-evenly gap-16 text-4xl	 text-yellow-600">
            <h2 className=" font-semibold mb-2 text-6xl">{declined.length}</h2>
            <i className="ri-briefcase-line bg-teal-100 p-3 rounded-md"></i>
          </div>
          <p className="text-gray-600 text-2xl text-center p-1 mt-10">
            Jobs Declined
          </p>
        </div>
      </div>
      <div className="text-center py-3">
        <p className="text-2xl">Monthly Applications</p>
        <button
          className="hover:bg-teal-50 hover:underline py-2 hover: "
          onClick={handleClick}
        >
          {barChart ? "Area Chart" : "Bar Chart"}
        </button>
      </div>

      {barChart ? (
        <ResponsiveContainer
          width="90%"
          height={300}
          className="md:w-64 lg:w-96 sm:w-32 mx-8 my-6"
        >
          <BarChart width={150} height={40} data={monthlyname}>
            <XAxis dataKey="monthName" className="w-1" />
            <YAxis />

            <Tooltip />
            <Bar
              type="monotone"
              dataKey="count"
              className="w-1"
              stroke="#1e3a8a"
              fill="#3b82f6"
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer
          width="90%"
          height={300}
          className="md:w-64 lg:w-96 sm:w-32 mx-8 my-6"
        >
          <AreaChart data={monthlyname}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="monthName" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#1e3a8a"
              fill="#3b82f6"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Stats;
