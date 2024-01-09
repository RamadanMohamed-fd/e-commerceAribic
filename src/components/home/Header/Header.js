import React, {  useState,useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
// import { MdClose } from "react-icons/md";
// import { HiMenuAlt2 } from "react-icons/hi";
// import { motion } from "framer-motion";
// import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
// import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import logo1 from "../../../assets/images/logo2.svg"
import { useSelector } from "react-redux";
import { GrLanguage } from "react-icons/gr";
import { paginationItems } from "../../../constants";
import { CiSearch } from "react-icons/ci";
import sa from "../../../assets/images/sa.svg"
const Header = () => {
  // const [showMenu, setShowMenu] = useState(true);
  // const [sidenav, setSidenav] = useState(false);
  // const [category, setCategory] = useState(false);
  // const [brand, setBrand] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   let ResponsiveMenu = () => {
  //     if (window.innerWidth < 667) {
  //       setShowMenu(false);
  //     } else {
  //       setShowMenu(true);
  //     }
  //   };
  //   ResponsiveMenu();
  //   window.addEventListener("resize", ResponsiveMenu);
  // }, []);
  const [showUser, setShowUser] = useState(false);
   const [searchQuery, setSearchQuery] = useState("");
  const products = useSelector((state) => state.orebiReducer.products);
   const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
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
    <div className="w-full h-20 bg-primeColor text-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex flex-row-reverse items-center justify-evenly h-full">
          <Link to="/cart">
            <div>
              <Image className="w-[210px] h-full object-cover" imgSrc={logo1} />
            </div>
          </Link>
          <div className=" flex flex-row-reverse items-center justify-center gap-2 text-xs">
            <Image className="w-7 h-7  " imgSrc={sa} />
            <p className="w-16 text-right">التوصيل إلى السعودية</p>
          </div>
          {/* <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div> */}
              <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center  justify-between px-6 rounded">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px] text-base"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="البحث عن المنتج"
              dir="rtl"
            />
            <CiSearch className="w-5 h-5" />
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
                        ) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
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
          </div>
          <div className=" divide-x-[1px] divide-zinc-300  flex  lg:mt-0 items-center pr-6 cursor-pointer relative">
          
            <div onClick={() => setShowUser(!showUser)} className="flex gap-1 px-2">
              <span className=" text-sm text-white">تسجيل الدخول
              </span>
              <svg className="me-1" width="15" height="20" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <ellipse rx="4.85714" ry="4.8" transform="matrix(-1 0 0 1 9.49979 5.8)" stroke="white" strokeWidth="2"></ellipse> <path d="M1 17.7621C1 16.7061 1.66588 15.765 2.66162 15.4135V15.4135C7.08678 13.8517 11.9132 13.8517 16.3384 15.4135V15.4135C17.3341 15.765 18 16.7061 18 17.7621V19.6978C18 20.9136 16.9243 21.8481 15.7204 21.6782L13.2743 21.3328C10.7705 20.9794 8.22947 20.9794 5.72566 21.3328L3.27958 21.6782C2.07575 21.8481 1 20.9136 1 19.6978V17.7621Z" stroke="white" strokeWidth="2"></path> </svg>
            </div>
            <Link to="/cart">
              <div className="relative w-10 h-10 mx-2 bg-white flex items-center justify-center rounded-full">
             <svg width="22" height="22" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="0.999756" y="7.11133" width="20" height="15.8889" rx="4" stroke="#334155" strokeWidth="1.5"></rect> <path d="M15.9998 9.55556V5C15.9998 2.79086 14.2089 1 11.9998 1H9.99976C7.79062 1 5.99976 2.79086 5.99976 5L5.99976 9.55556" stroke="#334155" strokeWidth="1.5" strokeLinecap="round"></path> </svg>
                <span className="absolute font-titleFont top-0 -right-0 text-xs w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
              <div className="flex items-center  gap-1 text-lg px-2">
            
              English
                <GrLanguage className="text-zinc-200"/>
            </div>
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
