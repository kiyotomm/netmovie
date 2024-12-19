import { Trending } from "@/hooks/useMovieTrending";
import { IoStar } from "react-icons/io5";

const TrendingMovieCard = ({ data }: { data: Trending }) => {
  const formatDate = (dateString: number) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const formatRate = (rate: number) => {
    if (rate === 0) {
      return rate;
    } else {
      return rate.toFixed(1);
    }
  };

  return (
    <div className=" flex flex-col gap-5 md:w-[10vw] w-[40vw]">
      <div>
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        />
        <div className="flex items-center gap-2 mt-2">
          <IoStar color="yellow" />
          {formatRate(data.vote_average)}
        </div>
      </div>
      <div>
        <div className="font-bold">{data.original_title}</div>
        <div className="flex flex-col  justify-center font-extralight ">
          <div>{formatDate(data.release_date)}</div>
          {/* <div className="mb-5">{data.media_type}</div> */}
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieCard;
