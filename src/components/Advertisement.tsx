import React from "react";
import { BrandDetail } from "../types/types";

type AdProps = {
  brands: BrandDetail[];
};

function Advertisement({ brands }: AdProps) {
  return (
    <div
      className="my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7 overflow-x-scroll scroll-smooth
    scroll-hidden"
    >
      {brands?.map((elm, index) => (
        <img
          key={index}
          src={elm.iconSrc}
          alt="brands-img"
          className="w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105 transition-all duration-500 cursor-pointer filter drop-shadow-md"
        />
      ))}
    </div>
  );
}

export default Advertisement;
