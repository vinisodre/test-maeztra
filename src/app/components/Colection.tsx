import Image from "next/image";
import React from "react";

export default function Colection() {
  return (
    <section className="flex flex-col px-8 lg:flex-row max-w-screen-2xl justify-between mx-auto lg:px-0 mt-6 lg:mt-16">
      <div className="flex flex-col justify-center lg:w-[484px] ">
        <h2 className="sm: mb-6 text-2xl font-bold lg:mb-8">Lorem ipsum</h2>
        <p className="sm: mb-8 mr-8 text-sm lg:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque.
        </p>
        <p className="sm:hidden lg:mb-8 mr-16 text-sm hidden lg:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </div>
      <div className="sm:flex align-middle relative min-w-[298px] min-h-[184px] md:w-[704px] md:h-[303px] lg:w-[1114px] lg:h-[480px]">
        <Image
          src="/colection.png"
          alt="coleção"
          fill
          className="sm:object-cover rounded-sm lg:rounded-none"
        />
      </div>
    </section>
  );
}

//alterar o texto se display for pequeno

//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .
