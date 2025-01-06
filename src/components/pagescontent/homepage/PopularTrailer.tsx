import PopularTrailerCard from "@/components/cards/PopularTrailerCard";
import SkeletonPopularTrailer from "@/components/skeletons/SkeletonPopularTrailer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import useMoviePopular from "@/hooks/useMoviePopular";

const PopularTrailer = () => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  const { data, isLoading, error } = useMoviePopular();

  if (error) return <div>an error has occured.</div>;
  return (
    <div className="flex flex-col justify-center  gap-5  md:w-[90vw] w-[90vw]">
      {isLoading ? (
        <Skeleton className="w-[10vw] h-[3vh]" />
      ) : (
        <div className="md:text-4xl text-2xl font-bold">Popular now</div>
      )}
      <ScrollArea className="   ">
        <div className="flex gap-7  mb-5 p-10">
          {isLoading
            ? skeleton.map((skele) => <SkeletonPopularTrailer key={skele} />)
            : data?.results.map((movie) => (
                <div key={movie.id}>
                  <PopularTrailerCard data={movie} />
                </div>
              ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default PopularTrailer;
