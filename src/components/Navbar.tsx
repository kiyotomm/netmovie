import { Languages } from "lucide-react";
import InputBar from "./InputBar";
import { SheetComponent } from "./SheetComponent";
import Title from "./Title";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center p-5 gap-3 w-full">
      <Title />
      <SheetComponent />
      <InputBar />
      <Button variant="ghost">
        <Languages
          // size="30px"
          style={{ fontSize: "30px", width: "30px", height: "30px" }}
        />
      </Button>
    </div>
  );
};

export default Navbar;
