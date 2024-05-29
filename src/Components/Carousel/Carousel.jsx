import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './Carousel.css'; // Optional: for custom styles if needed

const Carousel = ({ onBackgroundChange }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, next) => {
            onBackgroundChange(next);
        }
    };

    const slides = [
        {
            image: './Images/black.webp',
            title: 'NEW LEVEL OF SOUND EXPERIENCE',
            content: 'Lorem Ipsum is simply dummy text of the printing and industry...',
            background: '#21BA68',
        },
        {
            image: './Images/Red.webp',
            title: 'FRESH, BEAUTIFUL, INNOVATIVE',
            content: 'Lorem Ipsum is simply dummy text of the printing and industry...',
            background: '#F9A124',
        },
        {
            image: './Images/purple.webp',
            title: 'THE PRODUCT OF THE FUTURE',
            content: 'Lorem Ipsum is simply dummy text of the printing and industry...',
            background: '#23A296',
        },
    ];

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className="relative h-svh flex items-center justify-center" style={{ backgroundColor: slide.background }}>
                    <div className="container mx-auto px-4 text-center text-white">
                        <div className="md:w-7/12 mx-auto mt-40">
                            <h2 className="text-6xl font-bold mb-7 leading-tight">{slide.title}</h2>
                            <p className="text-xl font-semibold mb-10">{slide.content}</p>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <a href="#feature-section32" className="btn btn-medium bg-white text-gray-800 rounded-full px-6 py-2 flex items-center">
                                <span className="mr-2">PURCHASE NOW</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <a href="#content-section13" className="btn btn-medium border-2 border-white text-white rounded-full px-6 py-2 flex items-center">
                                <span className="mr-2">READ MORE</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;














