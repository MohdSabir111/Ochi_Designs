import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["we created ", "eye opening ", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex ">
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration:1 }}
                    
                    className="w-[9vw] h-[5vw] mt-[2vw] rounded-[18px] bg-red-800 relative -top-[1vw] "
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className="uppercase flex items-center h-full text-[7vw] leading-[6vw] font-bold"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[2px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 capitalize">
        {[
          "for public and private companies",
          "from the first pitch to ipo",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex gap-5 items-center">
          <div className="px-1 py-1  border-[2px] border-zinc-500 rounded-full font-light  capitalize text-sm ">
            start the project
          </div>
          <div className="w-8 h-8 border-[2px] flex items-center justify-center rounded-full border-zinc-400">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
