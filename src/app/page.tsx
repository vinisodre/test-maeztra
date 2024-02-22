import Image from "next/image";
import CarouselHero from "./components/CarrouselHero";
import Colection from "./components/Colection";
import Newsletter from "./components/Newsletter";


export default function Home() {
  return (
    <main>
      {/* <CarouselHero /> */}
      {/* <ProductCarousel /> */}
      <Colection />
      <Newsletter />
    </main>
  );
}
