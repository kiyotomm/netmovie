import useMovieCredit from "@/hooks/useMovieCredits";
import { useParams } from "react-router-dom";
import MovieCreditCard2 from "../cards/MovieCreditCard2";
import useMovieDetails from "@/hooks/useMovieDetails";
import { Button } from "../ui/button";
import { Undo2 } from "lucide-react";

const MovieCreditPage = () => {
  const formatDate = (dateString?: string) => {
    if (!dateString) {
      return "loading";
    }
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };
  const { id } = useParams();
  const { data } = useMovieCredit(id);
  const { data: movie } = useMovieDetails(id);
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className=" flex gap-4 md:text-4xl text-xl items-center  justify-center border-b-2 w-[99vw] p-5">
        <img
          className="md:w-[250px] w-[190px] rounded-lg"
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        />
        <div className="flex flex-col">
          <span className="font-bold">{movie?.original_title}</span>(
          {formatDate(movie?.release_date)})
          <Button
            className="text-xl"
            onClick={() => window.history.back()}
            variant="unstyled"
          >
            Back
            <Undo2 />
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {data?.cast.map((people) => (
          <MovieCreditCard2 data={people} />
        ))}
      </div>
    </div>
  );
};

export default MovieCreditPage;
