import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Users = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const userData = Axios.get('http://localhost:5000/api/users');
    console.log(userData);
  }, []);

  return (
    <div>
      <h1>kappa</h1>
    </div>
  );
};
