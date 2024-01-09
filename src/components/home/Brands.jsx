import React from "react";
import Slider from "react-slick";
import Heading from "./Products/Heading";
import SampleNextArrow from "./NewArrivals/SampleNextArrow";
import SamplePrevArrow from "./NewArrivals/SamplePrevArrow";
import i1 from "../../assets/images/brands/5.png";
import i2 from "../../assets/images/brands/6.png";
import i3 from "../../assets/images/brands/7.png";
import i4 from "../../assets/images/brands/8.png";
import i5 from "../../assets/images/brands/9.png";
import i6 from "../../assets/images/brands/10.png";
import Image from "../designLayouts/Image";
const Brands = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          //   dots: true,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //   dots: true,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
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
    <div className=" py-16  mx-auto">
      <div className="w-[98%]">
        <Heading heading="العلامات التجارية" />
      </div>
      <Slider {...settings} className="flex justify-center pl-20">
        <div className=" ">
          <Image imgSrc={i1} className=" w-[150px] h-auto " />
        </div>

        <div className=" ">
          <Image imgSrc={i2} className=" w-[150px] h-auto" />
        </div>

        <div className=" ">
          <Image imgSrc={i3} className=" w-[150px] h-auto" />
        </div>

        <div className=" ">
          <Image imgSrc={i4} className=" w-[150px] h-auto" />
        </div>

        <div className=" ">
          <Image imgSrc={i5} className=" w-[150px] h-auto" />
        </div>

        <div className=" ">
          <Image imgSrc={i6} className=" w-[150px] h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Brands;
