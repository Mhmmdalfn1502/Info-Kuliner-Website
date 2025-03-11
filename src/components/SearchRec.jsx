import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";

function SearchRec() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert(`Mencari: ${searchTerm}`);
  };
  return (
    <div className="flex items-center justify-center mt-6 lg:mt-14">
    <div className="flex flex-col justify-center lg:w-[600px] h-[120px] bg-[#FFFAF5] rounded-2xl drop-shadow-xl gap-4 px-4">
      <p className="font-medium text-black">Apa yang ingin kamu temukan?</p>
      <div className="flex flex-row">
      <CiLocationOn size={30} className="text-gray-500 mx-2" color="red" />
      <input type="text" placeholder="Cari lokasi yang anda inginkan" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full outline-none bg-transparent text-gray-500 border-y-1 border-gray-200" />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-1 bg-green-400 text-white hover:bg-green-500 transition"
      >
        Cari
      </button>
      </div>
    </div>
    </div>
  );
}

export default SearchRec;
