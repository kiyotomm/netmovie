import { Skeleton } from "../ui/skeleton";

const SkeletonPeopleList = () => {
  const skeleCount = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center flex-wrap  gap-4 ">
        {skeleCount.map((skele) => (
          <div key={skele} className="flex items-center  gap-4 ">
            <Skeleton className="w-[200px] h-[200px]" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-[150px] h-[20px]" />
              <Skeleton className="w-[120px] h-[20px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonPeopleList;
