import useMovieDetails from "@/hooks/useMovieDetails";
import { IoStar } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import { DialogComponent } from "../DialogComponent";
import useMovieCredit from "@/hooks/useMovieCredits";
import MovieCreditCard from "../cards/MovieCreditCard";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { MoveRight } from "lucide-react";
import RecommendedCard from "../RecommendedCard";
import useMovieReommended from "@/hooks/useMovieRecommended";

const MoiveDetailsPage = () => {
  let { id } = useParams();

  const { data: movieDetails } = useMovieDetails(id);
  const { data: credit } = useMovieCredit(id);
  const { data: recommended } = useMovieReommended(id);

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

  const formatZeroToNone = (item?: string) => {
    if (!item) {
      return "-";
    }

    return `$${item.toLocaleString()}`;
  };

  const formatLanguage = (locale?: string) => {
    if (!locale) {
      return "teka";
    }
    const displayNames = new Intl.DisplayNames(locale, { type: "language" });

    return displayNames.of(locale!);
  };

  return (
    <div className="flex flex-col gap-[2vw]">
      <div className="flex md:flex-row flex-col justify-center gap-7 p-10 border-y-2 w-screen">
        <div className="flex justify-center">
          <img
            className="md:max-w-[300px] max-w-[290px] rounded-lg"
            src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
            alt={movieDetails?.original_title}
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-3 md:text-4xl text-xl">
            <span className="font-bold">{movieDetails?.original_title}</span>
            <span className="opacity-25 font-extralight">
              ({formatHeroDate(movieDetails?.release_date)})
            </span>
          </div>
          <div className="flex md:flex-row flex-col items-center md:items-start font-extralight text-lg">
            <span>{movieDetails?.release_date.replace(/-/g, "/")}・</span>
            <span>
              {movieDetails?.genres.map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index < movieDetails.genres.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
            ・{formatTime(movieDetails?.runtime)}
          </div>
          <div>
            <span className="flex items-center gap-1 text-5xl font-bold ">
              {" "}
              <IoStar color="yellow" size="50px" />
              {formatRating(movieDetails?.vote_average)}
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
          <div className="opacity-60">{movieDetails?.tagline}</div>
          <div className="max-w-[25vw]">
            <span className="flex flex-col font-bold text-3xl">Overview</span>
            <div className="md:max-w-[40vh]  w-[70vw] font-light ">
              {movieDetails?.overview}
            </div>
          </div>
        </div>
      </div>

      {/* cast and other aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
      <div className="flex md:flex-row flex-col justify-center gap-9">
        <div className="flex flex-col justify-center self-center  ">
          <div className="text-4xl">Cast</div>
          <ScrollArea className="flex justify-center self-center flex-row md:w-[40vw] w-[90vw] ">
            <div className="flex md:gap-7 gap-10 mt-5 p-5">
              {credit?.cast.slice(0, 8).map((cred, ind) => (
                <MovieCreditCard key={ind} data={cred} />
              ))}
              <Link
                to={"/movie/credit/" + movieDetails?.id}
                // variant="ghost"
                className=" flex self-center items-center justify-center gap-2 font-bold w-[5vw]"
              >
                view more <MoveRight />
              </Link>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="flex flex-col gap-8 self-center md:min-w-[20vw] min-w-[90vw] ">
          <div className="flex flex-col border-b-2">
            <span className="font-bold">Status </span>
            <span>{movieDetails?.status}</span>
          </div>
          <div className="flex flex-col border-b-2 ">
            <span className="font-bold">Original Language </span>
            <span>{formatLanguage(movieDetails?.original_language)}</span>
          </div>
          <div className="flex flex-col border-b-2">
            <span className="font-bold">Budget </span>
            <span>{formatZeroToNone(movieDetails?.budget)}</span>
          </div>
          <div className="flex flex-col border-b-2">
            <span className="font-bold">Revenue </span>
            <span>{formatZeroToNone(movieDetails?.revenue)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center md:w-[65vw] w-[90vw] ">
        <span className="font-bold md:text-3xl text-xl">
          Recommended movies
        </span>
        <ScrollArea className="   ">
          <div className="flex gap-7  mb-5 p-10">
            {recommended?.results.map((movie) => (
              <div>
                <RecommendedCard data={movie} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default MoiveDetailsPage;
