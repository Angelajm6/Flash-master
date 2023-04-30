import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Stripe from 'stripe';
import { Donation } from '../../assets/style';

const stripe = Stripe('pk_test_51N1eLfJPgoVjPZw2aIeOMdDZRtMsD4yfMSIJy7KJneZp7YyDC6meuYVvMMhXQelvinIrn0aIqbe9fdQP7WyJxqpZ00e1dM6Szc');

function Teacher(props) {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
  }

  const handleDonationSubmit = async (event) => {
    event.preventDefault();

    // This calls the server-side endpoint to create a Stripe Checkout session
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: donationAmount
      })
    });

    const session = await response.json();

    // Redirects the user to the Stripe Checkout page
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.error(result.error);
      alert('Payment failed');
    }
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{ Donation }</p>
      <form onSubmit={handleDonationSubmit}>
        <label>
          Donation amount:
          <input type="number" value={donationAmount} onChange={handleDonationChange} />
        </label>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default Teacher;
