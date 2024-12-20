import useMovieDetails from "@/hooks/useMovieDetails";
import { useParams } from "react-router-dom";

const MoiveDetailsPage = () => {
  let { id } = useParams();

  const { data } = useMovieDetails(id);
  return (
    <div>
      <div>{data?.original_title}</div>
    </div>
  );
};

export default MoiveDetailsPage;
