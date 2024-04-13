import React from "react";

const ProductDescription = () => {
  return (
    <div className="productdesc mt-[10px] mb-14 mx-[30px] lg:mx-[100px]">
      <div className="productdesc-navigator flex">
        <div className="productdesc-nav-box flex items-center justify-center text-[16px] font-[600] w-[171px] h-[50px] border-[1px] border-[#d0d0d0]">
          Description
        </div>
        <div className="productdesc-nav-box flex items-center justify-center text-[16px] font-[600] w-[171px] h-[50px] border-[1px] border-[#d0d0d0] fade bg-[#fbfbfb] text-[#555]">
          Reviews (122)
        </div>
      </div>
      <div className="productdesc-description flex flex-col gap-6 border-[1px] border-[#d0d0d0] p-7 lg:p-[48px] pb-[50px]">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling products or sevices over the internet. It serves as
          a virtual marketplace where business and individuals can showcase
          their products, interact with custormers and conduct transactions
          without the need for a physical presencel E-commerce websites have
          gained immense popularity due to their convenience, accesibility, and
          the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed, images, prices, and any available variations (e.g. sizes,
          colors). Each product usually has its own dedicated page with relevant
          information.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
