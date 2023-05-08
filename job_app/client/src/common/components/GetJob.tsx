import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import axios from "axios";

function GetJob({ job }: any) {
  //   const [job, setJob] = useState<any>([]);
  const [jobget, Setjobget] = useState(job.jobs ?? []);

  const { isSetOpen, isOpen }: any = useContext(SidebarContext);

  console.log(job.jobs);
  //   console.log(job?.jobs[0]);
  //   if (job.jobs.length ?? []) {
  //     return <p>loading</p>;
  //   }

  //   if (job.jobs.length !== 0) {
  //     <p>loading</p>;
  //     // return <p>loading...</p>;
  //   }

  //   if (job.jobs.length !== 0) {
  //     console.log("first");
  //   } else {
  //     console.log("loading");
  //   }
  return (
    // <div className="flex justify-center gap-4  max-w-screen-3xl">
    //   <div className="max-w-lg p-8 mx-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <div className="container mx-auto">
    // <div className="grid grid-cols-3 gap-4">
    <div>
      {job?.jobs &&
        job?.jobs &&
        job?.jobs.map((data: any) => <p>{data.company}</p>)}
    </div>
    /* {job.jobs.length !== 0 &&
        job &&
        job?.jobs?.map((item: any, index: any) => (
          <div key={index} className="bg-gray-200 p-4">
            sdassdds
          </div>
        ))} */
    // </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default GetJob;
