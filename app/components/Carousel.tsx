import * as React from "react"
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
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-xs mt-20">
      <Carousel setApi={setApi} className="w-full max-w-lg">
        <CarouselContent className="-ml-2 md:-ml-4">
          {AboutMe.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4">
              <div className="p-1">
                <Card className="bg-gray-900 shadow-lg rounded-lg">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-64 h-64  mb-4"
                    />

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-primary">{item.title}</h2>

                    {/* Description */}
                    <p className="text-gray-300 text-sm text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#A713E3] hover:bg-purple-900" />
        <CarouselNext className="bg-[#A713E3] hover:bg-purple-900" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
