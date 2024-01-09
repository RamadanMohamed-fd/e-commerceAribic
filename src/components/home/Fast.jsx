import React from "react";
import Image from "../designLayouts/Image";
import f1 from "../../assets/images/f1.png";
import f2 from "../../assets/images/f2.png";
import f3 from "../../assets/images/f3.png";
const Fast = () => {
  return (
    <div className="w-[90%] flex flex-row-reverse items-center justify-evenly gap-5 my-20 mx-auto">
      <div className=" text-center text-zinc-800 font-medium text-xl">
        <Image imgSrc={f1} className=" h-24" />
        <h2>شحن سريع</h2>
      </div>
      <div className=" text-center text-zinc-800 font-medium text-xl">
        <Image imgSrc={f2} className=" h-24" />
        <h2>دفع امن </h2>
      </div>
      <div className=" text-center text-zinc-800 font-medium text-xl ">
        <Image imgSrc={f3} className=" h-24" />
        <h2>خدمة العملاء</h2>
      </div>
    </div>
  );
};

export default Fast;
