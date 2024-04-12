import React from "react";
import { arrow, hero_image, hero_image2 } from "../assets";

const Hero = () => {
  return (
    <div className="hero relative flex flex-row bg-gradient-to-b from-[#ddd6f3] to-[#faaca8] py-20 px-8">
      <div className="hero-left w-2/4 lg:flex-1 flex flex-col justify-center items-start lg:items-center gap-[30px] leading-[1] z-10">
        <div className="w-full lg:w-2/4 new_arrivals flex justify-start lg:justify-start text-start items-start lg:items-start">
          <h2 className="uppercase text-[#090909] text-[20px] text-nowrap lg:text-wrap lg:text-[20px] font-[600]">
            New Arrivals only
          </h2>
        </div>
        <div className="w-full lg:w-2/4 flex flex-col justify-center items-start text-wrap lg:text-nowrap text-[#171717] text-[35px] lg:text-[75px] font-[700] top-20">
          <p className="leading-[2.5rem] lg:leading-[5rem]">
            New <br className="break hidden lg:flex" /> Collections{" "}
            <br className="break hidden lg:flex" /> For Everyone
          </p>
        </div>
        <div className="hero-latest-button flex justify-center items-center gap-[15px] w-[220px] lg:w-[280px] h-[40px] lg:h-[50px] rounded-[75px] lg:mt-[30px] bg-[#ff4141] text-white text-[16px] lg:text-[20px] font-[500] bottom-0">
          <div>Latest Collection</div>
          <img src={arrow} alt="arrow_icon" />
        </div>
      </div>
      <div className="hero-right w-2/4 flex justify-end lg:justify-start items-end lg:items-center pl-0 lg:pl-16">
        <img
          className="max-w-[250px] lg:max-w-[100%] lg:w-[78%] mt-[0px] lg:mt-[120px]"
          src={hero_image2}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Hero;
