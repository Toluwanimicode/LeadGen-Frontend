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
    setActiveSlideIndex(prevIndex => (prevIndex + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex(prevIndex => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}>
          {slidesData.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <img src={slide.imageUrl} alt={slide.altText} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 transform -translate-y-1/2 left-2" onClick={prevSlide}>
        <i className="fa fa-long-arrow-left text-3xl"></i>
      </button>
      <button className="absolute top-1/2 transform -translate-y-1/2 right-2" onClick={nextSlide}>
        <i className="fa fa-long-arrow-right text-3xl"></i>
      </button>
    </div>
  );
};

export default HeadphoneCarousel;
