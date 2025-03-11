import React from "react";

function Navbar() {
  return (
    <div className="absolute flex flex-row w-screen justify-between px-4 lg:px-26 py-8">
      <img src="LOGO.png" alt="" className="w-[120px] lg:w-[250px]" />
      <div className="flex flex-row items-center gap-4 text-sm lg:text-xl">
        <span>Hello, <span><b>Alfan</b></span></span>
        <img src="Profile.png" alt="" className="w-[30px] hidden lg:w-[50px]"/>
      </div>
    </div>
  );
}

export default Navbar;
