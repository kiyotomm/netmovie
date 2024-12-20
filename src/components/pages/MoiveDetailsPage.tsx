import useMovieDetails from "@/hooks/useMovieDetails";
import { useParams } from "react-router-dom";

const MoiveDetailsPage = () => {
  let { id } = useParams();

  const movieId = id ? parseInt(id, 10) : undefined;

  const { data } = useMovieDetails(movieId);
  return (
    <div>
      <div>{data?.original_title}</div>
    </div>
  );
};

export default MoiveDetailsPage;
