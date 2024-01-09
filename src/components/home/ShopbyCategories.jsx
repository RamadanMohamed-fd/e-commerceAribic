import React from "react";
import Slider from "react-slick";
import Heading from "./Products/Heading";
import SampleNextArrow from "./NewArrivals/SampleNextArrow";
import SamplePrevArrow from "./NewArrivals/SamplePrevArrow";

import i1 from "../../assets/images/ShopbyCategories/1.jpg";
import i2 from "../../assets/images/ShopbyCategories/11.png";
import i3 from "../../assets/images/ShopbyCategories/12.png";
import i4 from "../../assets/images/ShopbyCategories/13.png";
import i5 from "../../assets/images/ShopbyCategories/14.png";
import i7 from "../../assets/images/logo.jpg";
import Image from "../designLayouts/Image";

const ShopbyCategories = () => {
  const settings = {
    // className: "center",
    centerMode: true,
    // centerPadding: "50px",
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1313,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          //   dots: true,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //   dots: true,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //   dots: true,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className=" pb-20 mb-10 w-[95%]  mx-auto">
      <div className=" mb-5 w-[98 %]">
        <Heading heading="تسوقي الفئات" />
      </div>
      <Slider {...settings} className="">
        <div className=" text-center font-medium text-lg ">
          <Image
            imgSrc={i7}
            className=" w-[260px] h-[260px] rounded-full shadow-sm hover:shadow-none duration-300 cursor-pointer  "
          />
          <h2 className="mt-3">عروض خيارات العناية</h2>
        </div>
        <div className=" text-center font-medium text-lg">
          <Image
            imgSrc={i2}
            className=" w-[260px] h-[260px] rounded-full shadow-sm hover:shadow-none duration-300 cursor-pointer object-cover "
          />
          <h2 className="mt-3">كافة أقسام العناية </h2>
        </div>

        <div className=" text-center font-medium text-lg">
          <Image
            imgSrc={i1}
            className="w-[260px] h-[260px] rounded-full shadow-sm hover:shadow-none duration-300 cursor-pointer object-cover"
          />
          <h2 className="mt-3">المكياج</h2>
        </div>

        <div className="text-center font-medium text-lg ">
          <Image
            imgSrc={i3}
            className=" w-[260px] h-[260px] rounded-full shadow-sm hover:shadow-none duration-300 cursor-pointer object-cover"
          />
          <h2 className="mt-3">العناية بالأظافر</h2>
        </div>

        <div className=" text-center font-medium text-lg">
          <Image
            imgSrc={i4}
            className=" w-[260px] h-[260px] rounded-full shadow-sm hover:shadow-none duration-300 cursor-pointer object-cover"
          />
          <h2 className="mt-3">العدسات</h2>
        </div>

        <div className=" text-center font-medium text-lg">
          <Image
            imgSrc={i5}
            className=" w-[260px] h-[260px] rounded-full shadow-sm hover:shadow-none duration-300 cursor-pointer object-cover"
          />
          <h2 className="mt-3">أجهزة وأدوات منوعة</h2>
        </div>
      </Slider>
    </div>
  );
};

export default ShopbyCategories;
