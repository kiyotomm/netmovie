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
import { UpNextCard } from "./UpNextCard";

export function CarouselComponent() {
  const { data: popular } = useMovieTrending();

  const plugin = React.useRef(
    Autoplay({ delay: 222000, stopOnInteraction: false })
  );

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-[50vw] h-[40vh]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {popular?.results.slice(0, 5).map((movie, index) => (
            <CarouselItem key={index} className="h-[40vh]">
              <div className=" h-full">
                <Card className="flex justify-between items-center h-full">
                  {/* <Card className="flex  h-full"> */}
                  <CardContent className="flex  items-center justify-around p-0 ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt=""
                      className="w-[17vw] h-full"
                    />
                  </CardContent>
                  <CardContent>
                    <span className="text-4xl font-semibold ">
                      <div>{movie.original_title}</div>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {popular?.results.slice(0, 5).map((movie, index) => (
        <UpNextCard
          key={index}
          image={movie.poster_path}
          original_title={movie.original_title}
        />
      ))}
    </>
  );
}
