import usePeopleList from "@/hooks/usePeopleList";
import PeopleListCard from "../cards/PeopleListCard";
import { Button } from "../ui/button";

const PeopleListPage = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = usePeopleList();
  return (
    <div className="flex flex-col gap-5 mt-[5vw]">
      <span className="text-4xl font-bold">Popular people</span>
      <div className="grid grid-cols-3 gap-10 w-[80vw] mt-10 ">
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
