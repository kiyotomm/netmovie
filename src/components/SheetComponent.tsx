"use client";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SheetComponent() {
  return (
    <div>
      <Sheet key="top">
        <SheetTrigger asChild>
          <Button variant="outline">open</Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-screen">
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
