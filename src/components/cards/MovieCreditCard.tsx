import { Credit } from "@/hooks/useMovieCredits";
import { Link } from "react-router-dom";

const MovieCreditCard = ({ data }: { data: Credit }) => {
  return (
    <Link
      to={"/movie/credit/" + data.id}
      className="flex flex-col w-[150px] gap-2 overflow-hidden border-2 pb-3 "
    >
      {data.profile_path !== null ? (
        <img
          className=""
          src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
          alt={data.name}
        />
      ) : (
        <div className="self-center justify-self-center mt-[15vh]">
          image not available
        </div>
      )}
      <div className="flex flex-col items-center font-bold">
        {data.name}
        <span className="font-light px-3">( {data.character} )</span>
      </div>
    </Link>
  );
};

export default MovieCreditCard;
