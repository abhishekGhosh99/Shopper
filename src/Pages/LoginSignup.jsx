import React from "react";

const LoginSignup = () => {
  return (
    <div className="loginsignup w-full h-auto bg-[#F2B8BD] py-[100px]">
      <div className="loginsignup-container w-full lg:w-[580px] h-auto bg-white m-auto py-[40px] px-[40px] lg:px-[60px] rounded-3xl">
        <h1 className="flex justify-center text-[30px] font-[500]">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px]">
          <input
            className="h-[50px] w-full pl-[20px] border-solid border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] rounded-lg"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-[50px] w-full pl-[20px] border-solid border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] rounded-lg"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="h-[50px] w-full pl-[20px] border-solid border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] rounded-lg"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="w-full lg:w-[460px] h-[60px] text-white bg-[#ff4141] my-8 rounded-2xl text-[18px] font-[500] cursor-pointer">
          Continue
        </button>
        <p className="loginsignup-login mt-[20px] text-[#5c5c5c] text-[15px] font-[500]">
          Already have an account?{" "}
          <span className="text-[#ff4141] font-[600] cursor-pointer">
            Login here
          </span>
        </p>
        <div className="loginsignup-agree flex items-center mt-[25px] gap-[7px] text-[#5c5c5c] text-[14px] font-[500]">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
