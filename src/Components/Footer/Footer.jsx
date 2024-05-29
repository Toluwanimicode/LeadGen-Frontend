import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlusG, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SubscribeForm from '../SubcribeForm/SubscribeForm';

const Footer = () => {
  return (
    <footer id="footer-section9" className="bg-gray py-16 xs:py-10 flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center md:text-left md:mr-16 mb-8">
          <div className="flex justify-center">
            <a href="#home">
              <img src="./Images/Newlogo.png" alt="Logo" width="150" height="150" />
            </a>
          </div>
          <div className="tz-text mt-8">
            <p>301 The Greenhouse, Custard Factory, London, E2 8DY.</p>
          </div>
          <div className="social mt-12">
            <a href="#" className="mr-2">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="mr-2">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="mr-2">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="mr-2">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#" className="mr-2">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="md:w-full px-4 mb-8">
          <ul className="links text-center md:text-left">
            <li className="text-medium mb-7 font-semibold text-gray-700">Company</li>
            <li><a href="#content-section13" className="text-gray-600">About Us</a></li>
            <li><a href="#content-section17" className="text-gray-600">Features</a></li>
            <li><a href="#content-section2" className="text-gray-600">Design</a></li>
          </ul>
        </div>
        <div className="md:w-full px-4 mb-8">
          <ul className="links text-center md:text-left">
            <li className="text-medium mb-7 font-semibold text-gray-700">Useful Links</li>
            <li><a href="#portfolios-section8" className="text-gray-600">Gallery</a></li>
            <li><a href="#content-section9" className="text-gray-600">Color</a></li>
            <li><a href="#feature-section32" className="text-gray-600">Quick Order</a></li>
          </ul>
        </div>
        <div className="md:w-full px-4 mb-8">
          <ul className="links text-center md:text-left">
            <li className="text-medium mb-7 font-semibold text-gray-700">Follow Us</li>
            <li><a href="#" className="text-gray-600">Facebook</a></li>
            <li><a href="#" className="text-gray-600">Twitter</a></li>
            <li><a href="#" className="text-gray-600">Google Plus</a></li>
          </ul>
        </div>
        <div className="md:w-full px-4 mb-8">
          <div className="text-medium mb-7 font-semibold text-gray-700">Newsletter Signup</div>
          <div className="tz-text mb-6 text-center md:text-left">
            <p>Sign up for the latest news & offers.</p>
          </div>
          <div className="display-block position-relative subscribe-style4 mt-10">
            <SubscribeForm />
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 py-6">
        <p className="text-center text-gray-600 text-sm leading-none">© 2024 LeadGen is proudly powered by <a href="https://github.com/Toluwanimicode" className="text-light-gray2">Toluwanimi</a></p>
      </div>
    </footer>
  );
}

export default Footer;


