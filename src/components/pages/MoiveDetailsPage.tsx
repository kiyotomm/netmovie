import useMovieDetails from "@/hooks/useMovieDetails";
import { IoStar } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";

const MoiveDetailsPage = () => {
  let { id } = useParams();

  const formatHeroDate = (dateString?: string) => {
    if (!dateString) {
      return "loading";
    }
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };

  function formatTime(minutes?: number) {
    if (!minutes) {
      return "tekalang";
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }

  const formatRating = (rating?: number) => {
    if (!rating) {
      return "teka";
    }

    if (rating === 0) {
      return 0;
    } else {
      return rating.toFixed(1);
    }
  };

  const { data } = useMovieDetails(id);
  return (
    <div className="flex justify-center gap-7 p-10 border-2 w-screen">
      <div>
        <img
          className="max-w-[300px] rounded-lg"
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="flex gap-3 md:text-4xl text-2xl">
          <span className="font-bold">{data?.original_title}</span>
          <span className="opacity-25 font-extralight">
            ({formatHeroDate(data?.release_date)})
          </span>
        </div>
        <div>
          <span className="flex font-extralight text-lg">
            {data?.release_date.replace(/-/g, "/")}・
            {data?.genres.map((genre, index) => (
              <span key={genre.id}>
                {genre.name}
                {index < data.genres.length - 1 ? ", " : ""}
              </span>
            ))}
            ・{formatTime(data?.runtime)}
          </span>
        </div>
        <div>
          <span className="flex items-center gap-1 text-5xl font-bold ">
            {" "}
            <IoStar color="yellow" size="50px" />
            {formatRating(data?.vote_average)}
          </span>
        </div>
        <div>
          <Button>
            {" "}
            <FaPlay size="50px" />
            play trailer
          </Button>
        </div>
        <div className="opacity-60">{data?.tagline}</div>
        <div className="max-w-[25vw]">
          <span className="flex flex-col font-bold text-3xl">Overview</span>
          <div className="font-light">{data?.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MoiveDetailsPage;
