import React from "react";
import { FaYoutube, FaFacebook, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="sticky top-0 drop-shadow-xl w-full bg-slate-600 text-white p-4">
      <div className="flex justify-evenly flex-wrap text-center  text-4xl">
        <div>ali raza</div>
        <div className="flex gap-4 pt-2">
          <FaYoutube />
          <FaFacebook />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}
