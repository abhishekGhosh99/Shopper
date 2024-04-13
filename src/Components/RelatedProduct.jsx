import React from "react";
import Item from "./Item";
import data_product from "../assets/data";

const RelatedProduct = () => {
  return (
    <div className="relatedproducts flex flex-col items-center gap-2 py-[30px] px-[20px] lg:px-[0px]">
      <h1 className="text-[#171717] text-[36px] font-[600]">
        Related Products
      </h1>
      <hr className="w-[200px] h-[2px] rounded-[10px] bg-[#252525]" />
      {/* <div className="relatedproducts flex flex-wrap justify-center items-center mt-[50px] gap-[30px]"> */}
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

export default RelatedProduct;
