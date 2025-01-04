"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function MobileSheetComponent() {
  const [showMovie, setShowMovie] = useState(false);
  const MoviesList = [
    { category: "now-playing", list: "Now Playing" },
    { category: "popular", list: "Popular" },
    { category: "top-rated", list: "Top Rated" },
    { category: "upcoming", list: "Up Coming" },
  ];

  const [showTv, setShowTv] = useState(false);
  const tvShowList = [
    { category: "airing-today", list: "Airing Today" },
    { category: "on-the-air", list: "On the air" },
    { category: "popular", list: "Popular" },
    { category: "top-rated", list: "Top Rated" },
  ];

  const [showPeople, setShowPeople] = useState(false);
  const people = [{ category: "popular", list: "Popular" }];
  return (
    <div className="p-0 m-0">
      <Sheet key="left">
        <SheetTrigger asChild>
          <Button variant="unstyled" className="p-0 m-0">
            <Menu style={{ fontSize: "30px", width: "30px", height: "30px" }} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className=" flex flex-col h-screen [&>button]:hidden"
        >
          <div className="flex justify-between">
            <span className="text-3xl font-bold">NetMovie</span>

            <SheetClose asChild className="">
              <X />
            </SheetClose>
          </div>
          <div className="flex flex-col  gap-5 w-[60vw] font-semibold text-2xl mt-[10vh]">
            <div className="flex flex-col gap-7">
              <span onClick={() => setShowMovie((prev) => !prev)}>Movies</span>
              {showMovie && (
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
              )}
            </div>
            <div className="flex flex-col gap-7">
              <span onClick={() => setShowTv((prev) => !prev)}>TV Show</span>
              {showTv && (
                <ul className="flex flex-col gap-3 font-light text-xl ">
                  {tvShowList.map((li) => (
                    <Link key={li.category} to={"/tv-show-list/" + li.category}>
                      <SheetClose asChild>
                        <li className="hover:border-b-white hover:border-b-2 transform duration-100">
                          {li.list}
                        </li>
                      </SheetClose>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-col gap-7">
              <span onClick={() => setShowPeople((prev) => !prev)}>People</span>
              {showPeople && (
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
              )}
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
