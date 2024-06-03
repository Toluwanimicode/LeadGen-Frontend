import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SubscribeForm.css'; // Ensure this file contains appropriate styles

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to add subscriber');
        setTimeout(() => {
          setErrorMessage(''); // Hide the error message after 3 seconds
        }, 3000);
      }
    } catch (error) {
      setErrorMessage('Error adding subscriber');
      console.error('Error adding subscriber:', error);
      setTimeout(() => {
        setErrorMessage(''); // Hide the error message after 3 seconds
      }, 3000);
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="display-block position-relative subscribe-style4 margin-ten-top">
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="position-relative">
        <input
          className="medium-input text-transform-none xs-width-100 xs-no-margin"
          data-email="required"
          placeholder="Your email address"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <button className="default-submit text-large" type="submit">
          <FontAwesomeIcon icon={faEnvelope} className="text-medium-gray tz-icon-color" />
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;


