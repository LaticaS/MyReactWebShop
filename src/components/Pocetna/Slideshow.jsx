/** Here you can write the code for your slideshow component
 *  you can use the images placed in the slideshowData file
 */
import React, { useEffect, useState } from "react";
import { slidesList } from "./SlideshowData.js";
import "./Slideshow.scss";

function Slideshow() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slidesList[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % slidesList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slidesList.length]);

  useEffect(() => {
    setCurrentSlide(slidesList[sliderIndex]);
    // do something on sliderIndex changes
  }, [sliderIndex]);

  function handlePrevButtonClick() {
    setSliderIndex(sliderIndex - 1);
  }

  function handleNextButtonClick() {
    setSliderIndex(sliderIndex + 1);
  }

  return (
    <div className={"slideshow-wrapper"}>
      <div className="img-wrapper">
        <button
          className={"prev"}
          onClick={() => sliderIndex > 0 && handlePrevButtonClick()}
        >
          {" "}
          🢀{" "}
        </button>
        <img
          key={currentSlide.id}
          src={currentSlide.url}
          alt={currentSlide.alt}
          className="class-img"
        />
        <button
          className={"next"}
          onClick={() =>
            sliderIndex < slidesList.length - 1 && handleNextButtonClick()
          }
        >
          {" "}
          🢂{" "}
        </button>
      </div>
      <div className={"ticks"}>
        {slidesList.map((item, index) => (
          <span
            className={index === sliderIndex && "active"}
            onClick={() => setSliderIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export { Slideshow };
