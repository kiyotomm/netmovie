import { PeopleList } from "@/hooks/usePeopleList";
import { Link } from "react-router-dom";

const PeopleListCard = ({ data }: { data: PeopleList }) => {
  return (
    <Link
      to={"/credit/details/" + data.id}
      className="flex items-center gap-5 md:w-[27vw] w-[87vw] rounded-lg mb-6 md:border-none border-2 md:p-0 p-2 "
    >
      {data.profile_path !== null ? (
        <img
          className="md:w-[200px] md:h-[180px] w-[100px]  rounded-xl object-cover"
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
        <div className="font-extralight">{data.known_for_department}</div>
      </div>
    </Link>
  );
};

export default PeopleListCard;
