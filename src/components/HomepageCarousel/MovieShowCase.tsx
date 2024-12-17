import useMovieTrending from "@/hooks/useMovieTrending";
import { CarouselComponent } from "./CarouselComponent";
import { UpNextCard } from "./UpNextCard";

const MovieShowCase = () => {
  const { data } = useMovieTrending();

  return (
    <div className="flex mt-10">
      <div>
        {data?.results.map((movie, ind) => (
          <div key={ind}>
            {
              <CarouselComponent
                image={movie.poster_path}
                title={movie.original_title}
              />
            }
            <UpNextCard image={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieShowCase;
