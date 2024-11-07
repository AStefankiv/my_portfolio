import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.scss"; // Import your slider styles

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/images/screenshot1.png" alt="Screenshot 1" />
        </div>
        <div>
          <img src="/images/screenshot2.png" alt="Screenshot 2" />
        </div>
        <div>
          <img src="/images/screenshot3.png" alt="Screenshot 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;