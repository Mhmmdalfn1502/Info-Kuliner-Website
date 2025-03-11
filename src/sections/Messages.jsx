import React from "react";

function Messages() {
  return (
    <div className="flex flex-col w-screen gap-6 mt-[72px] mb-10 lg:mb-26">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-[24px] text-black font-bold text-center">Tinggalkan Komentar</p>
        <p className="text-[16px] text-gray-500 text-center">Alamat email Anda tidak akan dipublikasikan. Kolom yang wajib diisi ditandai dengan *</p>
      </div>

      <form action="" className="px-4 lg:px-26 w-screen h-full">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="" className="text-black text-[16px]">
                Nama *
              </label>
              <input type="text" placeholder="Masukkan Nama" className="text-gray-500 border-2 border-amber-500 p-2 rounded-lg w-full lg:w-[95%]" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="" className="text-black text-[16px]">
                Email *
              </label>
              <input type="text" placeholder="Masukkan Email" className="text-gray-500 border-2 border-amber-500 p-2 rounded-lg w-full lg:w-[95%]" />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="" className="text-black text-[16px]">
                Website
              </label>
              <input type="text" placeholder="Masukkan Website" className="text-gray-500 border-2 border-amber-500 p-2 rounded-lg w-full lg:w-[95%]" />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <label htmlFor="" className="text-black text-[16px]">
              Pesan
            </label>
            <textarea type="text" placeholder="Masukkan Pesan" className="text-gray-500 border-2 border-amber-500 p-2 rounded-lg w-full h-full" />
          </div>
        </div>

        <div className="flex gap-2 w-full mt-6">
          <input type="checkbox" id="saveInfo" className=" w-6 h-6 rounded-md" />
          <label htmlFor="" className="text-black">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>
      </form>
    </div>
  );
}

export default Messages;
