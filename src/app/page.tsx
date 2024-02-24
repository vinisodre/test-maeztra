"use client";

import CarouselHero from "./components/CarrouselHero";
import Colection from "./components/Colection";
import Newsletter from "./components/Newsletter";
import Benefits from "./components/Benefits";
import Partners from "./components/Partners";

import { ProductShelf } from "./components/ProductShelf";
import Modal from "./components/Modal";



export default function Home() {
 

  return (
    <main>
      <Modal />
      <CarouselHero />
      <Benefits />
      <Partners />
      <ProductShelf />
      <Colection />
      <Newsletter />
    </main>
  );
}
