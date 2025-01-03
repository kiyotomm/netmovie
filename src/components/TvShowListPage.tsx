import useMovieGenreList from "@/hooks/useMovieGenreList";
import { useLocation, useParams } from "react-router-dom";
import TvShowListCard from "./cards/TvShowListCard";
import useTvShowList from "@/hooks/useTvShowList";
import MovieGenreListCard from "./cards/MovieGenreListCard";
import { Button } from "./ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MovieListPageDetail = () => {
  const { pathname } = useLocation();
  const { category } = useParams();

  const cat = () => {
    switch (pathname) {
      case "/tv-show-list/airing-today":
        return "Airing Today";
      case "/tv-show-list/on-the-air":
        return "On the air";
      case "/tv-show-list/popular":
        return "Popular";
      case "/tv-show-list/top-rated":
        return "Top Rated";
    }
  };

  let endPoint = category?.replace(/-/g, "_");

  const { data, hasNextPage, fetchNextPage, isLoading } =
    useTvShowList(endPoint);
  const { data: genres } = useMovieGenreList();

  return (
    <div className="flex gap-10 mt-[5vw] ">
      <div className="flex flex-col gap-2  w-[10vw] h-[20vh] mt-[5vw]">
        {genres?.genres.map((gen) => (
          <MovieGenreListCard key={gen.id} data={gen} />
        ))}
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genres</SelectLabel>
              {genres?.genres.map((gen) => (
                <SelectItem value={gen.id.toString()}>{gen.name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="text-4xl font-bold">{cat()}</div>
        <div className="grid grid-cols-5 gap-6">
          {data?.pages.map((page) =>
            page.results.map((movie) => (
              <div>{<TvShowListCard data={movie} />}</div>
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
