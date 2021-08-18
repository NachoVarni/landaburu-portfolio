import Image from "next/image";
import { useState } from "react";

export default function Advantadges() {
  const [figma, setFigma] = useState(false);
  const [illustrator, setIllustrator] = useState(false);
  const [photoshop, setPhotoshop] = useState(false);
  const [inDesign, setInDesign] = useState(false);
  const [afterEffects, setAfterEffects] = useState(false);
  const [html, setHtml] = useState(false);

  function handleFigma() {
    setFigma((prevState) => !prevState);
  }

  function handleIllustrator() {
    setIllustrator((prevState) => !prevState);
  }

  function handlePhotoshop() {
    setPhotoshop((prevState) => !prevState);
  }

  function handleInDesign() {
    setInDesign((prevState) => !prevState);
  }

  function handleAfterEffects() {
    setAfterEffects((prevState) => !prevState);
  }

  function handleHtml() {
    setHtml((prevState) => !prevState);
  }

  return (
    <div className="border-t mt-16 pt-8 border-grayDetails ">
      <p className="text-4xl text-center mb-8 text-grayText font-lora font-bold">
        My Advantage
      </p>
      <div className="flex flex-col w-full md:flex-row md:space-x-3 md:pt-20">
        <div
          className="md:w-1/6"
          onMouseEnter={handleFigma}
          onMouseLeave={handleFigma}
        >
          <div className="flex relative h-96 ">
            <Image
              src="/figma-color.png"
              layout="fill"
              objectFit="contain"
              className="transition duration-300 ease-in-out md:grayscale md:hover:scale-110 md:hover:grayscale-0"
            />
          </div>
          <p
            className={`text-center mt-4 mb-8 text-pink font-semibold text-xl transition duration-300 ease-in-out ${
              figma ? "opacity-100" : "opacity-0"
            }`}
          >
            Figma
          </p>
        </div>
        <div
          className="md:w-1/6"
          onMouseEnter={handleIllustrator}
          onMouseLeave={handleIllustrator}
        >
          <div className="relative h-96 ">
            <Image
              src="/ilustrator-color.png"
              layout="fill"
              objectFit="contain"
              className="transition duration-300 ease-in-out md:grayscale md:hover:scale-110 md:hover:grayscale-0"
            />
          </div>
          <p
            className={`text-center mt-4 mb-8 text-pink font-semibold text-xl transition duration-300 ease-in-out ${
              illustrator ? "opacity-100" : "opacity-0"
            }`}
          >
            Illustrator
          </p>
        </div>
        <div
          className="md:w-1/6"
          onMouseEnter={handlePhotoshop}
          onMouseLeave={handlePhotoshop}
        >
          <div className="relative h-96 ">
            <Image
              src="/photoshop-color.png"
              layout="fill"
              objectFit="contain"
              className="transition duration-300 ease-in-out md:grayscale md:hover:scale-110 md:hover:grayscale-0"
            />
          </div>
          <p
            className={`text-center mt-4 mb-8 text-pink font-semibold text-xl transition duration-300 ease-in-out ${
              photoshop ? "opacity-100" : "opacity-0"
            }`}
          >
            Photoshop
          </p>
        </div>
        <div
          className="md:w-1/6"
          onMouseEnter={handleAfterEffects}
          onMouseLeave={handleAfterEffects}
        >
          <div className="relative h-96">
            <Image
              src="/afterEffects-color.png"
              layout="fill"
              objectFit="contain"
              className="transition duration-300 ease-in-out md:grayscale md:hover:scale-110 md:hover:grayscale-0"
            />
          </div>
          <p
            className={`text-center mt-4 mb-8 text-pink font-semibold text-xl transition duration-300 ease-in-out ${
              afterEffects ? "opacity-100" : "opacity-0"
            }`}
          >
            After Effects
          </p>
        </div>
        <div
          className="md:w-1/6"
          onMouseEnter={handleHtml}
          onMouseLeave={handleHtml}
        >
          <div className="relative h-96">
            <Image
              src="/html-color.png"
              layout="fill"
              objectFit="contain"
              className="transition duration-300 ease-in-out md:grayscale md:hover:scale-110 md:hover:grayscale-0"
            />
          </div>
          <p
            className={`text-center mt-4 mb-8 text-pink font-semibold text-xl transition duration-300 ease-in-out ${
              html ? "opacity-100" : "opacity-0"
            }`}
          >
            HTML/CSS
          </p>
        </div>
        <div
          className="md:w-1/6"
          onMouseEnter={handleInDesign}
          onMouseLeave={handleInDesign}
        >
          <div className="relative h-96">
            <Image
              src="/inDesign-color.png"
              layout="fill"
              objectFit="contain"
              className="transition duration-300 ease-in-out md:grayscale md:hover:scale-110 md:hover:grayscale-0"
            />
          </div>
          <p
            className={`text-center mt-4 mb-8 text-pink font-semibold text-xl transition duration-300 ease-in-out ${
              inDesign ? "opacity-100" : "opacity-0"
            }`}
          >
            InDesign
          </p>
        </div>
      </div>
    </div>
  );
}
