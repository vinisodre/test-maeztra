"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Menu, Search } from "lucide-react"
import { useState } from "react";

export default function Navbar() {

    const[open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const menuItems = [
        {
            id: 1,
            title: "Novidades",
            link: "#",
        },
        {
            id: 2,
            title: "Vestidos",
            link: "#",
        },
        {
            id: 3,
            title: "Roupas",
            link: "#",
        },
        {
            id: 4,
            title: "Sapatos",
            link: "#",
        },
        {
            id: 5,
            title: "Lingerie",
            link: "#",
        },
        {
            id: 6,
            title: "OUTLET",
            link: "#",
        },
]

  return (
    <section>
      {/* Mobile*/}
      <nav className="block lg:hidden">
        
        <div className="flex justify-between items-center mx-auto px-4  py-[28px]">
          <div className="flex items-center">
            <Menu onClick={handleOpen} />
            <Link href="/" className="ml-4">
              <Image
                src="/logo-maeztra-novo.svg"
                alt="Maeztra"
                width={110}
                height={11}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <Search />
            <Image
              src="/icon-shoppingbag-mob.svg"
              alt="cart"
              width={20}
              height={20}
              className="ml-8"
            />
          </div>
        </div>
        <div className="relative">
        {open && (
        <div className="absolute top-0 left-0 z-10 bg-gray-mzt w-full">
          <div className="border-t border-b  border-[gray-300]">
            {menuItems.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="block px-4 py-4"
              >
                {item.title}{" "}
              </Link>
            ))}
          </div>
          <div className="z-10">
            <Link href="#" className="flex items-center px-4 py-4 text-black border-b border-[gray-300]"> 
            <Image
              src="/icon-user.svg"
              alt="Minha Conta"
              width={16}
              height={16}
              className="mr-4"
            />
            Minha Conta
            </Link >
            <Link href="#" className="flex items-center px-4 py-4 text-black border-b border-[gray-300]">
            <Image
              src="/icon-heart.svg"
              alt="Minha Conta"
              width={24}
              height={24}
              className="mr-4"
            />
            Minha Conta
            </Link>
            <Link href="#" className="flex items-center px-4 py-4 text-black border-b border-[gray-300]">
            <Image
              src="/icon-shoppingbag.svg"
              alt="Carrinho"
              width={24}
              height={24}
              className="mr-4"
            />
            Meu Carrinho
            </Link>
          </div>
        </div>
            
            )}

        </div>

      </nav>


      
      {/* Desktop */}
      <nav className="hidden lg:block">
        <div className="shadow-md ">
          <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-0 py-6">
            <Link href="/" className=" flex-1">
              <Image
                src="/logo-maeztra-novo.svg"
                alt="Maeztra"
                width={147}
                height={18}
              />
            </Link>

            <div className="flex w-full  max-w-3xl items-center  mr-36 ">
              <Input
                type="email"
                placeholder="O que você busca?"
                className=" bg-[#EFEFEF] text-black-mzt"
              />
              <Button type="submit" className="bg-orange-mzt">
                Buscar
              </Button>
            </div>

            <div className="flex flex-1">
              <Button variant="link">
                <Image
                  src="/icon-user.svg"
                  alt="Minha Conta"
                  width={24}
                  height={24}
                  className="mr-2 h-4 w-4 text-black"
                />
                Minha Conta
              </Button>
              <Button variant="link">
                <Image
                  src="/icon-heart.svg"
                  alt="Minha Conta"
                  width={24}
                  height={24}
                  className="mr-2 h-4 w-4 text-black"
                />
                Minha Conta
              </Button>
              <Button variant="outline" className="ml-8 border-orange-mzt">
                <Image
                  src="/icon-shoppingbag.svg"
                  alt="Carrinho"
                  width={24}
                  height={24}
                  className="mr-2 h-4 w-4 text-black"
                />{" "}
                Meu Carrinho
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 p-6">
          <Button variant="link" className="text-orange-mzt text-sm">
            <Image
              src="/icon-dress.svg"
              alt="Novidades"
              width={24}
              height={24}
              className="mr-2 h-4 w-4 text-black"
            />{" "}
            Novidades
          </Button>
          <Button variant="link">Vestidos</Button>
          <Button variant="link">Roupas</Button>
          <Button variant="link">Sapatos</Button>
          <Button variant="link">Lingerie</Button>
          <Button variant="link">Acessórios</Button>
          <Button variant="link">OUTLET</Button>
        </div>
      </nav>
    </section>
  );
}
