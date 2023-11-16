import first from "../assets/projects/wihire/first_pic.png";
import sec from "../assets/projects/wihire/sec_pic.png";
import third from "../assets/projects/wihire/third_pic.png";
import fourth from "../assets/projects/wihire/four_pic.png";
import "./styles.scss";
import { useState } from "react";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [first, sec, third, fourth];
  const checkIndex = (number: number) => {
    if (number === images.length) {
      return 0;
    }
    if (number < images.length) {
      return number;
    }
    return number - images.length;
  };
  return (
    <div className="container my-20">
      <img src={images[index]} width={500} className="stopper" />
      <img
        src={images[checkIndex(index + 3)]}
        width={500}
        className="carousel-img1"
      />
      <img
        src={images[checkIndex(index + 2)]}
        width={500}
        className="carousel-img2"
      />
      <img
        src={images[checkIndex(index + 1)]}
        width={500}
        className="carousel-img3"
      />
      <button onClick={() => setIndex((index) => checkIndex((index += 1)))}>
        CLICK
      </button>
    </div>
  );
};

export default Carousel;
