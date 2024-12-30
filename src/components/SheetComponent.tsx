"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Title from "./Title";
export function SheetComponent() {
  return (
    <div>
      <Sheet key="top">
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="flex h-screen">
          <span>
            <SheetClose asChild>
              <Title />
            </SheetClose>
          </span>
          <div className="flex justify-around justify-self-center gap-5 w-[90vw] font-bold text-3xl mt-[10vh]">
            <div className="flex flex-col gap-7">
              Movies
              <ul className="flex flex-col gap-3 font-light text-xl">
                <li>Now Playing</li>
                <li>Popular</li>
                <li>Top Rated</li>
                <li>Upcoming</li>
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              TV Shows
              <ul className="flex flex-col gap-3 font-light text-xl">
                <li>Now Playing</li>
                <li>Airing Today</li>
                <li>On TV</li>
                <li>Top Rated</li>
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              People
              <ul className="flex flex-col gap-3 font-light text-xl">
                <li>Popular People</li>
              </ul>
            </div>
          </div>
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
