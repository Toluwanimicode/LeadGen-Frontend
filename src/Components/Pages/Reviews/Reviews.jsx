import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
        <section id="reviews" className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 xl:w-1/4 px-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={'./Images/Human1.jpg'} className="w-24 h-24 rounded-full mx-auto mb-4" alt="Girl in a jacket" />
                <p className="text-gray-700 text-center mb-4">
                    Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className="text-center text-gray-900 font-semibold">- NATHAN FORD</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/4 px-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={'./Images/Human2.jpg'} className="w-24 h-24 rounded-full mx-auto mb-4" alt="Girl in a jacket" />
                <p className="text-gray-700 text-center mb-4">
                    Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className="text-center text-gray-900 font-semibold">- PAUL SCRIVENS</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/4 px-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={'./Images/Human3.jpg'} className="w-24 h-24 rounded-full mx-auto mb-4" alt="Girl in a jacket" />
                <p className="text-gray-700 text-center mb-4">
                    Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className="text-center text-gray-900 font-semibold">- AARRON WALTER</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/4 px-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={'./Images/Human4.jpg'} className="w-24 h-24 rounded-full mx-auto mb-4" alt="Girl in a jacket" />
                <p className="text-gray-700 text-center mb-4">
                    Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className="text-center text-gray-900 font-semibold">- SHOKO MUGIKURA</p>
                </div>
            </div>
            </div>
        </div>
        </section>
  );
};

export default Reviews;
