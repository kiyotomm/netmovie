import { Credit } from "@/hooks/useMovieCredits";
import { Link } from "react-router-dom";

const MovieCreditCard2 = ({ data }: { data: Credit }) => {
  return (
    <Link
      to={"/credit/details/" + data.id}
      className="flex gap-5 md:w-[20vw] w-[87vw] rounded-lg mb-6 "
    >
      {data.profile_path !== null ? (
        <img
          className="w-[65px] h-[60px]  rounded-xl object-cover"
          src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
        />
      ) : (
        <div>
          No <br />
          Image
        </div>
      )}
      <div className="flex flex-col">
        <div className="font-bold">{data.name}</div>
        <div>( {data.character} )</div>
        <div className="font-extralight">{data.known_for_department}</div>
      </div>
    </Link>
  );
};

export default MovieCreditCard2;
