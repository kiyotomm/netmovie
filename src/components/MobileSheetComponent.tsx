"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export function MobileSheetComponent() {
  return (
    <div className="p-0 m-0">
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button variant="unstyled" className="p-0 m-0">
            <Menu style={{ fontSize: "30px", width: "30px", height: "30px" }} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className=" flex h-screen [&>button]:hidden">
          <SheetClose asChild className="">
            <X />
          </SheetClose>
          {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  );
}
