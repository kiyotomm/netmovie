import { useSearchContext } from "@/context/SearchContext";
import useMovieSearch from "@/hooks/useMovieSearch";
import SearchMovieCard from "../cards/SearchMovieCard";

const SearchPage = () => {
  const { searchQuery } = useSearchContext();
  const { data } = useMovieSearch(searchQuery);

  return (
    <div className="flex">
      <div className="flex flex-wrap w-[80vw]">
        {data?.results.map((movie) => (
          <SearchMovieCard data={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
