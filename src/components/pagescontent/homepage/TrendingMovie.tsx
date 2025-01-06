import useMovieTrending from "@/hooks/useMovieTrending";
import CustomSwitch from "../../CustomSwitch";
import TrendingMovieCard from "../../cards/TrendingMovieCard";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SkeletonTrendingMovie from "@/components/skeletons/SkeletonTrendingMovie";
import { Skeleton } from "@/components/ui/skeleton";

const TrendingMovie = () => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  const [trendingPeriod, setTrendingPeriod] = useState<string>("day");
  useEffect(() => {
    console.log("Trending period updated to:", trendingPeriod);
  }, [trendingPeriod]);
  const { data, isLoading, error } = useMovieTrending(trendingPeriod);

  {
    error && <div>an error has occured</div>;
  }

  return (
    <div className="flex flex-col justify-center gap-5 md:max-w-[84vw] max-w-[85vw] overflow-hidden">
      <div className="flex gap-4 items-center">
        {isLoading ? (
          <div className="flex gap-3">
            <Skeleton className="w-[8vw] h-[5vh]" />
            <Skeleton className="w-[8vw] h-[5vh]" />
          </div>
        ) : (
          <>
            <div className="md:text-3xl text-xl font-bold">Trending</div>
            <div>
              <CustomSwitch
                input1={() => setTrendingPeriod("day")}
                input2={() => setTrendingPeriod("week")}
              />
            </div>
          </>
        )}
      </div>
      <ScrollArea className=" flex    ">
        <div className="flex gap-5 mb-5">
          {isLoading
            ? skeleton.map((skele) => <SkeletonTrendingMovie key={skele} />)
            : data?.results.map((movie) => (
                <TrendingMovieCard key={movie.id} data={movie} />
              ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default TrendingMovie;
