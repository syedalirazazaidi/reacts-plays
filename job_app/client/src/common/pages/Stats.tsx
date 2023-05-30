import { useContext, useEffect } from "react";
import { StatisticsContext } from "../../contexts/StaticticsContext";
import myCase from "../../assets/pending.png";
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
} from "recharts";
import { MonthlyContext } from "../../contexts/MonthlyContext";
function Stats() {
  const { getJobStatic, month, statistic, declined, pending, interview }: any =
    useContext(StatisticsContext);
  const { monthly, getMonthlyStatic, monthlyCounts }: any =
    useContext(MonthlyContext);

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
  console.log(month, "/month///");

  const xAxisData = month?.map((monthname: any) => {
    const { month } = monthname?._id;

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
    return monthNames[month - 1];
  });

  console.log(xAxisData, "???????///////");
  const seriesData = month?.map((count: count) => count?.count);

  const option = {
    xAxis: {
      type: "category",
      data: xAxisData,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
        data: seriesData,
      },
    ],
  };

  // chart.setOption(option);

  return (
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

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={xAxisData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="option" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="position"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Stats;
