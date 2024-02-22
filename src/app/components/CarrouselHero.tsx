'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const images = [
  "https://via.placeholder.com/1200x400?text=Slide%201",
  "https://via.placeholder.com/1200x400?text=Slide%202",
  "https://via.placeholder.com/1200x400?text=Slide%203",
  "https://via.placeholder.com/1200x400?text=Slide%204",
  "https://via.placeholder.com/1200x400?text=Slide%205",
];

export default function CarrouselHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full mx-auto">
      <Carousel className="relative">
        <CarouselContent
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <CarouselItem 
              
              key={index}>
              <div className="">
                <Card className="border-none">
                  <CardContent className=" aspect-auto p-0">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-fit"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
          <CarouselPrevious className="ml-20" onClick={prevSlide} />
          <CarouselNext className="mr-20" onClick={nextSlide} />
        </div>
      </Carousel>
      {/* <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 mx-2 cursor-pointer rounded-full ${index === activeIndex ? "bg-indigo-500" : "bg-gray-400"
              }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
}