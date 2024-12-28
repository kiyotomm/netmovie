import { CreditMovie } from "@/hooks/useCreditMovie";

const CreditDetailMovieCard = ({ data }: { data: CreditMovie }) => {
  return (
    <div className="flex flex-col gap-4">
      {" "}
      <img
        className="w-[180px]"
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
      />
      <span className="self-end">{data.original_title}</span>
    </div>
  );
};

export default CreditDetailMovieCard;
