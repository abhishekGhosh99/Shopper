import React from "react";
import { exclusive_image } from "../assets";

const Offers = () => {
  return (
    <div className="offers w-[85%] h-[60vh] flex m-auto mt-28 py-0 px-[100px] mb-28  bg-gradient-to-b from-[#ddd6f3] to-[#faaca8] rounded-2xl">
      <div className="offers-left flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[50px] font-[600]">Exclusive</h1>
        <h1 className="text-[#171717] text-[50px] font-[600]">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[22px] font-[600]">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[200px] h-[50px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-[500] mt-[30px] cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="offers-right flex-1 flex items-center justify-end mt-3">
        <img className="w-[85%]" src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
