import useCreditDetails from "@/hooks/useCreditDetails";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import useCreditMovie from "@/hooks/useCreditMovie";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const CreditDetailPage = () => {
  const [showMore, setShowMore] = useState(false);

  const { id } = useParams();
  const { data } = useCreditDetails(id);
  const { data: movie } = useCreditMovie(id);
  return (
    <div className="flex gap-8">
      <div className="flex flex-col">
        <img
          className="rounded-xl w-[350px]"
          src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
        />
      </div>
      <div className="flex flex-col gap-5">
        <span className="font-bold text-3xl">{data?.name}</span>
        <div className="flex flex-col">
          <span className=" text-2xl font-semibold">Biography</span>
          <span className="max-w-[30vw]">
            {showMore ? data?.biography : data?.biography.slice(0, 350)}
            {showMore ? " " : "..."}{" "}
            <Button
              className="font-semibold text-blue-500"
              onClick={() => setShowMore((prev) => !prev)}
              variant="link"
            >
              {showMore ? "Show less..." : "Show More..."}
            </Button>
          </span>
        </div>
        <ScrollArea className="">
          <div className="flex gap-7 w-[20vw]">
            {movie?.cast.map((mov) => (
              <div className="flex flex-col justfiy-center items-center w-[20vw]">
                <img
                  className="w-[180px]"
                  src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                />
                <span className="self-end">{mov.original_title}</span>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default CreditDetailPage;
