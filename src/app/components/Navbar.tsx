

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="">
        <div className="shadow-md ">
           <div className="flex justify-between  max-w-screen-2xl mx-auto px-0 py-6">
            <Link href="/" className=" flex-1">
                <Image
                src="/public/logo-maeztra-novo.svg"
                alt="Maeztra"
                width={147}
                height={18}
                />
            </Link>

            <div className="flex w-full  max-w-3xl items-center  mr-36 ">
                <Input type="email" placeholder="O que você busca?" />
                <Button type="submit">Buscar</Button>
            </div>

            <div className="flex flex-1">
                <Button variant="link">
                    <Mail className="mr-2 h-4 w-4" /> Minha Conta
                </Button>
                <Button variant="link">
                    <Mail className="mr-2 h-4 w-4" /> Minha Conta

                </Button>
                <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" /> Meu Carrinho
                </Button>
            </div>

           </div>
        </div>
        <div className="flex items-center justify-center gap-4 p-6">
        <Button 
            variant="link"
            className="text-red-500" >
            <Mail className="mr-2 h-4 w-4 text-black" /> Novidades
        </Button>
        <Button variant="link">Link</Button>
        <Button variant="link">Link</Button>
        <Button variant="link">Link</Button>
        <Button variant="link">Link</Button>
        <Button variant="link">Link</Button>
        <Button variant="link">OUTLET</Button>
        </div>
    </nav>
  )
}
