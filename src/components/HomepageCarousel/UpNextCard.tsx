import useMovieTrending from "@/hooks/useMovieTrending";

export const UpNextCard = () => {
  const { data } = useMovieTrending();
  return (
    <div className=" w-[30vw] h-[40vh] overflow-hidden">
      <div>
        {data?.results.map((movie, ind) => (
          <div className="flex">
            <div key={ind}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                className="w-[6vw] h-full"
              />
            </div>
            <div>{movie.original_title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
