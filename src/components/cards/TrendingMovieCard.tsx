import { Trending } from "@/hooks/useMovieTrending";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

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
    return rate === 0 ? rate : rate.toFixed(1);
  };

  return (
    <div className=" flex flex-col gap-5 md:w-[10vw] w-[40vw]">
      <div>
        <Link to={"/movie-detail/" + data.id}>
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          />
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <IoStar color="yellow" />
          {formatRate(data.vote_average)}
        </div>
      </div>
      <div>
        <Link to={"/movie-detail/" + data.id}>
          <div className="font-bold">{data.original_title}</div>
        </Link>
        <div className="flex flex-col  justify-center font-extralight ">
          <div>{formatDate(data.release_date)}</div>
          {/* <div className="mb-5">{data.media_type}</div> */}
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieCard;
