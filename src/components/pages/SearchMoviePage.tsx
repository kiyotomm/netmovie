import { useSearchContext } from "@/context/SearchContext";
import useMovieSearch from "@/hooks/useMovieSearch";

const SearchPage = () => {
  const { searchQuery } = useSearchContext();
  const { data } = useMovieSearch(searchQuery);

  return (
    <div>
      <div>
        {data?.results.map((movie) => (
          <div>{movie.original_title}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
