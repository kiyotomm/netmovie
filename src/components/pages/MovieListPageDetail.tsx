import useMovieGenreList from "@/hooks/useMovieGenreList";
import useMovieList from "@/hooks/useMovieList";
import MovieGenreListCard from "../cards/MovieGenreListCard";
import MovieListCard from "../cards/MovieListCard";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "../ui/button";

const MovieListPageDetail = () => {
  const { pathname } = useLocation();
  const { category } = useParams();

  const cat = () => {
    switch (pathname) {
      case "/movie-list/popular":
        return "Popular";
      case "/movie-list/now-playing":
        return "Now Playing";
      case "/movie-list/top-rated":
        return "Top Rated";
      case "/movie-list/upcoming":
        return "Up Coming";
    }
  };

  let endPoint = category?.replace("-", "_");

  const { data, hasNextPage, fetchNextPage, isLoading } =
    useMovieList(endPoint);
  const { data: genres } = useMovieGenreList();
  const filterCategory = (cate) => {
    data.pages.map((page) =>
      page.results.filter((mov) => mov.id === genres?.genres.id)
    );
  };
  return (
    <div className="flex gap-10 mt-[5vw] ">
      <div className="flex flex-col gap-2  w-[10vw] h-[20vh] mt-[5vw]">
        {genres?.genres.map((gen) => (
          <MovieGenreListCard key={gen.id} data={gen} />
        ))}
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="text-4xl font-bold">{cat()}</div>
        <div className="grid grid-cols-5 gap-6">
          {data?.pages.map((page) =>
            page.results.map((movie) => (
              <div>{<MovieListCard data={movie} />}</div>
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

export default MovieListPageDetail;
