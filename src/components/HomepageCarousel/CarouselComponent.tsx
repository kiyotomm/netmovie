import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import useMovieTrending from "@/hooks/useMovieTrending";

export function CarouselComponent() {
  const { data: popular } = useMovieTrending();

  const plugin = React.useRef(
    Autoplay({ delay: 222000, stopOnInteraction: false })
  );

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-[70vw] h-[60vh]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {popular?.results.slice(0, 5).map((movie, index) => (
            <CarouselItem key={index} className="h-[60vh]">
              <div className=" h-full">
                <Card className="flex justify-between items-center h-full">
                  {/* <Card className="flex  h-full"> */}
                  <CardContent className="flex  items-center justify-around p-0 ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt=""
                      className=""
                    />
                  </CardContent>
                  <CardContent className="flex flex-col justify-center items-center w-full h-full">
                    <span className="text-4xl font-semibold ">
                      <div>{movie.original_title}</div>
                    </span>
                    <div>{movie.overview}</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
