// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBehanceSquare } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex relative md:grid md:grid-cols-3 font-poppins text-grayText items-center">
      <div className="hidden md:flex py-5 ml-5 space-x-3">
        <p>WORK</p>
        <p>CONTACT</p>
      </div>
      <div className="col-start-2 text-center flex-grow py-5 mx-auto font-semibold ">
        <p>JUAN PABLO LANDABURU</p>
      </div>
      <div className="hidden md:flex justify-self-end space-x-3">
        <div className="w-7 h-7 relative">
          <Image src="/behance-logo.png" layout="fill" alt="behance" />
        </div>
        <div className="w-7 h-7 relative">
          <Image src="/linkedin.png" layout="fill" alt="linkedin" />
        </div>
      </div>
      <div className="w-6 h-6 absolute right-0 flex justify-self-end md:hidden">
        <Image
          src="/hamburguer.png"
          layout="fill"
          objectFit="contain"
          alt="menu"
        />
      </div>
    </header>
  );
}
