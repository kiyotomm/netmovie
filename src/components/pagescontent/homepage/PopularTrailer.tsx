import PopularTrailerCard from "@/components/cards/PopularTrailerCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useMoviePopular from "@/hooks/useMoviePopular";

const PopularTrailer = () => {
  const { data } = useMoviePopular();
  return (
    <div className="flex flex-col gap-5 md:w-[96vw] w-[90vw]">
      <div className="md:text-4xl text-2xl font-bold">Popular now</div>
      {/* <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hDZ7y8RP5HE?si=GFGECbB559QFeIyr"
          title="YouTube video player"
          //   frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //   referrerpolicy="strict-origin-when-cross-origin"
          //   allowfullscreen
        ></iframe>/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg
      </div> */}
      <ScrollArea className=" flex  overflow-x-scroll  ">
        <div className="flex gap-7 mb-5 p-10">
          {data?.results.map((movie) => (
            <div>
              <PopularTrailerCard data={movie} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default PopularTrailer;
