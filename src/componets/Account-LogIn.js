import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export const AccountLogIn = () => {
  const [isLogged, setIsLogged] = useState(false);
  if (isLogged) {
    return (
      <Fragment>
        <div className='buttons'>
          <Link
            to='/user'
            onClick={(e) => {
              setIsLogged(true);
            }}
          >
            Acount
          </Link>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className='buttons'>
          <Link
            to='/log-in'
            onClick={(e) => {
              setIsLogged(true);
            }}
          >
            LogIn
          </Link>
        </div>
      </Fragment>
    );
  }
};
