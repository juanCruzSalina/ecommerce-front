import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';
import { AccountLogIn } from './Account-LogIn';

export const Navigation = () => {
  return (
    <Fragment>
      <div className='first-layer'>
        <Link to='/'>
          <FontAwesomeIcon className='pr-3' icon={['fas', 'fighter-jet']} />
          Ármazon
        </Link>
        <div className='input-group w-50 rounded'>
          <input
            type='text'
            className='form-control'
            placeholder='Busca tu producto'
            aria-label='Busca tu producto'
            aria-describedby='button-addon2'
          />
          <div className='input-group-append'>
            <button
              className=' btn btn-outline-secondary text-white border-light'
              type='button'
              id='button-addon2'
            >
              Buscar
            </button>
          </div>
        </div>
        <AccountLogIn />
      </div>
    </Fragment>
  );
};
