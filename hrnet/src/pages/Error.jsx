import React from 'react';
import '../styles/Error.css';
import { NavLink } from 'react-router-dom';

/**
 * The page showing when a wrong url is entered.
 * @component
 * @example
 * return (
 *  <Error />
 * )
 */

 export default function Error(){

    return(
      <main className='main bg-dark error-main'>
          <div className='error-container'>
              <p className='error-text'>404</p>
              <p className='error-text'>Whoops! The page you requested does not exist.</p>
              <NavLink to='/'><button type='button' className='error-btn'><p className='error-link error-text'>Return to the homepage</p></button></NavLink>
          </div>
      </main>
    )
}
