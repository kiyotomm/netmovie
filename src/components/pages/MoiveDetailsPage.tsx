import useMovieDetails from "@/hooks/useMovieDetails";
import { IoStar } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import { DialogComponent } from "../DialogComponent";
import useMovieCredit from "@/hooks/useMovieCredits";
import MovieCreditCard from "../MovieCreditCard";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

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
  const { data: credit } = useMovieCredit(id);
  return (
    <div className="flex flex-col gap-[2vw]">
      <div className="flex md:flex-row flex-col justify-center gap-7 p-10 border-2 w-screen">
        <div className="flex justify-center">
          <img
            className="md:max-w-[300px] max-w-[290px] rounded-lg"
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.original_title}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-3 md:text-4xl text-xl">
            <span className="font-bold">{data?.original_title}</span>
            <span className="opacity-25 font-extralight">
              ({formatHeroDate(data?.release_date)})
            </span>
          </div>
          <div className="flex md:flex-row flex-col items-center md:items-start font-extralight text-lg">
            <span>{data?.release_date.replace(/-/g, "/")}・</span>
            <span>
              {data?.genres.map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index < data.genres.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
            ・{formatTime(data?.runtime)}・{data?.status}
          </div>
          <div>
            <span className="flex items-center gap-1 text-5xl font-bold ">
              {" "}
              <IoStar color="yellow" size="50px" />
              {formatRating(data?.vote_average)}
            </span>
          </div>
          <div>
            <DialogComponent
              open={
                <Button>
                  <FaPlay size="50px" />
                  play trailer
                </Button>
              }
            />
          </div>
          <div className="opacity-60">{data?.tagline}</div>
          <div className="max-w-[25vw]">
            <span className="flex flex-col font-bold text-3xl">Overview</span>
            <div className="md:max-w-[40vh]  w-[70vw] font-light ">
              {data?.overview}
            </div>
          </div>
        </div>
        {/* {credit?.cast.map((cred) => (
          <div key={cred.known_for_department}>{cred.known_for_department}</div>
        ))} */}
      </div>
      <div className="flex flex-col   w-[100vw]">
        <ScrollArea className="flex justify-center self-center flex-row w-[60vw] ">
          <div>Cast</div>
          <div className="flex gap-5 mt-5">
            {credit?.cast.map((cred) => (
              <MovieCreditCard data={cred} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default MoiveDetailsPage;
