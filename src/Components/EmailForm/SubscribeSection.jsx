import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SubscribeSection.css'; // Assuming this file contains the styles

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://leadgen-backend.onrender.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSuccessMessage('Subscription added');
        setEmail(''); // Clear the email input field
        setTimeout(() => {
          setSuccessMessage(''); // Hide the success message after 3 seconds
        }, 3000);
      } else {
        console.error('Failed to add subscriber');
      }
    } catch (error) {
      console.error('Error adding subscriber:', error);
    }
  };

  return (
    <section className="bg-emerald builder-bg padding-60px-tb mt-10" id="subscribe-section3">
      <div className="container">
        <div className="row equalize">
          <div className="col-md-7 col-sm-12 display-table xs-text-center" style={{ height: '70px' }}>
            <div className="display-table-cell-vertical-middle">
              <h3 className="title-large alt-font text-white margin-three-top margin-three-bottom sm-margin-six-bottom xs-no-margin xs-padding-bottom-20px xs-title-large display-block tz-text">
                Don’t sleep on all the latest from doom.
              </h3>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-1 display-table col-sm-12" style={{ height: '70px' }}>
            <div className="display-table-cell-vertical-middle">
              <div className="display-block position-relative subscribe-style4 margin-ten-top">
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <form onSubmit={handleSubmit} className="position-relative">
                  <input
                    className="medium-input text-transform-none xs-width-100 xs-no-margin"
                    data-email="required"
                    placeholder="* Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                  />
                  <button className="default-submit text-large" type="submit">
                    <FontAwesomeIcon icon={faEnvelope} className=" tz-icon-color" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;





