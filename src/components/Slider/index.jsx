import React, { useState } from 'react';
import { SliderImage, StyledSlider } from './styles';

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slideRight = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <StyledSlider>
      <button type='button' onClick={slideLeft} className='leftArrow'>
        &#10094;
      </button>
      {slides.map((slide, index) => (
        <div key={index.toString()}>
          {currentSlide === index ? <SliderImage src={slide.image} /> : null}
        </div>
      ))}
      <button type='button' onClick={slideRight} className='rightArrow'>
        &#10095;
      </button>
    </StyledSlider>
  );
}

export default Slider;
