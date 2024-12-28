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

  const formatDate = (dateString?: number) => {
    if (!dateString) return "unknown";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const formatGender = (gender?: string) => {
    if (!gender) return "waht";
    return gender === "1" ? "woman" : " man";
  };

  return (
    <div className="flex gap-8 mb-8">
      <div className="flex flex-col gap-5">
        <img
          className="rounded-xl w-[350px]"
          src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
        />
        <div className="flex flex-col gap-5">
          <span className="font-bold text-2xl">Personal info</span>
          <div className="flex flex-col">
            <span className="font-semibold">Known for</span>
            <span className="font-light">{data?.known_for_department}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Gender</span>
            <span className="font-light">{formatGender(data?.gender)}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Birthday</span>
            <span className="font-light">{formatDate(data?.birthday)}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Place of birth</span>
            <span className="font-light">{data?.place_of_birth}</span>
          </div>
        </div>
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
        <span className="text-xl font-semibold">Known for</span>
        <ScrollArea className="flex flex-col">
          <div className="flex gap-7 w-[40vw]">
            {movie?.cast.map((mov) => (
              <div className="flex flex-col items-center justify-center gap-5 ">
                <div className="w-[10vw]">
                  <img
                    className="w-[150px]"
                    src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                  />
                </div>
                <span>{mov.original_title}</span>
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
