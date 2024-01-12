import React from "react";
import Banner from "../../components/Banner/Banner";
// import BannerBottom from "../../components/Banner/BannerBottom";
// import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
// import Sale from "../../components/home/Sale/Sale";
// import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
// import YearProduct from "../../components/home/YearProduct/YearProduct";
import Brands from "../../components/home/Brands";
import ShopbyCategories from "../../components/home/ShopbyCategories";
import NewArrivals2 from "../../components/home/NewArrivals2/NewArrivals";
import NewArrivals3 from "../../components/home/NewArrivals3/NewArrivals";
import NewArrivals4 from "../../components/home/NewArrivals4/NewArrivals";
import Fast from "../../components/home/Fast";
const Home = () => {
  return (
    <div className="max-w-container mx-auto text-primeColor">
      <Banner />
      {/* <BannerBottom /> */}
      <div className=" mx-auto px-4">
        {/* <Sale /> */}
        <Brands />
        <ShopbyCategories/>
        <NewArrivals />
        <NewArrivals2 />
        <NewArrivals3 />
        <NewArrivals4 />
        <Fast/>
        {/* <BestSellers />
        <YearProduct />
        <SpecialOffers /> */}
      </div>
    </div>
  );
};

export default Home;
