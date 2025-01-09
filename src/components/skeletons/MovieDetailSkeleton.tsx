import { Skeleton } from "../ui/skeleton";

const MovieDetailSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-[2vh]">
      <div
        className="flex md:flex-row flex-col
       gap-4"
      >
        <Skeleton className="md:w-[300px] w-[290px] h-[410px] " />
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Skeleton className="md:w-[100px] w-[100px] md:h-[40px] h-[30px] " />
            <Skeleton className="md:w-[100px] w-[100px] md:h-[40px] " />
          </div>
          <Skeleton className="md:w-[400px] w-[290px] h-[25px] " />
          <Skeleton className="md:w-[140px] w-[290px] h-[80px] " />
          <Skeleton className="md:w-[140px] w-[290px] h-[40px] " />
          <Skeleton className="md:w-[200px] w-[290px] h-[20px] " />
          <Skeleton className="md:w-[140px] w-[290px] h-[50px] " />
          <Skeleton className="md:w-[300px] w-[290px] h-[80px] " />
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-end gap-4">
        <div className="flex flex-col gap-5 ">
          <Skeleton className="w-[80px] h-[40px]" />
          <div className="flex gap-4">
            <Skeleton className="w-[160px] h-[270px]" />
            <Skeleton className="w-[160px] h-[270px]" />
            <Skeleton className="hidden md:block w-[160px] h-[270px]" />
            <Skeleton className="hidden md:block w-[160px] h-[270px]" />
            <Skeleton className="hidden md:block w-[160px] h-[270px]" />
            <Skeleton className="hidden md:block w-[160px] h-[270px]" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-[330px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-[330px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-[330px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-[330px] h-[20px]" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Skeleton className="w-[160px] h-[30px]" />

        <div className="flex gap-5">
          <Skeleton className=" md:w-[370px] w-[300px] h-[200px]" />
          <Skeleton className="hidden md:block w-[370px] h-[200px]" />
          <Skeleton className="hidden md:block w-[370px] h-[200px]" />
          <Skeleton className="hidden md:block w-[370px] h-[200px]" />
          <Skeleton className="hidden md:block w-[370px] h-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSkeleton;
