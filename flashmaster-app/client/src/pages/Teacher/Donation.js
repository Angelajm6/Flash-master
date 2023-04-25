import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';



//React hooks to manage state.
function Teacher(props) {
  const [donationAmount, setDonationAmount] = useState(0);

  // HandleDonationChange function updates the donationAmount state when the user enters a donation amount
  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
  }

}

export default Teacher;
