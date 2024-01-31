import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item w-[280px] hover:scale-[1.05] transition-[0.6s] my-5">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          className="rounded-[10px]"
          src={props.image}
          alt=""
        />
      </Link>
      <p className="my-6 mx-0 px-2">{props.name}</p>
      <div className="item-prices flex gap-[20px] px-2">
        <div className="item-price-new text-[#374151] text-[18px] font-[600]">
          ${props.new_price}
        </div>
        <div className="item-price-old text-[#8c8c8c] text-[18px] font-[500] line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
