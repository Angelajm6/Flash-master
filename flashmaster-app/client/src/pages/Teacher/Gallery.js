import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Gallery() {
    return (
        <div>
            <h1>Gallery</h1>
        </div>
    )
};

export default Gallery;