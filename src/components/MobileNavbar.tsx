import Title from "./Title";
import { MobileSheetComponent } from "./MobileSheetComponent";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";
import { SearchSheetComponent } from "./SearchSheetComponent";

const MobileNavbar = () => {
  return (
    <div className=" flex items-center gap-4 p-5 ">
      <MobileSheetComponent />
      <Title />
      <SearchSheetComponent />
      <Button variant="ghost" className="overflow-hidden">
        <Languages
          // size="30px"
          style={{ fontSize: "30px", width: "30px", height: "30px" }}
        />
      </Button>
    </div>
  );
};

export default MobileNavbar;
