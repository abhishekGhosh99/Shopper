import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter w-[85%] h-[70vh] lg:h-[60vh] flex flex-col items-center justify-center m-auto py-0 px-5 text-center lg:px-[100px] mb-28 bg-gradient-to-b from-[#ddd6f3] to-[#faaca8] gap-[30px] rounded-2xl">
      <h1 className="text-[#454545] text-[30px] lg:text-[50px] font-[600]">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-[20px]">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white w-full lg:w-[730px] h-[40px] lg:h-[60px] rounded-[80px] border-solid border-1 border-[#e3e3e3] gap-8 lg:gap-0">
        <input
          className="w-[80%] lg:w-[500px] h-[40px] lg:h-[60px] lg:ml-[30px] border-none outline-none text-[#616161] font-['Poppins'] text-[16px] pt-2"
          type="email"
          placeholder="Your Email"
        />
        <button className="w-[150px] lg:w-[210px] h-[40px] lg:h-[60px] py-2 rounded-[80px] bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
