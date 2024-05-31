import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <section id="features" className='features-container'>
        <div className='flex-col ml-10 mr-10 mt-10 features-container lg:flex lg:flex-row'>
            <div className=''>
                <div className='mb-10 mt-10 lg:flex lg:flex-row'>
                    <div className='text-center number  '>01.</div>
                    <div className='lg:pl-40 lg:pr-40 lg:mt-10'>
                        <h3 className='text-center mb-3 header'>The best sound.</h3>
                        <div>
                            <p className='text'>Put it on repeat and stay unplugged all day thanks to up to 40 hours of battery life. You can keep track of the battery with the illuminated LED fuel gauge located on the headphone itself.</p>
                        </div>
                    </div>
                </div>
                <div className='mb-10 lg:flex lg:flex-row'>
                    <div className='text-center number'>02.</div>
                    <div  className='lg:pl-40 lg:pr-40 lg:mt-10'>
                        <h3 className='text-center mb-3 header'>Unbelievable doom.</h3>
                        <div>
                            <p className='text'>This headphone delivers premium playback with fine-tuned acoustics that maximize clarity, breadth, and balance. The comfort-cushion ear cups buffer outside noise for immersive sound.</p>
                        </div>
                    </div>
                </div>
                <div className='mb-10 lg:flex lg:flex-row'>
                    <div className='text-center number'>03.</div>
                    <div  className='lg:pl-40 lg:pr-40 lg:mt-10'>
                        <h3 className='text-center mb-3 header'>Drop the bass.</h3>
                        <div>
                            <p className='text'>The ultimate staple in your headphone closet, Plattan offers a rich, secluded sound experience, and convenient extras that make life easier. Features a fabric headband, tangle-free cable, built-in mic/remote.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:mt-40' >
                <img src={"./Images/headphone13.png"}  alt="Headphone" width="500" height="600"/>
            </div>
        </div>
    </section>
    )
}

export default Features