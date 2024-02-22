import CarouselHero from "./components/CarrouselHero";
import Colection from "./components/Colection";
import Newsletter from "./components/Newsletter";
import Benefits from "./components/Benefits";
import Partners from "./components/Partners";


export default function Home() {
  return (
    <main>
      {/* <CarouselHero /> */}
     <Benefits />
      {/* <ProductCarousel /> */}
    <Partners />
      <Colection />
      <Newsletter />
    </main>
  );
}
