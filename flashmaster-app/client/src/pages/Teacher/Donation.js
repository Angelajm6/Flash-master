import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


const Donate = () => {
    return (
        <div name='Donate' className='w-full h-screen'>
            <h1>Donation</h1>
            
        </div>
    )
};

export default Donate;