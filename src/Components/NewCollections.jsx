import React from "react";
import new_collection from "../assets/new_collections";
import Item from "./Item";

const NewCollections = () => {
  return (
    <div className="new-collections bg-[#f1f1f154] flex flex-col justify-center items-center gap-4 my-32 py-14">
      <h1 className="text-[#171717] text-[20px] lg:text-[50px] font-[600]">
        NEW COLLECTIONS
      </h1>
      <hr className="w-[300px] h-[3px] rounded-[10px] bg-[#626262]" />
      <div className="collections flex justify-center items-center flex-wrap lg:flex-row mt-[50px] gap-[30px]">
        {new_collection.map((item, index) => (
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

export default NewCollections;
