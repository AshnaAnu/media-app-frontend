import React from 'react';
import { Link } from 'react-router-dom';
import './PagenotFound.css'

const PagenotFound = () => {
  return (
    <div className='main-container'>
      <h1 className='header'>404</h1>
      <h2 className='subHeader'>Page Not Found</h2>
      <p className='text'>
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className='homeLink'>
        Go Home
      </Link>
    </div>
  );
};



export default PagenotFound;
