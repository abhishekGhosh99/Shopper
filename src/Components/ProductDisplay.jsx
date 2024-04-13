import React, { useContext } from "react";
import { star_dull_icon, star_icon } from "../assets";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay flex flex-col justify-center items-center lg:flex-row my-[50px] mx-[20px] lg:mx-[100px] gap-10">
      <div className="productdisplay-left flex gap-4">
        <div className="productdisplay-img-list flex flex-col gap-4">
          <img
            className="h-auto lg:h-[80px] w-[70px] rounded-lg"
            src={product.image}
            alt=""
          />
          <img
            className="h-auto lg:h-[80px] w-[70px] rounded-lg"
            src={product.image}
            alt=""
          />
          <img
            className="h-auto lg:h-[80px] w-[70px] rounded-lg"
            src={product.image}
            alt=""
          />
          <img
            className="h-auto lg:h-[80px] w-[70px] rounded-lg"
            src={product.image}
            alt=""
          />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img object-contain rounded-lg"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right flex flex-col mt-4">
        <h1 className="text-[#3d3d3d] text-[18px] font-[700]">
          {product.name}
        </h1>
        <div className="productdisplay-right-star flex items-center mt-3 gap-1 text-[1c1c1c] text-[16px]">
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_dull_icon} alt="star_dull_icon" />
          <p>(122)</p>
        </div>
        <span className="text-[#ff4141] text-[14px] font-[500] mt-5">
          Special price
        </span>
        <div className="productdisplay-right-prices flex my-[10px] mx-0 gap-5 text-[24px] font-[700]">
          <div className="productdisplay-right-price-old text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description"></div>
        <div className="productdisplay-right-size">
          <h1 className="mt-[13px] text-[#656565] text-[17px] font-[600]">
            Select Size
          </h1>
          <div className="productdisplay-right-sizes flex flex-wrap lg:flex-nowrap my-[14px] mx-0 gap-4">
            <div className="py-[13px] px-[20px] bg-[#fbfbfb] border-[3px] border-[#ebebeb] rounded-[3px] cursor-pointer">
              S
            </div>
            <div className="py-[13px] px-[20px] bg-[#fbfbfb] border-[3px] border-[#ebebeb] rounded-[3px] cursor-pointer">
              M
            </div>
            <div className="py-[13px] px-[20px] bg-[#fbfbfb] border-[3px] border-[#ebebeb] rounded-[3px] cursor-pointer">
              L
            </div>
            <div className="py-[13px] px-[20px] bg-[#fbfbfb] border-[3px] border-[#ebebeb] rounded-[3px] cursor-pointer">
              XL
            </div>
            <div className="py-[13px] px-[20px] bg-[#fbfbfb] border-[3px] border-[#ebebeb] rounded-[3px] cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="py-[10px] w-[160px] text-[15px] font-[600] text-white bg-[#ff4141] my-[30px] lg:my-[10px] border-none outline-none cursor-pointer rounded-lg"
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category mt-[10px] text-[15px]">
          <span className="font-[500]">Category :</span> Women, T-Shirt, Crop
          Top
        </p>
        <p className="productdisplay-right-category mt-[10px] text-[15px]">
          <span className="font-[500]">Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
