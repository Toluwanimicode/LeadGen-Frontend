import React, { useState } from 'react';

const slidesData = [
  { id: 1, imageUrl: './Images/Brown-headphone.png', altText: 'Slide 1' },
  { id: 2, imageUrl: './Images/pink headphone.png', altText: 'Slide 2' },
  { id: 3, imageUrl: './Images/Blue-headphone.png', altText: 'Slide 3' },
  { id: 4, imageUrl: './Images/Grey-headphone.png', altText: 'Slide 4' }
];

const HeadphoneCarousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const nextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-10">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
        >
          {slidesData.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 px-4">
              <img
                src={slide.imageUrl}
                alt={slide.altText}
                className="w-full h-auto lg:max-w-xs mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 p-2 focus:outline-none"
        onClick={prevSlide}
      >
        <i className="fa fa-long-arrow-left text-3xl text-black"></i>
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 p-2 focus:outline-none"
        onClick={nextSlide}
      >
        <i className="fa fa-long-arrow-right text-3xl text-black"></i>
      </button>
    </div>
  );
};

export default HeadphoneCarousel;






