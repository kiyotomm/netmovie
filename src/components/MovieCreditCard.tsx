import { Credit } from "@/hooks/useMovieCredits";

const MovieCreditCard = ({ data }: { data: Credit }) => {
  return (
    <div className="flex flex-col w-[10vw]">
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.profile_path}
`}
        alt={data.name}
      />
      <div>{data.name}</div>
    </div>
  );
};

export default MovieCreditCard;
