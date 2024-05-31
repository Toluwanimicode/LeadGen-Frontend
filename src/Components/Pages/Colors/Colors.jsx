import React from 'react'
import './Colors.css'
import HeadphoneCarousel from '../../HeadphoneCarousel/HeadphoneCarousel'

const Colors = () => {
  return (
    <section id="colors">
        <div>
              <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-10 lg:mt-10">
                The new vibrant colors
              </h2>
              <p className="text-lg text-gray-600 mb-12 mx-auto w-full md:w-3/4 lg:w-1/2">
                The new fall/winter colors are a bit frozen over, with pale and bleached-out shades that match up with cooler days ahead. Snow Blue, Powder Pink, and Nougat Beige might be nippy to look at, but they’re as friendly to wear as your favorite sweater.
              </p>
            </div>
            <div>
              <HeadphoneCarousel />
            </div>
        </div>
    </section>
  )
}

export default Colors