import React from "react";
import { breadcrum_arrow } from "../assets";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum flex items-center gap-2 text-[#5e5e5e] text-[16px] font-[600] mt-[60px] mb-7 mx-[100px] capitalize">
      HOME <img src={breadcrum_arrow} alt="" /> SHOP
      <img src={breadcrum_arrow} alt="" />
      {product.category} <img src={breadcrum_arrow} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
