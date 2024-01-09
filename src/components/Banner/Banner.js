import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import {
//   bannerImgOne,
//   bannerImgTwo,
//   bannerImgThree,m1,m2,m3,m4
// } from "../../assets/images/banner";

import Image from "../designLayouts/Image";
import img1 from "../../assets/images/banner/m1.png"
import img2 from "../../assets/images/banner/m2.png"
import img3 from "../../assets/images/banner/m3.png"
const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#744597",
                borderRight: "3px #744597 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#744597",
                      borderRight: "3px #744597 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white h-[500px] overflow-hidden">
      <Slider {...settings}>
        <Link to="/offer">
          <div>
            <Image imgSrc={img1} />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={img2} />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={img3} />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
