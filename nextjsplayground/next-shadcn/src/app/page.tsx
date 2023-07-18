"use client";
import Image from "next/image";
import { ButtonDemo } from "../componentUI/buttonUI";
import React, { useState } from "react";

export default function Home() {
  const [first, setfirst] = useState("second");
  return (
    <main className="h-screen bg-gray-50 w-screen">
      hi this is next-shadcn
      {first}
      <ButtonDemo />
    </main>
  );
}
