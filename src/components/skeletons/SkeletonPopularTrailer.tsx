import { Skeleton } from "../ui/skeleton";

const SkeletonPopularTrailer = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Skeleton className="w-[20vw] h-[20vh]" />
      <Skeleton className="w-[6vw] h-[2vh]" />
    </div>
  );
};

export default SkeletonPopularTrailer;
