import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ImageCarousel.css'
import OwlCarousel from 'react-owl-carousel';


const ImageCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  };

  const images = [
    './Images/headphone1.jpg',
    './Images/headphone2.jpg',
    './Images/headphone3.jpg',
    './Images/headphone4.jpg'
];

return (
    <OwlCarousel
      className="owl-theme"
      {...options}
    >
      {images.map((image, index) => (
        <div key={index} className="item">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default ImageCarousel;
