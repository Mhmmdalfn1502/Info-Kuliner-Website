import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { img } from "framer-motion/client";

const foodlist = [
  { id: 1, name: "Nasi Kebuli Pak Tano", location: "Jl. Raya Sudirman Kec. Tanah Sareal Kota Bogor", phone: "0843-2142-4123", image: "Food1.png", rating: 4.3 },
  { id: 2, name: "Nasi Kebuli Pak Tano", location: "Jl. Raya Sudirman Kec. Tanah Sareal Kota Bogor", phone: "0843-2142-4123", image: "Food1.png", rating: 4.3 },
  { id: 3, name: "Nasi Kebuli Pak Tano", location: "Jl. Raya Sudirman Kec. Tanah Sareal Kota Bogor", phone: "0843-2142-4123", image: "Food1.png", rating: 4.3 },
  { id: 4, name: "Nasi Kebuli Pak Tano", location: "Jl. Raya Sudirman Kec. Tanah Sareal Kota Bogor", phone: "0843-2142-4123", image: "Food1.png", rating: 4.3 },
  { id: 5, name: "Nasi Kebuli Pak Tano", location: "Jl. Raya Sudirman Kec. Tanah Sareal Kota Bogor", phone: "0843-2142-4123", image: "Food1.png", rating: 4.3 },
  { id: 6, name: "Nasi Kebuli Pak Tano", location: "Jl. Raya Sudirman Kec. Tanah Sareal Kota Bogor", phone: "0843-2142-4123", image: "Food1.png", rating: 4.3 },
  { id: 7, name: "Nasi Kebuli Pak Tano", location: "Jl. Raya Sudirman Kec. Tanah Sareal Kota Bogor", phone: "0843-2142-4123", image: "Food1.png", rating: 4.3 },
  { id: 8, name: "Nasi Kebuli Pak Tano", location: "Jl. Raya Sudirman Kec. Tanah Sareal Kota Bogor", phone: "0843-2142-4123", image: "Food1.png", rating: 4.3 },
];

function FoodList() {
  return (
    <div className="flex flex-col gap-6 w-screen h-screen mt-14 items-center lg:px-26">
      <div className="flex flex-col items-center gap-2">
        <p className="text-[24px] text-black font-bold text-center">Apa saja yang bisa kamu temukan didaerah mu?</p>
        <p className="text-[16px] text-gray-500 text-center">Dari street food hingga fine dining, semua ada di sini. Yuk, cobain sekarang!</p>
      </div>

      <div className="grid lg:grid-cols-4 lg:gap-6 gap-2 w-full px-2">
        {foodlist.map((food) => (
          <div key={food.id} className="flex gap-2 lg:flex-col items-center justify-center p-2 w-[100%] lg:w-[280px] lg:h-[286px] drop-shadow-lg bg-[#FFFAF5] rounded-2xl">
            <div className="h-[100%] lg:w-[260px] lg:h-[150px] ">
              <img src={food.image} alt="" className="rounded-lg  object-cover w-full h-[100%]" />
            </div>
            <div className="flex flex-col items-start lg:w-full w-[70%] mt-2 gap-1">
              <span className="text-black font-bold text-[14px]">{food.name}</span>
              <div className="flex flex-row w-full gap-2">
                <CiLocationOn size={20} color="red" />
                <span className="truncate  text-gray-500 text-[12px]">{food.location}</span>
              </div>
              <div className="flex flex-row w-full gap-2">
                <BsTelephone size={20} color="red" />
                <span className="text-gray-500 text-[12px]">{food.phone}</span>
              </div>
              <div className="flex flex-row justify-between mt-2 w-full">
                <div className="flex flex-row gap-2">
                  <FaStar size={20} color="yellow" />
                  <span className="font-bold text-black text-[12px]">{food.rating}</span>
                </div>
                <a href="" className="font-bold text-orange-400 hover:text-orange-500 text-[12px]">
                  Lebih detail
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full mt-2 lg:mt-6">
        <a href="" className="flex text-center py-4 px-6 border-2 border-orange-400 hover:border-amber-600 rounded-xl text-orange-400 hover:text-orange-600 font-bold">
          Lihat Semua
        </a>
      </div>
    </div>
  );
}

export default FoodList;
