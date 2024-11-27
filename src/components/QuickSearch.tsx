import { Button } from "@/components/ui/button";

const QuickSearch = () => {
  const qs = [{ type: "trending" }, { type: "genre" }];
  return (
    <div className="flex flex-row gap-3">
      {qs.map((quick, ind) => (
        <Button variant="ghost">
          <div key={ind} className="font-bold text-base">
            {quick.type}
          </div>
        </Button>
      ))}
    </div>
  );
};

export default QuickSearch;
