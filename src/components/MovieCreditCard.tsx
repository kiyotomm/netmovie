import { Credit } from "@/hooks/useMovieCredits";

const MovieCreditCard = ({ data }: { data: Credit }) => {
  return (
    <div className="flex flex-col w-[150px] gap-2 overflow-hidden border-2 pb-3 ">
      <img
        className=""
        src={`https://image.tmdb.org/t/p/w500/${data.profile_path}
`}
        alt={data.name}
      />
      <div className="flex flex-col items-center font-bold">
        {data.name}
        <span className="font-light px-3">( {data.character} )</span>
      </div>
    </div>
  );
};

export default MovieCreditCard;
