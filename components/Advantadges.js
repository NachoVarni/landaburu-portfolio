import Image from "next/image";

export default function Advantadges() {
  return (
    <div className="border-t mt-16 pt-8 border-grayDetails ">
      <p className="text-4xl text-center mb-8 text-grayText font-lora font-bold">
        My Advantage
      </p>
      <div className="flex flex-col  md:flex-row md:space-x-3 md:pt-20">
        <div>
          <div className="flex relative h-96 md:w-1/6">
            <Image
              src="/figma-color.png"
              layout="fill"
              objectFit="contain"
              className="md:grayscale md:hover:grayscale-0"
            />
          </div>
          <p className="text-center mt-4 mb-8 text-pink font-semibold text-xl">
            Figma
          </p>
        </div>
        <div>
          <div className="relative h-96 md:w-1/6 ">
            <Image
              src="/ilustrator-color.png"
              layout="fill"
              objectFit="contain"
              className="md:grayscale md:hover:grayscale-0"
            />
          </div>
          <p className="text-center mt-4 mb-8 text-pink font-semibold text-xl">
            Illustrator
          </p>
        </div>
        <div>
          <div className="relative h-96 md:w-1/6 ">
            <Image
              src="/photoshop-color.png"
              layout="fill"
              objectFit="contain"
              className="md:grayscale md:hover:grayscale-0"
            />
          </div>
          <p className="text-center mt-4 mb-8 text-pink font-semibold text-xl">
            Photoshop
          </p>
        </div>
        <div>
          <div className="relative h-96 md:w-1/6 ">
            <Image
              src="/afterEffects-color.png"
              layout="fill"
              objectFit="contain"
              className="md:grayscale md:hover:grayscale-0"
            />
          </div>
          <p className="text-center mt-4 mb-8 text-pink font-semibold text-xl">
            After Effects
          </p>
        </div>
        <div>
          <div className="relative h-96 md:w-1/6 ">
            <Image
              src="/html-color.png"
              layout="fill"
              objectFit="contain"
              className="md:grayscale md:hover:grayscale-0"
            />
          </div>
          <p className="text-center mt-4 mb-8 text-pink font-semibold text-xl">
            HTML/CSS
          </p>
        </div>
        <div>
          <div className="relative h-96 md:w-1/6 ">
            <Image
              src="/inDesign-color.png"
              layout="fill"
              objectFit="contain"
              className="md:grayscale md:hover:grayscale-0"
            />
          </div>
          <p className="text-center mt-4 mb-8 text-pink font-semibold text-xl">
            InDesign
          </p>
        </div>
      </div>
    </div>
  );
}
