import { FaPlay } from "react-icons/fa";

import { PopularMovie } from "@/hooks/useMoviePopular";
import { Link } from "react-router-dom";

const PopularTrailerCard = ({ data }: { data: PopularMovie }) => {
  return (
    <div className="flex flex-col items-center gap-5 md:w-[30vw] w-[80vw] lg:w-[20vw]  md:hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center items-center relative">
        {/* <Link to={"/movie-detail/" + data.id}> */}
        <div className="relative">
          <img
            className="rounded-xl"
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          />
        </div>
        {/* </Link> */}
        <div className="absolute  ">
          <FaPlay size="50px" />
        </div>
      </div>
      <Link to={"/movie-detail/" + data.id}>
        <div className="font-semibold">{data.original_title}</div>
      </Link>
    </div>
  );
};

export default PopularTrailerCard;
