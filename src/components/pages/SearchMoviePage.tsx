import { useSearchContext } from "@/context/SearchContext";
import useMovieSearch from "@/hooks/useMovieSearch";

const SearchPage = () => {
  const { searchQuery } = useSearchContext();
  const { data } = useMovieSearch(searchQuery);

  return (
    <div className="flex">
      <div className="flex flex-col w-[80vw]">
        {data?.results.map((movie) => (
          <div className="flex gap-10">
            <span>{movie.original_title}</span>
            <span>{movie.overview}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
