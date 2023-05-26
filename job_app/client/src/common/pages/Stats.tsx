import { useContext, useEffect } from "react";
import { StatisticsContext } from "../../contexts/StaticticsContext";
import myCase from "../../assets/pending.png";
function Stats() {
  const { getJobStatic, statistic, declined, pending, interview }: any =
    useContext(StatisticsContext);
  useEffect(() => {
    getJobStatic()
      .then((data: any) => {
        // Do something with the retrieved data
        console.log(data);
      })
      .catch((error: any) => {
        console.error("Error retrieving data:", error);
      });
  }, []); // Empty dependency array to run the effect only once

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

      <div className="bg-white rounded-md shadow-lg px-10 py-5  w-96   border-b-4 border-yellow-600">
        <div className="flex justify-evenly gap-16 text-4xl	 text-yellow-600">
          <h2 className=" font-semibold mb-2 text-6xl">{interview.length}</h2>
          <i className="ri-briefcase-line bg-yellow-100 p-3 rounded-md"></i>
        </div>
        <p className="text-gray-600 text-2xl text-center p-1 mt-10">
          Interviews Scheduled
        </p>
      </div>

      <div className="bg-white rounded-md shadow-lg px-10 py-5  w-96   border-b-4 border-yellow-600">
        <div className="flex justify-evenly gap-16 text-4xl	 text-yellow-600">
          <h2 className=" font-semibold mb-2 text-6xl">{declined.length}</h2>
          <i className="ri-briefcase-line bg-yellow-100 p-3 rounded-md"></i>
        </div>
        <p className="text-gray-600 text-2xl text-center p-1 mt-10">
          Jobs Declined
        </p>
      </div>
    </div>
  );
}

export default Stats;
