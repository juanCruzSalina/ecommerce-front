import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

export const SignUpEmail = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
    name: '',
    lastName: '',
    country: '',
  });

  // const handleUserInfo = (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await Axios.post('http://localhost:5000/api/users/', {});
    console.log(user);
  };

  return (
    <Fragment>
      <div className='container w-75'>
        <div className='card'>
          <div className='card-body p-5'>
            <form>
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
                    name='username'
                    // value={user.username}
                    // onChange={handleUserInfo}
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
                      name='email'
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...[], email: e.target.value })
                      }
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
                      // value={user.email}
                      // onChange={handleUserInfo}
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
                      name='password'
                      // value={user.email}
                      // onChange={handleUserInfo}
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
                      // value={user.email}
                      // onChange={handleUserInfo}
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
                    // value={user.profileName}
                    // onChange={handleUserInfo}
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
                    // value={user.profileName}
                    // onChange={handleUserInfo}
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
                    // value={user.email}
                    // onChange={handleUserInfo}
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
                    // value={user.email}
                    // onChange={handleUserInfo}
                  />
                </div>
              </div>
              <button
                type='submit'
                className='btn btn-primary btn-block mt-4'
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
