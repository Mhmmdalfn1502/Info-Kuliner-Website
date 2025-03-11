import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-screen bg-gradient-to-br from-yellow-100 via-orange-600 to-red-900 py-2 lg:py-8">
      <img src="BG2.png" alt="" className="absolute inset-0 lg:w-full lg:h-full object-cover z-0" />
      <div className="flex flex-col lg:flex-row gap-8 justify-between itemsc-start lg:items-center px-2 lg:px-26">
        <div className="flex flex-col w-full gap-2">
          <img src="LOGO.png" alt="" className="w-[150px] lg:w-[250px] h-full" />
          <p className="text-[24px] lg:text-[32px] font-bold">Jelajahi cita rasa terbaik di sekitar, langsung dari saku kamu!</p>
          <p className="">ikmati beragam kuliner, promo spesial, dan fitur eksklusif hanya di Info Kuliner!</p>
        </div>

        {/* MEDSOS */}
        <div className="flex flex-col items-start lg:items-center gap-2">
          <p className="text-[24px] font-bold">Follow Us</p>
          <div className="flex flex-row gap-4">
            <FaInstagram size={50} />
            <FaXTwitter size={50} />
            <RiTiktokLine size={50} />
            <FaWhatsapp size={50} />
            <FiYoutube size={50} />
          </div>
        </div>
      </div>

      <hr className="mt-4 mx-2 lg:mx-26" />

      <div className="flex flex-row justify-between mt-4 px-2 lg:px-26 ">
        <p>©Muhammad Alfan</p>
        <div className="flex flex-col lg:flex-row lg:gap-4">
          <p className="text-[16px]">Ketentuan Layanan</p>
          <span className="">.</span>
          <p className="text-[16px]">Kebijakan Privasi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
