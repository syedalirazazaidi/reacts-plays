// import React from "react";

// function page({ params }: any) {

//   return <div>I m dynamic movies,{id}</div>;
// }

// export default page;
import React from "react";

export default async function page({ params }: any) {
  const { id } = params;
  const url: any = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cc87d10f33mshabe1450080883edp10c109jsn3285bb322b99",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  return (
    <div className="grid grid-cols-3 gap-4">
      {data &&
        data?.map((item: any, index: any) => (
          <div key={item?.details?.synopsis} className="bg-white p-4 shadow">
            <p className="text-xl font-bold ">{item?.details?.synopsis}</p>
          </div>
        ))}
    </div>
  );
}
