import { Skeleton } from "../ui/skeleton";

const SkeletonCreditDetail = () => {
  return (
    <div className="flex gap-7">
      <div className="flex flex-col gap-5">
        <Skeleton className="w-[350px] h-[500px]" />
        <Skeleton className="w-[100px] h-[20px]" />
        <Skeleton className="w-[330px] h-[20px]" />
        <Skeleton className="w-[100px] h-[20px]" />
        <Skeleton className="w-[330px] h-[20px]" />
        <Skeleton className="w-[100px] h-[20px]" />
        <Skeleton className="w-[330px] h-[20px]" />
        <Skeleton className="w-[100px] h-[20px]" />
        <Skeleton className="w-[330px] h-[20px]" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-7">
          <Skeleton className="w-[250px] h-[30px]" />
          <div className="flex flex-col gap-5">
            <Skeleton className="w-[180px] h-[25px]" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-[280px] h-[18px]" />
              <Skeleton className="w-[270px] h-[18px]" />
              <Skeleton className="w-[260px] h-[18px]" />
              <Skeleton className="w-[290px] h-[18px]" />
              <Skeleton className="w-[280px] h-[18px]" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5 mt-10">
          <Skeleton className="w-[150px] h-[30px]" />
          <div className="flex gap-4">
            <Skeleton className="w-[160px] h-[260px]" />
            <Skeleton className="w-[160px] h-[260px]" />
            <Skeleton className="hidden md:block w-[160px] h-[260px]" />
            <Skeleton className="hidden md:block w-[160px] h-[260px]" />
            <Skeleton className="hidden md:block w-[160px] h-[260px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCreditDetail;
