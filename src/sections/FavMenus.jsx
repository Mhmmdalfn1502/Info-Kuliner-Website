import React from "react";

const favlist = [
  { id: 1, image: "./FavMen/Fav1.png", name: "Dimsum", Desc: "Kuliner kekinian dengan isian ayam lembut" },
  { id: 2, image: "./FavMen/Fav2.png", name: "Bakso", Desc: "Bakso dengan tekstur kenyal dan isian daging urat yang melimpah" },
  { id: 3, image: "./FavMen/Fav3.png", name: "Seblak Ceker", Desc: "kerupuk basah dengan kuah pedas yang bikin nagih!" },
  { id: 4, image: "./FavMen/Fav4.png", name: "Terang Bulan", Desc: "Martabak klasik dengan topping cokelat favorit!" },
];

function FavMenus() {
  return (
    <div className="flex flex-col items-center w-screen mt-14 lg:mt-26 gap-6 lg:px-26 px-2">
      <div className="flex flex-col items-center gap-2">
        <p className="text-black font-bold text-[24px] text-center">Makanan Paling Dicari Minggu ini</p>
        <p className="text-gray-500 text-[16px] text-center">Dari jajanan kaki lima hingga hidangan restoran, inilah makanan yang sedang hits dan paling dicari!</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 w-full ps-12">
        {favlist.map((food) => (
          <div key={food.id} className="flex flex-col justify-between bg-[#FFFAF5] rounded-2xl drop-shadow-lg p-4 w-[280px] h-full gap-2">
            <div className="flex justify-center w-[240px] h- object-cover">
              <img src={food.image} alt="" />
            </div>
            <div className="flex flex-col items-center w-full">
              <span className="text-[16px] text-black font-bold">{food.name}</span>
              <span className="text-[14px] text-center text-gray-500">{food.Desc}</span>
            </div>
            <div className="flex w-full justify-center">
              <a href="" className="text-[12px] font-bold text-orange-400 hover:text-orange-600">
                Cari Produk
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full mt-6">
        <a href="" className="flex text-center py-4 px-6 border-2 border-orange-400 hover:border-amber-600 rounded-xl text-orange-400 hover:text-orange-600 font-bold">
          Lihat Semua
        </a>
      </div>
    </div>
  );
}

export default FavMenus;
