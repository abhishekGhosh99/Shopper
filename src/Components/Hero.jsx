import React from "react";
import { arrow, hero_image, hero_image2 } from "../assets";

const Hero = () => {
  return (
    <div className="hero flex h-[110vh] bg-gradient-to-b from-[#ddd6f3] to-[#faaca8]">
      <div className="hero-left w-2/4 flex-1 flex flex-col justify-center items-center gap-[30px] leading-[1]">
        <div className="w-2/4 new_arrivals flex justify-start text-start items-start">
          <h2 className="uppercase text-[#090909] text-[20px] font-[600]">
            New Arrivals only
          </h2>
        </div>
        <div className="w-2/4 flex flex-col justify-center items-start text-nowrap text-[#171717] text-[75px] font-[700]">
          <p className="leading-[5rem]">
            New <br /> Collections <br /> For Everyone
          </p>
        </div>
        <div className="hero-latest-button flex justify-center items-center gap-[15px] w-[280px] h-[50px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[20px] font-[500]">
          <div>Latest Collection</div>
          <img src={arrow} alt="arrow_icon" />
        </div>
      </div>
      <div className="hero-right w-2/4 flex justify-start items-center pl-16">
        <img className="w-[78%] mt-[120px]" src={hero_image2} alt="image" />
      </div>
    </div>
  );
};

export default Hero;
