import Image from "next/image";
import React from "react";
import Wear from "../../Assets/wear.jpg"; // Adjust the path as necessary
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="relative w-full h-[50vh]">
        <div className=" absolute w-full h-full bg-black opacity-60 text-white z-10 top-0 left-0 "></div>
        <Image src={Wear} alt="wear" fill className="object-cover " />
      </div>

      <div className="absolute w-full h-full flex flex-col items-center justify-center text-white z-20 -top-30 text-xl">
        <h1 className="text-2xl mb-4">
          lorem ipsum dolor sit amet consectetur adipisicing Quisquam, quod.
          Lorem ipsum dolor sit amet
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
