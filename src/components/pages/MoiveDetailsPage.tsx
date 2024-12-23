import useMovieDetails from "@/hooks/useMovieDetails";
import { useParams } from "react-router-dom";

const MoiveDetailsPage = () => {
  let { id } = useParams();

  const formatHeroDate = (dateString?: string) => {
    if (!dateString) {
      return "loading";
    }
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };

  const { data } = useMovieDetails(id);
  return (
    <div className="flex gap-7">
      <div>
        <img
          className="max-w-[20vw]"
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="flex gap-3 md:text-4xl text-2xl">
          <span className="font-bold">{data?.original_title}</span>
          <span className="opacity-25 font-extralight">
            ({formatHeroDate(data?.release_date)})
          </span>
        </div>
        <div>
          <span className="flex font-extralight text-lg">
            {data?.release_date.replace(/-/g, "/")}・
            {data?.genres.map((genre, index) => (
              <span key={genre.id}>
                {genre.name}
                {index < data.genres.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoiveDetailsPage;
