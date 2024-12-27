import useMovieSearch from "@/hooks/useMovieSearch";
import SearchMovieCard from "../cards/SearchMovieCard";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();

  // Extract the search query from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query") || "";

  // Fetch movies based on the search query
  const { data } = useMovieSearch(searchQuery);

  return (
    <div className="flex">
      {/* <div className="flex justify-center gap-6 flex-wrap max-w-[840px]"> */}
      <div className="grid  md:grid-cols-5 grid-cols-2 gap-6 ">
        {data?.results.map((movie) => (
          <SearchMovieCard data={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
