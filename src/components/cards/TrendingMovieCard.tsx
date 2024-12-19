import { Trending } from "@/hooks/useMovieTrending";
import { FaStar } from "react-icons/fa";

const TrendingMovieCard = ({ data }: { data: Trending }) => {
  return (
    <div className=" flex flex-col gap-5 w-[10vw]">
      <div>
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        />
        <div className="flex gap-2 mt-2">
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
        </div>
      </div>
      <div>
        <div className="font-bold">{data.original_title}</div>
        <div className="flex flex-col  justify-center font-extralight ">
          <div>{data.release_date}</div>
          <div>{data.media_type}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieCard;
