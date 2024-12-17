import { CarouselComponent } from "../HomepageCarousel/CarouselComponent";
import { UpNextCard } from "../HomepageCarousel/UpNextCard";

const Homepage = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex mt-10">
        <CarouselComponent />
        <UpNextCard />
      </div>
    </div>
  );
};

export default Homepage;
