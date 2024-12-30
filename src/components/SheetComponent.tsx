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
import { Link } from "react-router-dom";
export function SheetComponent() {
  const MoviesList = [
    { link: "/movie/now-playing", list: "Now Playing" },
    { link: "/movie/popular", list: "Popular" },
    { link: "/movie/top-rated", list: "Top Rated" },
    { link: "/movie/up-coming", list: "Up Coming" },
  ];
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
                {MoviesList.map((li) => (
                  <Link to={li.link}>
                    <SheetClose asChild>
                      <li>{li.list}</li>
                    </SheetClose>
                  </Link>
                ))}
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
