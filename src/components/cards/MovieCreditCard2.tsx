import { Credit } from "@/hooks/useMovieCredits";

const MovieCreditCard2 = ({ data }: { data: Credit }) => {
  return (
    <div className="flex gap-5 w-[20vw] rounded-lg mb-6">
      {data.profile_path !== null ? (
        <img
          className="w-[2vw] h-[5vh] rounded-xl object-cover"
          src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
        />
      ) : (
        <div>
          No <br />
          Image
        </div>
      )}
      <div className="flex flex-col">
        <div className="font-bold">{data.name}</div>
        <div>( {data.character} )</div>
        <div className="font-extralight">{data.known_for_department}</div>
      </div>
    </div>
  );
};

export default MovieCreditCard2;
