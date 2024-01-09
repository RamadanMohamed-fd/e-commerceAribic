import React from "react";
import { TiArrowLeft } from "react-icons/ti";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-10 rounded-full text-white bg-primeColor border-[1px] border-transparent hover:bg-white hover:text-primeColor hover:border-primeColor duration-300 cursor-pointer shadow flex justify-center items-center z-10 absolute top-[45%] translate-y-[-50%] left-0"
      onClick={onClick}
    >
      <span className="text-2xl">
        <TiArrowLeft/>
      </span>
    </div>
  );
};

export default SamplePrevArrow;
