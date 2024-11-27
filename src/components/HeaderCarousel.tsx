import { useRef } from "react";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const HeaderCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="w-screen h-[200px]">
      <Carousel
        plugins={[plugin.current]}
        className="h-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        style={{ height: "200px", width: "100%" }}
      >
        <CarouselContent className="h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="h-full ">
              <div className="p-1">
                <Card className="h-full ">
                  <CardContent className="flex  items-center  p-6 h-[70vh] overflow-hidden  ">
                    <span className="text-4xl font-semibold">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
                        `}
                      />
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeaderCarousel;
