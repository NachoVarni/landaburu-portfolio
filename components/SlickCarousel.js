import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function SlickCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // appendDots: (dots) => (
    //   <div style={{}}>
    //     <ul style={{}}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: () => (
    //   <div
    //     style={{
    //       width: "25px",
    //       borderRadius: "15px",
    //       border: "1px solid pink",
    //       marginTop: "30px",
    //       padding: "10px",
    //       color: "white",
    //     }}
    //   >
    //     {}
    //   </div>
    // ),
  };
  return (
    <div className="px-3 md:hidden">
      <Slider {...settings}>
        <div className="flex flex-col px-3">
          <div className="h-96 relative w-full">
            <Image src="/GOPRO-color.png" layout="fill" objectFit="contain" />
          </div>
          <p className="font-semibold  text-grayDetails text-sm">
            UX/UI DESIGN
          </p>
          <p className="font-semibold mt-2 pb-2 text-pink text-2xl">
            Product Landing Page
          </p>
        </div>

        <div className="flex flex-col px-3">
          <div className="h-96 relative w-full">
            <Image src="/ICBC-color.png" layout="fill" objectFit="contain" />
          </div>
          <p className="font-semibold  text-grayDetails text-sm">
            UX/UI DESIGN
          </p>
          <p className="font-semibold mt-2 pb-2 text-pink text-2xl">
            Bank App Design
          </p>
        </div>
        <div className="flex flex-col px-3">
          <div className="h-96 relative w-full">
            <Image
              src="/MAXICONSUMO-color.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="font-semibold  text-grayDetails text-sm">
            UX/UI DESIGN
          </p>
          <p className="font-semibold mt-2 pb-2 text-pink text-2xl">
            App Redesign
          </p>
        </div>
      </Slider>
    </div>
  );
}
