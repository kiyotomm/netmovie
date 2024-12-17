import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselVerticalComponent() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full "
    >
      <CarouselContent className="w-[20vw] h-[40vh]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="h-[40vh] pt-1 md:basis-1/2">
            <div className=" h-full p-1">
              <Card>
                <CardContent className="flex items-center justify-center h-full p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
