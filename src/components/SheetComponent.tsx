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
    { category: "now-playing", list: "Now Playing" },
    { category: "popular", list: "Popular" },
    { category: "top-rated", list: "Top Rated" },
    { category: "upcoming", list: "Up Coming" },
  ];

  const tvShowList = [
    { category: "airing-today", list: "Airing Today" },
    { category: "on-the-air", list: "On the air" },
    { category: "popular", list: "Popular" },
    { category: "top-rated", list: "Top Rated" },
  ];

  const people = [{ category: "popular", list: "Popular" }];

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
              <ul className="flex flex-col gap-3 font-light text-xl ">
                {MoviesList.map((li) => (
                  <Link key={li.category} to={"/movie-list/" + li.category}>
                    <SheetClose asChild>
                      <li className="hover:border-b-white hover:border-b-2 transform duration-100">
                        {li.list}
                      </li>
                    </SheetClose>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              TV Show
              <ul className="flex flex-col gap-3 font-light text-xl ">
                {tvShowList.map((li) => (
                  <Link key={li.category} to={"/movie-list/" + li.category}>
                    <SheetClose asChild>
                      <li className="hover:border-b-white hover:border-b-2 transform duration-100">
                        {li.list}
                      </li>
                    </SheetClose>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              People
              <ul className="flex flex-col gap-3 font-light text-xl ">
                {people.map((li) => (
                  <Link key={li.category} to={"/people-list"}>
                    <SheetClose asChild>
                      <li className="hover:border-b-white hover:border-b-2 transform duration-100">
                        {li.list}
                      </li>
                    </SheetClose>
                  </Link>
                ))}
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
