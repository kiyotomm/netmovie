"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileSheetComponent() {
  return (
    <div className="p-0 m-0">
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button variant="unstyled" className="p-0 m-0">
            <Menu style={{ fontSize: "30px", width: "30px", height: "30px" }} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="h-screen">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
