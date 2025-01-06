import UpComingCard from "@/components/cards/UpComingCard";
import SkeletonTrendingMovie from "@/components/skeletons/SkeletonTrendingMovie";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import useMovieUpComing from "@/hooks/useMovieUpComing";

const UpComingMovie = () => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  const { data, isLoading } = useMovieUpComing();
  return (
    <div className="flex flex-col justify-center gap-5 md:max-w-[90vw] max-w-[85vw] overflow-hidden">
      {isLoading ? (
        <Skeleton className="w-[10vw] h-[5vh]" />
      ) : (
        <div className="md:text-3xl text-xl font-bold">Up Coming</div>
      )}

      <ScrollArea className=" flex   ">
        <div className="flex gap-5 mb-5">
          {isLoading
            ? skeleton.map((skele) => <SkeletonTrendingMovie key={skele} />)
            : data?.results.map((movie) => (
                <UpComingCard key={movie.id} data={movie} />
              ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default UpComingMovie;
