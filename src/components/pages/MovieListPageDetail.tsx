import useMovieGenreList from "@/hooks/useMovieGenreList";
import useMovieList from "@/hooks/useMovieList";
import MovieGenreListCard from "../cards/MovieGenreListCard";
import MovieListCard from "../cards/MovieListCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MovieListPageDetail = () => {
  const { pathname } = useLocation();

  const category = () => {
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
  const url = pathname.split("/");
  const urlPart = url[2];
  let endPoint = urlPart.replace("-", "_");

  // useEffect(() => {
  //   console.log("Endpoint changed to:", endPoint);
  //   // Any additional logic based on the URL can go here
  // }, [endPoint]);
  console.log(endPoint);

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
        <div className="text-4xl font-bold">{category()}</div>
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
