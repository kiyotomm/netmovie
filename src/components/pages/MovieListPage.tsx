import useMovieGenreList from "@/hooks/useMovieGenreList";
import useMovieList from "@/hooks/useMovieList";
import MovieGenreListCard from "../cards/MovieGenreListCard";
import MovieListCard from "../cards/MovieListCard";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "../ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import SkeletonTvMovieList from "../skeletons/SkeletonTvMovieList";

const MovieListPage = () => {
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
  const { data: genres, isLoading: genreIsloading } = useMovieGenreList();

  const [filterCategory, setFilterCategory] = useState({
    genreId: 0,
    genreName: "",
  });
  console.log(filterCategory);

  if (isLoading || genreIsloading) return <SkeletonTvMovieList />;
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
      <div className="block md:hidden">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genres</SelectLabel>

              {genres?.genres.map((gen) => (
                <SelectItem key={gen.id} value={gen.id.toString()}>
                  {gen.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-10 ">
        <div
          onClick={() => {
            setFilterCategory((prev) => ({
              ...prev,
              genreId: 0,
              genreName: "",
            }));
            console.log("clicked");
          }}
          className="text-4xl font-bold"
        >
          {cat()} : {filterCategory.genreName}
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
                        <MovieListCard data={movie} />
                      </div>
                    ))
                )
              : data?.pages.map((page) =>
                  page.results.map((movie) => (
                    <div key={movie.id}>
                      <MovieListCard data={movie} />
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
    </div>
  );
};

export default MovieListPage;

{
  /* {data?.pages.map((page) =>
  page.results.map((movie) => (
    <div key={movie.id}>{<MovieListCard data={movie} />}</div>
  ))
)} */
}

{
  /* {data?.pages.map((page) =>
  page.results
    .filter((movie) =>
      movie.genre_ids.includes(filterCategory.genreId)
    )
    .map((movie) => (
      <div key={movie.id}>
        <MovieListCard data={movie} />
      </div>
    ))
)} */
}
