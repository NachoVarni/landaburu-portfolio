import Image from "next/image";

export default function FindMe() {
  return (
    <div className="mt-16 border-t border-grayDetails pt-8">
      <div className="relative h-96 w-full md:w-1/3 mx-auto">
        <p>Contact me</p>
        <a href="https://wa.me/541139312652" rel="noreferrer" target="_blank">
          <Image
            src="/contact-me.png"
            layout="fill"
            objectFit="contain"
            alt="contact"
            className="transition duration-300 ease-in-out transform md:grayscale  md:hover:grayscale-0"
          />
        </a>
      </div>
    </div>
  );
}
