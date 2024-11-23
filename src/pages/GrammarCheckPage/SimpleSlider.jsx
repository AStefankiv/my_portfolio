import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.scss"; // Import your slider styles

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="../../../public/grammar_gpt_1.png" alt="Screenshot 1" />
        </div>
        <div>
          <img src="../../../public/grammar_gpt_2.png" alt="Screenshot 2" />
        </div>
        <div>
          <img src="../../../public/grammar_gpt_3.png" alt="Screenshot 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;