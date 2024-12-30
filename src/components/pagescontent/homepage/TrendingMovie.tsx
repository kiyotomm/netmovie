import useMovieTrending from "@/hooks/useMovieTrending";
import CustomSwitch from "../../CustomSwitch";
import TrendingMovieCard from "../../cards/TrendingMovieCard";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const TrendingMovie = () => {
  const [trendingPeriod, setTrendingPeriod] = useState<string>("day");
  useEffect(() => {
    console.log("Trending period updated to:", trendingPeriod);
  }, [trendingPeriod]);
  const { data } = useMovieTrending(trendingPeriod);

  return (
    <div className="flex flex-col justify-center gap-5 md:max-w-[84vw] max-w-[85vw] overflow-hidden">
      <div className="flex gap-4 items-center">
        <div className="md:text-3xl text-xl font-bold">Trending</div>
        <div>
          <CustomSwitch
            input1={() => setTrendingPeriod("day")}
            input2={() => setTrendingPeriod("week")}
          />
        </div>
      </div>
      <ScrollArea className=" flex    ">
        <div className="flex gap-5 mb-5">
          {data?.results.map((movie) => (
            <TrendingMovieCard key={movie.id} data={movie} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default TrendingMovie;
