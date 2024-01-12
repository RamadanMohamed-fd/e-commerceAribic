import React, { useEffect, useState } from "react";
// import { BsSuitHeartFill } from "react-icons/bs";
// import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
// import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { FaCircleNotch } from "react-icons/fa";
const Product = (props) => {
  const [span,setSpen]=useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
            setSpen(false)
     },1000)
  },[span])
  // const _id = props.productName;
  // const idString = (_id) => {
  //   return String(_id).toLowerCase().split(" ").join("");
  // };
  // const rootId = idString(_id);

  // const navigate = useNavigate();
  // const productItem = props;
  // const handleProductDetails = () => {
  //   navigate(`/product/${rootId}`, {
  //     state: {
  //       item: productItem,
  //     },
  //   });
  // };
  return (
    <div className="w-full relative group text-right">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div className="w-full flex  justify-center">
          <Image className="max-h-[250px] " imgSrc={props.img} />
        </div>
        <div className="absolute top-6 left-8 ">
          {props.badge && <Badge text="New" />}
        </div>
        {/* <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li>
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="max-w-80 pt-6 pb-2 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex flex-col items-end gap-3 font-titleFont">
          <h2 className=" text-primeColor font-medium  text-sm text-center w-full">
            {props.productName}
          </h2>
          <div className=" text-[14px] flex flex-row-reverse gap-1 mb-[2px] font-semibold text-black text-lg">{props.price}<p className="">ر.س</p></div>
        </div>
        <div  onClick={() =>
              {  dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
        )
          
            setSpen(!span)
         
        }
              } className=" bg-primeColor active:bg-opacity-70 duration-300 hover:bg-opacity-95 cursor-pointer flex flex-row-reverse items-center justify-center gap-2 py-2 text-white text-center w-full rounded-md mt-0">
             <div>
         {span? <FaCircleNotch className=" animate-spin text-sm"/> :<FaShoppingCart />}
          
              </div>
              إضافة إلى السلة
           
        </div>
      </div>
    </div>
  );
};

export default Product;
