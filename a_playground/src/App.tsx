// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const employees = [
//     {
//       _id: "64180d1186383ef4ba16d244",
//       name: "modern bookshelf",
//       price: 31,
//       featured: true,
//       rating: 4.5,
//       image: "./img/table_b.png",
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "caressa",
//       __v: 0,
//     },
//     {
//       _id: "64180d1186383ef4ba16d245",
//       name: "modern poster",
//       price: 30,
//       featured: false,
//       rating: 4.5,
//       image: "./img/table_b.png",
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "liddy",
//       __v: 0,
//     },
//     {
//       _id: "64180d1186383ef4ba16d240",
//       name: "emperor bed",
//       price: 23,
//       featured: false,
//       rating: 4.5,
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "ikea",
//       __v: 0,
//     },
//     {
//       _id: "64180d1186383ef4ba16d243",
//       name: "leather sofa",
//       price: 99,
//       featured: false,
//       rating: 4.5,
//       image: "./img/table_b.png",
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "caressa",
//       __v: 0,
//     },
//     {
//       _id: "64180d1186383ef4ba16d241",
//       name: "entertainment center",
//       price: 59,
//       featured: true,
//       rating: 4.5,
//       image: "./img/table_b.png",
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "caressa",
//       __v: 0,
//     },
//     {
//       _id: "64180d1186383ef4ba16d23f",
//       name: "dining table",
//       price: 42,
//       featured: false,
//       rating: 4.55,
//       image: "./img/table_b.png",
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "ikea",
//       __v: 0,
//     },
//     {
//       _id: "64180d1186383ef4ba16d23b",
//       name: "albany sectional",
//       price: 109,
//       featured: false,
//       rating: 5,
//       image: "./img/table_a.png",
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "liddy",
//       __v: 0,
//     },
//     {
//       _id: "64180d1186383ef4ba16d23a",
//       name: "accent chair",
//       price: 25,
//       featured: false,
//       rating: 4,
//       image: "./img/table_b.png",
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "marcos",
//       __v: 0,
//     },
//     {
//       _id: "64180d1186383ef4ba16d23e",
//       name: "bar stool",
//       price: 40,
//       featured: false,
//       rating: 4.6,
//       image: "./img/table_b.png",
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "liddy",
//       __v: 0,
//     },
//     {
//       _id: "64180d1186383ef4ba16d242",
//       name: "high-back bench",
//       price: 39,
//       featured: true,
//       rating: 4.5,
//       image: "./img/table_b.png",
//       createdAt: "2023-03-20T07:36:42.736Z",
//       company: "ikea",
//       __v: 0,
//     },
//   ];
//   const numAscending = [...employees].sort((a: any, b: any) =>
//     a.name > b.name ? 1 : -1
//   );
//   console.log(numAscending);
//   return <div>jk</div>;
// }

// export default App;
import React, { useState } from "react";
import { ThemeContext } from "./Theme/ThemeContext";
import Header from "./header";
function App() {
  // sum of array in the object using reduce
  // const material = [
  //   { name: "aliraza", numb: 10 },
  //   { name: "aliraza", numb: 70 },
  //   { name: "aliraza", numb: 110 },
  // ];
  // const sumadd = material.reduce((acc, iter): number => {
  //   return acc + iter.numb;
  // }, 0);
  // console.log(sumadd, "sumadd");
  // const numbers = [1, -7, 3, 19, -19];
  // const newdata = numbers.reduce((acu: any, iter: any): any => {
  //   return acu < iter ? acu : iter;
  // }, 1);
  // // const newdata = numbers.reduce((a, b): any => (a > b ? a : b));
  // console.log(newdata);

  // Two D array

  // const twoD = [
  //   ["ali", "raza"],
  //   ["day", "sun"],
  //   ["day", "mon"],
  // ];
  // console.log(twoD);
  // const arrayMy = ["green", "red", "blue", "orange", "red", "blue"];
  // var elementCount: any = {};
  // for (var i = 0; i < arrayMy.length; i++) {
  //   var element = arrayMy[i];
  //   if (elementCount[element]) {
  //     return (elementCount[element] += 1);
  //   } else {
  //     elementCount[element] = 1;
  //   }
  // }
  // console.log(elementCount, "??");
  // var arr = [1, 2, 3, 4, 5];
  // var doubled = arr.reduce(function (memo, val) {
  //   memo.push(val * 2);
  //   console.log(memo, "?");
  //   return memo;
  // }, []);

  // console.log(doubled);
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;
