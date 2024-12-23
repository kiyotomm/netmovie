import { Credit } from "@/hooks/useMovieCredits";

const MovieCreditCard = ({ data }: { data: Credit }) => {
  return (
    <div className="flex flex-row">
      <div>{data.name}</div>
    </div>
  );
};

export default MovieCreditCard;
