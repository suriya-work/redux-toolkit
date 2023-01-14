import React from 'react';
import { NotError } from '../styles/NotFoundStyle';


const NotFound = () => {
    return (
        <NotError>
            <h2 style={{ fontSize: '55px' }}>404</h2>
            <p style={{ fontSize: '40px' }}>نتیجه ای یافت نشد</p>
        </NotError>
    );
};

export default NotFound;