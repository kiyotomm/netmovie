import HeroSection from "../HeroSection";
import TrendingMovie from "../TrendingMovie";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden ">
      <div className="flex mt-4">
        <HeroSection />
      </div>
      <div className=" md:p-10 p-7  mt-10  ">
        <TrendingMovie />
      </div>
    </div>
  );
};

export default Homepage;
