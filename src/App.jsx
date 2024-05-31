import React, { useState, useEffect } from 'react';
import Carousel from './Components/Carousel/Carousel';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/Pages/About/About';
import ImageCarousel from './Components/ImageCarousel/ImageCarousel';
import Features from './Components/Pages/Features/Features';
import Colors from './Components/Pages/Colors/Colors';
import Reviews from './Components/Pages/Reviews/Reviews';
import SubscribeSection from './Components/EmailForm/SubscribeSection';
import ProductSection from './Components/Pages/ProductSection/ProductSection';
import DesignSection from './Components/Pages/Design/Design';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#21BA68'); // Initial color for the first slide
  const [isScrolledAway, setIsScrolledAway] = useState(false);

  const handleBackgroundChange = (nextSlide) => {
    let color;
    switch (nextSlide) {
      case 0:
        color = '#21BA68'; // First slide color
        break;
      case 1:
        color = '#F9A124'; // Second slide color
        break;
      case 2:
        color = '#23A296'; // Third slide color
        break;
      default:
        color = '#21BA68'; // Default to the first slide color
    }
    setBackgroundColor(color);
  };

  const handleScroll = () => {
    const carouselHeight = document.querySelector('.carousel-container').offsetHeight;
    setIsScrolledAway(window.scrollY > carouselHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ background: backgroundColor, transition: 'background 0.5s ease' }}>
        <Navigation backgroundColor={isScrolledAway ? '#000000' : backgroundColor} />
        <div className="carousel-container">
          <Carousel onBackgroundChange={handleBackgroundChange} />
        </div>
      </div>
      <div>
        <About />
        <ImageCarousel />
        <div>
          <div className='flex-col flex lg:flex-row'>
            <div className='Home-image '>
              <img src={"./Images/headphone5.png"} className="ml-10 w-80 mt-10 lg:w-max lg:ml-20" alt="Headphone"  />
            </div>
            <div className='ml-10 mr-10 lg:ml-60 mt-20 '>
                <div className='Home-header mb-10'>
                  <h2>Flexibility and design possibilities at their best.</h2>
                </div>
                <div className='mb-10 Home-text'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                </div>
                <div className='mb-10 Home-content'>
                  <p>  Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled.</p>
                </div>
                <div className='Home-button'>
                  <button>Continue Reading <i className="fa fa-angle-right"></i></button>
                </div>
            </div>
          </div>
        </div>
        <Features />
        <Colors />
        <DesignSection />
        <div className='flex justify-center mt-10 ml-10 mr-10'>
          <img src={"./Images/Headphone7.png"} alt="Award Winning Sound image" className='w-auto lg:w-auto'/>
        </div>
        <div className='flex mt-10 Doom-container lg:flex '>
          <div className='Doom-text lg:mt-20 lg:ml-40 lg:text-5xl lg:font-bold'>
            <h2>Doom Solo<sup>3</sup> Wireless</h2>
          </div>
          <div className='Doom-image lg:ml-40 '>
            <img src={"./Images/headphone13.png"} alt="Award Winning Sound image" width="300" height="600"/>
          </div>
        </div>
        <Reviews />
        <SubscribeSection className="mt-10"/>
        <ProductSection />
      </div>
    </>
  );
}

export default App;





