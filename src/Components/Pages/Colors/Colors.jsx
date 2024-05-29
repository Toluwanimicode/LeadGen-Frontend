import React from 'react'
import './Colors.css'
import HeadphoneCarousel from '../../HeadphoneCarousel/HeadphoneCarousel'

const Colors = () => {
  return (
    <section id="colors">
        <div>
            <div>
                <h2 className='color-heading text-center mt-10'>The new vibrant colors</h2>
                <p className='text-center mt-3 ml-10 mr-10'>The new fall/winter colors are a bit frozen over, with pale and bleached-out shades that match up with cooler days ahead. Snow Blue, Powder Pink, and Nougat Beige might be nippy to look at, but they’re as friendly to wear as your favorite sweater</p>
            </div>
            <div>
              <HeadphoneCarousel />
            </div>
        </div>
    </section>
  )
}

export default Colors