import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SubscribeSection.css';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch('https://leadgen-backend.onrender.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      setIsLoading(false);
      if (response.ok) {
        setSuccessMessage('Subscription added');
        setEmail('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else if (response.status === 400) {
        setErrorMessage('Email already subscribed');
      } else {
        setErrorMessage('Failed to add subscriber');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Error adding subscriber. Please try again later.');
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
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit} className="position-relative">
                  <input
                    className="medium-input text-transform-none xs-width-100 xs-no-margin"
                    data-email="required"
                    placeholder="* Email Address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <button className="default-submit text-large" type="submit" disabled={isLoading}>
                    {isLoading ? 'Subscribing...' : <FontAwesomeIcon icon={faEnvelope} className="tz-icon-color" />}
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






