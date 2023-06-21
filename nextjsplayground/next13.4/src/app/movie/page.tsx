import React from "react";

export default function Movie() {
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cc87d10f33mshabe1450080883edp10c109jsn3285bb322b99",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Movie
    </div>
  );
}
