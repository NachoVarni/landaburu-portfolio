import Image from "next/image";
import Biography from "./Biography";
import Contact from "./contact";
import Services from "./Services";
import About from "./About";

export default function Hero() {
  return (
    <div className="flex flex-col relative items-center md:grid md:grid-cols-3  md:grid-rows-4 text-grayText font-poppins">
      <div className="flex flex-col pt-24 text-3xl md:col-start-2  md:self-start items-center font-lora font-bold md:text-center">
        <h2>Juan Pablo Landaburu</h2>
        <h2>UX/UI Designer</h2>
        <h2>Based in Argentina</h2>
      </div>

      <div className="h-96 w-full -ml-8 mt-12 flex relative  md:col-start-2 md:self-start md:row-start-2 md:row-span-2 md:h-full">
        <Image src="/landa-complete.png" layout="fill" objectFit="contain" />
      </div>

      <Biography
        divStyle=" mt-32 md:col-start-1 md:row-start-2 md:self-start md:z-40 md:pt-10 md:mt-0"
        titleStyle="text-grayDetails font-semibold text-sm mb-8"
        firstPStyle="font-semibold text-lg"
        secondPStyle="mt-5 text-lg "
      />
      <Contact
        divStyle=" mt-12 self-start md:col-start-1 md:row-start-3 md:self-start md:mt-5"
        titleStyle="text-grayDetails font-semibold text-sm mb-4"
        pStyle="text-lg"
      />
      <Services
        divStyle=" self-start mt-12 md:col-start-1 md:row-start-4 md:self-start md:-mt-16"
        titleStyle="text-grayDetails font-semibold text-sm mb-4"
        pStyle="text-lg"
      />
      <About
        divStyle=" mt-12 md:col-start-3 md:row-start-2 md:row-span-3 md:self-start md:mt-0 md:pt-10 flex flex-col items-end"
        titleStyle="text-grayDetails mb-3 font-semibold text-sm"
        pStyle="text-right mt-2 text-lg"
      />
    </div>
  );
}
