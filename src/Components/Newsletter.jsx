import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter w-[85%] h-[60vh] flex flex-col items-center justify-center m-auto py-0 px-[100px] mb-28 bg-gradient-to-b from-[#ddd6f3] to-[#faaca8] gap-[30px] rounded-2xl">
      <h1 className="text-[#454545] text-[50px] font-[600]">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-[20px]">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[60px] rounded-[80px] border-solid border-1 border-[#e3e3e3]">
        <input
          className="w-[500px] h-[60px] ml-[30px] border-none outline-none text-[#616161] font-['Poppins'] text-[16px]"
          type="email"
          placeholder="Your Email"
        />
        <button className="w-[210px] h-[60px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
