import useMovieTrending from "@/hooks/useMovieTrending";
import CustomSwitch from "./CustomSwitch";
import TrendingMovieCard from "./cards/TrendingMovieCard";

const TrendingMovie = () => {
  const { data } = useMovieTrending();

  return (
    <div className="flex flex-col justify-center gap-5 w-[90vw]">
      <div className="flex gap-4">
        <div className="md:text-3xl text-xl font-bold">Trending</div>
        <div>
          <CustomSwitch />
        </div>
      </div>
      <div className=" flex  overflow-x-scroll  ">
        <div className="flex gap-5">
          {data?.results.map((movie) => (
            <TrendingMovieCard data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingMovie;
