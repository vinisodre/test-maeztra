import React from "react";

import Image from "next/image";
import InfoBar from "./InfoBar";

const benefitsItemsList = [
  {
    icon: "./icon-earth.svg",
    title: "Produtos importados",
    description: "Produtos de Alta Qualidade",
  },
  {
    icon: "./icon-house.svg",
    title: "Estoque no Brazil",
    description: "Produtos mais perto de você!",
  },
  {
    icon: "./icon-exchange.svg",
    title: "Trocas Garantidas",
    description: "Trocas em até 48 horas, vejas as regras",
  },
  {
    icon: "./icon-descount.svg",
    title: "Ganhe 5% off",
    description: "Pagando à vista no Cartão",
  },
  {
    icon: "./icon-truck.svg",
    title: "Frete Grátis",
    description: "Em compras acima de R$ 499,00",
  },
];

const Benefits = () => {
  return (
    <div className="mx-auto mb-10 lg:mb-20">
      <InfoBar
        variant="flex justify-center text-black-mzt font-bold text-base mb-6 lg:mb-4 lg:text-2xl"
        content="Por que comprar na Maeztra?"
      />
      <div className="flex space-x-4 overflow-x-auto justify-start no-scrollbar overflow-y-auto pl-8 lg:justify-center lg:pl-0 lg:overflow-x-hidden xl:flexCenter">
        <div className="flex gap-8 ">
          {benefitsItemsList.map((item, index) => (
            <div
              className="BenefitsItemContainer bg-gray-mzt rounded max-w-[308px]"
              key={`${index}`}
            >
              <div className="flex px-7 py-[14px] whitespace-nowrap">
                <div className="flex min-w-[32px] items-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    height={32}
                    width={32}
                  />
                </div>
                <div className="flex-col items-baseline ml-[22px]">
                  <h3 className="text-black-mzt text-sm font-bold">
                    {item.title}
                  </h3>
                  <h4 className="text-xs">{item.description}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
