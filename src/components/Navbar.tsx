import InputBar from "./InputBar";
import QuickSearch from "./QuickSearch";
import Title from "./Title";

const Navbar = () => {
  return (
    <div className="flex items-center p-5 gap-3 w-screen">
      <Title />
      <InputBar />
      <QuickSearch />
    </div>
  );
};

export default Navbar;
