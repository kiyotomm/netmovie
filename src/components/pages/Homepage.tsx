import { Link } from "react-router-dom";
import HeroSection from "../pagescontent/homepage/HeroSection";
import PopularTrailer from "../pagescontent/homepage/PopularTrailer";
import TrendingMovie from "../pagescontent/homepage/TrendingMovie";
import UpComingMovie from "../pagescontent/homepage/UpComingMovie";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center overflow-hidden ">
      <div className="flex mt-4">
        <HeroSection />
      </div>
      <div className=" md:p-10 p-7  mt-10  ">
        <TrendingMovie />
      </div>
      <div>
        <PopularTrailer />
      </div>
      <div>
        <UpComingMovie />
        <Link to="search">dog</Link>
      </div>
    </div>
  );
};

export default Homepage;
