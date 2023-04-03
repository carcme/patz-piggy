"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function activateAdmin() {
  console.log("activateAdmin");
}

const Navbar = () => {
  return (
    <nav className="flex items-center bg-slate-700 flex-row justify-around py-12 gap-1 max-sm:py-6 px-4">
      <Link href={"/"}>
        <h1 className="text-6xl font-bold max-sm:text-4xl">Lindenhof Patz</h1>
      </Link>
      <div className="flex ">
        <a href={process.env.DATABASE_DASHBOARD} target="_blank">
          <Image
            className="z-0"
            src="/chef_pig.png"
            alt="Picture of the author"
            width={48}
            height={48}
          />
          {/* <button
            className="absolute ml-2 text-stone-100 cursor-pointer z-10"
            onClick={() => activateAdmin()}
          >
            admin
          </button> */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
