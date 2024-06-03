import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SubscribeForm.css'; // Create a CSS file for styles

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="display-block position-relative subscribe-style4 margin-ten-top">
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
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

