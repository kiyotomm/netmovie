interface Movie {
  image: string;
  original_title: string;
}

interface Props {
  movies: Movie[];
}

export const UpNextCard = ({ movies }: Props) => {
  return (
    <div className="w-[30vw] h-[40vh] overflow-hidden">
      <div className="flex flex-col gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="flex items-center">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
                alt={movie.original_title}
                className="w-[6vw] h-auto"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{movie.original_title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
