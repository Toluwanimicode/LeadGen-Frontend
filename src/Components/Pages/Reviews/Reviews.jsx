import React from 'react'
import './Reviews.css'

const Reviews = () => {
  return (
    <section id="reviews">
        <div className='mt-10 flex-col ml-10 mr-10'>
            <div >
                <div >
                    <div>
                        <img src={'./Images/Human1.jpg'} className='images mx-auto' alt="Girl in a jacket" />
                    </div>
                    <div className='mt-10'>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        <div className='text-center mt-3 name'><span>- NATHAN FORD</span></div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div>
                        <img src={'./Images/Human2.jpg'} className='images mx-auto' alt="Girl in a jacket"  />
                    </div>
                    <div className='mt-10'>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        <div className='text-center mt-3 name'><span>- PAUL SCRIVENS</span></div>
                    </div>
                </div>
            </div>
            <div  className='mt-10' >
                <div >
                    <div>
                        <img src={'./Images/Human3.jpg'} className='images mx-auto' alt="Girl in a jacket"  />
                    </div>
                    <div className='mt-10'>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        <div className='text-center mt-3 name'><span>- AARRON WALTER</span></div>
                    </div>
                </div>
                <div  className='mt-10'>
                    <div>
                        <img src={'./Images/Human4.jpg'} className='images mx-auto' alt="Girl in a jacket"  />
                    </div>
                    <div className='mt-10'>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        <div className='text-center mt-3 name'><span>- SHOKO MUGIKURA</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reviews