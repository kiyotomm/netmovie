import { Genres } from "@/hooks/useMovieGenreList";

interface Props {
  filter: () => void;
}

const MovieGenreListCard = ({ data }: { data: Genres }, { filter }: Props) => {
  return (
    <div
      onClick={() => filter()}
      className="flex  text-xl hover:scale-110 transition duration-300 rounded-md"
    >
      {data.name}
    </div>
  );
};

export default MovieGenreListCard;
