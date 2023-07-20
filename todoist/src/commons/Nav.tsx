"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Nav() {
  const [first, setfirst] = useState("second");
  useEffect(() => {
    return () => {
      "second";
    };
  }, []);

  return (
    <div>
      Nav
      <Link href=""></Link>
      <Image src="" alt="" />
    </div>
  );
}
