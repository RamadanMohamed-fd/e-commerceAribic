import React from "react";
import { TiArrowRight } from "react-icons/ti";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-10  rounded-full text-white bg-primeColor border-[1px] border-transparent hover:bg-white hover:text-primeColor hover:border-primeColor duration-300 cursor-pointer flex justify-center shadow items-center z-10 absolute top-[45%] translate-y-[-50%] right-0"
      onClick={onClick}
    >
      <span className="text-2xl">
        <TiArrowRight />
      </span>
    </div>
  );
};

export default SampleNextArrow;
