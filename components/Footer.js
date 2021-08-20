import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-16 border-t border-grayDetails py-16 md:grid md:grid-cols-3 text-sm text-grayText font-poppins font-semibold">
      <p>WORK WITH ME</p>
      <p className="mx-auto">JUANPI.LANDABURU@GMAIL.COM</p>
      <div className="flex mt-8 md:mt-0 md:justify-end">
        <div className="w-7 h-7 relative mr-4">
          <Image src="/behance-logo.png" layout="fill" />
        </div>
        <div className="w-7 h-7 relative">
          <Image src="/linkedin.png" layout="fill" />
        </div>
      </div>
    </div>
  );
}
