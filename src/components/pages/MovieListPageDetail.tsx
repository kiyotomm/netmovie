import useMovieGenreList from "@/hooks/useMovieGenreList";
import useMovieList from "@/hooks/useMovieList";
import MovieGenreListCard from "../cards/MovieGenreListCard";
import MovieListCard from "../cards/MovieListCard";
import { useLocation, useParams } from "react-router-dom";

const MovieListPageDetail = () => {
  const { pathname } = useLocation();
  const { category } = useParams();

  const cat = () => {
    switch (pathname) {
      case "/movie-list/popular":
        return "Popular";
      case "/movie-list/now-playing":
        return "Now-Playing";
      case "/movie-list/top-rated":
        return "Top Rated";
      case "/movie-list/upcoming":
        return "Up Coming";
    }
  };

  let endPoint = category?.replace("-", "_");

  const { data } = useMovieList(endPoint);
  const { data: genres } = useMovieGenreList();

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
          {data?.results.map((movie) => (
            <div>{<MovieListCard data={movie} />}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListPageDetail;