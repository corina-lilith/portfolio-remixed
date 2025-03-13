import * as React from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../components/ui/carousel";

import AboutMe from "../data/AboutMe.json";

export const loader = async () => {
  return Response.json(AboutMe);
};

export default function CarouselSpacing() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 mt-10">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {AboutMe.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 w-full md:w-1/2 lg:w-1/3">
              <div className="p-3 md:p-4">
                <Card className="bg-gray-900 shadow-lg rounded-lg h-[350px] md:h-[450px] flex flex-col justify-center border-2 border-[#A713E3]">
                  <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
                    {/* Image - Scales down on mobile */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-56 h-56 md:w-72 md:h-72 mb-3 md:mb-4 object-cover rounded-lg"
                    />

                    {/* Title - Smaller on mobile */}
                    <h2 className="text-lg md:text-2xl font-semibold text-primary">{item.title}</h2>

                    {/* Description - Smaller on mobile */}
                    <p className="text-gray-300 text-sm md:text-md text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#A713E3] hover:bg-purple-900 ml-12 md:m-4" />
        <CarouselNext className="bg-[#A713E3] hover:bg-purple-900 mr-12 md:m-4" />
      </Carousel>
      <div className="py-3 text-center text-xs md:text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
