import Title from "./Title";
import { MobileSheetComponent } from "./MobileSheetComponent";
import { Languages, Search } from "lucide-react";
import { Button } from "./ui/button";

const MobileNavbar = () => {
  return (
    <div className=" flex items-center gap-4 p-5">
      <MobileSheetComponent />
      <Title />
      <Search />
      <Button variant="ghost">
        <Languages
          // size="30px"
          style={{ fontSize: "30px", width: "30px", height: "30px" }}
        />
      </Button>
    </div>
  );
};

export default MobileNavbar;
