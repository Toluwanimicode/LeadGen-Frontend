import React from 'react';
import './About.css';

const About = () => {
  return (
        <section id="about" className="pt-5">
            <div className="flex flex-col ml-10 mr-10 lg:flex-row">
                    <div className="about-content flex-1 lg:ml-10">
                        <div className="about-header mb-10 lg:mt-20">
                            <h2>The best product on the market, just for you.</h2>
                        </div>
                        <div className="about-text mb-10">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                        </div>
                        <div className="mb-10">
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled.</p>
                        </div>
                        <div className="about-button mb-2">
                            <button>Continue Reading <i className="fa fa-angle-right"></i> </button>
                        </div>
                    </div>
                    <div className="about-image mt-10 lg:mt-10 lg:ml-20 flex-1 ">
                        <img src={"./Images/headphone.png"} alt="Headphone" width="2000" height="600" />
                    </div>
                </div>
        </section>
);
};

export default About;
