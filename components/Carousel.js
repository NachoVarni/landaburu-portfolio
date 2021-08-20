import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/Group-20.png",
    originalTitle: "aaaa",
    description: "2222",
    bulletClass: "",
  },
  {
    original: "/Group-19.png",
    originalTitle: "aaaa",
    description: "2222",
    bulletClass: "",
  },
  {
    original: "/Group-18.png",
    originalTitle: "aaaa",
    description: "2222",
    bulletClass: "",
  },
];

export default function Carousel() {
  const someComponent = (props) => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>;
  };

  return (
    <ImageGallery
      items={images}
      showBullets={true}
      showIndex={true}
      showThumbnails={false}
      lazyLoad={true}
      showPlayButton={false}
      renderCustomControls={someComponent}
      showNav={false}
      showFullscreenButton={false}
      useBrowserFullscreen={false}
    />
  );
}
