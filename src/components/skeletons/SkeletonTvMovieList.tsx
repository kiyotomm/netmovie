import { Skeleton } from "../ui/skeleton";

const SkeletonTvMovieList = () => {
  const skelets = [1, 2, 3, 4, 5, 6];
  const skeleGen = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="flex flex-row gap-9">
      <div className="flex flex-col gap-2 mt-12">
        {skeleGen.map((sk) => (
          <Skeleton key={sk} className="w-[120px] h-[19px]" />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <Skeleton className="w-[120px] h-[30px]" />
        <div className="grid grid-cols-5 gap-5">
          {skelets.map((skele) => (
            <Skeleton key={skele} className="w-[150px] h-[220px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonTvMovieList;
