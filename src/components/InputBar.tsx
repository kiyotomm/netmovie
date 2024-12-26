import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchContext } from "@/context/SearchContext";

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
    console.log(data);
    setSearchQuery(data.searchMovie);
    navigate("/search/" + data.searchMovie);
    reset();
  };
  console.log(watch("searchMovie"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("searchMovie")}
        type="text"
        placeholder="Search for a movie"
        className="w-[70vw]"
      />
    </form>
  );
};

export default InputBar;
