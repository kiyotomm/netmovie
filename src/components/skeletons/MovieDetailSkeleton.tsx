import { Skeleton } from "../ui/skeleton";

const MovieDetailSkeleton = () => {
  return (
    <div className="flex flex-col gap-[2vh]">
      <div>
        <Skeleton className="md:w-[300px] w-[290px] " />
        <div></div>
      </div>
    </div>
  );
};

export default MovieDetailSkeleton;
