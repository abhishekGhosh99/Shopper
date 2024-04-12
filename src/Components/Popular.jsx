import React from "react";
import data_product from "../assets/data";
import Item from "./Item";

const Popular = () => {
  return (
    <div className="popular bg-[#f1f1f154] flex flex-col items-center gap-4 lg:mt-28 py-20">
      <h1 className="text-[#171717] text-[20px] lg:text-[50px] font-[600]">
        Popular in women
      </h1>
      <hr className="w-[300px] h-[3px] rounded-[10px] bg-[#626262]" />
      <div className="popular-item mt-[50px] flex flex-wrap justify-center items-center lg:flex-row gap-[30px]">
        {data_product.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
