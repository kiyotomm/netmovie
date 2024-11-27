const QuickSearch = () => {
  const qs = [{ type: "trending" }, { type: "genre" }];
  return (
    <div className="flex flex-row gap-3">
      {qs.map((quick, ind) => (
        <div key={ind} className="font-bold">
          {quick.type}
        </div>
      ))}
    </div>
  );
};

export default QuickSearch;
