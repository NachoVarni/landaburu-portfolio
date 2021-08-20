import Image from "next/image";
import SlickCarousel from "../components/SlickCarousel";
import { useState } from "react";

export default function Projects() {
  const [maxiconsumo, setMaxiconsumo] = useState(false);
  const [gopro, setGopro] = useState(false);
  const [icbc, setIcbc] = useState(false);

  function handleMaxiconsumo() {
    setMaxiconsumo((prevState) => !prevState);
  }

  function handleGopro() {
    setGopro((prevState) => !prevState);
  }

  function handleIcbc() {
    setIcbc((prevState) => !prevState);
  }

  return (
    <div className="border-t mt-16 pt-8 border-grayDetails">
      <p className="text-4xl text-center text-grayText font-lora font-bold">
        My Projects
      </p>
      <div className="hidden md:flex md:h-screen md:space-x-3 md:w-full md:mt-32">
        <div className="h-2/4 w-1/3">
          <div
            className="relative h-full w-5/6"
            onMouseEnter={handleMaxiconsumo}
            onMouseLeave={handleMaxiconsumo}
          >
            <Image
              src="/MAXICONSUMO-color.png"
              layout="fill"
              objectFit="contain"
              className="text-left justify-self-start transition duration-300 ease-in-out transform md:grayscale  md:hover:grayscale-0"
            />
          </div>
          <p className="font-poppins font-semibold text-sm text-grayDetails">
            UX/UI DESIGN
          </p>
          <p
            className={`font-semibold mt-2 text-pink text-2xl transition duration-300 ease-in-out ${
              maxiconsumo ? `opacity-100` : `opacity-0`
            }`}
          >
            App Redesign
          </p>
        </div>
        <div className="h-2/4 w-1/3">
          <div
            className="relative h-full w-5/6"
            onMouseEnter={handleGopro}
            onMouseLeave={handleGopro}
          >
            <Image
              src="/GOPRO-color.png"
              layout="fill"
              objectFit="contain"
              className="transition duration-300 ease-in-out transform md:grayscale  md:hover:grayscale-0"
            />
          </div>
          <p className="font-poppins font-semibold text-sm text-grayDetails">
            UX/UI DESIGN
          </p>
          <p
            className={`font-semibold mt-2 text-pink text-2xl transition duration-300 ease-in-out ${
              gopro ? `opacity-100` : `opacity-0`
            }`}
          >
            Product Landing Page
          </p>
        </div>
        <div className="h-2/4 w-1/3">
          <div
            className="relative h-full w-5/6"
            onMouseEnter={handleIcbc}
            onMouseLeave={handleIcbc}
          >
            <Image
              src="/ICBC-color.png"
              layout="fill"
              objectFit="contain"
              className="transition duration-300 ease-in-out transform md:grayscale  md:hover:grayscale-0"
            />
          </div>
          <p className="font-poppins font-semibold text-sm text-grayDetails">
            UX/UI DESIGN
          </p>
          <p
            className={`font-semibold mt-2 text-pink text-2xl transition duration-300 ease-in-out ${
              icbc ? `opacity-100` : `opacity-0`
            }`}
          >
            Bank App Design
          </p>
        </div>
      </div>
      <SlickCarousel />
    </div>
  );
}
