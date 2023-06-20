"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between">
      <div className=" bg-red-200 w-full  p-4">
        <div className="">
          {/* width:'max-content' */}
          {/* <p className="border border-indigo-600 w-32 max-w-sm">
            ho do you do ho do you do ho do you do ho do you do ho do you do ho
            do you do
          </p> */}
        </div>
      </div>
      {/* <div className="w-1/3 aspect-1/1 bg-green-300 mb-24">box</div> */}
      <button
        className="bg-slate-700 mb-96 p-4 hover:bg-slate-500 pointer-events-none"
        onClick={() => alert("'hi do you do")}
      >
        {" "}
        change activity
      </button>
    </main>
  );
}
