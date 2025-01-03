import useMovieSearch from "@/hooks/useMovieSearch";
import SearchMovieCard from "../cards/SearchMovieCard";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import useMovieGenreList from "@/hooks/useMovieGenreList";
import MovieGenreListCard from "../cards/MovieGenreListCard";

const SearchPage = () => {
  const location = useLocation();

  // Extract the search query from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query") || "";

  // Fetch movies based on the search query
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useMovieSearch(searchQuery);

  const { data: genres } = useMovieGenreList();

  const [filterCategory, setFilterCategory] = useState({
    genreId: 0,
    genreName: "",
  });

  return (
    <div className="flex md:flex-row flex-col gap-10 mt-[5vw]">
      <div className="md:flex flex-col gap-2 w-[10vw] h-[20vh] mt-[5vw] hidden">
        {genres?.genres.map((gen) => (
          <div
            onClick={() =>
              setFilterCategory((prev) => ({
                ...prev,
                genreId: gen.id,
                genreName: gen.name,
              }))
            }
          >
            <MovieGenreListCard key={gen.id} data={gen} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-7">
        <div className="grid md:grid-cols-5 grid-cols-2 gap-6">
          {filterCategory.genreId !== 0
            ? data?.pages.map((page) =>
                page.results
                  .filter((movie) =>
                    Array.isArray(movie.genre_ids)
                      ? movie.genre_ids.includes(filterCategory.genreId)
                      : movie.genre_ids === filterCategory.genreId
                  )
                  .map((movie) => (
                    <div key={movie.id}>
                      <SearchMovieCard data={movie} />
                    </div>
                  ))
              )
            : data?.pages.map((page) =>
                page.results.map((movie) => (
                  <div key={movie.id}>
                    <SearchMovieCard data={movie} />
                  </div>
                ))
              )}
        </div>
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()} disabled={isLoading}>
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
