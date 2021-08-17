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
      <div className="col-start-2 py-5 mx-auto font-semibold ">
        <p>JUAN PABLO LANDABURU</p>
      </div>
      <div className="hidden md:flex justify-self-end	mr-5 space-x-3">
        <div className="w-7 h-7 relative">
          <Image src="/behance-logo.png" layout="fill" />
        </div>
        <div className="w-7 h-7 relative">
          <Image src="/linkedin.png" layout="fill" />
        </div>
      </div>
      <div className="w-6 h-6 absolute right-5 flex justify-self-end md:hidden">
        <Image src="/hamburguer.png" layout="fill" />
      </div>
    </header>
  );
}
