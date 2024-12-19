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

  return (
    <div className=" flex flex-col gap-5 md:w-[10vw] w-[40vw]">
      <div>
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        />
        <div className="flex gap-2 mt-2">
          <IoStar color="yellow" />
          <IoStar color="yellow" />
          <IoStar color="yellow" />
          <IoStar color="yellow" />
        </div>
      </div>
      <div>
        <div className="font-bold">{data.original_title}</div>
        <div className="flex flex-col  justify-center font-extralight ">
          <div>{formatDate(data.release_date)}</div>
          <div className="mb-5">{data.media_type}</div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovieCard;
