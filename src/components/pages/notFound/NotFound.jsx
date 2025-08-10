import React from 'react';
import './NotFound.css';
import { Button } from '../../button/Button';
import Noise from '/assets/noise.png';

export default function NotFound() {
    return (
        <div className="notfound-container">
            <h1 className="glitch" data-text="404">
                404
            </h1>
            <p className="message">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large' location='/'>
                Return to Home
            </Button>
            <div className='fuzzy-overlay'></div>
        </div>
    );
}
