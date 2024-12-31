import useMovieSearch from "@/hooks/useMovieSearch";
import SearchMovieCard from "../cards/SearchMovieCard";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const SearchPage = () => {
  const location = useLocation();

  // Extract the search query from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query") || "";

  // Fetch movies based on the search query
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useMovieSearch(searchQuery);

  return (
    <div className="flex flex-col gap-10 mt-[10vh]">
      {data?.pages[0]?.total_results !== 0 ? (
        <span className="text-3xl">
          Results for "<span className="font-bold">{searchQuery}</span>"
        </span>
      ) : null}
      {data?.pages.map((page) =>
        page?.total_results !== 0 ? (
          <div className="grid  md:grid-cols-5 grid-cols-2 gap-6 ">
            {page?.results.map((movie) => (
              <SearchMovieCard data={movie} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[90vh] text-4xl">
            Sorry we don't have "
            <span className="font-bold">{searchQuery}</span>"
          </div>
        )
      )}
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} disabled={isLoading}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default SearchPage;
