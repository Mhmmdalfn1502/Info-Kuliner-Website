import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";

const foodImages = ["Pizza.png", "Burger.png", "Chicken2.png"];

function Header() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % foodImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-yellow-100 via-orange-600 to-red-900 pt-14 lg:pt-0">
      <img className="absolute inset-0 w-full h-full object-cover z-0" src="BG.png" alt="" />
      <div className="flex flex-col lg:flex-row w-screen h-screen items-center justify-stretch lg:justify-between px-26 pt-12">
        <div className="flex flex-col lg:text-start text-center items-center lg:items-start">
          <p className="z-10 font-black text-[35px] md:text-[55px] lg:text-[75px] w-[100%] leading-tight">
            TEMUKAN <br /> RASA, NIKMATI SENSASI!
          </p>
          <p className="text-[14px] lg:text-[20px] w-[300px] lg:w-md mt-4">Temukan rekomendasi makanan terbaik, mulai dari kuliner lokal hinggal internasional. Jelajahi, cicipi, dan nikmati!</p>
          <div className="flex items-center justify-center gap-3 w-[280px] md:w-[330px] h-[55px] md:h-[60px] rounded-full bg-transparent border-2 mt-6 cursor-pointer">
            <CiSearch size={30} color="white" />
            <span className="font-bold text-xl font-poppins">TEMUKAN SEKARANG</span>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0 flex w-[200px] h-[200px] lg:w-[700px] lg:h-[500px] items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={foodImages[currentImage]}
              alt="makanan"
              className="absolute w-[700px] h-auto"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Header;
