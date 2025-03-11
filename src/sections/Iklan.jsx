import React from "react";

const images = ["./Iklan/Frame1.png", "./Iklan/Frame2.png", "./Iklan/Frame3.png", "./Iklan/Frame4.png"];
function Iklan() {
  return (
    <div className="flex flex-col mt-10 lg:mt-[80px] overflow-hidden relative justify-between w-screen gap-4 lg:gap-8">
      <img src="./Iklan/Line.png" alt="" className="w-screen" />

      <div className="w-full overflow-hidden">
        <div className="flex gap-4 lg:gap-8 w-max animate-marquee">
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt="" className="w-[200px] h-[100%] lg:w-[445px] lg:h-[240px]" />
          ))}
        </div>
      </div>

      <img src="./Iklan/Line.png" alt="" className="w-screen" />
    </div>
  );
}

export default Iklan;
