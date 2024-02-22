import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="">
    <div className="hidden lg:flex">
      <div className="flex justify-between w-[952px] mx-auto">
        <div className=" mt-10 text-sm">
          <h3 className="font-bold text-base mb-6">Informações</h3>
          <div className="grid gap-6">
            <Link href="#">Quem Somos</Link>
            <Link href="#">Prazo de Envio</Link>
            <Link href="#">Trocas e Devoluções</Link>
            <Link href="#">Promoções e Cupons</Link>
          </div>
        </div>

        <div className=" mt-10 text-sm">
          <h3 className="font-bold text-base mb-6">Minha Conta</h3>
          <div className="grid gap-6">
            <Link href="#">Minha Conta</Link>
            <Link href="#">Meus Pedidos</Link>
            <Link href="#">Cadastre-se</Link>
          </div>
        </div>

        <div className=" mt-10 text-sm">
          <h3 className="font-bold text-base mb-6">Onde nos Encontrar</h3>
          <div className="grid gap-6">
            <Link href="#">Lojas</Link>
            <Link href="#">Endereço</Link>
          </div>
        </div>
      </div>
    </div>

  
      <div className="bg-black-mzt">
      
        <div className=' sm: flex flex-col mt-8 md:flex-row justify-between align-middle px-8 py-6 lg:max-w-screen-2xl mx-auto lg:mt-16 lg:mb-0'>
        
        <div className="grid justify-center  grid-flow-col items-center gap-6 pt-6 md:pt-0">
          <Link href="#" className="inline-block">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#" className="inline-block">
            <Image
              src="/linkedin.png"
              alt="Linkedin"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#" className="inline-block">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#" className="inline-block">
            <Image src="/youtube.png" alt="Youtube" width={32} height={32} />
          </Link>
        </div>

        <div className="grid justify-center  grid-flow-col items-center gap-6 pt-6 md:pt-0">
          <Link href="#" className="inline-block">
            <Image
              src="/icon-pagamento-Visa.png"
              alt="Visa"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#" className="inline-block">
            <Image
              src="/icon-pagamento-mastercard.png"
              alt="Mastercard"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#" className="inline-block">
            <Image
              src="/icon-pagamento-Visa.png"
              alt="Visa"
              width={32}
              height={32}
            />
          </Link>
          <Link href="#" className="inline-block">
            <Image
              src="/icon-pagamento-mastercard.png"
              alt="Mastercard"
              width={32}
              height={32}
            />
          </Link>
        </div>

        <div className="grid justify-center  grid-flow-col items-center gap-6 pt-6 md:pt-0">
          <Link href="#" className="inline-block">
            <Image src="/vtex.png" alt="Vtex" width={60} height={50} />
          </Link>
          <Link href="#" className="inline-block">
            <Image
              src="/maeztra.png"
              alt="Maeztra"
              width={100}
              height={50}
            />
          </Link>
        </div>

        </div>
      </div>

  </footer>
  )
}
