import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BiBowlRice } from "react-icons/bi";
import { LuDonut } from "react-icons/lu";
import { LiaHamburgerSolid } from "react-icons/lia";
import { CiBowlNoodles } from "react-icons/ci";
import { FiCoffee } from "react-icons/fi";
import { RiDrinks2Line } from "react-icons/ri";

const categories = [
  { icon: <BiBowlRice size={80} />, label: "Nasi" },
  { icon: <LuDonut size={80} />, label: "Snack" },
  { icon: <LiaHamburgerSolid size={80} />, label: "Burger" },
  { icon: <CiBowlNoodles size={80} />, label: "Mie" },
  { icon: <FiCoffee size={80} />, label: "Kopi" },
  { icon: <RiDrinks2Line size={80} />, label: "Jus" },
];

function Menus() {
  return (
    <div className="flex flex-col items-center w-screen">
      <div className="absolute flex justify-center items-center w-[230px] h-[65px] bg-orange-400 -mt-10 rounded-2xl">
        <p className="font-medium">Menus</p>
      </div>

      <div className="categories flex flex-row justify-between w-screen mt-14 lg:mt-20 items-center px-4">
        {/* <FaAngleLeft
          size={50}
          style={{
            fill: "url(#grad1)",
          }}
        /> */}

          <div className="flex flex-row gap-6 lg:px-24 w-screen justify-between overflow-auto">
            {categories.map((category, index) => (
              <div key={index} className="categories1 flex flex-col items-center justify-center gap-2 border-2 border-orange-500 w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] p-2 rounded-2xl lg:rounded-4xl drop-shadow-xl bg-white">
                {React.cloneElement(category.icon, { style: { fill: "url(#grad1)" } })}
                <p className="text-[14px] font-medium text-black">{category.label}</p>
              </div>
            ))}
          </div>

        {/* <FaAngleRight
          size={50}
          style={{
            fill: "url(#grad1)",
          }}
        /> */}
      </div>

      {/* GRADIENT COLOR */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FF5733", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#FFC300", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Menus;
