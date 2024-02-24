"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const images = [{
  src: "/hero-img.png",
  title: "Promoções de Outono",
  description: "Confiras os melhores looks para combinar com você nesse Outono",
  cta: "Conferir"
},
{
  src: "/hero-img.png",
  title: "Promoções de Outono",
  description: "Confiras os melhores looks para combinar com você nesse Outono",
  cta: "Conferir"
},
{
  src: "/hero-img.png",
  title: "Promoções de Outono",
  description: "Confiras os melhores looks para combinar com você nesse Outono",
  cta: "Conferir"
}];

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
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card className=" relative bg-cover h-[380PX] bg-center lg:h-[600px]"
                  style={{ backgroundImage: `url(${item.src})` }}>
                  <CardContent className=" aspect-auto p-0  text-gray-mzt">
                    <div className="absolute top-[25%] lg:top-[35%] left-12 lg:left-[10%] max-w-[239px] lg:max-w-[471px]">
                      <h2 className="font-bold text-[30px] lg:text-[40px]">{item.title}</h2>
                      <h3 className="text-sm lg:text-xl mt-6 lg:mt-10">{item.description}</h3>
                      <Button className="mt-4 lg:mt-6 bg-orange-mzt px-2 lg:px-[30px]">{item.cta}</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
          <CarouselPrevious className="left-2 lg:ml-20" onClick={prevSlide} />
          <CarouselNext className="right-2 lg:mr-20" onClick={nextSlide} />
        </div>
      </Carousel>
    </div>
  );
}

