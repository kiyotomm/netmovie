import useMovieNowPlaying from "@/hooks/useMovieNowPlaying";
import NowPlayingMovieCard from "../cards/NowPlayingMovieCard";
import useMovieGenreList from "@/hooks/useMovieGenreList";
import MovieGenreListCard from "../cards/MovieGenreListCard";

const MovieNowPlayingPage = () => {
  const { data } = useMovieNowPlaying();
  const { data: g } = useMovieGenreList();
  return (
    <div className="flex gap-10 mt-[5vw] ">
      <div className="flex flex-col gap-2  w-[10vw] h-[20vh] mt-[5vw]">
        {g?.genres.map((gen) => (
          <MovieGenreListCard data={gen} />
        ))}
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="text-4xl font-bold">Now Playing</div>
        <div className="grid grid-cols-5 gap-6">
          {data?.results.map((movie) => (
            <div>{<NowPlayingMovieCard data={movie} />}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieNowPlayingPage;
