import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
        <>
        {showModal && 
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black-mzt bg-opacity-70">
            <div className="relative w-auto my-6 mx-auto bg-[#fff] text-[#787D83]">
              <div className="absolute -top-5 right-0 text-right cursor-pointer text-xs text-gray-light" onClick={closeModal}>Fechar</div>
              <div className="flex">
                <div className="hidden lg:block lg:relative lg:flex-1 lg:w-[426px] lg:h-[530px]">
                  <Image
                    src="/modal.png"
                    alt="corredor"
                    fill
                    className="cover"
                  />
                </div>
                <div className="flex flex-col flex-1 justify-center items-center lg:w-[426px] lg:h-[530px] pb-6 pt-10">
                  <Image
                    src="/mail.svg"
                    alt="Novidades"
                    width={28}
                    height={28}
                    className="mb-3 text-black"
                  />
                  <p className="mb-3 text-xs">BEM VINDO À MAEZTRA</p>
                  <h3 className="mb-6 text-base lg:text-xl text-center">
                    Receba em Primeira mão <br />
                    <span className="font-bold">
                      desconto e ofertas exclusivas
                    </span>
                  </h3>
                  <div className="flex flex-col w-full px-10">
                    <Input
                      type="email"
                      placeholder="Digite seu e-mail"
                      className="mb-2 text-black-mzt"
                    />
                    <Button type="submit" className="bg-orange-mzt">
                      ENVIAR
                      <Image
                        src="/airplane.svg"
                        alt="Novidades"
                        width={16}
                        height={16}
                        className=" text-[#fff] ml-2"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    }
        </>
  );
}
