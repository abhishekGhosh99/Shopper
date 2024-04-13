import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { cart_cross_icon } from "../assets";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartitems my-[40px] mx-[30px] lg:mx-[60px] py-20">
      <div className="flex flex-col items-center mb-10">
        <h1 className="flex justify-center text-[36px] font-[600] mb-2">
          Cart
        </h1>
        <hr className="w-[80px] h-[3px] rounded-[10px] bg-[#626262]" />
      </div>
      <div className="hidden cartitems-format-main lg:grid grid-cols-6 items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[18px] font-[600]">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0" />
      {all_product.map(
        (item, index) =>
          cartItems[item.id] > 0 && (
            <div key={index}>
              <div className="cartitems-format flex flex-wrap justify-center lg:grid lg:grid-cols-6 items-center gap-[30px] lg:gap-[75px] py-[10px] my-[50px] lg:my-0 px-0 text-[#454545] text-[17px] font-[500]">
                <img
                  className="carticon-product-icon w-[300px] lg:w-auto lg:h-[100px]"
                  src={item.image}
                  alt=""
                />
                <p className="text-[18px] lg:text-[14px]">{item.name}</p>
                <p>
                  <span className="lg:hidden">Price :</span> ${item.new_price}
                </p>
                <button className="cartitems-quantity w-[75px] h-[50px] lg:w-[64px] lg:h-[50px] border-[2px] border-[#ebebeb] bg-white">
                  <span className="lg:hidden">Qty : </span>
                  {cartItems[item.id]}
                </button>
                <p>
                  <span className="lg:hidden">Total : </span>$
                  {item.new_price * cartItems[item.id]}
                </p>
                <div className="flex justify-start items-center">
                  <span className="lg:hidden">Remove : </span>
                  <img
                    className="cartitems-remove-icon w-[15px] my-0 mx-[20px] lg:mx-[40px] cursor-pointer"
                    src={cart_cross_icon}
                    onClick={() => removeFromCart(item.id)}
                    alt=""
                  />
                </div>
              </div>
              <hr />
            </div>
          )
      )}
      <div className="cartItems-down w-full flex flex-col lg:flex-row my-[100px] mx-0 gap-24 lg:gap-28">
        <div className="cartitems-promocode w-[100%] lg:w-[40%] flex flex-col text-[16px] font-[500] gap-2 lg:gap-0">
          <p className="text-[#555]">If you have a promocode, Enter it below</p>
          <div className="cartitems-promocode-box my-[6px] pl-[20px] h-[50px] bg-[#eaeaea]">
            <input
              className="border-none outline-none bg-transparent text-[16px] w-full h-[50px]"
              type="text"
              placeholder="Promocode"
            />
          </div>
          <button className="w-[150px] h-[50px] text-[16px] bg-black text-white cursor-pointer rounded-xl">
            Submit
          </button>
        </div>

        <div className="cartItems-total w-[100%] lg:w-[50%] flex-1 flex flex-col py-5 px-5 gap-[20px] border-[1px] border-[#bababa]">
          <div>
            <h1 className="text-[22px]">Cart Totals</h1>
          </div>
          <hr className="w-full h-[2px] rounded-[10px] bg-[#626262]" />
          <div className="px-3">
            <div className="cartitems-total-items flex justify-between py-[15px] px-0">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item flex justify-between py-[15px] px-0">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item flex justify-between py-[15px] px-0">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to="/">
            <button className="w-full h-[58px] outline-none border-none bg-[#ff5a5a] text-white text-[16px] font-[600] cursor-pointer rounded-xl">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
