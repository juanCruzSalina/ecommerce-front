import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

export const SignUpEmail = () => {
  const handleSubmit = async (e) => {
    const res = await Axios.post('http://localhost:5000/api/users/');
    console.log(res);
  };

  return (
    <Fragment>
      <div className='container w-75'>
        <div className='card'>
          <div className='card-body p-5'>
            {/* Username */}
            <div className='col-md-4'>
              <div className='form-group ml-2'>
                <label htmlFor='inputUsername4'>
                  Username <span style={{ color: 'red' }}>*</span>{' '}
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='inputUsername4'
                />
              </div>
            </div>
            {/* Email */}
            <div className='form-row ml-3 mr-3'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label htmlFor='inputEmail4'>
                    Email <span style={{ color: 'red' }}>*</span>{' '}
                  </label>
                  <input
                    type='email'
                    className='form-control form-control-lg'
                    id='inputEmail4'
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label htmlFor='inputCEmail4'>
                    Confirm Email <span style={{ color: 'red' }}>*</span>{' '}
                  </label>
                  <input
                    type='email'
                    className='form-control form-control-lg'
                    id='inputCEmail4'
                  />
                </div>
              </div>
            </div>
            {/* Password */}
            <div className='form-row ml-3 mr-3'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label htmlFor='inputPassword4'>
                    Password <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    id='inputPassword4'
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label htmlFor='inputCPassword4'>
                    Confirm Password <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    id='inputCPassword4'
                  />
                </div>
              </div>
            </div>
            <hr></hr>
            {/* Name / Last Name */}
            <div className='form-row ml-3 mr-3 pt-3 pb-3'>
              <div className='col-md-6'>
                <label htmlFor='inputName4' className='mb-0'>
                  Name <span style={{ color: 'red' }}>*</span>{' '}
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='inputName4'
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='inputLName4' className='mb-0'>
                  Last Name <span style={{ color: 'red' }}>*</span>{' '}
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='inputLName4'
                />
              </div>
            </div>
            {/* Sex / country */}
            <div className='form-row ml-3 mr-3 pt-3 pb-3'>
              <div className='col-md-6'>
                <label htmlFor='genderImput'>
                  Gender <span style={{ color: 'red' }}>*</span>{' '}
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='genderImput'
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='countryImput'>
                  Country <span style={{ color: 'red' }}>*</span>{' '}
                </label>
                <input
                  type='number'
                  className='form-control form-control-lg'
                  id='countryImput'
                />
              </div>
            </div>
            {/* <div className='form-row ml-3 mr-3 pt-3 pb-3'>
              <div className='col-md-6'>
                <label htmlFor='stateImput'>
                  State <span style={{ color: 'red' }}>*</span>{' '}
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='stateImput'
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='countryImput'>
                  Country <span style={{ color: 'red' }}>*</span>{' '}
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='countryImput'
                />
              </div>
            </div>
            <div className='form-row ml-3 mr-3 pt-3 pb-3'>
              <div className='col-md-6'>
                <label htmlFor='zipImput'>
                  ZIP <span style={{ color: 'red' }}>*</span>{' '}
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='zipImput'
                />
              </div>
            </div> */}
            <button
              type='submit'
              className='btn btn-primary btn-block mt-4'
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
