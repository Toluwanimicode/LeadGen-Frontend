import React from 'react';

const DesignSection = () => {
    return (
        <div className="container mx-auto sm:w-full sm:p-0">
            <div className="bg-custom-bg w-11/20 sm:w-3/5 xs:w-full p-4 md:p-2 sm:p-3 xs:p-4 flex flex-col sm:flex-row items-center sm:items-start">
                <div className="sm:mr-4 mb-4 sm:mb-0 hidden md:block">
                    <img 
                        src={"./Images/headphone14.png"} 
                        alt="Product" 
                        className="w-full sm:w-60 h-auto"
                    />
                </div>
                <div>
                    {/* Section title */}
                    <h2 className="alt-font text-5xl sm:text-4xl xs:text-3xl text-white mb-2">
                        Designed for Sound. Tuned for Emotion.
                    </h2>
                    {/* End section title */}
                    <div className="text-white text-2xl sm:text-xl xs:text-lg mb-3 font-light">
                        The award-winning sound and design you’ve come to love from doom.
                    </div>
                    <div className="text-medium sm:text-base text-white">
                        <p>
                            This headphone delivers premium playback with fine-tuned acoustics that maximize clarity, breadth, and balance. The comfort-cushion ear cups buffer outside noise for immersive sound so you can experience music the way it was meant to be heard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignSection;

