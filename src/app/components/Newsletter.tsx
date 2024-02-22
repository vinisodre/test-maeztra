"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function Newsletter() {
  return (
<section className="py-10 mt-20 border">
  <div className="mx-8 lg:flex lg:justify-between lg:items-center lg:max-w-[950px] lg:mx-auto">
    <h2 className="flex justify-center lg:whitespace-nowrap x-wrap  lg:justify-start text-2xl font-bold mx-auto text-black-mzt lg:ml-0 lg:mr-16">Receba Nossa Newsletter</h2>
    <div className="flex space-x-4 mt-4 lg:space-x-0 lg:mt-0 w-full">
        <Input type="email" placeholder="Digite seu e-mail" className=" border-black-mzt lg:rounded-r-none lg:border-r-0" />
        <Button type="submit" className=" sm:px-4 bg-orange-mzt rounded-sm lg:rounded-l-none  lg:px-10">Enviar</Button>
    </div>
  </div>
</section>    
  )
}