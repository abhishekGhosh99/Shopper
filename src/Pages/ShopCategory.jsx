import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { dropdown_icon } from "../assets";
import Item from "../Components/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        className="shopCategory-banner block my-[30px] mx-auto w-[90%] rounded-md mb-20"
        src={props.banner}
        alt=""
      />
      <div className="shopCategory-indexSort flex flex-wrap lg:flex-nowrap gap-4 mx-8 lg:mx-16 justify-between items-center">
        <p>
          <span className="font-[600]">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort flex gap-2 py-[5px] lg:py-[10px] px-[20px] rounded-[40px] border-solid border-[1px] border-[#888] text-[14px]">
          Sort by <img className="w-[18px]" src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 py-6">
        <div className="shopCategory-products flex justify-center items-center lg:flex-row flex-wrap gap-[30px]">
          {all_product.map(
            (item, index) =>
              props.category === item.category && (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              )
          )}
        </div>
        <div className="shopcategory-loadmore flex justify-center items-center my-[50px] mx-auto w-[210px] h-[50px] lg:h-[59px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-[500] border-[1px] border-zinc-800">
          Explore More
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
