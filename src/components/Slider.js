import React, { useEffect, useState } from "react";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";
import SliderImage from "./SliderImage";
import "./slider.css";

const length = SliderImage.length - 1;

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={SliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={SliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
