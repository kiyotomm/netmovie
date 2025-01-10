import usePeopleList from "@/hooks/usePeopleList";
import PeopleListCard from "../cards/PeopleListCard";
import { Button } from "../ui/button";
import SkeletonPeopleList from "../skeletons/SkeletonPeopleList";

const PeopleListPage = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = usePeopleList();

  if (isLoading) return <SkeletonPeopleList />;
  return (
    <div className="flex flex-col justify-center gap-5 md:mt-[5vw] mt-[20vw]">
      <span className="text-4xl font-bold">Popular people</span>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 w-[80vw] mt-10 ">
        {data?.pages.map((page) =>
          page.results.map((people) => <PeopleListCard data={people} />)
        )}
      </div>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} disabled={isLoading}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default PeopleListPage;
