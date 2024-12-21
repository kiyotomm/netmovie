import useMovieDetails from "@/hooks/useMovieDetails";
import { useParams } from "react-router-dom";

const MoiveDetailsPage = () => {
  let { id } = useParams();

  const formatHeroDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };

  const { data } = useMovieDetails(id);
  return (
    <div className="flex">
      <div className="flex gap-3 text-4xl">
        <div className="font-bold">{data?.original_title}</div>
        <div>({formatHeroDate(data!.release_date)})</div>
      </div>
    </div>
  );
};

export default MoiveDetailsPage;
