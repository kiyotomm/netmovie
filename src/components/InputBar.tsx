import { Input } from "./ui/input";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  searchMovie: string;
};

const InputBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
