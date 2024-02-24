"use client";

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import InfoBar from "./InfoBar";

  const products = [
    {
      id: 1,
      img:"/product1.png",
      alt:"saia",
      price:"500,00",
      title: "Faux Suede Mini Skirt",
      description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      link: "#",
    },
    {
      id: 2,
      img:"/product2.png",
      alt:"saia",
      price:"320,00",
      title: "Ruched Rose Print Mini Skirt",
      description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      link: "#",
    },
    {
      id: 3,
      img:"/product1.png",
      alt:"saia",
      price:"500,00",
      title: "Faux Suede Mini Skirt",
      description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      link: "#",
    },
    {
      id: 4,
      img:"/product2.png",
      alt:"saia",
      price:"320,00",
      title: "Ruched Rose Print Mini Skirt",
      description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      link: "#",
    },{
      id: 5,
      img:"/product1.png",
      alt:"saia",
      price:"500,00",
      title: "Faux Suede Mini Skirt",
      description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      link: "#",
    },
    {
      id: 6,
      img:"/product2.png",
      alt:"saia",
      price:"320,00",
      title: "Ruched Rose Print Mini Skirt",
      description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      link: "#",
    },
  ]

export function ProductShelf() {
  return (
    <section className="mt-10 lg:mt-20">
    <InfoBar
        variant="flex justify-center text-black-mzt font-bold text-2xl mb-6 lg:mb-4 lg:text-[32px]"
        content="As Mais Pedidas "
      />
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mx-auto max-w-screen-2xl justify-between"
    >
      <CarouselContent>
        {products.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/5">
            <Card>
                <CardContent className="flex flex-col max-w-[381px]">
                  <div className="max-w-[308px] max-h-[381px]">
                  <img src={item.img} alt={item.alt} />
                  </div>
                  <div className="flex flex-row gap-2 mt-2 mb-2">
                    <div className="bg-[#DEAC71] w-[27px] h-[27px]"></div>
                    <div className="bg-[#D37164] w-[27px] h-[27px]"></div>
                    <div className="bg-[#6497D3] w-[27px] h-[27px]"></div>
                    <div className="bg-[#3C3B79] w-[27px] h-[27px]"></div>
                  </div>
                  <div className="textblock">
                    <h3 className="font-bold text-xl">R${item.price}</h3>
                    <h3 className="text-base mb-2">{item.title}</h3>
                    <p className="text-xs mb-2">{item.description}</p>
                  </div>
                  <Button className="bg-orange-mzt">Adicionar</Button>

                </CardContent>
              
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}
