import React from "react";
import {
  logo_big,
  play_store,
  app_store,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  pinterest_icon,
} from "../assets";

const Footer = () => {
  return (
    <div className="footer h-auto bg-[rgb(28,28,28)] pt-10">
      <div className="upper-div flex flex-row">
        <div className="footer-left w-[50%] flex flex-col justify-start items-start gap-[20px]">
          <div className="flex justify-center items-center gap-5 px-10">
            <img className="w-[70px]" src={logo_big} alt="" />
            <p className="text-[383838] text-[36px] font-[700] text-white">
              SHOPPER
            </p>
          </div>
          <div className="flex justify-start gap-5 px-10 py-5">
            <p className="w-[80%] text-[#A8AFB4]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque
              ipsum at voluptatibus eos? Tempora molestiae delectus libero
              consectetur quidem id nihil. Veniam, error dolores nulla pariatur
              quam id eius!
            </p>
          </div>
        </div>
        <div className="footer-right w-[50%] flex flex-row gap-[90px]">
          <div className="quick_links">
            <h1 className="text-white text-[25px] pt-5 pb-8 text-nowrap">
              Quick Links
            </h1>
            <ul className="footer-links flex flex-col list-none gap-3 text-[#A8AFB4] text-[16px] pb-10">
              <li className="cursor-pointer">Company</li>
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Offices</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
            <h1 className="text-white text-[25px] pt-5 pb-6 text-nowrap">
              Site Links
            </h1>
            <ul className="footer-links flex flex-col list-none gap-3 text-[#A8AFB4] text-[16px] pb-10 text-nowrap">
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Shipping Details</li>
              <li className="cursor-pointer">Offers Coupons</li>
              <li className="cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <div className="mobile-app text-white">
              <h1 className="text-white text-[25px] pt-5 pb-8">
                Download Our Mobile App
              </h1>
              <p className="text-[#A8AFB4] w-[90%] pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquam gravida sollicitudin. Praesent porta enim mi, non
                tincidunt libero interdum sit amet.
              </p>
              <div className="flex flex-row w-[140px] gap-6 pb-10">
                <img src={play_store} alt="" />
                <img src={app_store} alt="" />
              </div>
              <h1 className="text-white text-[25px] pt-5 pb-6 text-nowrap">
                Quick Links
              </h1>
              <ul className="footer-links flex flex-col list-none gap-3 text-[#A8AFB4] text-[16px] pb-10">
                <li className="cursor-pointer">Know More About Us</li>
                <li className="cursor-pointer">Visit Store</li>
                <li className="cursor-pointer">Let's Connect</li>
                <li className="cursor-pointer">Locate Stores</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-1" />
      <div className="lower-div flex flex-row w-full justify-between items-start py-8 px-8">
        <div className="footer-copyright w-[60%] flex flex-row gap-[30px] mb-6 text-[16px]">
          <p className="text-[#A8AFB4]">
            Copyright © 2024 | SHOPPER - All rights reserved
          </p>
        </div>
        <div className="social-links flex flex-row w-[40%] gap-5 justify-end items-start px-5 mb-6">
          <img className="w-5" src={facebook_icon} alt="facebook_icon" />
          <img className="w-5" src={instagram_icon} alt="instagram_icon" />
          <img className="w-5" src={twitter_icon} alt="twitter_icon" />
          <img className="w-5" src={pinterest_icon} alt="pinterest_icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
