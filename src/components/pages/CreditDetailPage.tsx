import useCreditDetails from "@/hooks/useCreditDetails";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
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

  const formatGender = (gender?: number) => {
    if (!gender) return "waht";
    return gender === 1 ? "female" : " male";
  };

  console.log(data?.gender);

  return (
    <div className="flex md:items-start items-center justify-center md:flex-row flex-col gap-8 mb-8">
      <div className="flex flex-col gap-5">
        <img
          className="rounded-xl md:w-[350px] w-[320px]"
          src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
        />
        <span className="block md:hidden font-bold text-3xl">{data?.name}</span>
        <div className="flex flex-col gap-5 ">
          <span className="font-bold text-2xl">Personal info</span>
          <div className="flex flex-col border-b-2">
            <span className="font-semibold">Known for</span>
            <span className="font-light">{data?.known_for_department}</span>
          </div>
          <div className="flex flex-col border-b-2">
            <span className="font-semibold">Gender</span>
            <span className="font-light">{formatGender(data?.gender)}</span>
          </div>
          <div className="flex flex-col border-b-2">
            <span className="font-semibold">Birthday</span>
            <span className="font-light">{formatDate(data?.birthday)}</span>
          </div>
          <div className="flex flex-col border-b-2">
            <span className="font-semibold">Place of birth</span>
            <span className="font-light">{data?.place_of_birth}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <span className="hidden md:block font-bold text-3xl">{data?.name}</span>
        <div className="flex flex-col">
          {data?.biography && (
            <span className=" text-2xl font-semibold">Biography</span>
          )}
          {data?.biography && (
            <span className="md:max-w-[30vw] max-w-[85vw]">
              {showMore ? data?.biography : data?.biography.slice(0, 350)}
              {showMore ? " " : "..."}{" "}
              {data!.biography.length > 349 && (
                <Button
                  className="font-semibold text-blue-500"
                  onClick={() => setShowMore((prev) => !prev)}
                  variant="link"
                >
                  {showMore ? "Show less..." : "Show More..."}
                </Button>
              )}
            </span>
          )}
        </div>
        <span className="text-xl font-semibold">Known for</span>
        <ScrollArea>
          <div className="flex md:gap-7 gap-0 md:w-[40vw] w-[85vw]">
            {movie?.cast.map((mov) => (
              <Link
                key={mov.id}
                to={"/movie-detail/" + mov?.id}
                className="flex flex-col items-center justify-center gap-5 "
              >
                <div className="flex justify-center md:w-[10vw] w-[85vw]">
                  <img
                    className="md:w-[150px] w-[200px]"
                    src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                  />
                </div>
                <span>{mov.original_title}</span>
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default CreditDetailPage;
