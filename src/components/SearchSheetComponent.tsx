"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, X } from "lucide-react";
import InputBar from "./InputBar";

export function SearchSheetComponent() {
  return (
    <div className="items-center">
      <Sheet key="top">
        <SheetTrigger asChild>
          <Button variant="outline">
            <Search />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="top"
          className="flex items-center h-[10vh] [&>button]:hidden"
        >
          <InputBar />
          <SheetClose asChild>
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
