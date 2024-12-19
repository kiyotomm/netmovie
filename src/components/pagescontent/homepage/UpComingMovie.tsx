import UpComingCard from "@/components/cards/UpComingCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useMovieUpComing from "@/hooks/useMovieUpComing";

const UpComingMovie = () => {
  const { data } = useMovieUpComing();
  return (
    <div className="flex flex-col justify-center gap-5 md:max-w-[90vw] max-w-[85vw] overflow-hidden">
      <div>Up Coming</div>

      <ScrollArea className=" flex  overflow-x-scroll  ">
        <div className="flex gap-5 mb-5">
          {data?.results.map((movie) => (
            <UpComingCard key={movie.id} data={movie} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default UpComingMovie;
