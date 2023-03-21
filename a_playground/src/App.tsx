import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const employees = [
    {
      _id: "64180d1186383ef4ba16d244",
      name: "modern bookshelf",
      price: 31,
      featured: true,
      rating: 4.5,
      image: "./img/table_b.png",
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "caressa",
      __v: 0,
    },
    {
      _id: "64180d1186383ef4ba16d245",
      name: "modern poster",
      price: 30,
      featured: false,
      rating: 4.5,
      image: "./img/table_b.png",
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "liddy",
      __v: 0,
    },
    {
      _id: "64180d1186383ef4ba16d240",
      name: "emperor bed",
      price: 23,
      featured: false,
      rating: 4.5,
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "ikea",
      __v: 0,
    },
    {
      _id: "64180d1186383ef4ba16d243",
      name: "leather sofa",
      price: 99,
      featured: false,
      rating: 4.5,
      image: "./img/table_b.png",
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "caressa",
      __v: 0,
    },
    {
      _id: "64180d1186383ef4ba16d241",
      name: "entertainment center",
      price: 59,
      featured: true,
      rating: 4.5,
      image: "./img/table_b.png",
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "caressa",
      __v: 0,
    },
    {
      _id: "64180d1186383ef4ba16d23f",
      name: "dining table",
      price: 42,
      featured: false,
      rating: 4.55,
      image: "./img/table_b.png",
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "ikea",
      __v: 0,
    },
    {
      _id: "64180d1186383ef4ba16d23b",
      name: "albany sectional",
      price: 109,
      featured: false,
      rating: 5,
      image: "./img/table_a.png",
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "liddy",
      __v: 0,
    },
    {
      _id: "64180d1186383ef4ba16d23a",
      name: "accent chair",
      price: 25,
      featured: false,
      rating: 4,
      image: "./img/table_b.png",
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "marcos",
      __v: 0,
    },
    {
      _id: "64180d1186383ef4ba16d23e",
      name: "bar stool",
      price: 40,
      featured: false,
      rating: 4.6,
      image: "./img/table_b.png",
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "liddy",
      __v: 0,
    },
    {
      _id: "64180d1186383ef4ba16d242",
      name: "high-back bench",
      price: 39,
      featured: true,
      rating: 4.5,
      image: "./img/table_b.png",
      createdAt: "2023-03-20T07:36:42.736Z",
      company: "ikea",
      __v: 0,
    },
  ];
  const numAscending = [...employees].sort((a: any, b: any) =>
    a.name > b.name ? 1 : -1
  );
  console.log(numAscending);
  return <div>jk</div>;
}

export default App;
