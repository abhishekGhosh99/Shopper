import { useContext, useState } from "react";
import { logo, cart_icon } from "../assets";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
// import { navLinks } from "../constants";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="navbar flex justify-between lg:justify-around p-[20px] lg:p-[10px] shadow-lg shadow-black-500/50 overflow-hidden">
      <div className="nav-logo flex items-center gap-[8px] lg:gap-[10px]">
        <img className="w-[30px] lg:w-[50px]" src={logo} alt="logo" />
        <p className="text-[#171717] text-[17px] lg:text-[24px] font-[600]">
          SHOPPER
        </p>
      </div>
      <ul className="nav-menu hidden lg:flex items-center list-none gap-[50px] text-[#626262] text-[15px] font-[500]">
        <li
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
          onClick={() => {
            setActivePage("home");
          }}
        >
          <Link to="/">Home</Link>
          {activePage === "home" && (
            <hr className="border-none w-[100%] h-[3px] rounded-[10px] bg-red-700" />
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
          onClick={() => {
            setActivePage("mens");
          }}
        >
          <Link to="/mens">Mens</Link>
          {activePage === "mens" && (
            <hr className="border-none w-[100%] h-[3px] rounded-[10px] bg-red-700" />
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
          onClick={() => {
            setActivePage("womens");
          }}
        >
          <Link to="/womens">Womens</Link>
          {activePage === "womens" && (
            <hr className="border-none w-[100%] h-[3px] rounded-[10px] bg-red-700" />
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
          onClick={() => {
            setActivePage("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {activePage === "kids" && (
            <hr className="border-none w-[100%] h-[3px] rounded-[10px] bg-red-700" />
          )}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-6 lg:gap-[45px]">
        <Link to="/login">
          <button className="w-[70px] lg:w-[100px] h-[20px] lg:h-[30px] outline-none border-[#7a7a7a] border-[1px] rounded-[75px] text-[#515151] text-[12px] lg:text-[15px] font-[500] bg-white cursor-pointer active:bg-zinc-300">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img
            className="w-[25px] lg:w-[30px]"
            src={cart_icon}
            alt="cart-icon"
          />
        </Link>
        <div className="nav-cart-count w-[15px] lg:w-[18px] h-[15px] lg:h-[18px] flex justify-center items-center -mt-[20px] lg:-mt-[26px] -ml-[30px] lg:-ml-[55px] rounded-[10px] text-[12px] bg-red-600 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
