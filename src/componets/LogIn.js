// React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LogIn.css';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const LogIn = () => {
  const handleGoogleSubmit = async (e) => {
    const res = await Axios.get('http://localhost:5000/api/oauth/google');
    console.log(res);
  };

  const handleFacebookSubmit = async (e) => {
    const res = await Axios.get('http://localhost:5000/api/oauth/facebook');
    console.log(res);
  };

  return (
    <Fragment>
      <div className='container w-75'>
        <div className='card'>
          <div className='form-row col-md-12'>
            <div className='col-md-6'>
              <div className='card-body'>
                <div className='form-group pb-3'>
                  <label htmlFor='exampleInputEmail1'>Email address </label>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                  />
                </div>
                <div className='form-group pb-3'>
                  <label htmlFor='exampleInputPassword1'>Password</label>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    id='exampleInputPassword1'
                  />
                </div>
                <div className='form-group form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='exampleCheck1'
                  />
                  <label
                    className='form-check-label'
                    htmlFor='exampleCheck1'
                    style={{ fontSize: '1rem' }}
                  >
                    Remember my email
                  </label>
                </div>
                <button
                  type='submit'
                  className='btn btn-primary btn-block'
                  id='submitButton'
                >
                  Submit
                </button>
              </div>
            </div>
            <div className='col-md-5' id='sign-up'>
              <p> Don't have an account? </p>
              <h4> Sign Up! </h4>
              <button id='email'>
                <Link to='/signupEmail'>
                  <FontAwesomeIcon icon={faEnvelope} id='icons' />
                  E-mail
                </Link>
              </button>
              <p> Or Log-In with: </p>

              <button
                onClick={(e) => {
                  handleGoogleSubmit(e);
                }}
              >
                google
              </button>

              <button
                onClick={(e) => {
                  handleFacebookSubmit(e);
                }}
              >
                facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
