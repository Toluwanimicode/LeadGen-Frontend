import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const products = [
    {
        name: 'DOOM STUDIO WIRELESS',
        description: 'Designed for Sound',
        price: '$399',
        originalPrice: '$699',
        imageUrl: './Images/headphone12.png',
    },
    {
        name: 'DOOM SOLO WIRELESS',
        description: 'Feel the Music',
        price: '$299',
        originalPrice: '$599',
        imageUrl: './Images/headphone13.png',
    },
    {
        name: 'DOOM EP WIRELESS',
        description: 'Start Listening',
        price: '$249',
        originalPrice: '$449',
        imageUrl: './Images/headphone14.png',
    },
    {
        name: 'DOOM PRO WIRELESS',
        description: 'Tuned for Emotion',
        price: '$499',
        originalPrice: '$799',
        imageUrl: './Images/headphone15.png',
    },
];

const ProductSection = () => {
    return (
        <section className="bg-white py-28" id="products">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {products.map((product, index) => (
                        <div key={index} className="text-center">
                            <div className="mb-4">
                                <a href="#">
                                    <img
                                        alt={product.name}
                                        src={product.imageUrl}
                                        className="mx-auto"
                                        style={{ width: '200px', height: '200px' }}
                                    />
                                </a>
                            </div>
                            <h3 className="text-lg font-medium mb-2">
                                <a href="#" className="text-dark-gray">{product.name}</a>
                            </h3>
                            <div className="text-medium-gray mb-2">{product.description}</div>
                            <div className="text-xl font-semibold text-dark-gray mb-4">
                                {product.price}&nbsp;&nbsp;&nbsp;<del>{product.originalPrice}</del>
                            </div>
                            <a className="btn btn-circle border-2  border-custom-aqua text-custom-aqua px-6 py-2 inline-block rounded-full" href="#">
                                BUY NOW<i className="fa fa-angle-right ml-2"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
