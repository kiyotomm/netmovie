import { Skeleton } from "../ui/skeleton";

const SkeletonTrendingMovie = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <Skeleton className=" w-[10vw] h-[28vh] " />
        <Skeleton className="w-[4vw] h-[3vh]" />
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="w-[10vw] h-[2vh]" />
        <Skeleton className="w-[5vw] h-[2vh]" />
      </div>
    </div>
  );
};

export default SkeletonTrendingMovie;
