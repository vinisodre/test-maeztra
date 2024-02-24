import React from "react";

import Image from "next/image";
import InfoBar from "./InfoBar";

const partnersList = [
    {
      icon:"/comma.png",
      title:"Comma"
    },
    {
      icon:"/melissa.png",
      title:"Melissa"
    },
    {
      icon:"/forever21.png",
      title:"Forever 21"
    },
    {
      icon:"/zara.png",
      title:"Zara"
    },
    {
      icon:"/ann-taylor.png",
      title:"Ann Taylor"
    },
  ]

const Partners = () => {
  return (
    <section className="mx-auto mt-10 lg:mt-20">
      <InfoBar
        variant="flex justify-center text-black-mzt font-bold text-2xl mb-6 lg:mb-4 lg:text-[32px]"
        content="Marcas Parceiras"
      />
      <div className="flex space-x-4 overflow-x-auto justify-start no-scrollbar overflow-y-auto pl-8 lg:justify-center lg:pl-0 lg:overflow-x-hidden xl:flexCenter">
        <div className="flex gap-8 ">
          {partnersList.map((item, index) => (
            <div
              className="max-w-[308px]"
              key={`${index}`}
            >
              <div className="flex">
                <div className="flex min-w-[298px] min-h-[62px] items-center relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
