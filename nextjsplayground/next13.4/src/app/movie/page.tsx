import React from "react";
// import getAllmovie from "../../app/lib/getAllmovie";
import MovieCard from "../components/MovieCard";
export default async function Movie() {
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Hi!");
  //   }, 3000);
  // });
  const url: any =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=10&limit_suggestions=20&lang=en";

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
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <MovieCard data={data?.titles ?? []} />
    </div>
  );
}
