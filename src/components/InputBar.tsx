import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchContext } from "@/context/SearchContext";
import { Search } from "lucide-react";

type Inputs = {
  searchMovie: string;
};

const InputBar = () => {
  const { setSearchQuery } = useSearchContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.searchMovie === "") {
      return "bawal yan boss";
    }
    console.log(data);
    setSearchQuery(data.searchMovie);
    // navigate("/search/" + data.searchMovie);
    navigate(`/search?query=${encodeURIComponent(data.searchMovie)}`);
    reset();
  };
  console.log(watch("searchMovie"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative flex items-center md:w-[50vw] w-[80vw]">
        <Input
          {...register("searchMovie")}
          type="text"
          placeholder="Search for a movie"
          className="pr-10"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default InputBar;
