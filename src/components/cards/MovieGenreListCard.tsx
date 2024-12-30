import { Genres } from "@/hooks/useMovieGenreList";

const MovieGenreListCard = ({ data }: { data: Genres }) => {
  return (
    <div className="flex  text-xl hover:scale-110 transition duration-300 rounded-md">
      {data.name}
    </div>
  );
};

export default MovieGenreListCard;
