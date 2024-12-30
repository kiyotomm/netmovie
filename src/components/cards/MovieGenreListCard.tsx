import { Genres } from "@/hooks/useMovieGenreList";

const MovieGenreListCard = ({ data }: { data: Genres }) => {
  return <div>{data.name}</div>;
};

export default MovieGenreListCard;
