import { MovieSearch } from "@/hooks/useMovieSearch";

const SearchMovieCard = ({ data }: { data: MovieSearch }) => {
  return <div>{data.original_title}</div>;
};

export default SearchMovieCard;
