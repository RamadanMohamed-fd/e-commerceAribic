import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../designLayouts/Image";
import Flex from "../../designLayouts/Flex";
import logo1 from "../../../assets/images/logo2.svg";
import { useSelector } from "react-redux";
import { GrLanguage } from "react-icons/gr";
import { paginationItems } from "../../../constants";
import { CiSearch } from "react-icons/ci";
import sa from "../../../assets/images/sa.svg";
import { IoSearch } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdOutlineCancel } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";

const Header = () => {
  const [showUser, setShowUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const products = useSelector((state) => state.orebiReducer.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);
  return (
    <div className="w-full  h-20 max-[930px]:h-16 bg-primeColor text-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex flex-row-reverse relative items-center justify-center max-[930px]:justify-between max-[930px]:px-4 gap-3 h-full">
          <CgMenuRightAlt
            className="hidden max-[930px]:flex text-3xl cursor-pointer hover:opacity-75 duration-200 active:opacity-55"
            onClick={() => setShowMenu(!showMenu)}
          />
          <Link to="/cart">
            <div>
              <Image
                className="w-[150px] h-full object-cover max-[930px]:w-[120px]"
                imgSrc={logo1}
              />
            </div>
          </Link>
          <div className=" max-[930px]:hidden flex flex-row-reverse items-center justify-center gap-5  text-xs">
            <Image className="w-7 h-7  " imgSrc={sa} />
            <p className="w-16 text-right">التوصيل إلى السعودية</p>
          </div>
          <div
            className={`   h-[50px] text-base text-primeColor bg-white flex items-center  justify-between px-6 rounded    ${
              showSearch
                ? " absolute max-[930px]:w-full z-50 left-0 max-[930px]:flex w-5/12 max-[1055px]:w-4/12"
                : "relative w-5/12 max-[1055px]:w-4/12 max-[930px]:hidden "
            } `}
          >
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] text-base px-2"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="البحث عن المنتج"
              dir="rtl"
            />
            <CiSearch className="w-5 h-5 " />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) & setSearchQuery("")
                      }
                      key={item._id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-xs">{item.des}</p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            ${item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            <div
              onClick={() => setShowSearch(!showSearch)}
              className=" bg-primeColor  absolute left-1 rounded active:bg-opacity-65 hidden  hover:bg-opacity-85 duration-200 cursor-pointer max-[930px]:flex items-center justify-center text-2xl h-8 w-8 text-white "
            >
              <MdOutlineCancel className=" " />
            </div>
          </div>
          <div className=" divide-x-[1px] max-[930px]:divide-x-0 divide-zinc-300  flex  lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div
              onClick={() => setShowUser(!showUser)}
              className="flex gap-1 px-2 max-[930px]:hidden"
            >
              <span className=" text-sm text-white">تسجيل الدخول</span>
              <svg
                className="me-1"
                width="15"
                height="20"
                viewBox="0 0 19 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <ellipse
                  rx="4.85714"
                  ry="4.8"
                  transform="matrix(-1 0 0 1 9.49979 5.8)"
                  stroke="white"
                  strokeWidth="2"
                ></ellipse>{" "}
                <path
                  d="M1 17.7621C1 16.7061 1.66588 15.765 2.66162 15.4135V15.4135C7.08678 13.8517 11.9132 13.8517 16.3384 15.4135V15.4135C17.3341 15.765 18 16.7061 18 17.7621V19.6978C18 20.9136 16.9243 21.8481 15.7204 21.6782L13.2743 21.3328C10.7705 20.9794 8.22947 20.9794 5.72566 21.3328L3.27958 21.6782C2.07575 21.8481 1 20.9136 1 19.6978V17.7621Z"
                  stroke="white"
                  strokeWidth="2"
                ></path>{" "}
              </svg>
            </div>
            <Link to="/cart">
              <div className="relative max-[930px]:hidden w-10 h-10 mx-2 bg-white flex items-center justify-center rounded-full">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    x="0.999756"
                    y="7.11133"
                    width="20"
                    height="15.8889"
                    rx="4"
                    stroke="#334155"
                    strokeWidth="1.5"
                  ></rect>{" "}
                  <path
                    d="M15.9998 9.55556V5C15.9998 2.79086 14.2089 1 11.9998 1H9.99976C7.79062 1 5.99976 2.79086 5.99976 5L5.99976 9.55556"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                </svg>
                <span className="absolute font-titleFont top-0 -right-0 text-xs w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
            <IoSearch
              className=" text-2xl hidden max-[930px]:flex "
              onClick={() => setShowSearch(!showSearch)}
            />
            <div className="flex items-center  gap-1 text-lg px-2">
              <h2 className="max-[930px]:hidden">English</h2>
              <GrLanguage className="text-zinc-200 max-[930px]:text-xl max-[930px]:mx-2" />
            </div>
          </div>
        </Flex>
      </nav>
      <div
        dir="rtl"
        className={` top-0 right-0 w-full h-screen text-zinc-100 bg-black bg-opacity-60 ${
          showMenu ? "fixed" : "hidden"
        }`}
      >
        <div className="flex justify-start">
          <div className="w-[350px] h-screen overflow-y-auto text-zinc-700 bg-white relative">
            <div className="absolute top-4 right-4 text-xl flex gap-3 items-center flex-row-reverse ">
              <h2 className=" text-primeColor">القائمة</h2>
              <IoChevronBackSharp
                className="  text-[32px] p-[6px] border rounded-full rotate-180 cursor-pointer hover:bg-slate-100 duration-200 active:bg-slate-50 "
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed w-full px-10 pb-1 pt-2  bg-white text-slate-600 font-medium text-sm bottom-0">
        <div className=" flex-row-reverse items-center justify-between max-[930px]:flex hidden">
          <div className="flex flex-col items-center justify-center gap-1">
            <Link
              to="/"
              className="text-center  flex items-center justify-center flex-col  "
            >
              <div className="">
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M1 9.93841C1 8.71422 1.56058 7.55744 2.52142 6.79888L8.02142 2.45677C9.47466 1.30948 11.5253 1.30948 12.9786 2.45677L18.4786 6.79888C19.4394 7.55744 20 8.71422 20 9.93841V16.5C20 18.7091 18.2091 20.5 16 20.5H14.5C13.9477 20.5 13.5 20.0523 13.5 19.5V16.5C13.5 15.3954 12.6046 14.5 11.5 14.5H9.5C8.39543 14.5 7.5 15.3954 7.5 16.5V19.5C7.5 20.0523 7.05228 20.5 6.5 20.5H5C2.79086 20.5 1 18.7091 1 16.5L1 9.93841Z"
                    fill="#475569"
                    stroke="#475569"
                    strokeWidth="1.5"
                  ></path>{" "}
                </svg>{" "}
              </div>
              <span> الرئيسية </span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Link
              to="/"
              className="text-center  flex items-center justify-center flex-col  "
            >
              <div className="icon">
                {" "}
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    x="1.5"
                    y="1"
                    width="8.23529"
                    height="8.23529"
                    rx="3"
                    stroke="#475569"
                    strokeWidth="1.5"
                  ></rect>{" "}
                  <rect
                    x="1.5"
                    y="12.7646"
                    width="8.23529"
                    height="8.23529"
                    rx="3"
                    stroke="#475569"
                    strokeWidth="1.5"
                  ></rect>{" "}
                  <rect
                    x="13.2644"
                    y="1"
                    width="8.23529"
                    height="8.23529"
                    rx="3"
                    stroke="#475569"
                    strokeWidth="1.5"
                  ></rect>{" "}
                  <rect
                    x="13.2644"
                    y="12.7646"
                    width="8.23529"
                    height="8.23529"
                    rx="3"
                    stroke="#475569"
                    strokeWidth="1.5"
                  ></rect>{" "}
                </svg>{" "}
              </div>
              <span> التصنيفات </span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Link to="/cart">
              <div className="relative max-[930px]:hidden w-10 h-10 mx-2 bg-white flex items-center justify-center rounded-full">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    x="0.999756"
                    y="7.11133"
                    width="20"
                    height="15.8889"
                    rx="4"
                    stroke="#334155"
                    strokeWidth="1.5"
                  ></rect>{" "}
                  <path
                    d="M15.9998 9.55556V5C15.9998 2.79086 14.2089 1 11.9998 1H9.99976C7.79062 1 5.99976 2.79086 5.99976 5L5.99976 9.55556"
                    stroke="#334155"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                </svg>
                <span className="absolute font-titleFont top-0 -right-0 text-xs w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
            <Link
              to="/"
              className="text-center  flex items-center justify-center flex-col  "
            >
              <div className="">
                {" "}
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    x="1.49976"
                    y="7.11133"
                    width="20"
                    height="15.8889"
                    rx="4"
                    stroke="#475569"
                    strokeWidth="1.5"
                  ></rect>{" "}
                  <path
                    d="M16.4998 9.55556V5C16.4998 2.79086 14.7089 1 12.4998 1H10.4998C8.29062 1 6.49976 2.79086 6.49976 5L6.49976 9.55556"
                    stroke="#475569"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </svg>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Link
              to="/"
              className="text-center  flex items-center justify-center flex-col "
            >
              <div className="icon">
                {" "}
                <svg
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <ellipse
                    cx="4.85714"
                    cy="4.8"
                    rx="4.85714"
                    ry="4.8"
                    transform="matrix(-1 0 0 1 14.8569 1)"
                    stroke="#475569"
                    strokeWidth="1.5"
                  ></ellipse>{" "}
                  <path
                    d="M1.5 17.7621C1.5 16.7061 2.16588 15.765 3.16162 15.4135V15.4135C7.58678 13.8517 12.4132 13.8517 16.8384 15.4135V15.4135C17.8341 15.765 18.5 16.7061 18.5 17.7621V19.6978C18.5 20.9136 17.4243 21.8481 16.2204 21.6782L13.7743 21.3328C11.2705 20.9794 8.72947 20.9794 6.22566 21.3328L3.77958 21.6782C2.57575 21.8481 1.5 20.9136 1.5 19.6978V17.7621Z"
                    stroke="#475569"
                    strokeWidth="1.5"
                  ></path>{" "}
                </svg>{" "}
              </div>
              <span> حسابي </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
