import React from "react";

function About() {
  return (
    <div className="w-full p-20 rounded-tl-3xl  rounded-tr-3xl bg-[#CDEA68] text-black font-semibold">
      <h1 className="text-3xl">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people
      </h1>
      <div className="w-full flex border-t-[1px] pt-8 border-[#a1b562] mt-10 ">
        <div className="w-1/2">
          <h1 className="text-6xl"> Our Approach </h1>
          <button className="uppercase flex items-center gap-2 justify-between bg-zinc-900 px-8 py-3 rounded-full text-white mt-3">
            Read more
            <div className="h-3 w-3 bg-white rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[80vh] rounded-3xl bg-yellow-200 "></div>
      </div>
    </div>
  );
}

export default About;
