import React from "react";
import Image from "next/image";

export default function Myprofile() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-slate-700 dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/newmy.png"
        width={200}
        height={150}
        alt="ali raza"
        priority={true}
      />
    </section>
  );
}
