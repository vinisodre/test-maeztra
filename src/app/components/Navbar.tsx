import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="">
        <div className="flex items-center justify-between p-6 shadow-md">
            <Link href="/" className="flex items-center gap-2">
                <Image
                src="/maeztra-logo.png"
                alt="Maeztra Logo"
                width={40}
                height={40}
                />
                <h1 className="font-bold">Maeztra</h1>
            </Link>

            <div className="flex w-full max-w-xl items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
            </div>

            <div>
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
